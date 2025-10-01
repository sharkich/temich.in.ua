import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Content Loader Service
 *
 * Single Responsibility Principle:
 * This class handles ONLY loading and parsing markdown content
 *
 * @example
 * const loader = new ContentLoader();
 * const page = loader.loadPage('home');
 * console.log(page.metadata.title);
 */
export interface ContentMetadata {
  title?: string;
  description?: string;
  layout?: string;
  [key: string]: any;
}

export interface ContentData {
  content: string;
  metadata: ContentMetadata;
  slug: string;
}

export class ContentLoader {
  private contentDir: string;

  /**
   * Initialize content loader
   * @param contentDir - Root content directory (default: 'content')
   */
  constructor(contentDir: string = 'content') {
    this.contentDir = path.join(process.cwd(), contentDir);
  }

  /**
   * Load a page by slug
   * @param slug - Page slug (filename without .md)
   * @returns Content data with metadata
   * @throws Error if file not found
   */
  loadPage(slug: string): ContentData {
    const filePath = path.join(this.contentDir, 'pages', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Page not found: ${slug}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return {
      content,
      metadata: data as ContentMetadata,
      slug,
    };
  }

  /**
   * Load a reusable section by name
   * @param section - Section name (filename without .md)
   * @returns Content data with metadata
   * @throws Error if file not found
   */
  loadSection(section: string): ContentData {
    const filePath = path.join(this.contentDir, 'sections', `${section}.md`);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Section not found: ${section}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return {
      content,
      metadata: data as ContentMetadata,
      slug: section,
    };
  }

  /**
   * List all available pages
   * @returns Array of page slugs
   */
  listPages(): string[] {
    const pagesDir = path.join(this.contentDir, 'pages');

    if (!fs.existsSync(pagesDir)) {
      return [];
    }

    return fs
      .readdirSync(pagesDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace('.md', ''));
  }

  /**
   * List all available sections
   * @returns Array of section names
   */
  listSections(): string[] {
    const sectionsDir = path.join(this.contentDir, 'sections');

    if (!fs.existsSync(sectionsDir)) {
      return [];
    }

    return fs
      .readdirSync(sectionsDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace('.md', ''));
  }

  /**
   * Load configuration JSON file
   * @param configName - Config file name (without .json)
   * @returns Parsed JSON data
   */
  loadConfig<T = any>(configName: string): T {
    const filePath = path.join(this.contentDir, 'config', `${configName}.json`);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Config not found: ${configName}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent) as T;
  }

  /**
   * Check if a page exists
   * @param slug - Page slug
   * @returns True if page exists
   */
  pageExists(slug: string): boolean {
    const filePath = path.join(this.contentDir, 'pages', `${slug}.md`);
    return fs.existsSync(filePath);
  }
}
