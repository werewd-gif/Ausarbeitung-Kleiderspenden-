import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Startseite mit Überblick über den Verein und die Spendenmöglichkeiten.
 */
function HomePage() {
  return (
    <div>
      <section className="hero">
        <svg className="hero-mark" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 13 V11 A3.2 3.2 0 1 1 30.4 11" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 13 L5.5 32.5 H42.5 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 40.5 C21.2 38.3 16.8 35.6 16.8 31.9 C16.8 28.4 21.4 27.1 24 30.1 C26.6 27.1 31.2 28.4 31.2 31.9 C31.2 35.6 26.8 38.3 24 40.5 Z" fill="#FFFFFF" />
        </svg>
        <div className="hero-content">
          <h2>Kleiderspenden, die dort ankommen, wo sie gebraucht werden</h2>
          <p>
            Registrieren Sie Ihre Kleiderspende online und bestimmen Sie selbst,
            in welches Krisengebiet sie gesendet wird.
          </p>
          <Link to="/registrierung" className="btn btn-sun btn-lg">
            Spende registrieren
          </Link>
        </div>
      </section>

      <div className="card">
        <h2 className="card-title">&Uuml;ber den Verein</h2>
        <p className="intro-text">
          KleiderHilfe e.V. ist ein gemeinn&uuml;tziger Verein aus Berlin, der die
          Organisation und Logistik von Kleiderspenden f&uuml;r Menschen in Krisengebieten
          &uuml;bernimmt. Gut erhaltene Kleidung findet so ihren Weg dorthin, wo sie am
          dringendsten gebraucht wird.{' '}
          <Link to="/ueber-uns">Mehr erfahren</Link>
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">So funktioniert es</h2>
        <ol className="steps">
          <li>
            <div>
              <strong>Registrieren</strong>
              <p>
                F&uuml;llen Sie unser Online-Formular aus und w&auml;hlen Sie, ob Sie die
                Kleidung pers&ouml;nlich &uuml;bergeben oder abholen lassen m&ouml;chten.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Krisengebiet ausw&auml;hlen</strong>
              <p>
                Bestimmen Sie, in welches aktuelle Krisengebiet Ihre Spende
                versendet werden soll.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Best&auml;tigung erhalten</strong>
              <p>
                Nach erfolgreicher Registrierung erhalten Sie eine &Uuml;bersicht
                mit allen Daten Ihrer Spende.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="card">
        <h2 className="card-title">Unsere Gesch&auml;ftsstelle</h2>
        <div className="info-split">
          <div>
            <p className="info-label">Adresse</p>
            <p><strong>KleiderHilfe e.V.</strong></p>
            <p>Musterstra&szlig;e 1, 10115 Berlin</p>
          </div>
          <div>
            <p className="info-label">&Ouml;ffnungszeiten</p>
            <p>Montag bis Freitag</p>
            <p>9:00 bis 17:00 Uhr</p>
          </div>
          <div>
            <p className="info-label">Telefon</p>
            <p>+49 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
