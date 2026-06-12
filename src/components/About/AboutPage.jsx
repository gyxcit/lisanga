import { ArrowLeft, Code, Globe, Heart } from 'lucide-react';
import './AboutPage.css';

function AboutPage({ onBack }) {
  return (
    <div className="about-container">
      <header className="about-header">
        <button className="btn-ghost back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          Retour
        </button>
        <div className="logo-group">
          {/* Logo SVG */}
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="#1D9E75" strokeWidth="2" strokeOpacity="0.4"/>
            <circle cx="16" cy="16" r="10" stroke="#1D9E75" strokeWidth="2" strokeOpacity="0.65"/>
            <circle cx="16" cy="16" r="6" fill="#1D9E75"/>
            <circle cx="16" cy="16" r="2" fill="#F2F7F5"/>
          </svg>
          <span className="logo-text-dark">Lisanga</span>
        </div>
      </header>

      <main className="about-main">
        <div className="about-content">
          <h1>Qui sommes-nous ?</h1>
          <p className="lead">
            Nous sommes une équipe d'étudiants en informatique, nés, ayant grandi et vivant en Afrique.
          </p>

          <section className="about-section">
            <div className="section-icon"><Globe size={24} /></div>
            <h2>Des voyageurs, témoins d'une réalité silencieuse</h2>
            <p>
              Au fil de nos études et de nos projets, nous avons eu l'immense privilège de voyager à travers 
              de nombreux pays de notre magnifique continent. Du dynamisme de Dakar à l'effervescence de Kinshasa, 
              en passant par Abidjan et Douala, nous avons été éblouis par la richesse culturelle, la force de 
              caractère et la résilience de nos peuples.
            </p>
            <p>
              Cependant, en coulisses, nous avons aussi été confrontés à une réalité sombre et omniprésente : la violence basée sur le genre. 
              Une violence profondément ancrée, souvent étouffée par le poids écrasant des traditions, la peur du qu'en-dira-t-on 
              et la stigmatisation sociale. Partout où nous sommes allés, nous avons rencontré des femmes et des hommes 
              porteurs de cicatrices invisibles, enfermés dans un silence assourdissant, sans structure d'écoute sécurisée et bienveillante vers laquelle se tourner.
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon"><Code size={24} /></div>
            <h2>La technologie au service de l'humain</h2>
            <p>
              En tant que jeunes passionnés de nouvelles technologies, nous refusions de rester les bras croisés. 
              Pour nous, l'informatique ne sert pas uniquement à créer des applications commerciales ou des outils de divertissement. 
              Elle a le pouvoir profond de sauver des vies, de briser l'isolement extrême et de redonner la parole à ceux 
              qu'on a fait taire par la force ou l'intimidation.
            </p>
            <p>
              C'est de ce constat révoltant qu'est né <strong>Lisanga</strong> (un mot qui signifie "Cercle" ou "Communauté" en lingala). 
              Nous avons choisi d'unir nos compétences en développement logiciel, en intelligence artificielle et en cybersécurité 
              pour bâtir un véritable sanctuaire numérique. Une plateforme où l'anonymat est le pilier central, où aucune de vos données n'est tracée 
              ou revendue, et où une intelligence artificielle empathique, spécialement formée, se tient disponible 24 heures sur 24 
              et 7 jours sur 7 pour vous écouter, sans jamais vous juger.
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon"><Heart size={24} /></div>
            <h2>Notre vision pour l'avenir</h2>
            <p>
              Nous croyons viscéralement que libérer la parole est la toute première étape indispensable vers la guérison et la reconstruction de soi. 
              Notre mission est de faire de Lisanga un refuge universel et gratuit pour toutes les victimes de violences en Afrique et au-delà.
            </p>
            <p>
              Nous nourrissons l'espoir sincère qu'un jour, la honte changera enfin de camp. Que les outils technologiques que nous 
              développons aujourd'hui avec passion dans nos chambres d'étudiants permettront à des milliers de personnes, de mères, 
              de sœurs et d'amis, de retrouver la paix intérieure et la force inébranlable de reprendre le contrôle de leur vie.
            </p>
          </section>

          <div className="about-footer">
            <p>Conçu avec espoir, empathie et détermination par la jeunesse africaine.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
