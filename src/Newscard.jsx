import React from "react";
import Loader from "./Loader";

const Newscard = ({ news, error }) => {
  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  const notFoundImageUrl =
    "https://tse2.mm.bing.net/th?id=OIP.UA5GEHqlupBk3PJFhlnihAAAAA&pid=Api&P=0&w=300&h=300";
  return (
    <>
      {error && (
        <>
          <h1>{error}</h1>
        </>
      )}
      <div className="container">
        {news.length === 0 ? (
          <Loader />
        ) : (
          <div className="row my-3">
            {news.data.articles.map((news) => (
              <>
                <div
                  className="col-lg-3 col-md-4 col-sm-12 col-xs-12 my-3 mobile-view"
                  key={news.id}
                >
                  <a href={news.url} className="text-decoration-none text-dark">
                    <div className="card " style={{ width: "100%" }}>
                      <img
                        src={news.urlToImage}
                        className="card-img-top"
                        alt="nothing"
                      />
                      <div className="card-body">
                        <p className="card-text text-muted">
                          published At -{news.publishedAt}
                        </p>
                        <h5 className="card-title">
                          {addElipsis(news.title, 80)}
                        </h5>
                        <p className="card-text">
                          {news.description
                            ? news.description
                            : news.content || news.title}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="container px-5 text-justify desktop-view">
                  <a
                    href={news.url}
                    className="text-decoration-none text-dark d-flex my-3"
                  >
                    <img
                      src={news.urlToImage || notFoundImageUrl}
                      alt="Not Loaded"
                      width="23%"
                    />
                    <div className="ms-3">
                      <p className="card-text text-muted text-capitalize">
                        published At -{news.publishedAt}
                      </p>
                      <h5 className="card-title">
                        {addElipsis(news.title, 150)}
                      </h5>
                      <p className="card-text">
                        {news.content
                          ? news.content
                          : news.description || news.title}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Newscard;
