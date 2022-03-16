import Navbar from "../components/Navbar.js";
import "./screens-styles/Home.css";
/* import logo_fond_blanc from "../assets/logo_fond_blanc.png"; */
/* import logo_fond_blanc from "src/assets/logo_enedis_fondblanc.png"; */
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
            <h1></h1>
            <h1 className="titlehomeBleu">COURANT</h1>
          </div>
          <div className="sousTitle">
            S’informer - Se former - Appliquer - Controler
          </div>
        </div>
        <div className="logo"></div>
      </div>
      <div className="homeContentContainer">
        <div className="containerContenuInfo">
          <div className="imgDescHomeInfo">
            <img src={workers}></img>
          </div>
          <div className="containerDescBtn">
            <div className="containerHomeInfoDesc">
              <p>
                Permettre à toute personne de s’informer, d’appliquer et de
                controler les principes fondamentaux de la sécurité au travail
                chez ENEDIS et en dehors.
              </p>
            </div>
            <div className="ctaBleu containerHomeInfoBtn ">
              <p>ACCEDER AU CONTENU D’INFORMATIONS</p>
            </div>
          </div>
        </div>
      </div>
      <img className="bgHub" src={bgHub}></img>
    </div>
  );
};

export default Home;
