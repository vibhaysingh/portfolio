import React from "react";
import "./Skills.css";
import { Zoom } from "react-reveal";
import {
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiMaterialUi,
  SiNodeDotJs,
  SiMongodb,
  SiHeroku,
  SiGit,
  SiGithub,
  SiFirebase,
  SiRedux,
  SiC,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { BiCoinStack, BiSun } from "react-icons/bi";
const express = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    role="img"
    viewBox="0 0 32 32"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path>
  </svg>
);

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills_heading">
        <h1>Skills</h1>
      </div>
      <Zoom>
        <div className="skill_card">
          <h2 className="card_heading">Languages</h2>
          <div className="logos">
            <div className="logo">
              <p className="logo1">
                <SiJavascript />
              </p>
              <p className="text">JAVASCRIPT</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiCplusplus />
              </p>
              <p className="text">C++</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiC />
              </p>
              <p className="text">C</p>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="skill_card">
          <h2 className="card_heading">FRONTEND</h2>
          <div className="logos">
            <div className="logo">
              <p className="logo1">
                <SiHtml5 />
              </p>
              <p className="text">HTML5</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiCss3 />
              </p>
              <p className="text">CSS3</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiReact />
              </p>
              <p className="text">REACT</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiRedux />
              </p>
              <p className="text">REDUX</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiMaterialUi />
              </p>
              <p className="text">MATERIAL UI</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiBootstrap />
              </p>
              <p className="text">BOOTSTRAP</p>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="skill_card">
          <h2 className="card_heading">BACKEND</h2>
          <div className="logos">
            <div className="logo">
              <p className="logo1">
                <SiNodeDotJs />
              </p>
              <p className="text">NODEJS</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiMongodb />
              </p>
              <p className="text">MONGODB</p>
            </div>
            <div className="logo">
              <p className="logo1">{express}</p>
              <p className="text">EXPRESS JS</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <BiSun />
              </p>
              <p className="text">EJS</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <BiSun />
              </p>
              <p className="text">MONGOOSE</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiFirebase />
              </p>
              <p className="text">Firebase</p>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="skill_card">
          <h2 className="card_heading">OTHERS</h2>
          <div className="logos">
            <div className="logo">
              <p className="logo1">
                <SiGit />
              </p>
              <p className="text">GIT</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiGithub />
              </p>
              <p className="text">GITHUB</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiPostman />
              </p>
              <p className="text">POSTMAN</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiHeroku />
              </p>
              <p className="text">HEROKU</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <SiVisualstudiocode />
              </p>
              <p className="text">VSCODE</p>
            </div>
            <div className="logo">
              <p className="logo1">
                <BiCoinStack />
              </p>
              <p className="text">DSA</p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Skills;
