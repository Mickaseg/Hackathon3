import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import "./screens-styles/Home.css";
/* import logo_fond_blanc from "../assets/logo_fond_blanc.png"; */
import logo_fond_blanc from "../assets/logo_enedis_fondblanc.png";
import bgHub from "../assets/bgHub.png";
import quizHack3 from "../assets/quizHack3.PNG";

import workers from "../assets/workers.png";

const Home = () => {
  return (
    <div className="home">
      <div className="topBanner">
        <div className="titleHomeContainer">
          <div className="titlehome">
            <h1 className="titlehomeVert">Ô</h1>
            <h1 className="titlehomeBleu">COURANT</h1>
          </div>
          <div className="sousTitle">
            Se former&nbsp;-&nbsp;Appliquer&nbsp;-&nbsp;Contrôler
          </div>
        </div>

        <img className="logo" src={logo_fond_blanc}></img>
      </div>
      <div className="homeContentContainer">
        <div className="containerContenuInfo">
          <div className="imgDescHomeInfo">
            <img src={workers}></img>
          </div>
          <div className="containerDescBtn">
            <div className="containerHomeInfoDesc">
              <p>
                Permettre à toute personne de <b>s’informer</b>, d’appliquer et
                de controler les principes fondamentaux de la sécurité au
                travail chez ENEDIS et en dehors.
              </p>
            </div>
            <div className="ctaBleu containerHomeInfoBtn ">
              <p>ACCEDER AU CONTENU D’INFORMATIONS</p>
            </div>
          </div>
        </div>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\   QUIZ    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <div className="containerAccesQuiz">
          <div className="imgDescHomeQuiz">
            <img src={quizHack3}></img>
          </div>
          <div className="containerQuizBtn">
            <div className="containerHomeQuizDesc">
              <p>
                <b>Vérifier vos connaissances</b> en participant à un quiz sur
                le thème de la sécurité préventive. Analyser les réponses et
                créer de nouveaux reflexes !
              </p>
            </div>
            <NavLink to="/quizz">
              <div className="ctaBleu containerHomeQuizBtn">
                <p>ACCEDER AU TEST DE CONNAISSANCES</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <img className="bgHub" src={bgHub}></img>
    </div>
  );
};

export default Home;
