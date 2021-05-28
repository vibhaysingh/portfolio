import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BiHome, BiMedal, BiNote, BiUser } from "react-icons/bi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Navbar() {
  const [click, changeClick] = useState(false);
  const [scroll, isscrolled] = useState(false);
  const [link_is_clicked, track_link_click] = useState(false);

  const handle_link_click = (events) => {
    changeClick(!click);
    track_link_click(!link_is_clicked);
  };
  const handleClick = (events) => {
    changeClick(!click);
  };
  window.onscroll = () => {
    window.scrollY > 10 ? isscrolled(true) : isscrolled(false);
  };

  return (
    <>
      <div className={scroll ? "navbar-items scrolled" : "navbar-items"}>
        <h2 className="text-color-logo">
          <span>&#123;</span>VS<span>&#125;</span>
        </h2>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <MdClose /> : <FiMenu />}
        </div>
        <ul className={click ? "nav-menu  active" : "nav-menu"}>
          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled " : "nav-links"}
              href="#homepage"
            >
              <span className="navigation-icon">
                <BiHome />
              </span>
              HOME
            </a>
          </li>

          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#skills"
            >
              <span className="navigation-icon">
                <BiMedal />
              </span>
              SKILLS
            </a>
          </li>
          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#projects"
            >
              <span className="navigation-icon">
                <BiNote />
              </span>
              PROJECTS
            </a>
          </li>
          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#contact"
            >
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
          <a href="https://www.facebook.com/vibhaysinghjnv" target="_blank">
            <FaFacebook className="facebook" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/invites/contact/?i=cy78k4lrl70l&utm_content=8k8y10j"
            target="_blank"
          >
            <FaInstagram className="instagram" />
          </a>
        </div>
        <div>
          <a href="https://github.com/vibhaysingh" target="_blank">
            <FaGithub className="github" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/vibhay-singh-56a9141a7"
            target="_blank"
          >
            <FaLinkedin className="linkedin" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Vibhay_4?s=08" target="_blank">
            <FaTwitter className="twitter" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
