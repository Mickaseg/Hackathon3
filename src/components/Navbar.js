import "./components-styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logoblanc from "../../src/assets/logo_enedis_fondblanc.png";
import LogoutButton from "./LogoutButton";

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
        {/* <LogoutButton /> */}
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
