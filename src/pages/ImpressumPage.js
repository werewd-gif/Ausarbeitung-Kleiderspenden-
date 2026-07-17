import React from 'react';

/**
 * Impressum-Seite gemäß § 5 TMG.
 */
function ImpressumPage() {
  return (
    <div>
      <h1 className="page-title">Impressum</h1>

      <div className="card">
        <h2 className="card-title">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p style={{ marginBottom: '0.5rem' }}><strong>KleiderHilfe e.V.</strong></p>
        <p style={{ marginBottom: '0.5rem' }}>Musterstra&szlig;e 1</p>
        <p style={{ marginBottom: '0.5rem' }}>10115 Berlin</p>
        <p style={{ marginBottom: '0.5rem' }}>Deutschland</p>
      </div>

      <div className="card">
        <h2 className="card-title">Vertreten durch</h2>
        <p style={{ marginBottom: '0.5rem' }}>Vorstandsvorsitzende/r: Max Mustermann</p>
        <p>Stellvertretende/r Vorsitzende/r: Erika Musterfrau</p>
      </div>

      <div className="card">
        <h2 className="card-title">Kontakt</h2>
        <p style={{ marginBottom: '0.5rem' }}>Telefon: +49 123 456789</p>
        <p style={{ marginBottom: '0.5rem' }}>E-Mail: info@kleiderhilfe.de</p>
        <p>Website: www.kleiderhilfe.de</p>
      </div>

      <div className="card">
        <h2 className="card-title">Registereintrag</h2>
        <p style={{ marginBottom: '0.5rem' }}>Eintragung im Vereinsregister.</p>
        <p style={{ marginBottom: '0.5rem' }}>Registergericht: Amtsgericht Berlin-Charlottenburg</p>
        <p>Registernummer: VR 12345 B</p>
      </div>

      <div className="card">
        <h2 className="card-title">Verantwortlich f&uuml;r den Inhalt gem&auml;&szlig; &sect; 55 Abs. 2 RSt V</h2>
        <p style={{ marginBottom: '0.5rem' }}>Max Mustermann</p>
        <p style={{ marginBottom: '0.5rem' }}>Musterstra&szlig;e 1</p>
        <p>10115 Berlin</p>
      </div>

      <div className="card">
        <h2 className="card-title">Haftungsausschluss</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Haftung f&uuml;r Inhalte:</strong> Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter
          Sorgfalt erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte
          k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter sind wir gem&auml;&szlig;
          &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>
        <p>
          <strong>Haftung f&uuml;r Links:</strong> Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter,
          auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch
          keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>
    </div>
  );
}

export default ImpressumPage;
