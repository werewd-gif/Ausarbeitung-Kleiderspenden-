import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer-Komponente mit rechtlichen Hinweisen.
 * Enthält Links zu Impressum, Datenschutz und AGBs.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/agb">AGB</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} KleiderHilfe e.V. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
