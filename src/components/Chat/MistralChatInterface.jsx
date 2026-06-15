import { useState, useRef, useEffect } from 'react';
import { Send, Users, Plus, Mic, ArrowLeft } from 'lucide-react';
import './MistralChatInterface.css';

function MistralChatInterface({ onOpenSupport, onBack }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Coucou, je suis contente que tu sois là. Prends ton temps, il n'y a rien que tu doives me dire avant d'être prête. Comment tu te sens, là, maintenant ?"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  const MAX_INPUT_LENGTH = 2000;

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const callAI = async (userText, previousMessages) => {
    try {
      // Historique de conversation pour le contexte (le prompt système et la
      // clé restent côté serveur, dans la Netlify Function /api/chat).
      const history = previousMessages
        .map((msg) => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        }))
        .concat({ role: 'user', content: userText });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (response.status === 429) {
        return "Tu m'écris un peu vite. Laisse-moi quelques secondes et réessaie, je reste là.";
      }

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`);
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Chat error:', error);
      return "Je suis désolée, j'ai du mal à te répondre à l'instant. Reste avec moi un moment et réessaie dans quelques secondes.";
    }
  };

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    const textToProcess = inputText.trim().slice(0, MAX_INPUT_LENGTH);
    const userMsg = { id: Date.now(), sender: 'user', text: textToProcess };

    // Save current messages to pass to API
    const currentMessages = [...messages];

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    const aiResponseText = await callAI(textToProcess, currentMessages);

    setIsTyping(false);
    const aiResponse = {
      id: Date.now() + 1,
      sender: 'ai',
      text: aiResponseText
    };
    setMessages(prev => [...prev, aiResponse]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <button className="btn-ghost" onClick={onBack} aria-label="Retour" style={{marginRight: '12px', border: 'none', color: 'var(--color-muted)'}}>
          <ArrowLeft size={20} />
        </button>
        <button className="btn-ghost" onClick={onOpenSupport} aria-label="Groupes">
          <Users size={16} style={{marginRight: '6px'}} />
          Groupes de soutien
        </button>
      </div>

      <div className="chat-messages-container" ref={containerRef}>
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender}`}>
              {msg.sender === 'user' ? (
                <div className="message-bubble user">
                  {msg.text}
                </div>
              ) : (
                <div className="message-text ai">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="message-row ai">
              <div className="message-text ai typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="chat-input-wrapper">
        <div className="chat-input-pill">
          <button className="icon-btn" aria-label="Attacher">
            <Plus size={20} />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Demander à Lisanga"
            className="chat-input-field"
            disabled={isTyping}
            maxLength={MAX_INPUT_LENGTH}
          />
          {inputText.trim() ? (
            <button className="icon-btn send" onClick={handleSend} aria-label="Envoyer" disabled={isTyping}>
              <Send size={20} />
            </button>
          ) : (
            <button className="icon-btn" aria-label="Micro">
              <Mic size={20} />
            </button>
          )}
        </div>
        <p className="chat-disclaimer">
          Lisanga est une IA et peut se tromper. Cet espace est 100% anonyme.
        </p>
      </div>
    </div>
  );
}

export default MistralChatInterface;
