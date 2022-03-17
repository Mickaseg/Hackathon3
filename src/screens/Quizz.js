import "./screens-styles/Quizz.css";
import { useState, useEffect } from "react";
import axios from "axios";
import QuizzDiv from "../components/QuizzDiv";
import Navbar from "../components/Navbar";
import backgroundquizz from "../assets/ENEDIS_FIL_CONCEPTUEL_FOND_BLANC_RVB_EXE_02.png";
import QuizzTheme2 from "../components/QuizzTheme2";
import QuizzTheme1 from "../components/QuizzTheme1";
import { Link } from "react-router-dom";

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  // const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  // const [questionsTheme1, setQuestionsTheme1] = useState([]);
  // const [questionsTheme2, setQuestionsTheme2] = useState([]);
  const [quizChoice, setQuizChoice] = useState(false);
  const [quizChosen, setQuizChosen] = useState(false);
  // console.log(questionsTheme1);

  // const getQuestionsTheme1 = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACK}/quizz/questions/theme1`)
  //     .then((res) => res.data)
  //     .then((data) => setQuestionsTheme1(data));
  // };
  // console.log(questionsTheme1);
  // const getQuestionsTheme2 = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACK}/quizz/questions/theme2`)
  //     .then((res) => res.data)
  //     .then((data) => setQuestionsTheme2(data));
  // };

  // const getCurrentQuestion = () => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_BACK}/quizz/questions/${currentQuestionNumber}`
  //     )
  //     .then((res) => res.data)
  //     .then((data) => setCurrentQuestion(data));
  // };

  // useEffect(() => {
  //   getQuestionsTheme1();
  //   getQuestionsTheme2();
  //   // getCurrentQuestion();
  // }, []);

  return (
    <div className="quizz">
      <Navbar />
      <h1 className="titre-h1-fondblanc">CHOIX DU QUESTIONNAIRE</h1>
      <div className="quizzContainer">
        <Link to="/quiz/prevention-technicien" className="bloc-choix">
          <img src="" alt="" />
          <div className="img-select-quiz prev-tech">PREVENTION TECHNICIEN</div>
        </Link>
        <Link to="/" className="bloc-choix">
          <img src="" alt="" />
          <div className="img-select-quiz prev-gen">PREVENTION GENERALE</div>
        </Link>
      </div>
    </div>
  );
};

export default Quizz;
