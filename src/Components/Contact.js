import React from "react";
import "./Contact.css";
import worldmap from "../images/worldmap.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaLightbulb,
} from "react-icons/fa";
function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>
      <div className="background_image">
        <img src={worldmap} alt="" />
      </div>
      <div className="contact-intro">
        <h3>
          <FaLightbulb />
          Have a Project In Your Mind,Lets Discuss!
        </h3>
        <h3>
          <FaLightbulb />
          Have Questions about My Projects,Drop Your Query!
        </h3>
        <h3>
          <FaLightbulb />
          Drop Your Message below,I will reply ASAP !!!
        </h3>
      </div>
      <div className="contact-social-icon">
        <a href="/">
          <span className="contact-icons">
            <FaLinkedin />
          </span>
        </a>
        <a href="/">
          <span className="contact-icons">
            <FaTelegram />
          </span>
        </a>
        <a href="/">
          <span className="contact-icons">
            <FaInstagram />
          </span>
        </a>
        <a href="/">
          <span className="contact-icons">
            <FaFacebook />
          </span>
        </a>
        <a href="/">
          <span className="contact-icons">
            <FaTwitter />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
