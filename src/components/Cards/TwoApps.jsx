import { motion } from "framer-motion";

import githubLogo from "/src/assets/github-mark-white.png";
import twoAppsLogo from "/src/assets/TwoApps.png";

function TwoApps({ onClick }) {
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
              src={twoAppsLogo}
            />
            <div className="col-start-1 col-span-1 flex flex-col">
              <p className="text-sm lg:text-xl lg:pb-2 font-semibold">
                SmartMat & GuessWord Game
              </p>
              <p>
                Two Android applications created in an application course at
                University. <span className="font-bold">SmartMat</span> is a application which fetch product-data
                from an API. Users can press buy and the product is put into the
                cart and easily remove if needed.<br/> <span className="font-bold">WordGame</span> is pretty self explanatory, 
                the player tries to guess a random word and has up to seven incorrect attempts before the game is over.
              </p>
            </div>

            <div className="col-start-2 col-span-2 flex flex-col text-center">
              <ul className="space-y-2">
                <p className="text-sm underline decoration-gray-100/90 decoration-1 font-semibold">
                  Built with:
                </p>
                <li>Java</li>
                <li>Android Studio</li>
                <li>Gradle</li>
                <li>XML (Layouts)</li>
                <li>Android Emulator</li>
                <li>JSON API</li>
                <li>Git/Github</li>
              </ul>
            </div>
            <div className="grid auto-rows-auto col-start-1 col-span-2 space-y-2 lg:text-sm underline">
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
                <p className="cursor-pointer z-100" onClick={onClick}>
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
export default TwoApps;
