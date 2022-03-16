import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.js";
import Quizz from "./screens/Quizz.js";
import ArticlePage from "./screens/ArticlePage.js";

function App() {
  return (
    <div className="App">
      <header></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
