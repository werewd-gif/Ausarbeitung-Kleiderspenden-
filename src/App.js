import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import RegistrierungPage from './pages/RegistrierungPage';
import KrisengebietePage from './pages/KrisengebietePage';
import UeberUnsPage from './pages/UeberUnsPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import AGBPage from './pages/AGBPage';
import KontaktPage from './pages/KontaktPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Hauptkomponente.
 * Definiert das Layout mit Header, Sidebar (lokale Navigation),
 * Content-Bereich und Footer.
 */
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registrierung" element={<RegistrierungPage />} />
            <Route path="/krisengebiete" element={<KrisengebietePage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/agb" element={<AGBPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;


