import { ContentLoader } from '@/lib/ContentLoader';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

/**
 * Contacts Page
 *
 * Loads content from content/pages/contacts.md
 */

export const metadata: Metadata = {
  title: 'Contact Artem Koziar | Get in Touch',
  description: 'Get in touch for consultancy, collaboration, or just to say hello',
};

export default async function ContactsPage() {
  const contentLoader = new ContentLoader();
  const { content, metadata } = contentLoader.loadPage('contacts');

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
