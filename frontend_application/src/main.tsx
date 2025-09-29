import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// PUBLIC_INTERFACE
/**
 * Application bootstrap entry point.
 * Renders the root React component into the #root element.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
