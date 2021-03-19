import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [click, changeClick] = useState(false);

  const handleClick = (events) => {
    changeClick(!click);
  };
  return (
    <div className="navbar-items">
      <h2 className="portfolio-text">Portfolio</h2>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <MdClose /> : <FiMenu />}
      </div>
      <ul className={click ? "nav-menu  active" : "nav-menu"}>
        <li>
          <a className="nav-links" href="#">
            {" "}
            HOME
          </a>
        </li>
        <li>
          <a className="nav-links" href="#">
            {" "}
            ABOUT
          </a>
        </li>
        <li>
          <a className="nav-links" href="#">
            {" "}
            SKILLS
          </a>
        </li>
        <li>
          <a className="nav-links" href="#">
            {" "}
            PROJECTS
          </a>
        </li>
        <li>
          <a className="nav-links" href="#">
            {" "}
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
