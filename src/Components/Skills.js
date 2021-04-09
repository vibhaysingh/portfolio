import React from "react";
import "./Skills.css";
import { Flip } from "react-reveal";
import C from "../skills-image/C_Logo.png";
import CPP from "../skills-image/C++_Logo.png";
import HTML from "../skills-image/HTML_Logo.png";
import CSS from "../skills-image/CSS_Logo.png";
import JS from "../skills-image/Javascript_Logo.png";
import REACT from "../skills-image/React_Logo.png";
import REDUX from "../skills-image/Redux_Logo.png";
import NODE from "../skills-image/NodeJS_Logo.png";
import MONGODB from "../skills-image/MongoDB_Logo.png";
import GIT from "../skills-image/GIT_Logo.png";
import GITHUB from "../skills-image/Github_Logo.png";
import FIREBASE from "../skills-image/Firebase_Logo.png";
import MUI from "../skills-image/MaterialUI_Logo.png";
import DSA from "../skills-image/Tree_Logo.png";
import EXPRESS from "../skills-image/ExpressJS_Logo.png";
import Rotate from "react-reveal/Rotate";

function Skills() {
  return (
    <div className="skills_container">
      <div className="skills_heading">
        <Flip left>
          <h1>Skills</h1>
        </Flip>
      </div>
      <div className="skills_image_container">
        <Rotate top left>
          <div className="skill_image">
            <img src={C} alt="C_LOGO" />
            <p>C</p>
          </div>

          <div className="skill_image">
            <img src={CPP} alt="" />
            <p>C++</p>
          </div>
          <div className="skill_image">
            <img src={DSA} alt="" />
            <p>DSA</p>
          </div>
          <div className="skill_image">
            <img src={HTML} alt="" />
            <p>HTML</p>
          </div>
          <div className="skill_image">
            <img src={CSS} alt="" />
            <p>CSS</p>
          </div>
          <div className="skill_image">
            <img src={JS} alt="" />
            <p>JS</p>
          </div>
          <div className="skill_image">
            <img src={REACT} alt="" />
            <p>REACT</p>
          </div>
          <div className="skill_image">
            <img src={REDUX} alt="" />
            <p>REDUX</p>
          </div>
          <div className="skill_image">
            <img src={MUI} alt="" />
            <p>MUI</p>
          </div>
          <div className="skill_image">
            <img src={NODE} alt="" />
            <p>NODE</p>
          </div>
          <div className="skill_image">
            <img src={MONGODB} alt="" />
            <p>MONGODB</p>
          </div>
          <div className="skill_image">
            <img style={{ width: "100%" }} src={EXPRESS} alt="" />
            <p>EXPRESS</p>
          </div>
          <div className="skill_image">
            <img src={FIREBASE} alt="" />
            <p>FIREBASE</p>
          </div>
          <div className="skill_image">
            <img src={GIT} alt="" />
            <p>GIT</p>
          </div>
          <div className="skill_image">
            <img src={GITHUB} alt="" />
            <p>GITHUB</p>
          </div>
        </Rotate>
      </div>
    </div>
  );
}

export default Skills;
