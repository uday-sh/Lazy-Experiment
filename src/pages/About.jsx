const About = () => {
  return (
    <>
      <section className="hero">
        <h1>About This Project</h1>
        <p>
          Demonstrates real-world route-based lazy loading.
        </p>
      </section>

      <section className="card-grid">
        <div className="card">
          <h2>Route Loading</h2>
          <p>Each page loads only when visited.</p>
        </div>

        <div className="card">
          <h2>Dynamic Import</h2>
          <p>Uses ES6 import() for code splitting.</p>
        </div>

        <div className="card">
          <h2>Scalable Structure</h2>
          <p>Clean folder organization.</p>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h3>3+</h3>
          <p>Lazy Pages</p>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <p>Optimized</p>
        </div>
        <div className="stat-box">
          <h3>Modern</h3>
          <p>Architecture</p>
        </div>
      </section>
    </>
  );
};

export default About;
