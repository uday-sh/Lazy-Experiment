import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // small delay for nav spinner

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <nav className="navbar">
      <h2 className="logo">Lazy SPA</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {loading && <div className="nav-spinner"></div>}
      </div>
    </nav>
  );
};

export default Navbar;
