import "./App.css";
import Projects from "./components/Projects";
import Info from "./components/Info";
import StartPage from "./components/StartPage";
import Contact from "./components/Contact";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="blackBackground grid auto-rows-auto font-[Verdana] text-gray-100/90">
        
        <div className="lg:h-screen starBackground">
          <div className="starsForIntro"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>

          <StartPage />
        </div>

        <div className="lg:h-screen xl:h-screen">
          <div className="stars"></div>
          <Info />
        </div>

        <div className="lg:h-screen xl:h-screen">
          <div className="stars"></div>
          <Projects />
        </div>

        <div className="lg:h-screen xl:h-screen">
          <div className="stars"></div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
