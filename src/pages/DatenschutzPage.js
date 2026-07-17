import React from 'react';

/**
 * Datenschutzerklärung gemäß DSGVO.
 */
function DatenschutzPage() {
  return (
    <div>
      <h1 className="page-title">Datenschutzerkl&auml;rung</h1>

      <div className="card">
        <h2 className="card-title">1. Verantwortlicher</h2>
        <p style={{ marginBottom: '0.5rem' }}>
          Verantwortlich f&uuml;r die Datenverarbeitung auf dieser Website ist:
        </p>
        <p style={{ marginBottom: '0.5rem' }}><strong>KleiderHilfe e.V.</strong></p>
        <p style={{ marginBottom: '0.5rem' }}>Musterstra&szlig;e 1, 10115 Berlin</p>
        <p style={{ marginBottom: '0.5rem' }}>Telefon: +49 123 456789</p>
        <p>E-Mail: datenschutz@kleiderhilfe.de</p>
      </div>

      <div className="card">
        <h2 className="card-title">2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p style={{ marginBottom: '1rem' }}>
          Bei der Nutzung unseres Kleiderspenden-Registrierungsportals erheben wir folgende Daten,
          die Sie uns im Rahmen des Registrierungsformulars freiwillig mitteilen:
        </p>
        <p style={{ marginBottom: '0.5rem' }}>- Name (bei Abholung)</p>
        <p style={{ marginBottom: '0.5rem' }}>- Adresse (Stra&szlig;e, Hausnummer, PLZ, Ort; bei Abholung)</p>
        <p style={{ marginBottom: '0.5rem' }}>- Telefonnummer (optional, bei Abholung)</p>
        <p style={{ marginBottom: '0.5rem' }}>- Gew&uuml;nschter Abholtermin (Datum und Zeitfenster)</p>
        <p>- Art der Kleiderspende und gew&auml;hltes Krisengebiet</p>
      </div>

      <div className="card">
        <h2 className="card-title">3. Zweck der Datenverarbeitung</h2>
        <p>
          Die erhobenen Daten werden ausschlie&szlig;lich zur Abwicklung Ihrer Kleiderspende verwendet.
          Dazu geh&ouml;rt die Organisation der Abholung, die Zuordnung der Spende zu einem Krisengebiet
          sowie die Kontaktaufnahme bei R&uuml;ckfragen. Eine Weitergabe an Dritte erfolgt nicht,
          es sei denn, dies ist zur Erf&uuml;llung des Spendenzwecks erforderlich (z.B. Logistikpartner).
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">4. Rechtsgrundlage</h2>
        <p>
          Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage Ihrer Einwilligung
          gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO, die Sie durch das Akzeptieren der
          Datenschutzerkl&auml;rung im Registrierungsformular erteilen. Sie k&ouml;nnen Ihre Einwilligung
          jederzeit mit Wirkung f&uuml;r die Zukunft widerrufen.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">5. Speicherdauer</h2>
        <p>
          Ihre personenbezogenen Daten werden nach Abschluss des Spendenvorgangs f&uuml;r die Dauer
          von 6 Monaten gespeichert und anschlie&szlig;end gel&ouml;scht, sofern keine gesetzlichen
          Aufbewahrungsfristen entgegenstehen.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">6. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbeh&ouml;rde &uuml;ber die
          Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die f&uuml;r uns
          zust&auml;ndige Aufsichtsbeh&ouml;rde ist die Berliner Beauftragte f&uuml;r Datenschutz
          und Informationsfreiheit.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">7. Cookies und Tracking</h2>
        <p>
          Diese Website verwendet keine Cookies und keine Tracking-Technologien.
          Es werden keine Analyse-Tools oder Social-Media-Plugins eingesetzt.
        </p>
      </div>

      <div className="card" style={{ background: 'rgba(43,76,126,0.05)', border: '1px solid rgba(43,76,126,0.15)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
          Stand: M&auml;rz 2026
        </p>
      </div>
    </div>
  );
}

export default DatenschutzPage;
