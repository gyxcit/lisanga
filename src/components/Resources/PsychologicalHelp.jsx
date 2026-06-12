import { useState } from 'react';
import { ArrowLeft, Phone, Heart, ExternalLink, Calendar, Shield, Clock } from 'lucide-react';
import './PsychologicalHelp.css';

function PsychologicalHelp({ onBack }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="sub-resource-container psy-container">
      <header className="resources-header">
        <button className="btn-ghost back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Retour
        </button>
        <h1 className="page-title" style={{ color: '#4A90E2' }}>Aide Psychologique</h1>
        <div style={{width: 80}}></div>
      </header>

      <main className="sub-resource-main">
        <div className="psy-content-wrapper">
          
          <div className="psy-hero-section">
            <div className="psy-hero-text">
              <h2>Vous n'êtes pas seule.</h2>
              <p>
                Les traumatismes liés aux violences basées sur le genre nécessitent un accompagnement spécialisé. 
                Des professionnels sont là pour vous écouter, sans jugement, et vous aider à vous reconstruire.
              </p>
              <div className="psy-badges">
                <span><Shield size={16}/> 100% Confidentiel</span>
                <span><Heart size={16}/> Gratuit</span>
              </div>
            </div>
            <div className="psy-hero-icon">
              <Phone size={64} color="white" />
            </div>
          </div>

          <div className="psy-split-layout">
            
            {/* LEFT: Appointment Request */}
            <div className="psy-contact-card">
              <div className="card-header-icon">
                <Calendar size={32} color="#4A90E2" />
              </div>
              <h3>Parler à un professionnel</h3>
              <p className="card-subtitle">
                Remplissez ce formulaire anonyme pour qu'un psychologue partenaire vous recontacte en toute sécurité.
              </p>

              {!submitted ? (
                <form className="psy-intake-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Comment préférez-vous être contactée ?</label>
                    <select required>
                      <option value="">Choisir une option...</option>
                      <option value="whatsapp">Message WhatsApp discret</option>
                      <option value="appel">Appel vocal</option>
                      <option value="signal">Message Signal (Très sécurisé)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Numéro de téléphone / Identifiant</label>
                    <input type="text" placeholder="+221 ..." required />
                  </div>

                  <div className="form-group checkbox-group">
                    <input type="checkbox" id="safe-time" required />
                    <label htmlFor="safe-time">Je confirme que c'est mon numéro personnel et qu'il est sûr de me contacter.</label>
                  </div>

                  <button type="submit" className="btn-request-psy">
                    Demander un rendez-vous gratuit
                  </button>
                </form>
              ) : (
                <div className="request-success-box">
                  <div className="success-pulse">
                    <Heart size={40} color="#1D9E75" />
                  </div>
                  <h4>Demande Envoyée</h4>
                  <p>Un psychologue vous contactera d'ici 24 à 48 heures de façon totalement sécurisée.</p>
                  <button className="btn-ghost" onClick={() => setSubmitted(false)} style={{color: '#4A90E2', fontWeight: 'bold', marginTop: '10px'}}>
                    Faire une autre demande
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT: Organizations Links */}
            <div className="psy-orgs-section">
              <h3 className="section-title">ONG et Lignes d'Écoute (Gratuit)</h3>
              
              <div className="orgs-grid">
                
                <a href="https://www.icrc.org/fr/nos-activites/sante/sante-mentale-et-soutien-psychosocial" target="_blank" rel="noopener noreferrer" className="org-card" style={{ zIndex: 10, position: 'relative' }}>
                  <div className="org-card-header">
                    <h4>Croix-Rouge</h4>
                    <ExternalLink size={18} color="#4A90E2" />
                  </div>
                  <p>Présente dans de nombreux pays d'Afrique, elle propose souvent des cellules d'écoute et de soutien psychologique gratuit.</p>
                  <div className="org-tags">
                    <span>Soutien de crise</span>
                  </div>
                </a>

                <a href="https://www.msf.fr/nos-actions/soins-medicaux/sante-mentale" target="_blank" rel="noopener noreferrer" className="org-card" style={{ zIndex: 10, position: 'relative' }}>
                  <div className="org-card-header">
                    <h4>Médecins Sans Frontières (MSF)</h4>
                    <ExternalLink size={18} color="#4A90E2" />
                  </div>
                  <p>Propose des soins psychologiques complets dans leurs cliniques, notamment en RDC, Mali, et Cameroun.</p>
                  <div className="org-tags">
                    <span>Cliniques gratuites</span>
                  </div>
                </a>

                <a href="https://fondationpanzirdc.org/" target="_blank" rel="noopener noreferrer" className="org-card" style={{ zIndex: 10, position: 'relative' }}>
                  <div className="org-card-header">
                    <h4>Fondation Panzi (RDC)</h4>
                    <ExternalLink size={18} color="#4A90E2" />
                  </div>
                  <p>Fondée par le Dr Mukwege, offre un modèle holistique de prise en charge avec un fort accompagnement psychologique.</p>
                  <div className="org-tags">
                    <span>Spécialisé VBG</span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default PsychologicalHelp;
