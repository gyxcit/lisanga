import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import './RegistrationModal.css';
import { sendWeb3Form } from '../../utils/sendWeb3Form';

function RegistrationModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ pseudo: '', contact: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await sendWeb3Form({
        subject: 'Nouvelle demande de contact — Groupe de soutien Lisanga',
        fields: {
          'Prénom / Pseudonyme': formData.pseudo,
          'Contact sûr': formData.contact,
        },
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch {
      setError("L'envoi a échoué. Vérifiez votre réseau et réessayez.");
    } finally {
      setLoading(false);
    }
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

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <span className="btn-loading">
                    <Loader2 size={18} className="spin" /> Envoi en cours...
                  </span>
                ) : (
                  'Demander à être contactée'
                )}
              </button>
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
