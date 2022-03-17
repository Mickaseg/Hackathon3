import React from "react";
import "./screens-styles/Documentation.css";
import Navbar from "../components/Navbar";
import pwpt1 from "../assets/pwpt/1LesFondamentaux.png";

const Documentation = () => {
  const linkToPPTFile = "https://slideplayer.fr/slide/12703519/";

  return (
    <div className="documentation-page">
      <Navbar />
      <h1 className="titre-h1-fondnoir">
        DOCUMENTATION SUR LA PRÉVENTION & SECURITÉ
      </h1>

      <div className="documentationContainer">
        <div className="documentation-conteneur">
          {/*   <h2 className="titre-bloc-intro">Titre de présentation</h2> */}
          <div className="bloc-intro-doc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            <br /> Natus odit est harum recusandae, tempora beatae incidunt
            assumenda sequi dolore nesciunt deleniti excepturi fuga id at
            inventore, facilis, non vitae? Quas. Excepturi dolores atque ipsum
            facilis quod commodi blanditiis ducimus. Reprehenderit culpa ea
            quaerat, ut incidunt dolorem veniam! Omnis consequatur facilis
            dolorum, fugiat fuga hic reprehenderit expedita, enim saepe optio
            quo?
          </div>
          <div className="liste-cards">
            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>

            <div className="card-pwpt">
              <img src={pwpt1} alt="" className="img-card" />
              <div className="card-blocText">
                <h3 className="title-card">Titre de l'article</h3>
                <p className="p-card">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  lorem, ipsum dolor..
                </p>
              </div>
            </div>
          </div>

          {/*       TEST LECTURE PWPT */}
          <br />
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
            width="100%"
            height="600px"
            frameBorder="0"
            title="slides"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
