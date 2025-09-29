import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// PUBLIC_INTERFACE
/**
 * Application bootstrap entry point.
 *
 * This function locates the root container element with id "root" in index.html and
 * mounts the React application using React 18's createRoot API.
 *
 * Behavior:
 * - If the #root element is not found, it throws a descriptive error to help diagnose
 *   markup or path issues during startup.
 */
const rootEl = document.getElementById('root')
if (!rootEl) {
  // Throw early with a descriptive message to surface misconfiguration quickly
  throw new Error('Root container with id "root" not found in index.html')
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
