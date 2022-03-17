import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.js";
import Quizz from "./screens/Quizz.js";
import Jobs from "./screens/Jobs.js";
import Finish from "./screens/Finish.js";
import ArticlePage from "./screens/ArticlePage.js";
import Navbar from "./components/Navbar.js";
import QuizzTheme1 from "./components/QuizzTheme1";
import QuizzTheme2 from "./components/QuizzTheme2";
import Documentation from "./screens/Documentation";

function App() {
  return (
    <div className="App">
      <header></header>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quizz />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/quiz/prevention-technicien" element={<QuizzTheme1 />} />
        <Route path="/quiz/prevention-generale" element={<QuizzTheme2 />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/quiz01" element={<QuizzTheme1 />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;
