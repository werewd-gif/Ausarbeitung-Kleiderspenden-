import React, { useState } from 'react';

/**
 * Kontaktseite mit Kontaktformular und Vereinsdaten.
 */
function KontaktPage() {
  const [formData, setFormData] = useState({ name: '', email: '', betreff: '', nachricht: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine g\u00fcltige E-Mail-Adresse ein.';
    }
    if (!formData.betreff.trim()) newErrors.betreff = 'Bitte geben Sie einen Betreff ein.';
    if (!formData.nachricht.trim()) newErrors.nachricht = 'Bitte geben Sie eine Nachricht ein.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // Simulierte Absendung
    setSuccess(true);
  }

  if (success) {
    return (
      <div>
        <h1 className="page-title">Kontakt</h1>
        <div className="confirmation-box confirmation-head">
          <div className="confirmation-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 className="confirmation-title">Nachricht gesendet</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Vielen Dank f&uuml;r Ihre Nachricht. Wir melden uns so schnell wie m&ouml;glich bei Ihnen.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => { setFormData({ name: '', email: '', betreff: '', nachricht: '' }); setErrors({}); setSubmitted(false); setSuccess(false); }}
          >
            Neue Nachricht senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">Kontakt</h1>
      <p className="page-subtitle">
        Haben Sie Fragen oder Anregungen? Schreiben Sie uns.
      </p>

      <div className="contact-layout">
        <div className="contact-main">
          <div className="card">
            <h2 className="card-title">Nachricht senden</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${submitted && errors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  maxLength={100}
                />
                {submitted && errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${submitted && errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre@email.de"
                  maxLength={150}
                />
                {submitted && errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="betreff">Betreff *</label>
                <input
                  type="text"
                  id="betreff"
                  name="betreff"
                  className={`form-control ${submitted && errors.betreff ? 'error' : ''}`}
                  value={formData.betreff}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  maxLength={200}
                />
                {submitted && errors.betreff && <p className="error-message">{errors.betreff}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="nachricht">Nachricht *</label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  className={`form-control ${submitted && errors.nachricht ? 'error' : ''}`}
                  value={formData.nachricht}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an uns..."
                  rows={5}
                  maxLength={2000}
                />
                {submitted && errors.nachricht && <p className="error-message">{errors.nachricht}</p>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>

        <div className="contact-side">
          <div className="card">
            <h2 className="card-title">Unsere Adresse</h2>
            <p style={{ marginBottom: '0.5rem' }}><strong>KleiderHilfe e.V.</strong></p>
            <p style={{ marginBottom: '0.5rem' }}>Musterstra&szlig;e 1</p>
            <p style={{ marginBottom: '0.5rem' }}>10115 Berlin</p>
            <p style={{ marginBottom: '1rem' }}>Deutschland</p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Telefon:</strong> +49 123 456789
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>E-Mail:</strong> info@kleiderhilfe.de
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">&Ouml;ffnungszeiten</h2>
            <p style={{ marginBottom: '0.5rem' }}>Montag bis Freitag</p>
            <p style={{ marginBottom: '1rem', fontWeight: 600 }}>9:00 bis 17:00 Uhr</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              An Feiertagen geschlossen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontaktPage;
