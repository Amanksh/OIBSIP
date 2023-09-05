import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQueries";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import bg2 from "./assets/bg2.svg";

function App() {
  const [selectedPages, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <div className="app bg-primary " style={{ backgroundImage: `url(${bg2})` }}>
      <Navbar selectedPage={selectedPages} setSelectedPage={setSelectedPage} />
      <Landing setSelectedPage={setSelectedPage} />

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
