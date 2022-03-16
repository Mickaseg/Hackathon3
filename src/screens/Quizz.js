import "./screens-styles/Quizz.css";
import { useState, useEffect } from "react";
import axios from "axios";
import QuizzDiv from "../components/QuizzDiv";

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  console.log(currentQuestion);

  const getCurrentQuestion = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/quizz/questions/${currentQuestionNumber}`
      )
      .then((res) => res.data)
      .then((data) => setCurrentQuestion(data));
  };

  useEffect(() => {
    getCurrentQuestion();
  }, [currentQuestionNumber]);

  return (
    <div className="quizz">
      <h1>QUIZZ</h1>
      <div className="quizzContainer">
        <QuizzDiv
          question={currentQuestion}
          currentQuestionNumber={currentQuestionNumber}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
        />
      </div>
    </div>
  );
};

export default Quizz;
