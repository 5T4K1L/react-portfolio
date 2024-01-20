import React from "react";
import github from "../svgs/github-svgrepo-com.svg";
import arrow from "../svgs/arrow-up-right-svgrepo-com.svg";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="project">
        <h1>.projects()</h1>
      </div>
      <div className="projectDesc">
        <div className="firstProject">
          <h1>E-commerce</h1>
          <p>
            A full functioning e-commerce website that has features like{" "}
            <span>
              add to carts, register and login, real time order tracking, admin
              panel and more.
            </span>
          </p>
          <div className="images">
            <a href="https://github.com/5T4K1L/coffee-shop">
              <img className="github" src={github} alt="" />
            </a>
            <a href="https://kuyajher.netlify.app">
              <img style={{ height: 40 }} src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="firstProject">
          <h1>Weather App</h1>
          <p>
            A weather app that <span> monitors all weather data</span> a user
            needs to get, and gather.
          </p>
          <div className="images">
            <a href="https://github.com/5T4K1L/react-weather-app.git">
              <img className="github" src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="firstProject">
          <h1>File Sorter</h1>
          <p>
            A <span>no-GUI application that sorts a file</span> and puts it into
            a <span>designated </span>
            folder depending on their extensions.
          </p>
          <div className="images">
            <a href="https://github.com/5T4K1L/python-file-sorter.git">
              <img className="github" src={github} alt="" />
            </a>
          </div>
        </div>
        <div className="firstProject">
          <h1>Portfolio (Video Editing)</h1>
          <p>
            A portfolio that <span>showcases my skills and projects</span> I
            made in a field of <span>Video Editing.</span>
          </p>
          <div className="images">
            <a href="https://github.com/5T4K1L/portfolio-video-editing.git">
              <img className="github" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="contactMe">
        <h1>Contact Me</h1>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email / Phone" />
          <input type="text" placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Projects;
