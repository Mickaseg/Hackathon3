import axios from "axios";
import "./components-styles/QuizzDiv.css";
import Reponse from "./Reponse";
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
    <div className="quizzDiv">
      {score}
      <img
        src="https://www.metiers-electricite.com/wp-content/uploads/2018/05/Installateur-electricien-metier-650x-650x350.jpg"
        alt=""
        className="img"
      />{" "}
      {console.log("POULET", question)}
      <div>QUESTION : {question.map((el) => el.question_text)}</div>
      <div className="answerContainer">
        {answers.map((el) => (
          <div className="answer" onClick={() => handleChoice(el.isCorrect)}>
            {el.answer_text}
          </div>
        ))}
      </div>
      <button onClick={() => nextQuestion()}>VALIDER</button>
    </div>
  );
};

export default QuizzDiv;
