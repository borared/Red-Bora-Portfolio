import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  // Ref for scroll-triggered animation
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const meRef = useRef(null);

  const aboutInfoRef = useRef(null);
  const isAboutInfoInView = useInView(aboutInfoRef, {
    once: true,
    margin: "-100px",
  });
  const ismeInview = useInView(meRef, {once: true, margin: "-100px"});

  return (
    <>
      {/* Desktop View */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="-mt-20 md:mt-5 font-bold md:text-left px-17 hidden sm:block w-screen"
      >
        <h2 className=" text-white text-2xl sm:mt-25">About me</h2>
        <hr className="text-neutral-400 mt-2 hidden sm:block" />
        {/* Image */}
        <section className="inset-0 -z-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="absolute inset-0 w-full h-screen -z-50 flex items-center justify-center mt-20"
              style={{ background: "none" }}
            >
              <motion.p
                id="memove"
                className="text-white text-9xl font-normal whitespace-nowrap sm:text-9xl sm:-mt-20"
                animate={{ x: [800, -2000] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                This is Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora
              </motion.p>
            </motion.div>
            <motion.div
              id="me"

              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              className="absolute inset-0 w-full h-screen -z-40 flex items-center justify-center mt-20 sm:-mt-7 md:mt-20"
              style={{ background: "none" }}
            >
              <img
                src="/logo/RedBB.png"
                alt="Background"
                style={{
                  height: "100vh",
                  width: "auto",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </motion.div>

            
          </div>
        </section>

        <div>
          <p className="text-white mt-6 text-6xl font-extrabold flex justify-center">
            Who Am I?
          </p>
        </div>
        <motion.div
          className="mt-180"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
        ></motion.div>

        <motion.div
          ref={aboutInfoRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isAboutInfoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          
          <div className="flex gap-3">
            
            
          </div>
          <div className="sm:-mt-58 md:mt-5 sm:text-1xl xl:mt-25">
            <p className="text-white justify-center  text-2xl mt-10 font-normal flex sm:text-2xl md:text-3xl xl:text-4xl whitespace-nowrap">
              [ Red Bora | 18y | A Junior Software Engineer ]
            </p>

            {/* MD & LG version */}


{/* XL version */}

<div className="hidden xl:block text-neutral-400 font-normal space-y-3 text-2xl">
   <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>I’m a passionate software engineer dedicated to building impactful
                  technologies that</p>
              </div>
              <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>solve real-world problems. With a focus on AI and innovation, I strive to  empower</p>
              </div>
              <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>communities and contribute to the growth of Cambodia’s tech
                  ecosystem.</p>
              </div>
</div>
            <div className="hidden md:block  sm:block xl:hidden sm:whitespace-nowrap">
              <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>I’m a passionate software engineer dedicated to building impactful
                  technologies that</p>
              </div>
              <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>solve real-world problems. With a focus on AI and innovation, I strive to  empower</p>
              </div>
              <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>communities and contribute to the growth of Cambodia’s tech
                  ecosystem.</p>
              </div>
            </div>

            
            
            <div className="flex justify-center mt-10">
              <button
                id="learnbtn1"
                className="bg-black text-white font-normal px-6 py-3 rounded-lg transition-all mb-8"
                onClick={() => navigate("/learnpage")}
              >
                Learn more about me
              </button>
          </div>
          </div> 
        </motion.div>
      </motion.section>

      {/* Mobile View */}
      <section
        id="about"
        className="z-10 mt-10 md:mt-20 md:text-left sm:hidden text-center px-7"
      >
        <h2
          className="text-white font-bold
            text-2xl"
        >
          About me
        </h2>
        <hr className="text-neutral-400 mt-2 sm:hidden" />
        <div>
          <section className="inset-0 -z-0">
            <div>
          <p className="text-white mt-6 text-3xl font-bold flex justify-center">
            Who Am I?
          </p>
          </div>
            <div className="relative w-full h-full flex items-center justify-center">

              
              <motion.div
                ref={meRef}
                initial={{ opacity: 0, x: 50 }}
                animate={ismeInview ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
                className="absolute inset-0 w-full h-screen -z-40 flex items-center justify-center -mt-45"
                style={{
                  background: "none",
                }}
              >
                <img
                  src="/logo/RedBB.png"
                  alt="Background"
                  style={{
                    height: "100vh",
                    width: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    margin: "0 auto",
                   
                  }}
                />
              </motion.div>

              <div className="mt-105">
                <div>
                <p className="text-white" id="titleAbout">[ Red Bora | 18y | A Junior Software Engineer ]</p>
              </div>
              <div className="text-neutral-400 font-normal hidden md:block" id="aboutletter">
              <p>I’m a passionate software engineer dedicated to building impactful
                  technologies that solve real-world problems. With a focus on AI and innovation, I strive to  empower
                  communities and contribute to the growth of Cambodia’s tech
                  ecosystem.</p>
              </div>
              
              </div>

              

              <motion.div
              className="absolute inset-0 w-full h-screen -z-50 flex items-center justify-center -mt-39"
              style={{ background: "none" }}
            >
              <motion.p
                id="memove1"
                className="text-white text-8xl font-normal whitespace-nowrap"
                animate={{ x: [800, -2000] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                This is Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora - Red Bora
              </motion.p>
            </motion.div>

            
            
            </div>
          </section>
        </div>

        <div className="mt-5">
          <button
            id="learnbtn"
            className="bg-white text-black px-6 py-3 rounded-lg  transition-all"
            onClick={() => navigate("/learnpage")}
          >
            Learn more about me
          </button>
        </div>


        
      </section>
    </>
  );
};
export default About;







