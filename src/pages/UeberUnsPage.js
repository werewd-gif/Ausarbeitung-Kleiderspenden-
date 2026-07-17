import React from 'react';

/**
 * Über-uns-Seite mit Informationen zum Verein.
 */
function UeberUnsPage() {
  return (
    <div>
      <h1 className="page-title">\u00DCber KleiderHilfe e.V.</h1>
      <p className="page-subtitle">
        Gemeinn\u00FCtziger Verein f\u00FCr die Organisation und Logistik von Kleiderspenden.
      </p>

      <div className="card">
        <h2 className="card-title">Unsere Mission</h2>
        <p style={{ marginBottom: '1rem' }}>
          KleiderHilfe e.V. ist ein lokaler gemeinn\u00FCtziger Verein, der die
          Logistik und Organisation von Kleiderspenden \u00FCbernimmt. Bei uns
          entscheiden die Spendenden selbst, in welches aktuelle Krisengebiet
          ihre Kleiderspende versendet werden soll.
        </p>
        <p>
          Durch transparente Prozesse und engagierte Ehrenamtliche sorgen wir daf\u00FCr,
          dass jede Spende dort ankommt, wo sie am dringendsten ben\u00F6tigt wird.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">So k\u00F6nnen Sie spenden</h2>
        <p style={{ marginBottom: '1rem' }}>
          Kommen Sie direkt zu unserer Gesch\u00E4ftsstelle und registrieren Sie Ihre
          Spende am Tablet vor Ort. Oder Sie fordern \u00FCber unser Portal eine Abholung
          durch unser Sammelfahrzeug an, dann kommen wir zu Ihnen.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">Kontakt</h2>
        <p style={{ marginBottom: '0.5rem' }}><strong>KleiderHilfe e.V.</strong></p>
        <p style={{ marginBottom: '0.5rem' }}>Musterstra&szlig;e 1</p>
        <p style={{ marginBottom: '0.5rem' }}>10115 Berlin</p>
        <p style={{ marginBottom: '0.5rem' }}>Telefon: +49 123 456789</p>
        <p>E-Mail: info@kleiderhilfe.de</p>
      </div>
    </div>
  );
}

export default UeberUnsPage;
