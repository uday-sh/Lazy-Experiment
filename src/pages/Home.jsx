const Home = () => {
  return (
    <>
      <section className="hero">
        <h1>Modern React Lazy Loading</h1>
        <p>
          High performance SPA built using Vite, React Router,
          Suspense and Code Splitting.
        </p>
        <button className="btn-primary">Get Started</button>
      </section>

      <section className="card-grid">
        <div className="card">
          <h2>⚡ Fast Performance</h2>
          <p>Loads only required chunks when needed.</p>
        </div>

        <div className="card">
          <h2>🧠 Smart Splitting</h2>
          <p>Dynamic imports reduce bundle size.</p>
        </div>

        <div className="card">
          <h2>🎨 Modern UI</h2>
          <p>Skeleton loading and animations improve UX.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
