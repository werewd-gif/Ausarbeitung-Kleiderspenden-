import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header-Komponente mit globalem Navigationsmenü.
 * Enthält Logo, Titel und responsive Navigation mit Hamburger-Menü.
 */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Startseite' },
    { path: '/registrierung', label: 'Spende registrieren' },
    { path: '/krisengebiete', label: 'Krisengebiete' },
    { path: '/ueber-uns', label: 'Über uns' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
          <img src="/logo.svg" alt="KleiderHilfe Logo" className="logo-img" />
          <div className="logo-text">
            <h1>KleiderHilfe</h1>
            <p>Kleiderspenden-Registrierung</p>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>

        <nav className={`global-nav ${menuOpen ? 'open' : ''}`} aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
