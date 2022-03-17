import axios from "axios";
import "./components-styles/QuizzDiv.css";
import checkvert from "./../assets/check_vert.png";
import declined from "./../assets/cercle_canceled.png";

import Popup from "./Popup";
import { useState, useEffect } from "react";
const QuizzDiv = ({
  question,
  currentQuestionNumber,
  setCurrentQuestionNumber,
}) => {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const getAnswers = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/quizz/questions/${currentQuestionNumber}/answers`
      )
      .then((res) => res.data)
      .then((data) => setAnswers(data));
  };

  const handleChoice = (isCorrect) => {
    isCorrect ? setScore(score + 1) : "";
    setIsSelected(true);
  };
  const nextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };
  useEffect(() => {
    getAnswers();
  }, [currentQuestionNumber]);

  console.log(answers);
  return (
    <div className="quizzComposant">
      <h1 className="bloc-h-g-h1">QUIZ PREVENTION TECHNICIEN</h1>

      <div className="bloc-head">
        <div className="bloc-head-gauche">
          {/* <hr /> */}
          <h2 className="bloc-h-g-h2bis">
            Question {currentQuestionNumber} / 10
          </h2>

          <div className="bloc-head-gauche-bloc">
            <div className="question-bloc">
              {question.map((el) => el.question_text)}
            </div>
          </div>
        </div>

        <div className="bloc-head-droite">
          <div className="bloc-image">
            <img
              src="https://www.metiers-electricite.com/wp-content/uploads/2018/05/Installateur-electricien-metier-650x-650x350.jpg"
              alt=""
              className="img"
            />
          </div>
        </div>
      </div>

      <div className="space-40px"></div>

      <div className="answer-info reponse-juste">
        {/* Prevoir une condition changement de seconde classe si réponse != 1*/}
        <img src={checkvert} alt="" className="icone-answer" />
        UNE SEULE REPONSE EST JUSTE
      </div>
      <div className="answer-info reponse-fausse">
        <img src={declined} alt="" className="icone-answer" />
        PLUSIEURS REPONSES SONT JUSTES
      </div>

      <div className="space-40px"></div>

      <div className="bloc-4answers">
        {answers.map((el) => (
          <div className="answer" onClick={() => handleChoice(el.isCorrect)}>
            <div className="answer-letter">A</div>
            <div className="answer-text">
              Voici la vraie réponse à cette question qui est vérifiable via des
              statistiques de l'an 2000 sur impot.
            </div>
            <div>{el.answer_text} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzDiv;

//   <div className="quizzComposant">
//   <div className="blocHeader">
//     <div className="quizz-ordre  quizz-effectue">
//       {currentQuestionNumber}1
//     </div>
//     <div className="quizz-ordre  quizz-effectue">
//       {currentQuestionNumber}2
//     </div>
//     <div className="quizz-ordre quizz-encours">
//       {currentQuestionNumber}3
//     </div>
//     <div className="quizz-ordre quizz-cache">{currentQuestionNumber}4</div>
//     <div className="quizz-ordre quizz-cache">{currentQuestionNumber}5</div>
//     <div className="quizz-ordre quizz-cache">{currentQuestionNumber}6</div>
//     <div className="quizz-ordre quizz-cache">{currentQuestionNumber}7</div>
//     <div className="quizz-ordre quizz-cache">{currentQuestionNumber}8</div>
//     <div className="quizz-ordre quizz-cache">{currentQuestionNumber}9</div>
//     <div className="quizz-ordre quizz-cache">1{currentQuestionNumber}</div>
//   </div>

//   <div className="quizzDiv">
//     <img
//       src="https://www.metiers-electricite.com/wp-content/uploads/2018/05/Installateur-electricien-metier-650x-650x350.jpg"
//       alt=""
//       className="img"
//     />{" "}
//     {console.log("POULET", question)}
//     <div>QUESTION : {question.map((el) => el.question_text)}</div>
//     <div className="answerContainer">
//       {answers.map((el) => (
//         <div className="answer" onClick={() => handleChoice(el.isCorrect)}>
//           {el.answer_text}
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
