import { useState } from 'react'

/**
 * PUBLIC_INTERFACE
 * Root application component.
 * This is the starting point for building the UI.
 */
export default function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app__header">
        <div className="logo">React + Vite</div>
      </header>
      <main className="app__main">
        <h1>Frontend Application</h1>
        <p>Welcome! This is a fresh React scaffold using Vite and TypeScript.</p>
        <button onClick={() => setCount((c) => c + 1)}>
          Count: {count}
        </button>
      </main>
      <footer className="app__footer">
        <small>Built with Vite • React 18 • TypeScript</small>
      </footer>
    </div>
  )
}
