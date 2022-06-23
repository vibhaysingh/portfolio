import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  // const [isLoading, setLoading] = useState(true);
  // function fakeRequest() {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  // }
  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return null;
  // }
  return (
    <>
      <Navbar />
      <Homepage />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
