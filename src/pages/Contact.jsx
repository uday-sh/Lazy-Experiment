const Contact = () => {
  return (
    <>
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Let’s build something amazing together 🚀</p>
      </section>

      <section className="card-grid">
        <div className="card">
          <h2>Email</h2>
          <p>example@email.com</p>
        </div>

        <div className="card">
          <h2>LinkedIn</h2>
          <p>linkedin.com/in/yourprofile</p>
        </div>

        <div className="card">
          <h2>GitHub</h2>
          <p>github.com/yourprofile</p>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Project Today</h2>
        <button className="btn-primary">Start Now</button>
      </section>
    </>
  );
};

export default Contact;
