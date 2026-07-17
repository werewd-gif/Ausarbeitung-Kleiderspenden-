import React from 'react';

/* Die Krisengebiete */

const krisengebiete = [
  {
    name: 'Ukraine',
    region: 'Osteuropa',
    beschreibung: 'Der andauernde Konflikt hat Millionen von Menschen zur Flucht gezwungen und erfordert dringend humanitäre Hilfe. Der Bedarf an Kleiderspenden ist derzeit sehr hoch.',
  },
  {
    name: 'Afghanistan',
    region: 'Zentralasien',
    beschreibung: 'Wirtschaftskrise und Naturkatastrophen verschärfen die humanitäre Lage für die Bevölkerung. Vor allem warme Kleidung wird laufend benötigt.',
  },
  {
    name: 'Gaza',
    region: 'Naher Osten',
    beschreibung: 'Die humanitäre Krise hat zu einer akuten Notlage für die Zivilbevölkerung geführt. Kleiderspenden werden dringend benötigt.',
  },
  {
    name: 'Syrien',
    region: 'Naher Osten',
    beschreibung: 'Nach jahrelangem Konflikt sind viele Familien weiterhin auf humanitäre Hilfe angewiesen, der Bedarf bleibt anhaltend hoch.',
  },
];

function KrisengebietePage() {
  return (
    <div>
      <h1 className="page-title">Aktuelle Krisengebiete</h1>
      <p className="page-subtitle">
        Wählen Sie bei der Registrierung Ihrer Spende eines dieser Gebiete als Ziel aus.
      </p>

      <div className="card">
        <ul className="crisis-list">
          {krisengebiete.map((gebiet) => (
            <li key={gebiet.name}>
              <h3>
                {gebiet.name}
                <span className="crisis-region">{gebiet.region}</span>
              </h3>
              <p>{gebiet.beschreibung}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KrisengebietePage;
