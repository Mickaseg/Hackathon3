import "./screens-styles/Jobs.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import techs from "../assets/techs.jpg";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="jobs">
      <Navbar />
      <div className="jobsContainer">
        <div className="jobsFrame">
          <div className="topjobsFrame">
            <h1>Quel est votre profil ?</h1>
          </div>
          <div className="jobjobsFrame">
            <Link className="linkJobs" to="/quiz/prevention-generale">
              <div className="jobsFrameBtn jobsFrameAutres">
                <h2>Général</h2>
              </div>
            </Link>
            <Link className="linkJobs" to="/quiz/prevention-technicien">
              <div className="jobsFrameBtn jobsFrameTech">
                <h2>Technicien.e</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
