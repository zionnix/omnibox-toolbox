import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// On utilise StrictMode pour aider à détecter les problèmes de rendus
// mais on s'assure que le montage est propre pour nos animations
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)