import "./components-styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logoblanc from "../../src/assets/logo_enedis_fondblanc.png";
// import { useAuth0 } from "auth0/auth0-react";
// import LogoutButton from "./LogoutButton";
// import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          src={logoblanc}
          alt="logo blanc enedis"
          className="white-navbar-logo"
        />
      </NavLink>

      <div className="navbar-item">
        <NavLink to="/documentation" className="navbar-link">
          Documentation
          {/* Voir pour sous routes : 8 Fondamentaux, TOP C MA VIE, etc etc */}
        </NavLink>
        <NavLink to="/jobs" className="navbar-link">
          Questionnaire
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
