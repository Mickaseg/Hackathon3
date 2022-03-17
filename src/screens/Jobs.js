import "./screens-styles/Jobs.css";
import { useState, useEffect } from "react";
import axios from "axios";
import QuizzDiv from "../components/QuizzDiv";
import Navbar from "../components/Navbar";
import backgroundquizz from "../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLANC_RVB_EXE_02.png";
import QuizzTheme2 from "../components/QuizzTheme2";
import QuizzTheme1 from "../components/QuizzTheme1";
import { Link } from "react-router-dom";

const Quizz = () => {
  return (
    <div className="jobs">
      <Navbar />
      <div className="jobsContainer">
        <div className="jobsFrame">
          <div className="topjobsFrame">
            <h1>Etes-vous ?</h1>
          </div>
          <div className="jobjobsFrame">
            <div className="radioJobWrapper">
              <div className="radioJob">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label for="huey">Technicien.e</label>
              </div>
              <div className="radioJob">
                <input type="radio" id="huey" name="drone" value="huey" />
                <label for="huey">Autres</label>
              </div>
            </div>
          </div>
          <div className="btnjobsFrame">
            <button>Valider</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
