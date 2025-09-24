import mePic from "../assets/me.jpg";
import scrollDownIcon from "../assets/chevron.png";
import InfiniteScroll from "./InfiniteScroll";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Info() {
  const refTop = useRef(null);
  const refBottom = useRef(null);

  const { scrollYProgress: header } = useScroll({
    target: refTop,
    offset: ["start 90%", "start 20%"],
  });

  const { scrollYProgress: bottomIndicator } = useScroll({
    target: refBottom,
    offset: ["start 0%", "start 200%"],
  });

  return (
    <>
      <motion.div
        ref={refTop}
        style={{
          opacity: header,
        }}
        className="text-2xl lg:text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-2 lg:decoration-4"
      >
        <p>About Me</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 p-8 lg:p-12">
        <div className="flex pb-4 justify-center lg:justify-start lg:col-start-2 lg:col-span-2">
          <img
            className="rounded-full h-30 md:h-40 lg:h-75 border border-white/70"
            src={mePic}
          />
        </div>
        <div className="flex items-center pb-6 col-start-1 lg:col-start-4 lg:col-span-3">
          <div className="border border-white/70 rounded-lg p-4 md:p-6 lg:p-8">
            <p className="text-xl lg:text-2xl">Hello!</p>
            <p className="text-md">
              <br />
              My name is Alexander Karlsson. I recently graduated from Karlstad
              University with a Bachelor of informatics. I made this website as
              a supplement to my CV, to showcase my personal projects I've
              worked/working on.
            </p>
            <p className="text-md">
              <br />I like to learn and want to improve, so if you have any
              feedback or just would like to know more about me or any of my
              projects don't hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:col-start-3 lg:col-span-3 flex lg:items-center lg:justify-center lg:h-[80%]">
          <div className="border-t border-white/70 w-full pb-4">
            <p className="pt-2 text-sm flex justify-center text-white/70">
              Technologies I enjoy working with
            </p>
          </div>
          <InfiniteScroll />
          <div className="flex justify-center w-[100%] mt-4 border-t border-white/70 lg:hidden">
          <motion.img
            ref={refBottom}
            style={{
              opacity: bottomIndicator,
            }}
            className="h-8 w-8 mt-8 animate-bounce"
            src={scrollDownIcon}
          />
          </div>
        </div>
      </div>
    </>
  );
}
export default Info;
