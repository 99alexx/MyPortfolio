import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Info() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 20%"],
  });
  

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
      }}
      className="text-4xl p-4 text-center font-bold italic underline decoration-gray-100/90 decoration-4"
    >
      <p>About Me</p>
    </motion.div>
  );
}
export default Info;
