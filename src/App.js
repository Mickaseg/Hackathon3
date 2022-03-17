import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.js";
import Quizz from "./screens/Quizz.js";
import ArticlePage from "./screens/ArticlePage.js";
import Navbar from "./components/Navbar.js";
import QuizzTheme1 from "./components/QuizzTheme1";

function App() {
  return (
    <div className="App">
      <header></header>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/quiz01" element={<QuizzTheme1 />} />
      </Routes>
    </div>
  );
}

export default App;
