import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skill = () => {
  const skillRef = useRef(null);
  const frontendRef = useRef(null);
  const frontendImgRef = useRef(null);
  const backendRef = useRef(null);
  const backendImgRef = useRef(null);
  const designRef = useRef(null);
  const designImgRef = useRef(null);

  const isInView = useInView(skillRef, { once: true, margin: "-100px" });
  const frontendInView = useInView(frontendRef, {
    once: true,
    margin: "-100px",
  });
  const frontendImgInView = useInView(frontendImgRef, {
    once: true,
    margin: "-100px",
  });
  const backendInView = useInView(backendRef, { once: true, margin: "-100px" });
  const backendImgInView = useInView(backendImgRef, {
    once: true,
    margin: "-100px",
  });
  const designInView = useInView(designRef, { once: true, margin: "-100px" });
  const designImgInView = useInView(designImgRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.section
      ref={skillRef}
      className="w-screen"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    
    >
      <div className="text-2xl px-20 hidden sm:block">
        <h1 className="text-white flex font-bold">Skill & Technology</h1>
        <div className="mt-1 text-neutral-400">
          <hr />
        </div>
      </div>

      <div className="text-2xl px-20 sm:hidden">
        <h1 className="text-white flex font-bold justify-center">Skill & Technology</h1>
        <div className="mt-1 text-neutral-400">
          <hr />
        </div>
      </div>

      {/* Frontend */}
      <motion.div
        ref={frontendRef}
        initial={{ opacity: 0, x: -60 }}
        animate={frontendInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex justify-center"
      >
        <h1 id="frontend" className="text-white text-2xl mt-20">
          Frontend
        </h1>
      </motion.div>

      <div className="hidden sm:block">
        <motion.div
          ref={frontendImgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center mt-10 gap-6"
        >
          <div className="bg-black xl:w-55  md:w-75 sm:w-75 h-40 rounded-2xl items-center flex flex-col justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/html.png" alt="" />
            <h1 className="text-white mt-2">HTML</h1>
          </div>
          <div className="bg-black w-55 h-40 rounded-2xl items-center flex flex-col justify-center hover:scale-110 transition-transform duration-300 -mt-2">
            <img src="/logo/Css.png" alt="" className="w-39" />
            <h1 className="text-white -mt-2">CSS</h1>
          </div>
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/vite.png" alt="" className="w-33" />
            <h1 className="text-white mt-2">Vite</h1>
          </div>
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/react.png" alt="" className="w-35 -mt-2" />
            <h1 className="text-white mt-2">React</h1>
          </div>
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/js.webp" alt="" className="w-37 -mt-3" />
            <h1 className="text-white">Javascript</h1>
          </div>
        </motion.div>
      </div>

      <div className="sm:hidden">
        {/* Mobile version */}

      <div className="flex justify-center">
        <motion.div
        ref={frontendImgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mt-17 gap-6">
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/html.png" alt="" className="w-55" />
            <h1 className="text-white mt-6">HTML</h1>
          </div>
        </motion.div>
        <motion.div
        ref={frontendImgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mt-15 gap-6">
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/Css.png" alt="" className="w-39" />
            <h1 className="text-white mt-2">CSS</h1>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.div
        ref={frontendImgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mt-17 gap-6">
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/vite.png" alt="" className="w-35" />
            <h1 className="text-white mt-4">Vite</h1>
          </div>
        </motion.div>
        <motion.div
        ref={frontendImgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mt-15 gap-6">
          <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/logo/react.png" alt="" className="w-39" />
            <h1 className="text-white mt-2">React</h1>
          </div>
        </motion.div>
      </div>

      <motion.div 
      ref={frontendImgRef}
        initial={{ opacity: 0, y: 60 }}
        animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="flex justify-center mt-15 gap-6">
        <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
          <img src="/logo/js.webp" alt="" className="w-39" />
          <h1 className="text-white mt-2">Java Script</h1>
        </div>
      </motion.div>
      </div>

      


      <motion.div 
      ref={frontendImgRef}
        initial={{ opacity: 0, y: 60 }}
        animate={frontendImgInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="flex justify-center mt-15 gap-6">
        <div className="bg-black w-55 h-40 rounded-2xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
          <img src="/logo/tailwind.png" alt="" className="w-39" />
          <h1 className="text-white mt-2">Tailwind</h1>
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div
        ref={backendRef}
        initial={{ opacity: 0, x: 60 }}
        animate={backendInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex justify-center"
      >
        <h1 id="backend" className="text-white text-2xl mt-20">
          Backend
        </h1>
      </motion.div>
      <motion.div
        ref={backendImgRef}
        initial={{ opacity: 0, y: 60 }}
        animate={backendImgInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="flex justify-center mt-10 gap-6"
      >
        <div className="bg-black w-55 h-40 rounded-2xl items-center flex flex-col justify-center hover:scale-110 transition-transform duration-300">
          <img src="/logo/nodejs.png" alt="" className="w-33" />
          <h1 className="text-white mt-2">Node JS</h1>
        </div>
        <div className="bg-black w-55 h-40 rounded-2xl items-center flex flex-col justify-center hover:scale-110 transition-transform duration-300">
          <img src="/logo/EX.webp" alt="" className="w-35" />
          <h1 className="text-white mt-2">Express</h1>
        </div>
      </motion.div>

      {/* Design Tool */}
      <motion.div
        ref={designRef}
        initial={{ opacity: 0, x: -60 }}
        animate={designInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex justify-center mt-12"
      >
        <h1 id="design" className="text-white text-2xl mt-20">
          Design & Tools
        </h1>
      </motion.div>
      <motion.div
        ref={designImgRef}
        initial={{ opacity: 0, y: 60 }}
        animate={designImgInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="flex justify-center mt-10 gap-6"
      >
        <div className="bg-black w-55 h-40 rounded-2xl items-center flex flex-col justify-center hover:scale-110 transition-transform duration-300">
          <img src="/logo/ps.png" alt="" />
          <h1 className="text-white mt-2">Photoshop</h1>
        </div>
        <div className="bg-black w-55 h-40 rounded-2xl items-center flex flex-col justify-center hover:scale-110 transition-transform duration-300">
          <img src="/logo/figma.png" alt="" className="w-35" />
          <h1 className="text-white mt-2">Figma</h1>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Skill;
