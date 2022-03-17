import "./components-styles/Articles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Articles = () => {
  const [article, setArticle] = useState([]);

const getArticles = () => {
  axios
    .get(
      `${process.env.REACT_APP_BACK}/articles/1`
    )
    .then((res) => res.data)
    .then((data) => setArticle(data));
};

useEffect(() => {
  getArticles();
}, []);

console.log(article);

return <div>Articles</div>;
};

export default Articles;
