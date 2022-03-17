import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login.js";
import Home from "./screens/Home.js";
// import Quizz from "./screens/Quizz.js";
import Jobs from "./screens/Jobs.js";
// import Finish from "./screens/Finish.js";
import ArticlePage from "./screens/ArticlePage.js";
import Navbar from "./components/Navbar.js";
import QuizzTheme1 from "./components/QuizzTheme1";
import QuizzTheme2 from "./components/QuizzTheme2";
import Documentation from "./screens/Documentation";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading</div>;
  // }
  return (
    <div className="App">
      <header></header>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/quiz/prevention-technicien" element={<QuizzTheme1 />} />
        <Route path="/quiz/prevention-generale" element={<QuizzTheme2 />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
  // : (
  //   <>
  //     <Login />
  //   </>
  // );
}

export default App;
