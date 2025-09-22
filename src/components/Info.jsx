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
        className="text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-4"
      >
        <p>About Me</p>
      </motion.div>

      <div className="grid grid-rows-3 grid-cols-2 flex flex-cols pr-20 pl-20 gap-x-20 gap-y-4">
        <div className="flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1">
          <img
            className="rounded-full h-40 w-40 border border-white/70"
            src="../src/assets/me.jpg"
          />
        </div>
        <div className="flex flex-col col-start-1 col-span-1 row-start-2 row-span-3 border border-white/70 rounded-lg p-8">
          <p className="text-2xl pb-4">Hello!</p>
          <p className="text-md pb-4">
            My name is Alexander Karlsson. I recently graduated from Karlstad
            University with a Bachelor of informatics. I made this website as a
            supplement to my CV, to showcase my personal projects I've
            worked/working on.
          </p>
          <p className="text-md">
            I like to learn and want to improve, so if you have any feedback or
            would like to know more about me or any of my projects don't
            hesitate to contact me.
          </p>
        </div>

        <div className="col-start-2 row-start-2 border border-white/70 rounded-lg p-8">
          CV:
        </div>

        <div className="col-start-2 row-start-3 border border-white/70 rounded-lg p-8">
          <p className="underline mb-4">Contact information:</p>
          <p>Email: 99alexkarlsson@gmail.com</p>
          <p>Phone: +46793481608</p>
          <div className="flex">
            <a
              className="underline"
              href="https://linkedin.com/in/alexander-karlsson-613a292aa"
            >
              LinkedIn
            </a>
            <img className="w-5 h-5" src="src/assets/linkedin.png" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Info;
