import { ShieldAlert } from 'lucide-react';
import './PanicButton.css';

function PanicButton({ onPanic }) {
  const handleClick = () => {
    // Execute panic action: clear everything and close chat
    onPanic();
    // Optional: hard redirect could be done here if needed
    // window.location.href = "https://www.google.com";
  };

  return (
    <button className="panic-button" onClick={handleClick} aria-label="Sortie d'urgence">
      <ShieldAlert size={24} />
    </button>
  );
}

export default PanicButton;
