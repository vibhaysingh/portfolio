import React from "react";
import "./Project.css";
import TaskManager from "../images/Task Manager.png";
import QuizzeApp from "../images/Quizzer App.png";
import RecipeApp from "../images/Recipe App.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
function Project() {
  return (
    <div className="project-container" id="projects">
      <h1 className="project-heading">Projects</h1>
      <div className="project-card-container">
        <div className="project-card">
          <div className="project-image">
            <img src={QuizzeApp} alt="" />
          </div>
          <div className="about-project">
            <div className="project-title">
              <h3>Quizzer</h3>
            </div>
            <div className="project-description">
              <p>A MCQ Quiz App </p>
            </div>
            <div className="tech-used">
              <div className="tech-name">HTML</div>
              <div className="tech-name">CSS</div>
              <div className="tech-name">JAVASCRIPT</div>
            </div>
            <div className="projects-links">
              <a href="/">
                <FiGithub />
              </a>
              <a href="/">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src={RecipeApp} alt="" />
          </div>
          <div className="about-project">
            <div className="project-title">
              <h3>Recpie App</h3>
            </div>
            <div className="project-description">
              <p>Search Your Favorite food Recipe </p>
            </div>
            <div className="tech-used">
              <div className="tech-name">HTML</div>
              <div className="tech-name">CSS</div>
              <div className="tech-name">REACTJS</div>
            </div>
            <div className="projects-links">
              <a href="/">
                <FiGithub />
              </a>
              <a href="/">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src={TaskManager} alt="" />
            {/* <img src={TaskManagerM} alt="" /> */}
          </div>
          <div className="about-project">
            <div className="project-title">
              <h3>Task Manager</h3>
            </div>
            <div className="project-description">
              <p>Saves your daily Tasks</p>
            </div>
            <div className="tech-used">
              <div className="tech-name">HTML</div>
              <div className="tech-name">CSS</div>
              <div className="tech-name">JAVASCRIPT</div>
            </div>
            <div className="projects-links">
              <a href="/">
                <FiGithub />
              </a>
              <a href="/">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
