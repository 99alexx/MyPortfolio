import scrollDownIcon from "../assets/chevron.png";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function StartPage() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0%", "start 200%"],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 flex h-screen font-semibold p-8 lg:p-0">
      <div className="flex flex-col justify-end md:justify-start md:col-start-2 col-span-1 md:mt-[50%]">
        <div className="w-full text-2xl lg:text-3xl pb-4">&lt;Alexander Karlsson</div>
        <div className="w-full text-4xl lg:text-5xl text-end">Portfolio /&gt;</div>
      </div>
      <div className="md:col-start-2 col-span-1 flex justify-center items-end lg:hidden">
        <motion.img 
        ref={ref}
        style={{
          opacity: scrollYProgress,
        }}
        className="h-8 w-8 mb-5 animate-bounce" src={scrollDownIcon}/>
      </div>
    </div>
  );
}
export default StartPage;
