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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
                Phasellus dictum facilisis maximus. Nullam pharetra fermentum
                sapien, ut mattis eros ornare non. Ut sodales urna et massa
                suscipit, ut consequat elit euismod. Vestibulum vel nibh massa.
                Etiam in libero neque.
              </p>
              <br></br>
              <a href="http://www.mettreunlienversdeladoc.com" target="_blank">
                {" "}
                http://www.mettreunlienversdeladoc.com
              </a>
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
