import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDark(!dark);
  };

  return (
    <header className="glass-header">
      <div className="logo">⚡ Cosmic UI</div>
      <nav className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/about">🧠 About</Link>
        <Link to="/contact">📞 Contact</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
