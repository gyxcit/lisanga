import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import './RegistrationModal.css';

function RegistrationModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ pseudo: '', contact: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this sends data to the secure backend DB
    console.log("Sending to secure DB:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} aria-label="Fermer">
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <h2>Groupes de Soutien</h2>
            <p className="modal-desc">
              Ces groupes réels sont animés par des professionnels. Laissez un contact sécurisé pour qu'une association locale puisse vous joindre. 
              <strong> Cette information ne sera jamais liée à votre discussion.</strong>
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Prénom ou Pseudonyme</label>
                <input 
                  type="text" 
                  required 
                  value={formData.pseudo}
                  onChange={(e) => setFormData({ ...formData, pseudo: e.target.value })}
                  placeholder="Ex: Amina"
                />
              </div>
              <div className="form-group">
                <label>Numéro ou Email sûr</label>
                <input 
                  type="text" 
                  required 
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Ex: +221..."
                />
              </div>
              <button type="submit" className="submit-btn">Demander à être contacté</button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <CheckCircle size={48} color="#10b981" />
            <h2>Demande envoyée</h2>
            <p>Une association prendra contact avec vous de manière sécurisée.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationModal;
