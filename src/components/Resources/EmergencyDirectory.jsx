import { useState } from 'react';
import { ArrowLeft, Phone, ShieldAlert, MapPin, Search, X, ChevronRight } from 'lucide-react';
import './EmergencyDirectory.css';
import emergenciesData from '../../data/emergencies.json';

function EmergencyDirectory({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCountry, setActiveCountry] = useState(null);

  const filteredCountries = emergenciesData.filter(item => 
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sub-resource-container">
      <header className="resources-header">
        <button className="btn-ghost back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Retour
        </button>
        <h1 className="page-title" style={{ color: '#E24B4A' }}>Annuaire d'Urgence</h1>
        <div style={{width: 80}}></div>
      </header>

      <main className="sub-resource-main directory-layout">
        <div className="directory-list-section">
          <div className="search-box">
            <Search size={20} color="var(--color-muted)" />
            <input 
              type="text" 
              placeholder="Rechercher votre pays..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="countries-simple-list">
            {filteredCountries.map((data, index) => (
              <button 
                key={index} 
                className={`country-list-item ${activeCountry?.country === data.country ? 'active' : ''}`}
                onClick={() => setActiveCountry(data)}
              >
                <div className="item-left">
                  <div className="country-icon">
                    <MapPin size={20} color="white" />
                  </div>
                  <span>{data.country}</span>
                </div>
                <ChevronRight size={20} color="var(--color-muted)" />
              </button>
            ))}

            {filteredCountries.length === 0 && (
              <div className="no-results">
                <ShieldAlert size={48} color="var(--color-muted)" />
                <p>Aucun pays trouvé.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel Overlay for mobile */}
        <div className={`drawer-overlay ${activeCountry ? 'visible' : ''}`} onClick={() => setActiveCountry(null)}></div>

        {/* Right Panel (Drawer) */}
        <div className={`country-drawer ${activeCountry ? 'open' : ''}`}>
          {activeCountry && (
            <div className="drawer-content">
              <div className="drawer-header">
                <h2>{activeCountry.country}</h2>
                <button className="btn-close-drawer" onClick={() => setActiveCountry(null)}>
                  <X size={24} />
                </button>
              </div>

              <div className="drawer-body">
                <div className="emergency-numbers">
                  {activeCountry.police && (
                    <div className="number-item police">
                      <div className="number-info">
                        <strong>Police Secours</strong>
                        <span>Intervention rapide</span>
                      </div>
                      <a href={`tel:${activeCountry.police.replace(/\s/g, '')}`} className="btn-call">{activeCountry.police}</a>
                    </div>
                  )}
                  {activeCountry.gendarmerie && (
                    <div className="number-item police">
                      <div className="number-info">
                        <strong>Gendarmerie</strong>
                        <span>Intervention rurale/urbaine</span>
                      </div>
                      <a href={`tel:${activeCountry.gendarmerie.replace(/\s/g, '')}`} className="btn-call">{activeCountry.gendarmerie}</a>
                    </div>
                  )}
                </div>

                {activeCountry.hotlines && activeCountry.hotlines.length > 0 && (
                  <div className="hotlines-section">
                    <h3>Lignes d'assistance (Hotlines)</h3>
                    <div className="hotlines-grid">
                      {activeCountry.hotlines.map((hotline, idx) => (
                        <div key={idx} className="hotline-item">
                          <span className="hotline-name">{hotline.name}</span>
                          <a href={`tel:${hotline.number.replace(/\s/g, '')}`} className="btn-call outline">{hotline.number}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeCountry.ngos && activeCountry.ngos.length > 0 && (
                  <div className="ngos-section">
                    <h3>ONG & Associations Locales</h3>
                    <div className="ngos-list">
                      {activeCountry.ngos.map((ngo, idx) => (
                        <div key={idx} className="ngo-item">
                          <strong>{ngo.name}</strong>
                          <p>{ngo.desc}</p>
                          {ngo.contact && <span className="ngo-contact">Contact: {ngo.contact}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default EmergencyDirectory;
