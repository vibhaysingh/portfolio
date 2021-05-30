import React from "react";
import "./Homepage.css";
import myimgsvg from "../images/homepage_illus.svg";
import { Rotate } from "react-reveal";
import { useEffect } from "react";
function Homepage() {
  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 100));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      var line = document.getElementById("line");
      var txts = ["Competitive Coder", "Web Developer"];
      var speed = 100;
      async function typewriter(txt) {
        for (let i = 0; i < txt.length; i++) {
          line.innerHTML += txt.charAt(i);
          await delay(speed);
        }
      }
      async function reverseTypewriter(txt) {
        for (let i = txt.length; i > 0; i--) {
          line.innerHTML = line.innerHTML.slice(0, -1);
          await delay(speed);
        }
      }
      async function writeLoop() {
        for (let i = 0; i < txts.length; i++) {
          await typewriter(txts[i]);
          await delay(1000);
          await reverseTypewriter(txts[i]);
          await delay(100);
        }
        writeLoop();
      }
      function delay(ms) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
      }
      writeLoop();
    });
  }, []);

  //

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
        <div class="type-container">
          <p id="line"></p>
        </div>
        <div className="resume-btn">
          <a
            href="https://drive.google.com/file/d/1OkokjhLPmBB_P3h4rpTjOrsRqYLKwD3z/view?usp=drivesdk"
            target="_blank"
          >
            <button>RESUME</button>
          </a>
          <a href="mailto:vibhaysinghjnv@gmail.com" target="_blank">
            <button>EMAIL ME</button>
          </a>
        </div>
      </div>

      <div className="homepage-video">
        <img src={myimgsvg} alt="" />
      </div>
    </div>
  );
}

export default Homepage;
