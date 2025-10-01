import { ContentLoader } from '@/lib/ContentLoader';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

/**
 * About Page
 *
 * Loads content from content/pages/about.md
 */

export const metadata: Metadata = {
  title: 'About Artem Koziar | Principal Software Engineer',
  description: 'Professional background, experience, and expertise',
};

export default async function AboutPage() {
  const contentLoader = new ContentLoader();
  const { content, metadata } = contentLoader.loadPage('about');

  return (
    <main className="main" role="main">
      <div className="content">
        <article className="card card-text markdown-content">
          <MDXRemote source={content} />
        </article>
      </div>
    </main>
  );
}

export const dynamic = 'force-static';
