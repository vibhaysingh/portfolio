import React from "react";
import "./Homepage.css";
import video from "../videos/Developer activity (2).mp4";
import { BiArrowToBottom } from "react-icons/bi";
import { Rotate, Zoom } from "react-reveal";
import { useEffect } from "react";

function Homepage() {
  return (
    <div className="home-container " id="homepage">
      <div className="homepage-intro">
        <h1>
          <Rotate cascade>
            <span className="text-color"> Hi !</span>
          </Rotate>
        </h1>

        <p>
          <Rotate cascade>
            <span className="text-color"> I'm Vibhay Singh</span>
          </Rotate>
        </p>
        <p></p>
        <div className="resume-btn">
          <button>
            RESUME <BiArrowToBottom className="resume-icon" />
          </button>
        </div>
      </div>

      <div className="homepage-video">
        <Zoom>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </Zoom>
      </div>
    </div>
  );
}

export default Homepage;
