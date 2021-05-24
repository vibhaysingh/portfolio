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
  FaHeart,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container " id="contact">
      <h1 className="contact-heading">Contact</h1>
      <div className="background_image">
        <img src={worldmap} alt="" />
      </div>
      <div className="contact-intro">
        <h3>🚀 Have a project in your mind, Lets Discuss ✌</h3>
        <h3>🚀 Have questions about my projects,drop your query below 📩</h3>
        <h3>🚀 Drop your message below, I will reply ASAP!!! 🔔</h3>
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
      <footer>
        <h3>
          Made With
          <span className="heart">
            <FaHeart />
          </span>
          by Vibhay Singh
        </h3>
      </footer>
    </div>
  );
}

export default Contact;
