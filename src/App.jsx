import { useState } from 'react';
import HeroPage from './components/Landing/HeroPage';
import MistralChatInterface from './components/Chat/MistralChatInterface';
import PanicButton from './components/Safety/PanicButton';
import RegistrationModal from './components/SupportGroup/RegistrationModal';
import AboutPage from "./components/About/AboutPage";
import ResourcesPage from "./components/Resources/ResourcesPage";
import EmergencyDirectory from "./components/Resources/EmergencyDirectory";
import LegalRights from "./components/Resources/LegalRights";
import SupportGroups from "./components/Resources/SupportGroups";
import PsychologicalHelp from "./components/Resources/PsychologicalHelp";

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'chat', 'about'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lockApp = () => {
    setCurrentView('home');
  };

  return (
    <div className="app-container">
      {/* Landing Screen */}
      <div className={`screen landing ${currentView !== 'home' ? 'fade-out' : ''}`}>
        <HeroPage 
          onStart={() => setCurrentView('chat')} 
          onNavigate={(view) => setCurrentView(view)} 
        />
      </div>

      {/* Secret Chat Screen */}
      <div className={`screen chat ${currentView === 'chat' ? 'active' : ''}`}>
        {currentView === 'chat' && (
          <div className="chat-desktop-wrapper">
            <PanicButton onPanic={lockApp} />
            <MistralChatInterface onOpenSupport={() => setIsModalOpen(true)} onBack={lockApp} />
          </div>
        )}
      </div>

      {/* About Screen */}
      <div className={`screen about ${currentView === 'about' ? 'active' : ''}`}>
        {currentView === 'about' && (
          <AboutPage onBack={() => setCurrentView('home')} />
        )}
      </div>

      {/* Resources Hub */}
      <div className={`screen resources ${currentView === 'resources' ? 'active' : ''}`}>
        {currentView === 'resources' && (
          <ResourcesPage onBack={() => setCurrentView('home')} onNavigate={(view) => setCurrentView(view)} />
        )}
      </div>

      {/* Emergency Directory */}
      <div className={`screen resources-sub ${currentView === 'resources/emergency' ? 'active' : ''}`}>
        {currentView === 'resources/emergency' && (
          <EmergencyDirectory onBack={() => setCurrentView('resources')} />
        )}
      </div>

      {/* Legal Rights */}
      <div className={`screen resources-sub ${currentView === 'resources/legal' ? 'active' : ''}`}>
        {currentView === 'resources/legal' && (
          <LegalRights onBack={() => setCurrentView('resources')} />
        )}
      </div>

      {/* Support Groups */}
      <div className={`screen resources-sub ${currentView === 'resources/groups' ? 'active' : ''}`}>
        {currentView === 'resources/groups' && (
          <SupportGroups onBack={() => setCurrentView('resources')} />
        )}
      </div>

      {/* Psychological Help */}
      <div className={`screen resources-sub ${currentView === 'resources/psy' ? 'active' : ''}`}>
        {currentView === 'resources/psy' && (
          <PsychologicalHelp onBack={() => setCurrentView('resources')} />
        )}
      </div>

      {/* Support Group Registration */}
      {isModalOpen && <RegistrationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
