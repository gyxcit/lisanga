import { useState } from 'react';
import { ArrowLeft, Users, Shield, UserCircle, Phone } from 'lucide-react';
import './SupportGroups.css';

function SupportGroups({ onBack }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="sub-resource-container">
      <header className="resources-header">
        <button className="btn-ghost back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Retour
        </button>
        <h1 className="page-title" style={{ color: '#F5A623' }}>Groupes de Soutien</h1>
        <div style={{width: 80}}></div>
      </header>

      <main className="sub-resource-main">
        <div className="directory-content">
          
          <div className="groups-intro">
            <div className="intro-icon">
              <Users size={48} color="white" />
            </div>
            <h2>Vous n'êtes pas seule.</h2>
            <p>
              Rejoignez nos groupes de soutien anonymes. C'est un espace sécurisé où vous pouvez échanger 
              avec d'autres personnes qui comprennent ce que vous traversez. Les discussions sont 
              modérées par des professionnels bienveillants.
            </p>
            <div className="security-badges">
              <span className="badge"><Shield size={16}/> 100% Anonyme</span>
              <span className="badge"><Shield size={16}/> Modération 24/7</span>
              <span className="badge"><Shield size={16}/> Données Sécurisées</span>
            </div>
          </div>

          <div className="groups-form-section">
            {!submitted ? (
              <>
                <h3>Rejoindre un groupe</h3>
                <p className="form-desc">Nous avons juste besoin d'un pseudonyme pour vous appeler et d'un numéro pour vous contacter en toute sécurité.</p>
                
                <form className="join-group-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Votre Prénom ou Pseudonyme</label>
                    <div className="input-wrapper">
                      <UserCircle size={20} color="var(--color-muted)" />
                      <input 
                        type="text" 
                        placeholder="Ex: Amina" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Numéro de téléphone</label>
                    <div className="input-wrapper">
                      <Phone size={20} color="var(--color-muted)" />
                      <input 
                        type="tel" 
                        placeholder="Ex: +221 XX XXX XX XX" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-submit-group">Demander l'accès au groupe</button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Demande envoyée !</h3>
                <p>Merci {name}. Un de nos modérateurs va vous contacter très prochainement sur votre numéro pour vous donner un accès sécurisé à un groupe de soutien correspondant à votre situation.</p>
                <button className="btn-submit-group" onClick={onBack}>Retour aux ressources</button>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default SupportGroups;
