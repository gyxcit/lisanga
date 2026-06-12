import { useState } from 'react';
import { ArrowLeft, BookOpen, Download, AlertTriangle, FileText, Globe, MapPin, Search } from 'lucide-react';
import './LegalRights.css';
import legalData from '../../data/legal.json';

function LegalRights({ onBack }) {
  const universalSteps = legalData.find(d => d.country === "Universel (Règles générales)")?.steps || [];
  const countryLaws = legalData.filter(d => d.country !== "Universel (Règles générales)");
  
  const [activeItem, setActiveItem] = useState('universel'); // 'universel' or country string
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countryLaws.filter(item => 
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCountryData = countryLaws.find(d => d.country === activeItem);

  return (
    <div className="sub-resource-container">
      <header className="resources-header">
        <button className="btn-ghost back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Retour
        </button>
        <h1 className="page-title" style={{ color: '#1D9E75' }}>Droits & Démarches</h1>
        <div style={{width: 80}}></div>
      </header>

      <main className="legal-layout">
        
        {/* LEFT SIDEBAR: Navigation */}
        <aside className="legal-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Les Fondamentaux</h3>
            <button 
              className={`nav-tab ${activeItem === 'universel' ? 'active' : ''}`}
              onClick={() => setActiveItem('universel')}
            >
              <Globe size={18} />
              Guide Universel
            </button>
          </div>

          <div className="sidebar-section">
            <div className="search-box" style={{ marginBottom: '16px', padding: '8px 16px', fontSize: '0.9rem' }}>
              <Search size={16} color="var(--color-muted)" />
              <input 
                type="text" 
                placeholder="Rechercher un pays..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '0.9rem' }}
              />
            </div>
            <h3 className="sidebar-title">Lois et Procédures par Pays</h3>
            <p className="sidebar-desc">Consultez les textes pénaux spécifiques.</p>
            
            <div className="country-tabs">
              {filteredCountries.map((data, index) => (
                <button 
                  key={index} 
                  className={`nav-tab ${activeItem === data.country ? 'active' : ''}`}
                  onClick={() => setActiveItem(data.country)}
                >
                  <MapPin size={18} />
                  {data.country}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT AREA: Reading Pane */}
        <section className="legal-content-pane">
          <div className="reading-container">
            
            {activeItem === 'universel' ? (
              <div className="document-view">
                <div className="doc-header universal">
                  <AlertTriangle size={48} color="#F5A623" />
                  <div>
                    <h2>Guide Universel : Que faire ?</h2>
                    <p>Démarches d'urgence valables partout dans le monde.</p>
                  </div>
                </div>

                <div className="doc-body">
                  <div className="timeline-steps">
                    {universalSteps.map((step, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-marker">{idx + 1}</div>
                        <div className="timeline-content">
                          <h3>{step.title}</h3>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="document-view">
                <div className="doc-header specific">
                  <BookOpen size={48} color="#1D9E75" />
                  <div>
                    <h2>Lois et Procédures : {currentCountryData.country}</h2>
                    <p>Ce que dit le code pénal local concernant les violences basées sur le genre.</p>
                  </div>
                </div>

                <div className="doc-body">
                  {currentCountryData.laws && currentCountryData.laws.length > 0 ? (
                    <div className="laws-grid">
                      {currentCountryData.laws.map((law, idx) => (
                        <div key={idx} className="law-article">
                          <div className="article-icon">
                            <FileText size={24} color="#1D9E75" />
                          </div>
                          <div className="article-text">
                            <h3>{law.title}</h3>
                            <p>{law.desc}</p>
                            {law.link && (
                              <button className="btn-doc-download" onClick={() => alert("Le téléchargement du document officiel sera bientôt disponible.")}>
                                <Download size={18} /> Télécharger le Document Officiel
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <FileText size={48} color="var(--color-muted)" opacity={0.5} />
                      <p>Les textes de loi détaillés pour ce pays sont en cours d'intégration.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
}

export default LegalRights;
