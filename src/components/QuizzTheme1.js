import axios from "axios";
import "./components-styles/QuizzDiv.css";
import Popup from "./Popup";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import checkvert from "./../assets/check_vert.png";
import declined from "./../assets/cercle_canceled.png";
import Finish from "../screens/Finish.js";
const QuizzTheme1 = () => {
  const [questionsTheme1, setQuestionsTheme1] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [article, setArticle] = useState([]);
  const [score, setScore] = useState(0);
  const [endQuizz, setEndQuizz] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [choice, setChoice] = useState(false);
  // console.log(questionsTheme1[0].image);
  console.log(score);

  const getQuestionsTheme1 = async () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/quizz/questions/theme1`)
      .then((res) => res.data)
      .then((data) => setQuestionsTheme1(data) || console.log(questionsTheme1));
  };

  const getAnswers = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/quizz/questions/${
          currentQuestionNumber + 1
        }/answers`
      )
      .then((res) => res.data)
      .then((data) => setAnswers(data)) || console.log(answers);
  };

  const nextQuestion = currentQuestionNumber + 1;

  const setNextQuestion = () => {
    if (currentQuestionNumber + 1 < 10) {
      setCurrentQuestionNumber(nextQuestion);
      setChoice(false);
    } else {
      setEndQuizz(true);
    }
  };

  const handleChoice = (isCorrect) => {
    if (isCorrect === 1 && choice !== true) {
      setScore(score + 1);
      setChoice(true);
    } else {
      setChoice(true);
    }
  };
  const getArticles = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/articles/${currentQuestionNumber + 1}`
      )
      .then((res) => res.data)
      .then((data) => setArticle(data));
  };
  console.log(article);

  useEffect(() => {
    getQuestionsTheme1();
    getAnswers();
    getArticles();
  }, [currentQuestionNumber, endQuizz]);

  console.log(answers);
  return (
    <>
      <Navbar />
      {endQuizz ? (
        <Finish />
      ) : (
        <div className="quizzComposant">
          <h1 className="bloc-h-g-h1">QUIZ DE PREVENTION TECHNICIEN</h1>

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
                  src={
                    questionsTheme1[currentQuestionNumber]
                      ? questionsTheme1[currentQuestionNumber].image
                      : ""
                  }
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

          <div className="space-40px"></div>
          <div className="bloc-4answers">
            {answers.map((el, key = index) => (
              <div
                className={
                  choice
                    ? el.isCorrect
                      ? "answer true"
                      : "answer false"
                    : "answer"
                }
                onClick={() => handleChoice(el.isCorrect)}
              >
                <div className="answer-letter">{key + 1}</div>
                <div className="answer-text"></div>
                <div>{el.answer_text} </div>
              </div>
            ))}
          </div>
          {choice ? (
            <div className="buttondiv">
              <button className="boutonNext" onClick={() => setNextQuestion()}>
                NEXT
              </button>
            </div>
          ) : (
            ""
          )}

          {/* {choice ? (
            <div className="popup">
              <div>{article.content}</div>
            </div>
          ) : (
            ""
          )} */}
        </div>
      )}
    </>
  );
};

export default QuizzTheme1;
