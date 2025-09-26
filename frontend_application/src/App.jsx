import React from 'react';

// PUBLIC_INTERFACE
export default function App() {
  /** Root application component for the SPA. */
  return (
    <>
      <header>
        <nav>
          <div className="brand">
            <span className="brand-badge" aria-hidden="true"></span>
            <span>Ocean Professional</span>
          </div>
          <div>
            <button className="btn">Docs</button>
            <button className="btn primary" style={{ marginLeft: 8 }}>
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="card" aria-label="Welcome">
          <h1 style={{ marginTop: 0 }}>Elegant React Starter</h1>
          <p style={{ lineHeight: 1.6 }}>
            This single page application demonstrates a modern, elegant layout with a top navigation
            bar and a clean content card. The theme uses soft pastels, gentle gradients, and refined,
            rounded components.
          </p>
        </section>
      </main>
    </>
  );
}
