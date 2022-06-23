import { useEffect } from "react";
import { Rotate } from "react-reveal";
import myimgsvg from "../images/homepage_illus.svg";
import "./Homepage.css";
function Homepage() {
  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 100));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      var line = document.getElementById("line");
      var txts = ["Intern @Samsung Banglore"];
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
            href="https://docs.google.com/document/d/1p5M--SDQNw0VKOlz99hm4STo8lmcFqXVKzWPuC-j-WQ/edit?usp=sharing"
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
