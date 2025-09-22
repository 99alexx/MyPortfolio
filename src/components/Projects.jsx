import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import "../App.css";
import EasyShareCard from "./Cards/EasyShareCard";
import JavaAppCard from "./Cards/JavaAppCard";
import PortfolioCard from "./Cards/PortfolioCard";
import InfiniteScroll from "./InfiniteScroll";


function Projects() {
  const [bgForCard, setBgForCard] = useState();
  const [showCard, setShowCard] = useState(false);
  const [cardName, setCardName] = useState("");

  const ref = useRef(null);
  const { scrollY } = useScroll();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 110%", "start 20%"],
  });

  useMotionValueEvent(scrollY, "change", (val) => {
    console.log(val);
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


  const scale1 = useTransform(scrollY, [900, 1400], [0.01, 1]);
  const scale3 = useTransform(scrollY, [1100, 1400], [0.01, 1]);
  const scale4 = useTransform(scrollY, [1300, 1400], [0.01, 1]);
  const scale2 = useTransform(scrollY, [1200, 1400], [0.01, 1]);

  function Card(props) {
    return (
      <>
        <motion.div
          className="grid auto-rows-auto h-90 w-[70%] border border-white/70 border-2 
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
            <img className="w-6 h-6 flex" src="../src/assets/tap.png" />
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
          backgroundColor: showCard ? "rgba(0,0,0,40)" : null
        }}
        className="text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-4 h-[10%]"
      >
        <p>Projects</p>
      </motion.div>

      <div className="grid grid-cols-4 p-12 gap-4 relative h-[70%]">

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
              bigCardProjectPic="../src/assets/EasyShare.png"
              projectPic="../src/assets/StartScreenES.png"
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
              projectPic="../src/assets/StartScreenES.png"
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
              projectPic="../src/assets/Portfolio.png"
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
              projectPic="../src/assets/StartScreenES.png"
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
