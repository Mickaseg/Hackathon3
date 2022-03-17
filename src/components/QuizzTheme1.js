import axios from "axios";
import "./components-styles/QuizzDiv.css";
import Reponse from "./Reponse";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import checkvert from "./../assets/check_vert.png";
import declined from "./../assets/cercle_canceled.png";
const QuizzTheme1 = () => {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [endQuizz, setEndQuizz] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [questionsTheme1, setQuestionsTheme1] = useState([]);
  console.log(questionsTheme1);

  const getQuestionsTheme1 = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/quizz/questions/theme1`)
      .then((res) => res.data)
      .then((data) => setQuestionsTheme1(data));
  };

  const getAnswers = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/quizz/questions/${
          currentQuestionNumber + 1
        }/answers`
      )
      .then((res) => res.data)
      .then((data) => setAnswers(data));
  };

  const nextQuestion = currentQuestionNumber + 1;

  const setNextQuestion = () => {
    if (currentQuestionNumber < 10) setCurrentQuestionNumber(nextQuestion);
  };

  const handleChoice = (isCorrect) => {
    if (isCorrect === 1 && nextQuestion < questionsTheme1.length) {
      setScore(score + 1);
      setNextQuestion();
    } else if (isCorrect === 1 && nextQuestion >= questionsTheme1.length) {
      setScore(score + 1);
      setEndQuizz(true);
    } else if (nextQuestion >= questionsTheme1.length) {
      setEndQuizz(true);
    } else {
      setNextQuestion();
    }
  };

  useEffect(() => {
    getQuestionsTheme1();
    getAnswers();
  }, [currentQuestionNumber, endQuizz]);

  console.log(answers);
  return (
    <>
      <Navbar />
      {endQuizz ? (
        <div>{score} / 10</div>
      ) : (
        <div className="quizzComposant">
          <h1 className="bloc-h-g-h1">QUIZ PREVENTION TECHNICIEN</h1>

          <div className="bloc-head">
            <div className="bloc-head-gauche">
              {/* <hr /> */}
              <h2 className="bloc-h-g-h2bis">
                Question {currentQuestionNumber + 1} / 10
              </h2>

              <div className="bloc-head-gauche-bloc">
                <div className="question-bloc">
                  {questionsTheme1[currentQuestionNumber]
                    ? questionsTheme1[currentQuestionNumber].question_text
                    : ""}
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
          {/* <div className="answer-info reponse-fausse">
            <img src={declined} alt="" className="icone-answer" />
            PLUSIEURS REPONSES SONT JUSTES
          </div> */}

          <div className="space-40px"></div>
          <div className="bloc-4answers">
            {answers.map((el, key = index) => (
              <div
                className="answer"
                onClick={() => handleChoice(el.isCorrect)}
              >
                <div className="answer-letter">{key + 1}</div>
                <div className="answer-text"></div>
                <div>{el.answer_text} </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default QuizzTheme1;
