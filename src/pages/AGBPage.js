import React from 'react';

/* Allgemeine Geschäftsbedingungen. */

function AGBPage() {
  return (
    <div>
      <h1 className="page-title">Allgemeine Gesch&auml;ftsbedingungen (AGB)</h1>

      <div className="card">
        <h2 className="card-title">&sect; 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Gesch&auml;ftsbedingungen gelten f&uuml;r die Nutzung des
          Kleiderspenden-Registrierungsportals der KleiderHilfe e.V., Musterstra&szlig;e 1,
          10115 Berlin (nachfolgend &bdquo;Verein&ldquo; genannt). Durch die Nutzung des Portals
          und die Registrierung einer Kleiderspende erkl&auml;ren Sie sich mit diesen Bedingungen
          einverstanden.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 2 Leistungsbeschreibung</h2>
        <p style={{ marginBottom: '1rem' }}>
          Der Verein bietet &uuml;ber das Online-Portal die M&ouml;glichkeit,
          Kleiderspenden f&uuml;r ausgew&auml;hlte Krisengebiete zu registrieren.
          Die Spende kann auf zwei Wegen erfolgen:
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>a) Pers&ouml;nliche &Uuml;bergabe:</strong> Abgabe der Kleidung an der
          Gesch&auml;ftsstelle des Vereins w&auml;hrend der &Ouml;ffnungszeiten (Mo-Fr, 9:00 bis 17:00 Uhr).
        </p>
        <p>
          <strong>b) Abholung:</strong> Der Verein organisiert eine Abholung durch ein Sammelfahrzeug
          an der angegebenen Adresse. Die Abholung ist auf das Einzugsgebiet (PLZ-Bereich 10xxx) beschr&auml;nkt.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 3 Spendenbedingungen</h2>
        <p style={{ marginBottom: '1rem' }}>
          Gespendete Kleidung muss sich in einem sauberen und tragbaren Zustand befinden.
          Der Verein beh&auml;lt sich das Recht vor, Spenden abzulehnen, die nicht den
          Qualit&auml;tsanforderungen entsprechen (z.B. stark besch&auml;digte, verschmutzte
          oder nicht tragbare Kleidung).
        </p>
        <p>
          Mit der Registrierung &uuml;bertr&auml;gt der Spendende das Eigentum an der
          Kleidung unwiderruflich an den Verein. Eine R&uuml;ckgabe ist nach erfolgter
          &Uuml;bergabe nicht m&ouml;glich.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 4 Abholung</h2>
        <p style={{ marginBottom: '1rem' }}>
          Bei gew&auml;hlter Abholung wird der angegebene Wunschtermin nach M&ouml;glichkeit
          eingehalten. Der Verein best&auml;tigt den Termin telefonisch oder per E-Mail.
          &Auml;nderungen oder Stornierungen der Abholung sind bis 24 Stunden vor dem
          vereinbarten Termin m&ouml;glich.
        </p>
        <p>
          Die Kleidung muss zum vereinbarten Zeitpunkt an der angegebenen Adresse bereitgestellt
          werden. Ist eine Abholung nicht m&ouml;glich (z.B. niemand anwesend), wird ein neuer
          Termin vereinbart.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 5 Haftung</h2>
        <p>
          Der Verein haftet nicht f&uuml;r Sch&auml;den, die durch die Nutzung des Portals entstehen,
          soweit diese nicht auf Vorsatz oder grober Fahrl&auml;ssigkeit des Vereins oder seiner
          Erf&uuml;llungsgehilfen beruhen. Eine Haftung f&uuml;r die Verf&uuml;gbarkeit des Portals
          oder die rechtzeitige Abholung von Spenden wird nicht &uuml;bernommen.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 6 Datenschutz</h2>
        <p>
          Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gem&auml;&szlig; unserer
          Datenschutzerkl&auml;rung. Mit der Nutzung des Portals stimmen Sie der dort
          beschriebenen Datenverarbeitung zu. Weitere Informationen finden Sie in unserer{' '}
          <a href="/datenschutz" style={{ color: 'var(--accent-dark)', textDecoration: 'underline' }}>
            Datenschutzerkl&auml;rung
          </a>.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 7 &Auml;nderungen der AGB</h2>
        <p>
          Der Verein beh&auml;lt sich vor, diese AGB jederzeit zu &auml;ndern. &Auml;nderungen
          werden auf der Website ver&ouml;ffentlicht. Die Nutzung des Portals nach
          Ver&ouml;ffentlichung ge&auml;nderter AGB gilt als Zustimmung zu den &Auml;nderungen.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">&sect; 8 Schlussbestimmungen</h2>
        <p style={{ marginBottom: '1rem' }}>
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Berlin.
          Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so bleibt die
          Wirksamkeit der &uuml;brigen Bestimmungen unber&uuml;hrt.
        </p>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
        Stand: M&auml;rz 2026
      </p>
    </div>
  );
}

export default AGBPage;
