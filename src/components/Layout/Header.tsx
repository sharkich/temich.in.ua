import Link from 'next/link';

/**
 * Site Header Component
 *
 * Contains site navigation and branding
 */
export function Header() {
  return (
    <header className="header">
      <div className="content">
        <h1 className="header__title">
          <Link href="/" id="logo">
            Artem Koziar
          </Link>
        </h1>
        <div className="width-100"></div>
        <nav className="header__nav">
          <ul className="header__nav__ul">
            <li className="header__nav__li">
              <b>
                <Link href="/" id="home">
                  home
                </Link>
              </b>
            </li>
            <li className="header__nav__li">
              <Link href="/apps">apps</Link>
            </li>
            <li className="header__nav__li">
              <Link href="/log">
                <span className="grey">*</span>log
              </Link>
            </li>
            <li className="header__nav__li">
              <Link href="/family">family</Link>
            </li>
            <li className="header__nav__li">
              <Link href="/about">about</Link>
            </li>
            <li className="header__nav__li">
              <Link href="/contacts">contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
