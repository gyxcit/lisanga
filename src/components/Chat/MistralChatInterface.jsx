import { useState, useRef, useEffect } from 'react';
import { Send, Users, Plus, Mic, ArrowLeft } from 'lucide-react';
import './MistralChatInterface.css';

function MistralChatInterface({ onOpenSupport, onBack }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Bonjour. Cet espace est privé, sécurisé, et rien de ce que tu diras ici ne sera enregistré. Comment te sens-tu aujourd'hui ?"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const callMistralAPI = async (userText, previousMessages) => {
    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
    
    if (!apiKey || apiKey === 'votre_cle_api_ici_mistral') {
      return "Désolé, la clé API Mistral n'est pas configurée correctement.";
    }

    try {
      // Build conversation history for context
      const formattedMessages = [
        { role: "system", content: "Tu es Lisanga, une assistante bienveillante, sécurisante et empathique, spécialisée dans le soutien aux victimes de violences basées sur le genre en Afrique. Ton rôle est d'écouter, de valider les émotions sans juger, et d'orienter vers les ressources de l'application si besoin. Réponds de manière concise, chaleureuse et utilise le tutoiement respectueux." }
      ];
      
      previousMessages.forEach(msg => {
        formattedMessages.push({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        });
      });
      
      formattedMessages.push({ role: "user", content: userText });

      const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: formattedMessages,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Mistral API error:", error);
      return "Je suis désolée, j'éprouve des difficultés à me connecter en ce moment. Prends ton temps, tu es en sécurité ici.";
    }
  };

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    const textToProcess = inputText;
    const userMsg = { id: Date.now(), sender: 'user', text: textToProcess };
    
    // Save current messages to pass to API
    const currentMessages = [...messages];
    
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    const aiResponseText = await callMistralAPI(textToProcess, currentMessages);

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
