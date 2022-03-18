import React from "react";
import "./screens-styles/Documentation.css";
import Navbar from "../components/Navbar";
import Cartedynam from "../components/Cartedynam";
import axios from "axios";
import { useEffect, useState } from "react";

const Documentation = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK}/carddetails`)
      .then((res) => res.data)
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="documentation-page">
      <Navbar /> {console.log(card)}
      <h1 className="titre-h1-fondnoir">
        DOCUMENTS TELECHARGEABLES SUR LA PREVENTION & SECURITE AU TRAVAIL
      </h1>
      <div className="documentationContainer">
        <div className="documentation-conteneur">
          <h2 className="titre-bloc-intro">Titre de présentation</h2>
          <div className="bloc-intro-doc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit
            est harum recusandae, tempora beatae incidunt assumenda sequi dolore
            nesciunt deleniti excepturi fuga id at inventore, facilis, non
            vitae? Quas. Excepturi dolores atque ipsum facilis quod commodi
            blanditiis ducimus. Reprehenderit culpa ea quaerat, ut incidunt
            dolorem veniam! Omnis consequatur facilis dolorum, fugiat fuga hic
            reprehenderit expedita, enim saepe optio quo? Ipsam fugit quos
            minima nisi dolor pariatur, natus doloribus possimus corrupti vitae,
            quis ex, atque blanditiis dolores cumque magni iusto modi
            accusantium? Quae deserunt dolorem perferendis voluptatibus
            blanditiis ea delectus. Atque commodi cum consectetur vel ipsum odit
            praesentium quasi itaque rem optio quidem, aliquid laborum quo ipsa
            obcaecati. Iusto quidem modi neque accusamus nesciunt eius
            recusandae, labore ea expedita velit.
          </div>
          <div className="liste-cards">
            {card.map((el, index) => (
              <Cartedynam donnees={el} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
