import "./screens-styles/Finish.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import checkmark from "../assets/check-solid.svg";
import medal from "../assets/medal.png";

import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

const Finish = ({ score }) => {
  return (
    <div className="finish">
      <div className="finishContainer">
        <div className="FinishFrame">
          <div className="topFinishFrame">
            <h1>Félicitation ! </h1>
            <img src={medal}></img>
          </div>
          <div className="jobFinishFrame">
            <h2 className="score">Votre score : {score} / 10</h2>

            <div className="radioJobWrapper">
              <p>
                Votre score est <b>8/10</b> !
              </p>
              <br></br>
              <p>
                Fusce venenatis lorem non lorem tempor, a rhoncus mauris
                blandit. Suspendisse maximus neque aliquam diam efficitur
                rutrum. Duis tincidunt lacus non metus ultrices scelerisque.
                Praesent tristique semper feugiat. Donec convallis ex quam, sed
                eleifend neque tincidunt nec.
              </p>
              <br></br>
              <p>
                Integer id odio vitae turpis iaculis luctus id ut elit.
                Phasellus dictum facilisis maximus.
              </p>
              <br></br>
              <Link to="/documentation">
                Cliquez ici pour accéder à la documentation
              </Link>
            </div>
          </div>
          <div className="btnFinishFrame">
            <img className="checkmarkFinish" src={checkmark}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
