import { ContentLoader } from '@/lib/ContentLoader';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { DynamicAge } from '@/components/DynamicAge';
import { DynamicExperience } from '@/components/DynamicExperience';
import Image from 'next/image';

/**
 * Home Page
 *
 * Loads content from content/pages/home.md
 * Renders with MDX for interactive React components
 */
export default async function HomePage() {
  const contentLoader = new ContentLoader();
  const { content, metadata } = contentLoader.loadPage('home');
  const siteConfig = contentLoader.loadConfig('site');

  // MDX components available in markdown
  const components = {
    DynamicAge,
    DynamicExperience,
  };

  return (
    <main className="main" role="main">
      <div className="content">
        {/* Hero Section */}
        <div className="welcome">
          <div className="welcome__atavar">
            <Image
              src="/i/avatars/red-cap/1x1.jpeg"
              alt="Artem Koziar"
              id="avatar"
              className="avatar"
              width={255}
              height={255}
              priority
            />
          </div>
          <div className="welcome__text">
            <h2>&lt;Hello, World!&gt;</h2>
            <h1 className="title">
              <span className="nobr">I'm Artem Koziar</span>
            </h1>
            <h2 className="welcome__text__headline">
              Principal Software Engineer,{' '}
              <br />
              Front-end development consultant,{' '}
              <br />
              Coach
            </h2>
            <div className="button-and-modal">
              <p className="acenter">
                <button className="button get-in-touch-button">
                  Get in touch!
                </button>
              </p>
              <p className="get-in-touch-button__modal">
                <a
                  className="get-in-touch-button__modal__link"
                  href={`https://telegram.me/${siteConfig.contacts.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                >
                  <Image
                    src="/i/messengers/telegram.png"
                    width={32}
                    height={32}
                    alt="Telegram"
                  />
                </a>
                <a
                  className="get-in-touch-button__modal__link"
                  href={`https://m.me/${siteConfig.contacts.messenger}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Messenger"
                >
                  <Image
                    src="/i/messengers/messenger.png"
                    width={32}
                    height={32}
                    alt="Messenger"
                  />
                </a>
                <a
                  className="get-in-touch-button__modal__link"
                  href={`viber://pa?chatURI=${siteConfig.contacts.viber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Viber"
                >
                  <Image
                    src="/i/messengers/viber.png"
                    width={32}
                    height={32}
                    alt="Viber"
                  />
                </a>
                <a
                  className="get-in-touch-button__modal__link"
                  href={`mailto:${siteConfig.contacts.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mail"
                >
                  <Image
                    src="/i/messengers/gmail.png"
                    width={32}
                    height={32}
                    alt="Mail"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Main Quote */}
        <div className="main__quote">
          <blockquote>
            I have over 15 years of professional experience in software
            development. I now provide{' '}
            <strong>freelance development and consultancy</strong> — helping
            teams collaborate and work better together, streamline workflow, and
            deliver quality websites and applications.
          </blockquote>
        </div>

        {/* Markdown Content */}
        <article className="markdown-content">
          <MDXRemote source={content} components={components} />
        </article>

        {/* Companies Logos */}
        <div className="companies">
          <h3 className="acenter">
            The incredible companies I've had the privilege to work with
          </h3>
          <div className="logos">
            <Image
              src="/about/i/grammarly-full.png"
              width={250}
              height={56}
              alt="Grammarly"
            />
            <Image
              src="/about/i/ciklum-full.png"
              width={150}
              height={52}
              alt="Ciklum"
            />
            <Image
              src="/about/i/luxoft-full.png"
              width={150}
              height={38}
              alt="Luxoft"
            />
            <Image src="/about/i/innovecs.png" width={96} height={96} alt="Innovecs" />
          </div>
        </div>

        {/* CTA */}
        <div className="card card-text card-black get-in-touch">
          <h2 className="acenter">Want to work together?</h2>
          <p className="acenter">
            I'm always up for new challenges to collaborate with people and
            companies to realize their products. Don't be a stranger, say hello!
          </p>
          <div className="button-and-modal">
            <p className="acenter">
              <button className="button get-in-touch-button">
                Get in touch!
              </button>
            </p>
            <p className="get-in-touch-button__modal">
              <a
                className="get-in-touch-button__modal__link"
                href={`https://telegram.me/${siteConfig.contacts.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <Image
                  src="/i/messengers/telegram.png"
                  width={32}
                  height={32}
                  alt="Telegram"
                />
              </a>
              <a
                className="get-in-touch-button__modal__link"
                href={`https://m.me/${siteConfig.contacts.messenger}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Messenger"
              >
                <Image
                  src="/i/messengers/messenger.png"
                  width={32}
                  height={32}
                  alt="Messenger"
                />
              </a>
              <a
                className="get-in-touch-button__modal__link"
                href={`viber://pa?chatURI=${siteConfig.contacts.viber}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Viber"
              >
                <Image
                  src="/i/messengers/viber.png"
                  width={32}
                  height={32}
                  alt="Viber"
                />
              </a>
              <a
                className="get-in-touch-button__modal__link"
                href={`mailto:${siteConfig.contacts.email}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Mail"
              >
                <Image
                  src="/i/messengers/gmail.png"
                  width={32}
                  height={32}
                  alt="Mail"
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Client-side button interaction */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const buttons = document.querySelectorAll('.get-in-touch-button');
            const modals = document.querySelectorAll('.get-in-touch-button__modal');

            const clickHandler = () => {
              buttons.forEach((button) => button.style.display = 'none');
              modals.forEach((modal) => modal.style.display = 'flex');
            };

            buttons.forEach((button) => button.addEventListener('click', clickHandler));
          `,
        }}
      />
    </main>
  );
}

// Enable static generation
export const dynamic = 'force-static';
