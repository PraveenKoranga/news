import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./News";
import About from "./About";
import "./style.css";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<News />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
