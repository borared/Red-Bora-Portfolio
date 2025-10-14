import React from "react";
import { FlipWords } from "../components/FlipWords";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section
      id="home"
      className="flex justify-center md:items-start md:justify-start min-h-screen overflow-x-hidden w-full px-4 md:px-16 relative"
    >
      {/* Desktop View */}
      <div className="z-10 mt-20 md:mt-40 md:text-left rounded-3xl bg-clip-text px-4 md:px-16 hidden sm:block w-full">
        <motion.h1
          className="text-5xl font-semibold text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Hi It's Bora
        </motion.h1>
        <motion.p
          className="text-5xl font-semibold text-white mt-37 flex justify-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75 }}
        >
  
          <FlipWords
            words={["Web Developer", "UX/UI Designer", "Frontend Developer"]}
            className="text-5xl font-black text-white"
          />
        </motion.p>
      </div>
      {/* Video Hero */}
      <section className="absolute inset-0 -z-0 w-full">
        <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ willChange: "opacity" }}
      >
        <source src="public/video/videoHeroo.mp4" type="" />
      </video>
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none -z-5" />
      </section>

    

      {/* Mobile View */}
      <div className="z-10mt-20 md:mt-40 md:text-left rounded-3xl bg-clip-text px-4 sm:hidden text-center w-full">
        <h1 className="text-3xl font-semibold text-white">Hi It's Bora</h1>
        <p className="text-4xl font-semibold text-white mt-3">
          I'm a <span> </span>
          <FlipWords
            words={["Web Developer", "UX/UI Designer", "Frontend Developer"]}
            className="text-3xl font-black text-white"
          />
        </p>
        <p className="text-2xl font-semibold text-white mt-3" id="text">
          Dedicated to design with passion
        </p>
      </div>
      {/* <Canvas>
        <Man />
      </Canvas> */}
    </section>
  );
};

export default Hero;
