import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

/* Registrierungsseite */

// PLZ der Geschäftsstelle 
const GESCHAEFTSSTELLE_PLZ = '10115';
const GESCHAEFTSSTELLE_PREFIX = GESCHAEFTSSTELLE_PLZ.substring(0, 2); // "10"

// Verfügbare Kleidungsarten
const KLEIDUNGSARTEN = [
  'Jacken & Mäntel',
  'Pullover & Strickwaren',
  'T-Shirts & Oberteile',
  'Hosen & Röcke',
  'Kleider',
  'Kinderbekleidung',
  'Schuhe',
  'Accessoires',
  'Bettwäsche & Decken',
  'Sonstiges',
];

// Aktuelle Krisengebiete
const KRISENGEBIETE = [
  'Ukraine',
  'Afghanistan',
  'Gaza',
  'Syrien',
];


// Entfernt potenziell gefährliche Zeichen (XSS-Schutz).
// React escapt Textinhalte beim Rendern automatisch; das Entfernen von
// spitzen Klammern dient als zusätzliche Absicherung, ohne dass harmlose
// Zeichen wie "&" in der Anzeige als HTML-Entities erscheinen.
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').trim();
}


// Validiert, ob eine PLZ im Einzugsgebiet der Geschäftsstelle liegt.

function isPlzImEinzugsgebiet(plz) {
  if (!plz || plz.length < 2) return false;
  return plz.substring(0, 2) === GESCHAEFTSSTELLE_PREFIX;
}


// Validiert eine deutsche Postleitzahl (genau 5 Ziffern).

function isValidPlz(plz) {
  return /^\d{5}$/.test(plz);
}

function RegistrierungPage() {
  const [searchParams] = useSearchParams();


  const [modus, setModus] = useState(''); // 'uebergabe' oder 'abholung'
  const [kleidungsart, setKleidungsart] = useState('');
  const [krisengebiet, setKrisengebiet] = useState('');
  const [name, setName] = useState('');
  const [strasse, setStrasse] = useState('');
  const [hausnummer, setHausnummer] = useState('');
  const [plz, setPlz] = useState('');
  const [ort, setOrt] = useState('');
  const [telefon, setTelefon] = useState('');
  const [wunschdatum, setWunschdatum] = useState('');
  const [wunschzeit, setWunschzeit] = useState('');
  const [anmerkungen, setAnmerkungen] = useState('');
  const [datenschutz, setDatenschutz] = useState(false);


  useEffect(() => {
    const modusParam = searchParams.get('modus');
    if (modusParam === 'uebergabe' || modusParam === 'abholung') {
      setModus(modusParam);
    }
  }, [searchParams]);

  // Validierung und Status
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);


 //Validiert alle Formularfelder.

  function validate() {
    const newErrors = {};

    if (!modus) {
      newErrors.modus = 'Bitte wählen Sie eine Übergabeart aus.';
    }

    if (!kleidungsart) {
      newErrors.kleidungsart = 'Bitte wählen Sie eine Kleidungsart aus.';
    }

    if (!krisengebiet) {
      newErrors.krisengebiet = 'Bitte wählen Sie ein Krisengebiet aus.';
    }

    if (!datenschutz) {
      newErrors.datenschutz = 'Bitte stimmen Sie der Datenschutzerkl\u00e4rung und den AGB zu.';
    }

    if (modus === 'abholung') {
      if (!name.trim()) {
        newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
      }
      if (!strasse.trim()) {
        newErrors.strasse = 'Bitte geben Sie die Straße ein.';
      }
      if (!hausnummer.trim()) {
        newErrors.hausnummer = 'Bitte geben Sie die Hausnummer ein.';
      }
      if (!plz.trim()) {
        newErrors.plz = 'Bitte geben Sie die Postleitzahl ein.';
      } else if (!isValidPlz(plz)) {
        newErrors.plz = 'Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.';
      } else if (!isPlzImEinzugsgebiet(plz)) {
        newErrors.plz = `Die Postleitzahl liegt nicht im Einzugsgebiet unserer Geschäftsstelle (PLZ-Bereich ${GESCHAEFTSSTELLE_PREFIX}xxx). Bitte überprüfen Sie die Adresse.`;
      }
      if (!ort.trim()) {
        newErrors.ort = 'Bitte geben Sie den Ort ein.';
      }
      if (!wunschdatum) {
        newErrors.wunschdatum = 'Bitte w\u00e4hlen Sie ein Wunschdatum f\u00fcr die Abholung.';
      } else {
        const chosen = new Date(wunschdatum);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) {
          newErrors.wunschdatum = 'Das Datum muss in der Zukunft liegen.';
        }
        // Prüfe ob Wochentag (Mo-Fr)
        const day = chosen.getDay();
        if (day === 0 || day === 6) {
          newErrors.wunschdatum = 'Abholungen sind nur an Werktagen (Mo-Fr) m\u00f6glich.';
        }
      }
      if (!wunschzeit) {
        newErrors.wunschzeit = 'Bitte w\u00e4hlen Sie ein Zeitfenster f\u00fcr die Abholung.';
      }
    }

    return newErrors;
  }


 //Verarbeitet die Formulareingabe bei Absenden und validiert alle Felder

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Daten für Bestätigung aufbereiten (sanitized)
    const now = new Date();
    const data = {
      modus: modus === 'uebergabe' ? 'Übergabe an der Geschäftsstelle' : 'Abholung durch Sammelfahrzeug',
      kleidungsart: sanitizeInput(kleidungsart),
      krisengebiet: sanitizeInput(krisengebiet),
      datum: now.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      uhrzeit: now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
      ort: modus === 'uebergabe'
        ? `Geschäftsstelle: Musterstraße 1, ${GESCHAEFTSSTELLE_PLZ} Berlin`
        : `${sanitizeInput(strasse)} ${sanitizeInput(hausnummer)}, ${sanitizeInput(plz)} ${sanitizeInput(ort)}`,
      name: modus === 'abholung' ? sanitizeInput(name) : null,
      telefon: modus === 'abholung' && telefon ? sanitizeInput(telefon) : null,
      wunschtermin: modus === 'abholung' ? `${new Date(wunschdatum).toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })}, ${wunschzeit}` : null,
      anmerkungen: anmerkungen ? sanitizeInput(anmerkungen) : null,
    };

    setConfirmationData(data);
  }


  function handleReset() {
    setModus('');
    setKleidungsart('');
    setKrisengebiet('');
    setName('');
    setStrasse('');
    setHausnummer('');
    setPlz('');
    setOrt('');
    setTelefon('');
    setWunschdatum('');
    setWunschzeit('');
    setAnmerkungen('');
    setDatenschutz(false);
    setErrors({});
    setSubmitted(false);
    setConfirmationData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // BESTÄTIGUNGSSEITE 
  if (confirmationData) {
    return (
      <div>
        <div className="confirmation-box">
          <div className="confirmation-head">
            <div className="confirmation-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h1 className="confirmation-title">Vielen Dank f&uuml;r Ihre Spende</h1>
            <p>Ihre Kleiderspende wurde registriert. Eine &Uuml;bersicht Ihrer Angaben finden Sie hier.</p>
          </div>

          <div className="confirmation-details">
            <div className="detail-row">
              <span className="detail-label">Übergabeart:</span>
              <span className="detail-value">{confirmationData.modus}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Art der Kleidung:</span>
              <span className="detail-value">{confirmationData.kleidungsart}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Krisengebiet:</span>
              <span className="detail-value">{confirmationData.krisengebiet}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Datum:</span>
              <span className="detail-value">{confirmationData.datum}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Uhrzeit:</span>
              <span className="detail-value">{confirmationData.uhrzeit}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Ort:</span>
              <span className="detail-value">{confirmationData.ort}</span>
            </div>
            {confirmationData.name && (
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{confirmationData.name}</span>
              </div>
            )}
            {confirmationData.telefon && (
              <div className="detail-row">
                <span className="detail-label">Telefon:</span>
                <span className="detail-value">{confirmationData.telefon}</span>
              </div>
            )}
            {confirmationData.wunschtermin && (
              <div className="detail-row">
                <span className="detail-label">Gew. Abholtermin:</span>
                <span className="detail-value">{confirmationData.wunschtermin}</span>
              </div>
            )}
            {confirmationData.anmerkungen && (
              <div className="detail-row">
                <span className="detail-label">Anmerkungen:</span>
                <span className="detail-value">{confirmationData.anmerkungen}</span>
              </div>
            )}
          </div>
        </div>

        <div className="btn-group" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <button className="btn btn-primary btn-lg" onClick={handleReset}>
            Neue Spende registrieren
          </button>
        </div>
      </div>
    );
  }

  // REGISTRIERUNGSFORMULAR 
  return (
    <div>
      <h1 className="page-title">Kleiderspende registrieren</h1>
      <p className="page-subtitle">
        Füllen Sie das Formular aus, um Ihre Kleiderspende für ein Krisengebiet zu registrieren.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Schritt 1: Übergabeart wählen  */}
        <div className="card">
          <h2 className="card-title">1. Übergabeart wählen</h2>
          <div className="form-group">
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="uebergabe"
                  name="modus"
                  value="uebergabe"
                  checked={modus === 'uebergabe'}
                  onChange={(e) => setModus(e.target.value)}
                />
                <label htmlFor="uebergabe">
                  <span className="radio-label-text">Übergabe an der Geschäftsstelle</span>
                  <span className="radio-desc">Persönliche Abgabe vor Ort</span>
                </label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="abholung"
                  name="modus"
                  value="abholung"
                  checked={modus === 'abholung'}
                  onChange={(e) => setModus(e.target.value)}
                />
                <label htmlFor="abholung">
                  <span className="radio-label-text">Abholung durch Sammelfahrzeug</span>
                  <span className="radio-desc">Wir holen Ihre Spende bei Ihnen ab</span>
                </label>
              </div>
            </div>
            {submitted && errors.modus && (
              <p className="error-message">{errors.modus}</p>
            )}
          </div>
        </div>

        {/* Schritt 2: Abholadresse (nur bei Abholung)  */}
        {modus === 'abholung' && (
          <div className="card">
            <h2 className="card-title">2. Abholadresse</h2>
            <div className="notice">
              <p>Die Abholung ist nur im Einzugsgebiet unserer Geschäftsstelle
                möglich (PLZ-Bereich {GESCHAEFTSSTELLE_PREFIX}xxx).</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                className={`form-control ${submitted && errors.name ? 'error' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vor- und Nachname"
                maxLength={100}
              />
              {submitted && errors.name && (
                <p className="error-message">{errors.name}</p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group wide">
                <label htmlFor="strasse">Straße *</label>
                <input
                  type="text"
                  id="strasse"
                  className={`form-control ${submitted && errors.strasse ? 'error' : ''}`}
                  value={strasse}
                  onChange={(e) => setStrasse(e.target.value)}
                  placeholder="Straßenname"
                  maxLength={150}
                />
                {submitted && errors.strasse && (
                  <p className="error-message">{errors.strasse}</p>
                )}
              </div>
              <div className="form-group narrow">
                <label htmlFor="hausnummer">Nr. *</label>
                <input
                  type="text"
                  id="hausnummer"
                  className={`form-control ${submitted && errors.hausnummer ? 'error' : ''}`}
                  value={hausnummer}
                  onChange={(e) => setHausnummer(e.target.value)}
                  placeholder="z.B. 12a"
                  maxLength={10}
                />
                {submitted && errors.hausnummer && (
                  <p className="error-message">{errors.hausnummer}</p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group narrow">
                <label htmlFor="plz">PLZ *</label>
                <input
                  type="text"
                  id="plz"
                  className={`form-control ${submitted && errors.plz ? 'error' : ''}`}
                  value={plz}
                  onChange={(e) => {
                    // Nur Ziffern zulassen, max 5
                    const val = e.target.value.replace(/\D/g, '').substring(0, 5);
                    setPlz(val);
                  }}
                  placeholder="z.B. 10115"
                  maxLength={5}
                  inputMode="numeric"
                  pattern="\d{5}"
                />
                {submitted && errors.plz && (
                  <p className="error-message">{errors.plz}</p>
                )}
              </div>
              <div className="form-group wide">
                <label htmlFor="ort">Ort *</label>
                <input
                  type="text"
                  id="ort"
                  className={`form-control ${submitted && errors.ort ? 'error' : ''}`}
                  value={ort}
                  onChange={(e) => setOrt(e.target.value)}
                  placeholder="z.B. Berlin"
                  maxLength={100}
                />
                {submitted && errors.ort && (
                  <p className="error-message">{errors.ort}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="telefon">Telefon (optional)</label>
              <input
                type="tel"
                id="telefon"
                className="form-control"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                placeholder="+49 30 123456789"
                maxLength={20}
              />
              <p className="hint">Für Rückfragen zur Abholung.</p>
            </div>

            {/* Wunschtermin für Abholung */}
            <div className="notice">
              <p>Unser Sammelfahrzeug ist Montag bis Freitag von 9:00 bis 17:00 Uhr
                im Einsatz. Bitte wählen Sie Ihren Wunschtermin, wir bestätigen ihn
                per Telefon oder E-Mail.</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="wunschdatum">Wunschdatum *</label>
                <input
                  type="date"
                  id="wunschdatum"
                  className={`form-control ${submitted && errors.wunschdatum ? 'error' : ''}`}
                  value={wunschdatum}
                  onChange={(e) => setWunschdatum(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
                {submitted && errors.wunschdatum && (
                  <p className="error-message">{errors.wunschdatum}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="wunschzeit">Zeitfenster *</label>
                <select
                  id="wunschzeit"
                  className={`form-control ${submitted && errors.wunschzeit ? 'error' : ''}`}
                  value={wunschzeit}
                  onChange={(e) => setWunschzeit(e.target.value)}
                >
                  <option value="">-- Bitte wählen --</option>
                  <option value="09:00-11:00 Uhr">09:00-11:00 Uhr</option>
                  <option value="11:00-13:00 Uhr">11:00-13:00 Uhr</option>
                  <option value="13:00-15:00 Uhr">13:00-15:00 Uhr</option>
                  <option value="15:00-17:00 Uhr">15:00-17:00 Uhr</option>
                </select>
                {submitted && errors.wunschzeit && (
                  <p className="error-message">{errors.wunschzeit}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/*Schritt 3: Kleidungsart und Krisengebiet*/}
        {modus && (
          <div className="card">
            <h2 className="card-title">
              {modus === 'abholung' ? '3.' : '2.'} Angaben zur Spende
            </h2>

            <div className="form-group">
              <label htmlFor="kleidungsart">Art der Kleidung *</label>
              <select
                id="kleidungsart"
                className={`form-control ${submitted && errors.kleidungsart ? 'error' : ''}`}
                value={kleidungsart}
                onChange={(e) => setKleidungsart(e.target.value)}
              >
                <option value="">-- Bitte auswählen --</option>
                {KLEIDUNGSARTEN.map((art) => (
                  <option key={art} value={art}>{art}</option>
                ))}
              </select>
              {submitted && errors.kleidungsart && (
                <p className="error-message">{errors.kleidungsart}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="krisengebiet">Krisengebiet *</label>
              <select
                id="krisengebiet"
                className={`form-control ${submitted && errors.krisengebiet ? 'error' : ''}`}
                value={krisengebiet}
                onChange={(e) => setKrisengebiet(e.target.value)}
              >
                <option value="">-- Bitte auswählen --</option>
                {KRISENGEBIETE.map((gebiet) => (
                  <option key={gebiet} value={gebiet}>{gebiet}</option>
                ))}
              </select>
              {submitted && errors.krisengebiet && (
                <p className="error-message">{errors.krisengebiet}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="anmerkungen">Anmerkungen (optional)</label>
              <textarea
                id="anmerkungen"
                className="form-control"
                value={anmerkungen}
                onChange={(e) => setAnmerkungen(e.target.value)}
                placeholder="Besondere Hinweise zur Spende..."
                rows={3}
                maxLength={500}
              />
            </div>
          </div>
        )}

        {/*Datenschutz & AGB */}
        {modus && (
          <div className="card">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={datenschutz}
                  onChange={(e) => setDatenschutz(e.target.checked)}
                />
                <span>
                  Ich habe die{' '}
                  <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und stimme den{' '}
                  <a href="/agb" target="_blank" rel="noopener noreferrer">
                    Allgemeinen Geschäftsbedingungen (AGB)
                  </a>{' '}
                  zu. *
                </span>
              </label>
              {submitted && errors.datenschutz && (
                <p className="error-message" style={{ marginTop: '0.5rem' }}>{errors.datenschutz}</p>
              )}
            </div>
          </div>
        )}

        {/* Absenden */}
        {modus && (
          <div className="btn-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Spende registrieren
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Zurücksetzen
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default RegistrierungPage;
