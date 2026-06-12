import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#fee2e2', color: '#991b1b', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Une erreur s'est produite</h1>
          <p style={{ marginBottom: '20px' }}>Veuillez copier le texte ci-dessous et l'envoyer au développeur :</p>
          <pre style={{ backgroundColor: '#fef2f2', padding: '15px', borderRadius: '5px', overflowX: 'auto', border: '1px solid #f87171' }}>
            {this.state.error && this.state.error.toString()}
            {'\n\n'}
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Rafraîchir la page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </StrictMode>,
)
