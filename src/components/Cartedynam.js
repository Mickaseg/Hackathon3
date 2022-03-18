import React from "react";
import "./components-styles/Cartedynam.css";
import pwpt1 from "../assets/pwpt/Fonda.png";
import { Link } from "react-router-dom";

const Cartedynam = ({ donnees }) => {
  console.log(donnees);
  return (
<>
        <ul className="cards">
          <li >
            <Link
              to={donnees.url_file}
              className="card"
              target="_blank"
              download
            >
              <img src={donnees.url_picture} className="card__image" alt="" />

              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>

                  <div className="card__header-text">
                    <h3 className="card__title">{donnees.title}</h3>
                    <span className="card__status">{donnees.intro}</span>
                  </div>
                </div>
                <p className="card__description">{donnees.description}</p>
              </div>
            </Link>
          </li>
          <li></li>
        </ul>
    </>
  );
};

export default Cartedynam;
