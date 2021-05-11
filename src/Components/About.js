import React from "react";
import "./About.css";
import greeenDot from "../images/greenDot.png";
import { Flip } from "react-reveal";
import { BiBookReader } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
function About() {
  return (
    <div className="about-container">
      {/* <img className="greenDotimg" src={greeenDot} alt="" /> */}
      <Flip left>
        <h1 className="about-heading">About Me</h1>
      </Flip>
      <div className="about-subcontainer">
        <div className="about-education">
          <div className="edu-heading">
            <h1>
              <span className="book-icon">
                <BiBookReader />
              </span>
              EDUCATION
            </h1>
          </div>
          <div className="line">
            <div className="line-content">
              <div className="content">
                <h1>B.Tech (EE)</h1>
                <p>2019-23</p>
                <p>
                  <span>Grade:</span> 9.01 CGPA
                </p>
              </div>
              <div className="content">
                <h1>Intermidiate</h1>
                <p>2019-23</p>
                <p>
                  <span>Grade:</span> 92%
                </p>
              </div>
              <div className="content">
                <h1>High School</h1>
                <p>2019-23</p>
                <p>
                  <span>Grade:</span> 10 CGPA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-intro">
          <h1>
            <span className="bulb">
              <HiOutlineLightBulb />
            </span>
            INSIGHTS
          </h1>
          <p>
            ✨ I am currently pursuing B.Tech (2nd Year) from NIT Agartala in
            Electrical Engineering.
          </p>
          <br />
          <p>
            ✨ I love to solve algorithmic problems and passionate about
            building Full Stack Web Applications.
          </p>
          <br />
          <p>✨ Currently rated 3 star at Codechef and Newbie in Codeforces.</p>
          <br />
          {/* <p> ✨ I have keen interest in Technology.</p>
          <br /> */}
          <p>✨ My hobbies are Travelling ,Watching Movies & Listning Songs.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
