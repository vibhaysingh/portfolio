import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      {/* <About /> */}
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
