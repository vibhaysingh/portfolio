import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  BiHome,
  BiMessageMinus,
  BiMedal,
  BiNote,
  BiUser,
  BiArrowToBottom,
} from "react-icons/bi";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

function Navbar() {
  const [click, changeClick] = useState(false);

  const handleClick = (events) => {
    changeClick(!click);
  };
  return (
    <>
      <div className="navbar-items">
        <h2 className="portfolio-text">Portfolio</h2>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <MdClose /> : <FiMenu />}
        </div>
        <ul className={click ? "nav-menu  active" : "nav-menu"}>
          <li>
            <a className="nav-links" href="#">
              {" "}
              <span className="navigation-icon">
                <BiHome />
              </span>
              HOME
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              {" "}
              <span className="navigation-icon">
                <BiMessageMinus />
              </span>
              ABOUT
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              {" "}
              <span className="navigation-icon">
                <BiMedal />
              </span>
              SKILLS
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              {" "}
              <span className="navigation-icon">
                <BiNote />
              </span>
              PROJECTS
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              {" "}
              <span className="navigation-icon">
                <BiUser />
              </span>
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      <div className={click ? "social-icons  active" : "social-icons"}>
        <div>
          {" "}
          <a href="#">
            {" "}
            <FaFacebook className="facebook" />
          </a>
        </div>
        <div>
          {" "}
          <a href="#">
            {" "}
            <FaInstagram className="instagram" />
          </a>
        </div>
        <div>
          {" "}
          <a href="#">
            <FaGithub className="github" />
          </a>
        </div>
        <div>
          <a href="#">
            <FaLinkedin className="linkedin" />
          </a>
        </div>
        <div className="resume">
          <a href="#">
            <button className="resume-btn">
              RESUME <BiArrowToBottom className="resume-icon" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
