import React from "react";
import "./Contact.css";
import worldmap from "../images/worldmap.png";
import { Zoom, Bounce } from "react-reveal";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
function Contact() {
  return (
    <div className="contact-container " id="contact">
      <h1 className="contact-heading">Contact</h1>
      <div className="background_image">
        <img src={worldmap} alt="" />
      </div>
      <div className="contact-intro">
        <Zoom cascade>
          <h3>Have a project in your mind, Lets Discuss.</h3>
          <h3>Have questions about my projects, Drop your query.</h3>
          <h3>Drop your message below, I will reply ASAP!!!</h3>
        </Zoom>
      </div>
      <Bounce bottom>
        <div className="contact-social-icon">
          <a
            href="https://www.linkedin.com/in/vibhay-singh-56a9141a7"
            target="_blank"
          >
            <span className="contact-icons">
              <FaLinkedin />
            </span>
          </a>
          <a href="mailto:vibhaysinghjnv@gmail.com" target="_blank">
            <span className="contact-icons">
              <FiMail />
            </span>
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=cy78k4lrl70l&utm_content=8k8y10j"
            target="_blank"
          >
            <span className="contact-icons">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.facebook.com/vibhaysinghjnv" target="_blank">
            <span className="contact-icons">
              <FaFacebook />
            </span>
          </a>
          <a href=" https://twitter.com/Vibhay_4?s=08" target="_blank">
            <span className="contact-icons">
              <FaTwitter />
            </span>
          </a>
        </div>
      </Bounce>
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
