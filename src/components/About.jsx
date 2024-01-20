import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <h1>.about()</h1>
      </div>
      <div className="aboutDesc">
        <p>
          <span>I’m Alfonzo.</span> An 18-year-old, full stack developer from
          the Philippines <span>that focuses more on</span>{" "}
          <span className="webApp">web applications, </span>
          but I also program <span>automations.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
