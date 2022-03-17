import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.js";
import Quizz from "./screens/Quizz.js";
import ArticlePage from "./screens/ArticlePage.js";
import Navbar from "./components/Navbar.js";
import QuizzTheme1 from "./components/QuizzTheme1";
import Documentation from "./screens/Documentation";

function App() {
  return (
    <div className="App">
      <header></header>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quizz />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/quiz/prevention-technicien" element={<QuizzTheme1 />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default App;
