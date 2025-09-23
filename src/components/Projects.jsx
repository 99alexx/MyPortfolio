import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import "../App.css";
import { useMediaQuery } from "react-responsive";
import EasyShareCard from "./Cards/EasyShareCard";
import JavaAppCard from "./Cards/JavaAppCard";
import PortfolioCard from "./Cards/PortfolioCard";
import InfiniteScroll from "./InfiniteScroll";

import tapLogo from "../assets/tap.png";
import EasyShareLogo from "../assets/EasyShare.png";
import portfolioLogo from "../assets/Portfolio.png";
import StartScreenES from "../assets/StartScreenES.png";


function Projects() {
  const [showCard, setShowCard] = useState(false);
  const [cardName, setCardName] = useState("");

  const ref = useRef(null);
  const { scrollY } = useScroll();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 110%", "start 20%"],
  });

  function ShowBigCard(card) {
    if (card === "EasyShare") {
      setShowCard(true);
      setCardName(card);
    }
    if (card === "JavaApp") {
      setShowCard(true);
      setCardName(card);
    }
    if (card === "Portfolio Site"){
      setShowCard(true);
      setCardName(card);
    }
  }

  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });

  const scale1 = useTransform(scrollY, [900, 1400], [0.01, 1]);
  const scale3 = useTransform(scrollY, [1100, 1400], [0.01, 1]);
  const scale4 = useTransform(scrollY, [1300, 1400], [0.01, 1]);
  const scale2 = useTransform(scrollY, [1200, 1400], [0.01, 1]);

  function Card(props) {
    return (
      <>
      {isLarge ? (
        <motion.div
          className="grid auto-rows-auto h-90 w-[70%] xl:w-[60%] border border-white/70 border-2 
          rounded-lg text-white cardBorder cursor-pointer p-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ShowBigCard(props.title)}
        >
          <div className="w-full h-30 flex justify-center">
            <img className="w-full h-30 rounded" src={props.projectPic} />
          </div>
          <p className="text-2xl font-semibold flex justify-center">
            {props.title}
          </p>
          <p className="text-sm">{props.text}</p>
          <div className="rounded-lg flex justify-end items-end">
            <img className="w-6 h-6 flex" src={tapLogo} />
          </div>
        </motion.div>
      ) : isMedium ? (
        <motion.div
          className="grid auto-rows-auto h-70 w-[60%] border border-white/70 border-2 
          rounded-lg text-white cardBorder cursor-pointer p-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ShowBigCard(props.title)}
        >
          <div className="w-full h-30 flex justify-center">
            <img className="w-full h-25 rounded" src={props.projectPic} />
          </div>
          <p className="text-2xl font-semibold flex justify-center">
            {props.title}
          </p>
          <p className="text-sm">{props.text}</p>
          <div className="rounded-lg flex justify-end items-end">
            <img className="w-5 h-5 flex" src={tapLogo} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="grid auto-rows-auto h-20 w-[100%] border border-white/70 border-2 
          rounded-lg text-white cardBorder cursor-pointer p-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ShowBigCard(props.title)}
        >
        <p className="text-2xl font-semibold flex justify-center">
            {props.title}
          </p>
          <div className="rounded-lg flex justify-end items-end">
            <img className="w-5 h-5 flex" src={tapLogo} />
          </div>
        </motion.div>
      )}
      </>
    );
  }

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
          backgroundColor: showCard ? "rgba(0,0,0,0.40)" : null
        }}
        className="text-2xl lg:mt-0 lg:text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-2 lg:decoration-4"
      >
        <p>Projects</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 lg:p-12 gap-4 md:space-y-4 md:gap-0 relative h-[70%]">

        {showCard && cardName === "EasyShare" ? <EasyShareCard onClick={() => setShowCard(false)}/> : null}
        {showCard && cardName === "JavaApp" ? <JavaAppCard onClick={() => setShowCard(false)}/> : null}
        {showCard && cardName === "Portfolio Site" ? <PortfolioCard onClick={() => setShowCard(false)}/> : null}

        {/** 1 EasyShare */}
        <motion.div
          ref={ref}
          style={{
            scale: showCard ? 1 : scale1,
          }}
        >
          <div className="col-start-1 col-span-1 flex justify-center">
            <Card
              title="EasyShare"
              bigCardProjectPic={EasyShareLogo}
              projectPic={StartScreenES}
              text="EasyShare is a website built to easily share files, hosted on a Raspberry Pi 5"
            />
          </div>
        </motion.div>

        {/** 2 JavaApp */}
        <motion.div
          ref={ref}
          style={{
            scale: showCard ? 1 : scale2,
          }}
        >
          <div className="col-start-1 col-span-1 flex justify-center items-center">
            <Card
              title="JavaApp"
            />
          </div>
        </motion.div>

        {/** 3 Portfolio website */}
        <motion.div
          ref={ref}
          style={{
            scale: showCard ? 1 : scale3,
          }}
        >
          <div className="col-start-1 col-span-1 flex justify-center items-center">
            <Card
              title="Portfolio Site"
              projectPic={portfolioLogo}
            />
          </div>
        </motion.div>

        {/** 4 project card */}
        <motion.div
          ref={ref}
          style={{
            scale: showCard ? 1 : scale4,
          }}
        >
          <div className="col-start-1 col-span-1 flex justify-center items-center">
            <Card
              title="EasyShare"
            />
          </div>
        </motion.div>
      </div>
      {/** Infinite scroll */}
      <div className={`grid grid-cols-1 h-[20%] ${showCard ? "bg-black/40" : ""}`}>
            <InfiniteScroll />
      </div>
    </>
  );
}
export default Projects;
