import React from "react";
import "./Project.css";
import TaskManager from "../images/Task Manager.png";
import QuizzeApp from "../images/Quizzer App.png";
import RecipeApp from "../images/Recipe App.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Slide from "react-reveal";
function Project() {
  return (
    <div className="project-container" id="projects">
      <h1 className="project-heading">Projects</h1>
      <div className="project-card-container">
        <Slide left>
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
                <a
                  href="https://github.com/vibhaysingh/quizzerApp"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://vibhaysingh.github.io/quizzerApp/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="project-card">
            <div className="project-image">
              <img
                src={RecipeApp}
                style={{
                  width: "99%",
                  marginLeft: "0.5%",
                  zIndex: 1000,
                  order: 100,
                }}
                alt="Recipe Image"
              />
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
                <a
                  href="https://github.com/vibhaysingh/recipeApp"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://vibhaysingh.github.io/recipeApp/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="project-card">
            <div className="project-image">
              <img src={TaskManager} alt="" />
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
                <a
                  href="https://github.com/vibhaysingh/task-manager-app"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://vibhaysingh.github.io/task-manager-app/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Project;
