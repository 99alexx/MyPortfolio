import mePic from "../assets/me.jpg";
import linkedInLogo from "../assets/linkedin.png";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Info() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 20%"],
  });

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
        }}
        className="text-2xl lg:text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-2 lg:decoration-4"
      >
        <p>About Me</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-rows-3 lg:grid-cols-2 flex flex-cols pr-4 pl-4 md:pr-20 md:pl-20 lg:pr-20 lg:pl-20 gap-y-4 lg:gap-x-20 lg:gap-y-4">
        <div className="flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1">
          <img
            className="rounded-full w-30 h-30 lg:h-40 lg:w-40 border border-white/70"
            src={mePic}
          />
        </div>
        <div className="flex flex-col col-start-1 col-span-1 lg:row-start-2 lg:row-span-3 border border-white/70 rounded-lg p-4 lg:p-8">
          <p className="text-xl lg:text-2xl pb-2 lg:pb-4">Hello!</p>
          <p className="text-md pb-2 lg:pb-4">
            My name is Alexander Karlsson. I recently graduated from Karlstad
            University with a Bachelor of informatics. I made this website as a
            supplement to my CV, to showcase my personal projects I've
            worked/working on.
          </p>
          <p className="text-md">
            I like to learn and want to improve, so if you have any feedback or
            just would like to know more about me or any of my projects don't
            hesitate to contact me.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-start-2 border border-white/70 rounded-lg p-4 lg:p-8">
          <p className="text-lg lg:text-xl pb-2">CV:</p>
          <a className="underline" href="src/assets/CV.pdf" download>Open with pdf (SE)</a>
        </div>

        <div className="lg:col-start-2 lg:row-start-3 border border-white/70 rounded-lg p-4 lg:p-8">
          <p className="underline mb-2 lg:mb-4">Contact information:</p>
          <p>Email: 99alexkarlsson@gmail.com</p>
          <p>Phone: +46793481608</p>
          <div className="flex items-center">
            <a
              className="underline"
              target="_blank"
              href="https://linkedin.com/in/alexander-karlsson-613a292aa"
            >
              LinkedIn
            </a>
            <img className="w-5 h-5" src={linkedInLogo} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Info;
