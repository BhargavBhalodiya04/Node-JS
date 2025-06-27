import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDark(!dark);
  };

  return (
    <header className="glass-header">
      <nav className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
