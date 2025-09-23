import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import githubLogo from "/src/assets/github-mark-white.png";
import EasyShareLogo from "/src/assets/EasyShare.png";

function EasyShareCard({ onClick }) {
  return (
    <>
      <div
        className="flex justify-center items-center absolute inset-0 bg-black/40 mb-0"
        onClick={onClick}
      >
        <motion.div
          className="w-[80%] md:w-[60%] lg:w-[30%] bg-black/90 border border-white/70 rounded-2xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-2 auto-rows-auto h-auto text-xs gap-y-2 lg:gap-y-4">
            <img
              className="rounded-lg col-start-1 col-span-2"
              src={EasyShareLogo}
            />
            <div className="col-start-1 col-span-1 flex flex-col">
              <p className="text-sm lg:text-xl lg:pb-2 font-semibold">EasyShare</p>
              <p>
                This project was created because I wanted to be able to easily
                share files (currently up to 100MB) with my friends. <br /> The
                server is hosted from a Raspberry Pi 5. Self hosting is a
                challenge but a lot of fun and was a good learning experience.{" "}
                <br /> <br /> Give it a try!
              </p>
            </div>

            <div className="col-start-2 col-span-2 flex flex-col text-center">
              <ul className="space-y-2">
                <p className="text-sm underline decoration-gray-100/90 decoration-1 font-semibold">
                  Built with:
                </p>
                <li>React/Vite</li>
                <li>Tailwindcss</li>
                <li>Node.js (Express)</li>
                <li>Linux(Debian)</li>
                <li>Raspberry Pi 5</li>
                <li>Claudflare(Tunnel)</li>
                <li>Git/Github</li>
              </ul>
            </div>
            <div className="grid auto-rows-auto col-start-1 col-span-2 space-y-2 lg:text-sm underline">
              <a 
              target="_blank"
              href="https://EasyShare.se"
              >
                www.EasyShare.se
              </a>
              <div className="flex items-center justify-between">
                <div className="flex">
                <img
                  className="h-4 lg:h-6"
                  src={githubLogo}
                />
                <a
                  target="_blank"
                  href="https://github.com/99alexx/EasyShareReadme"
                >
                  ReadMe
                </a>
                </div>
                <p className="cursor-pointer"
                onClick={onClick}
                >Close</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default EasyShareCard;
