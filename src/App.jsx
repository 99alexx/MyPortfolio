import { useState } from "react";
import "./App.css";
import Projects from "./components/projects";
import Info from "./components/Info";
import StartPage from "./components/StartPage";

function App() {
  return (
    <>
      <div className="blackBackground grid auto-rows-auto snap-y snap-mandatory border border-black font-[Verdana] text-gray-100/90">
        <div className="h-screen snap-start starBackground">
          <div className="starsForIntro"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>

          <StartPage />
        </div>

        <div className="h-screen">
          <div className="stars"></div>
          <Info />
        </div>

        <div className="h-screen">
          <div className="stars"></div>
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
