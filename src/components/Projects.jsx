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

function Projects() {
  const [showCard, setShowCard] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 110%", "start 20%"],
  });

  useMotionValueEvent(scrollY, "change", (val) => {
    console.log(val);
  });

  function ShowBigCard(){
    setShowCard(true);
  }

  const scale1 = useTransform(scrollY, [900, 1400], [0.01, 1]);
  const scale3 = useTransform(scrollY, [1100, 1400], [0.01, 1]);
  const scale4 = useTransform(scrollY, [1300, 1400], [0.01, 1]);
  const scale2 = useTransform(scrollY, [1200, 1400], [0.01, 1]);

  function Card(props) {
    return (
      <>
        <motion.div
          className="grid auto-rows-auto h-90 w-[70%] border border-zinc-700 border-2 
          rounded-lg bg-zinc-600/80 text-white cardBorder cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-full h-30 flex justify-center">
            <img className="w-[80%] h-25 rounded mt-3" src={props.projectPic} />
          </div>
          <p className="text-2xl font-semibold flex justify-center">
            {props.title}
          </p>
          <p className="text-sm flex text-center">{props.text}</p>
          <div className="rounded-lg flex justify-end items-end p-2">
            <img className="w-5 h-5 flex" src="../src/assets/tap.png" />
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
        }}
        className="text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-4"
      >
        <p>Projects</p>
      </motion.div>

      <div className="grid grid-cols-4 p-12 gap-4">

      {showCard ? <EasyShareCard /> : {}}

        {/** First project card */}
        <motion.div
          ref={ref}
          style={{
            scale: scale1,
          }}
          onClick={ShowBigCard}
        >
          <div className="col-start-1 col-span-1 flex justify-center items-center">
            <Card
              title="EasyShare"
              bigCardProjectPic="../src/assets/EasyShare.png"
              projectPic="../src/assets/StartScreenES.png"
              text="asdasdsad ad asd asd ad sad asd asd asd asasd asd ad asd asd as"
            />
          </div>
        </motion.div>

        {/** Second project card */}
        <motion.div
          ref={ref}
          style={{
            scale: scale2,
          }}
          onClick={ShowBigCard}
        >
          <div className="col-start-1 col-span-1 flex justify-center items-center">
            <Card
              title="Java grej"
              projectPic="../src/assets/StartScreenES.png"
            />
          </div>
        </motion.div>

        {/** Third project card */}
        <motion.div
          ref={ref}
          style={{
            scale: scale3,
          }}
        >
          <div className="col-start-1 col-span-1 flex justify-center items-center">
            <Card
              title="Android"
              projectPic="../src/assets/StartScreenES.png"
            />
          </div>
        </motion.div>

        {/** Third project card */}
        <motion.div
          ref={ref}
          style={{
            scale: scale4,
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
      {/** Banner for skills */}
      <div className="grid grid-cols-1">
        <div className="flex justify-center items-center">
          <div className="flex items-center"> asd</div>
        </div>
      </div>
    </>
  );
}
export default Projects;
