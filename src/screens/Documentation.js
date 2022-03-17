import React from "react";
import "./screens-styles/Documentation.css";
import Navbar from "../components/Navbar";

const Documentation = () => {
  return (
    <div className="documentation-page">
      <Navbar />
      <h1 className="titre-h1-fondnoir">CHOIX DU QUESTIONNAIRE</h1>

      <div className="documentationContainer"></div>
    </div>
  );
};

export default Documentation;
