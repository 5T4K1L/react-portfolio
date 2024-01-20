import React from "react";
import "../styles/Intro.css";
import github from "../svgs/github-svgrepo-com.svg";
import twitter from "../svgs/twitter-154-svgrepo-com.svg";

const Homepage = () => {
  return (
    <div className="container">
      <div className="greet">
        <div className="h1">
          <h1>hi.</h1>
        </div>
      </div>
      <div className="intro">
        <p>
          I’m <span className="alfonzo">Alfonzo.</span> A <br />
          <span className="junioretc">
            Junior Full Stack (Web) Developer
          </span>{" "}
          <br />
          that has over 2 years of experience.
        </p>
      </div>
      <div className="links">
        <a href="https://github.com/5T4K1L">
          <img src={github} alt="" />
        </a>
        <a href="https://twitter.com/akilabiel3">
          <img src={twitter} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
