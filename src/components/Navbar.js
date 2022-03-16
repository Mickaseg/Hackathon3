import React from "react";
import { useState } from "react";
import "./components-styles/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={active ? "navbaradmin active" : "navbaradmin"}>
      <NavLink to="/">
        <div className="link">Home</div>
      </NavLink>
      <NavLink to="/quizz">
        <div className="link">Quizz</div>
      </NavLink>
      <NavLink to="/article">
        <div className="link">Articles</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
