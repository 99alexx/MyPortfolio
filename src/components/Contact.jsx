import linkedInLogo from "../assets/linkedin.png";
import CV from "../assets/CV.pdf";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Contact() {
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
        <p>Contact</p>
      </motion.div>
      <div className="grid grid-cols-1 p-8 lg:grid-cols-7 lg:h-[80%]">
        <div className="col-start-1 col-span-1 lg:col-start-3 col-span-3 border border-white/70 rounded-lg p-8">
          <div className="flex flex-col justify-center text-center">
            <p className="text-xl pb-4">Reach out!</p>
            <p>If you want to get in touch feel free to contact me anytime! </p>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start mt-4 pt-4 space-y-4 space-x-4 border-t border-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/70 rounded p-2 cursor-pointer"
              >
                <a href="mailto:99alexkarlsson@gmail.com">Send Email</a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center border border-white/70 rounded p-2 cursor-pointer"
              >
                <a
                  target="_blank"
                  href="https://linkedin.com/in/alexander-karlsson-613a292aa"
                >
                  LinkedIn
                </a>
                <img className="w-5 h-5" src={linkedInLogo} />
              </motion.div>
              <div>
              <p className="border border-white/70 rounded p-2">+46793481608</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/70 rounded p-2 cursor-pointer "
                download
                href={CV}
              >
                Download CV
              </motion.a>
            </div>
            <div className="mt-4 pt-4 flex flex-cols justify-start border-t border-white">
              <div className="space-y-4">
                <p className="text-sm">
                  Check out my Bachelor thesis about GenAI, Websites and
                  Usability (Only available in Swedish).
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    className="border border-white/70 p-2 cursor-pointer rounded"
                    target="_blank"
                    href="https://www.diva-portal.org/smash/record.jsf?dswid=-1390&pid=diva2%3A1975102&c=12&searchType=SIMPLE&language=sv&query=alexander+karlsson&af=%5B%22topOrganisationId%3A157%22%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all"
                  >
                    Bachelor thesis
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
