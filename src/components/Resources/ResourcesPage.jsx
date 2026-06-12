import { ArrowLeft, PhoneCall, Scale, Users, HeartPulse } from 'lucide-react';
import './ResourcesPage.css';

function ResourcesPage({ onBack, onNavigate }) {
  const cards = [
    {
      id: 'emergency',
      title: "Annuaire d'Urgence",
      desc: "Numéros verts, police et ONG locales pour les urgences immédiates.",
      icon: <PhoneCall size={32} />,
      color: "#E24B4A"
    },
    {
      id: 'legal',
      title: "Droits & Démarches",
      desc: "Comment porter plainte de manière sécurisée et conserver les preuves.",
      icon: <Scale size={32} />,
      color: "#1D9E75"
    },
    {
      id: 'groups',
      title: "Groupes de Soutien",
      desc: "Rejoindre un espace d'échange anonyme avec d'autres survivant(e)s.",
      icon: <Users size={32} />,
      color: "#F5A623"
    },
    {
      id: 'psy',
      title: "Aide Psychologique",
      desc: "Trouver une clinique ou demander à parler à un professionnel.",
      icon: <HeartPulse size={32} />,
      color: "#4A90E2"
    }
  ];

  return (
    <div className="resources-container">
      <header className="resources-header">
        <button className="btn-ghost back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Retour
        </button>
        <h1 className="page-title">Ressources Utiles</h1>
        <div style={{width: 80}}></div> {/* Spacer for centering */}
      </header>

      <main className="resources-main">
        <div className="resources-content-wrapper">
          <p className="resources-subtitle">
            Vous n'êtes pas seule. Sélectionnez une catégorie ci-dessous pour accéder aux informations, conseils et aides disponibles près de chez vous.
          </p>

          <div className="resources-grid">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="resource-card" 
                onClick={() => onNavigate(`resources/${card.id}`)}
              >
                <div className="card-icon" style={{ backgroundColor: card.color }}>
                  {card.icon}
                </div>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
                <div className="card-arrow" style={{ color: card.color }}>
                  &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResourcesPage;
