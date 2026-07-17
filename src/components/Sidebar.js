import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Sidebar-Komponente mit lokaler Navigation.
 * Wird je nach Schriftkultur (LTR/RTL) links oder rechts dargestellt.
 * Bei LTR (z.B. Deutsch): links. Bei RTL (z.B. Arabisch): rechts.
 *
 * Die Links "Vor-Ort-Übergabe" und "Abholung anfordern" navigieren
 * direkt zum Registrierungsformular mit vorausgewähltem Modus
 * via Query-Parameter (?modus=uebergabe / ?modus=abholung).
 */
function Sidebar() {
  const location = useLocation();

  const localLinks = [
    { path: '/registrierung', label: 'Neue Spende' },
    { path: '/registrierung?modus=uebergabe', label: 'Vor-Ort-Übergabe' },
    { path: '/registrierung?modus=abholung', label: 'Abholung anfordern' },
    { path: '/krisengebiete', label: 'Krisengebiete' },
    { path: '/ueber-uns', label: 'Über den Verein' },
  ];

  const isActive = (path) => {
    const [pathname, query = ''] = path.split('?');
    if (location.pathname !== pathname) return false;
    return location.search.replace(/^\?/, '') === query;
  };

  return (
    <aside className="sidebar-nav" aria-label="Lokale Navigation">
      <h3>Schnellzugriff</h3>
      <ul>
        {localLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
