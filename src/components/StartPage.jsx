import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function StartPage() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0%", "start 200%"],
  });

  return (
    <div className="grid grid-cols-3 flex h-screen font-semibold">
      <div className="flex flex-col col-start-2 col-span-1 mt-[50%] text-3xl">
        <div className="w-full pb-4">&lt;Alexander Karlsson</div>
        <div className="w-full text-5xl text-end">Portfolio /&gt;</div>
      </div>
      <div className="col-start-2 col-span-1 flex justify-center items-end">
        <motion.img 
        ref={ref}
        style={{
          opacity: scrollYProgress,
        }}
        className="h-8 w-8 mb-5 animate-bounce" src="src/assets/chevron.png" />
      </div>
    </div>
  );
}
export default StartPage;
