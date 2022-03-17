import axios from "axios";
import "./components-styles/QuizzDiv.css";
import Reponse from "./Reponse";
import { useState, useEffect } from "react";
const QuizzTheme2 = ({ questionsTheme2 }) => {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [endQuizz, setEndQuizz] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(11);
  const [currentQuestion, setCurrentQuestion] = useState([]);

  const getAnswers = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/quizz/questions/${currentQuestionNumber}/answers`
      )
      .then((res) => res.data)
      .then((data) => setAnswers(data));
  };

  const getCurrentQuestion = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/quizz/questions/${currentQuestionNumber}`
      )
      .then((res) => res.data)
      .then((data) => setCurrentQuestion(data));
  };

  const nextQuestion = currentQuestionNumber + 1;

  const setNextQuestion = () => {
    setCurrentQuestionNumber(nextQuestion);
  };

  const handleChoice = (isCorrect) => {
    if (isCorrect === 1) {
      setScore(score + 1);
      setNextQuestion();
    } else if (isCorrect === 1 && nextQuestion > questionsTheme2[9].id) {
      setScore(score + 1);
      setEndQuizz(true);
    } else if (nextQuestion > questionsTheme2[9].id) {
      setEndQuizz(true);
    } else {
      setNextQuestion();
    }
  };

  useEffect(() => {
    getAnswers();
    getCurrentQuestion();
  }, [currentQuestionNumber, endQuizz]);

  console.log(answers);
  return (
    <>
      {endQuizz ? (
        <div>FIN</div>
      ) : (
        <div className="quizzDiv">
          {/* {currentQuestionNumber} */}
          <img
            src="https://www.metiers-electricite.com/wp-content/uploads/2018/05/Installateur-electricien-metier-650x-650x350.jpg"
            alt=""
            className="img"
          />{" "}
          {/* {console.log("POULET", question)} */}
          <div>QUESTION : {currentQuestion.map((el) => el.question_text)}</div>
          <div className="answerContainer">
            {answers.map((el) => (
              <div
                className="answer"
                onClick={() => handleChoice(el.isCorrect)}
              >
                {el.answer_text}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default QuizzTheme2;
