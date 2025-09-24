import { motion } from "framer-motion";

import githubLogo from "/src/assets/github-mark-white.png";
import PortfolioLogo from "/src/assets/Portfolio.png";

function PortfolioCard({ onClick }) {
  return (
    <>
      <div
        className="flex justify-center items-center absolute inset-0 bg-black/40 mb-0"
        onClick={onClick}
      >
        <motion.div
          className="w-[90%] md:w-[60%] lg:w-[30%] bg-black border border-white/70 rounded-2xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-2 auto-rows-auto h-auto text-sm gap-y-2 lg:gap-y-4">
            <img
              className="rounded-lg col-start-1 col-span-2"
              src={PortfolioLogo}
            />
            <div className="col-start-1 col-span-1 flex flex-col">
              <p className="text-sm lg:text-xl lg:pb-2 font-semibold">
                Portfolio
              </p>
              <p>
                This is a front-end heavy project created to showcase my other
                projects I've worked and/or working on. It serves mainly as a complement to my CV.


              </p>
            </div>

            <div className="col-start-2 col-span-2 flex flex-col text-center">
              <ul className="space-y-2">
                <p className="text-sm underline decoration-gray-100/90 decoration-1 font-semibold">
                  Built with:
                </p>
                <li>React/Vite</li>
                <li>Tailwindcss</li>
                <li>Web Hosting</li>
                <li>Git/Github</li>
              </ul>
            </div>
            <div className="grid auto-rows-auto col-start-1 col-span-2 space-y-2 lg:text-sm underline">
              <a target="_blank" href="https://alexanderkarlssonportfolio.se">
                www.AlexanderKarlssonPortfolio.se
              </a>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-4 lg:h-6" src={githubLogo} />
                  <a
                    target="_blank"
                    href="https://github.com/99alexx/MyPortfolio"
                  >
                    Repo
                  </a>
                </div>
                <p className="cursor-pointer" onClick={onClick}>
                  Close
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default PortfolioCard;
