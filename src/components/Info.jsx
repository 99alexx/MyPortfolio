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

      <div className="grid grid-rows-3 grid-cols-2 flex flex-cols gap-x-4 pr-12 pl-12 gap-x-20">
        <div className="flex justify-center items-center col-start-1 col-span-1 row-start-1 row-span-1">
          <img
            className="rounded-full h-50 w-50 border border-white mb-4"
            src="../src/assets/me.jpg"
          />
        </div>
        <div className="col-start-1 col-span-1 row-start-2 row-span-3 border border-white rounded-lg p-8">
          <p className="text-xl">Hello!</p>
          <p className="text-md">My name is Alexander Karlsson</p>
        </div>

        <div className="col-start-2 row-start-2 border border-white rounded-lg p-8">
          Contact information:

        </div>

        <div className="col-start-2 row-start-3 border border-white rounded-lg p-8">
          Contact information:

        </div>
      </div>
    </>
  );
}
export default Info;
