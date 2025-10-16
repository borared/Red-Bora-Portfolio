import React from "react";
import { motion, AnimatePresence } from "framer-motion";


const NaekDetail = ({ onClose }) => {
  const images = [
    { src: "/logo/NaekHome.png", w: "500px" },
    { src: "/logo/NaekAcc.png", w: "550px" },
    { src: "/logo/NaekMore.png", w: "500px" },
    { src: "/logo/NaekSearch.png", w: "500px" },
    { src: "/logo/NaekWatched.png", w: "500px" },
    { src: "/logo/NaekF4.png", w: "500px" },
  ];

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center overflow-hidden w-full h-full bg-black "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4 z-[60]">
          <button
            onClick={onClose}
            className="flex cursor-pointer text-neutral-500 hover:text-white focus:outline-none relative w-6 h-6"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative w-full overflow-hidden -mt-5">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...Array(2)].map((_, loopIndex) =>
              images.map((img, idx) => (
                <img
                  key={`${loopIndex}-${idx}`}
                  src={img.src}
                  alt={`Naek-${idx}`}
                  style={{
                    width: img.w,
                    marginTop: "50px",
                    border: "none",
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                  }}
                />
              ))
            )}
          </motion.div>

          <div className="md:mt-5 md:text-left bg-clip-text px-4 hidden sm:block">
            <motion.h1
              className="text-4xl text-white font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              NAEK WATCH
            </motion.h1>
          </div>
          <div className="md:mt-5 md:text-left bg-clip-text px-4 hidden sm:block">
            
              <div className="flex gap-2">
                <motion.h1
                  className=" text-purple-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div id="school">Next Gen Batch 2nd Project</div>
                </motion.h1>
                <motion.h1
                  className=" text-purple-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div id="rating">Rating: 4.9/5</div>
                </motion.h1>
              </div>
            
          </div>


          <div className="flex gap-119">
            <div className="md:mt-5 md:text-left bg-clip-text px-4 hidden sm:block">
              <motion.h1
                className="text-1xl text-neutral-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Naek Watch is a prototype movie platform built to deliver service
                of movie watching experience.
              </motion.h1>
              <motion.h1
                className="text-1xl text-neutral-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                It enables users to easily find and watch the movies they want
                through advanced filtering options,
              </motion.h1>
              <motion.h1
                className="text-1xl text-neutral-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                while also offering features such as release notifications for
                upcoming HD titles and personalized
                <br /> recommendations.
              </motion.h1>

              <div>
              <motion.h1
                className="text-white hidden sm:block font-meduim mt-4 text-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
              >
                Technology Tool:
              </motion.h1>
              <div className="flex gap-2">
                  <motion.h1
                    className=" text-purple-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    <div id="tool">Figma</div>
                  </motion.h1>
                  <motion.h1
                    className=" text-purple-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 }}
                  >
                    <div id="tool1">Photoshop</div>
                  </motion.h1>
                </div>
          </div>
            </div>

            <div className="w-65 hidden sm:block ">
              <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
    
                          style={{
                            background: "none",
                          }}
                        >
                          <img src="/logo/NW.png" alt="" className="transition-all" id="Naek"/>
                        </motion.div>
              
              
            </div>
            
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NaekDetail;

//Naek Watch is a prototype movie platform built to deliver a seamless and customizable viewing experience. It enables users to easily find and watch the movies they want through advanced filtering options, while also offering features such as release notifications for upcoming HD titles and personalized recommendations.

