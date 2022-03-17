import "./screens-styles/Quizz.css";
import { useState, useEffect } from "react";
import axios from "axios";
import QuizzDiv from "../components/QuizzDiv";
import Navbar from "../components/Navbar";
import backgroundquizz from "../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLANC_RVB_EXE_02.png";

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  console.log(currentQuestion);

  const getCurrentQuestion = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}quizz/questions/${currentQuestionNumber}`
      )
      .then((res) => console.log(res.data) || setCurrentQuestion(res.data));
  };

  useEffect(() => {
    getCurrentQuestion();
  }, [currentQuestionNumber]);

  return (
    <>
      <Navbar />
      <div className="quiz-page">
        <QuizzDiv
          question={currentQuestion}
          currentQuestionNumber={currentQuestionNumber}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
        />

      </div>
    </>
  );
};

export default Quizz;
