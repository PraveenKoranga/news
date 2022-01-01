import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid header px-5 border-bottom border-1">
        <Link
          to="/"
          className="fs-1 fw-bolder lh-lg text-decoration-none text-dark"
        >
          NEWS
        </Link>
        <div className=" fs-3 lh-lg">
          <Link to="/" className="me-lg-5  text-decoration-none text-dark">
            Home
          </Link>
          <Link
            to="/about"
            className="me-lg-5 ms-sm-3 text-decoration-none text-dark"
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
