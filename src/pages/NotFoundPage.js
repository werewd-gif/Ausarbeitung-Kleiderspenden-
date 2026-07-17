import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404-Seite für unbekannte Routen.
 */
function NotFoundPage() {
  return (
    <div>
      <h1 className="page-title">Seite nicht gefunden</h1>
      <p className="page-subtitle">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link to="/" className="btn btn-primary">
        Zur Startseite
      </Link>
    </div>
  );
}

export default NotFoundPage;
