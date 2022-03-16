import "./components-styles/QuizzDiv.css";

const QuizzDiv = ({ question }) => {
  return (
    <div className="quizzDiv">
      <img
        src="https://www.metiers-electricite.com/wp-content/uploads/2018/05/Installateur-electricien-metier-650x-650x350.jpg"
        alt=""
        className="img"
      />
      <div className="answerContainer">
        <div className="answer">{question.answer_text}</div>
        <div className="answer">Réponse 2</div>
      </div>
      <div className="answerContainer">
        <div className="answer">Réponse 3</div>
        <div className="answer">Réponse 4</div>
      </div>
    </div>
  );
};

export default QuizzDiv;
