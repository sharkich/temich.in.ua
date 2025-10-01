/**
 * Site Footer Component
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy;&nbsp;1984–{currentYear} Artem&nbsp;Koziar
      </div>
      <div className="hitua">
        {/* hit.ua analytics */}
        <a href="http://hit.ua/?x=85927" target="_blank" rel="noopener noreferrer">
          <img
            src="//c.hit.ua/hit?i=85927&g=0&x=4"
            alt="hit.ua: visitors today"
            title="hit.ua: visitors today"
            width="88"
            height="15"
            style={{ border: 0 }}
          />
        </a>
      </div>
    </footer>
  );
}
