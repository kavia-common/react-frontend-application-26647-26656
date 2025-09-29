import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// PUBLIC_INTERFACE
/**
 * Application bootstrap entry point.
 * Renders the root React component into the #root element.
 * Throws a descriptive error if the #root container is missing.
 */
const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root container with id "root" not found in index.html')
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
