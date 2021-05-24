import React from "react";
import "./Skills.css";
import { Flip } from "react-reveal";
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
  SiNextDotJs,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { BiCoinStack } from "react-icons/bi";
function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills_heading">
        <h1>Skills</h1>
      </div>
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
            <p className="logo1">
              <SiNextDotJs />
            </p>
            <p className="text">NEXTJS</p>
          </div>
          <div className="logo">
            <p className="logo1">
              <SiFirebase />
            </p>
            <p className="text">Firebase</p>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default Skills;
