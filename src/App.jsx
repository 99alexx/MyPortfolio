import { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import Info from "./components/Info";
import StartPage from "./components/StartPage";

function App() {
  return (
    <>
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
      </div>
    </>
  );
}

export default App;
