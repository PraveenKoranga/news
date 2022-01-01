import axios from "axios";
import { useEffect, useState } from "react";
import Newscard from "./Newscard";

const News = () => {
  const [news, setNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState("sports");
  const [searchNews, setSearchNews] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const [alertColor, setAlertColor] = useState("");

  useEffect(() => {
    const fetchnews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${categoryNews}&apiKey=6ef9a44af2a1443d898fffe4eacf1c3c`
        );
        setNews(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchnews();
    setAlert(
      "If you searching news,please use double quotes for better answer."
    );
    setAlertColor("alert alert-warning");
    setTimeout(() => {
      setAlert("");
      setAlertColor("");
    }, 5000);
  }, [categoryNews]);

  const searchnews = async () => {
    try {
      const resnews = await axios.get(
        `
        https://newsapi.org/v2/everything?q=${searchNews}&from=2021-12-01&sortBy=publishedAt&apiKey=6ef9a44af2a1443d898fffe4eacf1c3c`
      );
      if (resnews) {
        setNews(resnews);
      }
      if (resnews.data.totalResults === 0) {
        setTimeout(() => {
          setError("");
        }, 1000);
      }
      setSearchNews("");
    } catch (error) {
      console.log(error);
    }
  };

  const NewsCategory = (value) => {
    setCategoryNews(value);
  };

  return (
    <>
      <div className="main-container container-fluid ">
        <div className={alertColor} role="alert">
          {alert}
        </div>
        <div className="container search">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 ms-4 category">
              <button
                className="btn btn-outline-success btn-sm me-1 text-uppercase"
                onClick={() => NewsCategory("health")}
              >
                HEALTH
              </button>
              <button
                className="btn btn-outline-success btn-sm me-1 text-uppercase"
                onClick={() => NewsCategory("politics")}
              >
                politics
              </button>
              <button
                className="btn btn-outline-success btn-sm me-1 text-uppercase"
                onClick={() => NewsCategory("business")}
              >
                business
              </button>
              <button
                className="btn btn-outline-success btn-sm me-1 text-uppercase"
                onClick={() => NewsCategory("sports")}
              >
                sports
              </button>
              <button
                className="btn btn-outline-success btn-sm me-1 text-uppercase"
                onClick={() => NewsCategory("")}
              >
                Latest
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 my-2 ms-4 searchbar">
              <input
                type="text"
                value={searchNews}
                onChange={(e) => setSearchNews(e.target.value)}
                className="me-1"
                placeholder="Search News"
              />
              <button
                onClick={() => searchnews()}
                className="btn btn-danger btn-sm"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <Newscard news={news} error={error} key={news.id} />
      </div>
    </>
  );
};

export default News;
