import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import View from "../components/ViewMore";
import NaekDetail from "../components/NaekDetail";
import qoute from "../asset/qoute.jpg";
import CocaUI122 from "../asset/CocaUI122.jpg";
import IrishWreckk from "../asset/IrishWreckk.jpg";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for scroll-triggered animation
  const workRef = useRef(null);
  const posterRef = useRef(null);
  const posterImgRef = useRef(null);
  const uxuiRef = useRef(null);
  const uxuiImgRef = useRef(null);
  const detailRef = useRef(null);
  const cocaRef = useRef(null);
  const irishRef = useRef(null);
  const cadthangRef = useRef(null);

  const detailInView = useInView(detailRef, { once: true, margin: "-100px" });
  const isInView = useInView(workRef, { once: true, margin: "-100px" });
  const posterInView = useInView(posterRef, { once: true, margin: "-100px" });
  const posterImgInView = useInView(posterImgRef, {
    once: true,
    margin: "-100px",
  });
 
  const uxuiInView = useInView(uxuiRef, { once: true, margin: "-100px" });
  const uxuiImgInView = useInView(uxuiImgRef, { once: true, margin: "-100px" });
  const cocaInview = useInView(cocaRef, {once: true, margin: "-100px"});
  const irishInview = useInView(irishRef, {once:true, margin: "-100px"});
  const cadthangInview = useInView(cadthangRef, {once: true, margin: "-100px"});
  return (
    <section className="w-screen px-17 bg-black-" id="work">
      <motion.div
        ref={workRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="px-4 hidden sm:block items-start md:items-start"
        id="work"
      >
        <div className="z-10 -mt-20 md:mt-5 font-bold md:text-left text-white text-2xl">
          <h2>My project</h2>
        </div>
        <div className="text-neutral-400 mt-1">
          <hr />
        </div>

       

        {/* Poster Designing Section */}
        <motion.div
          ref={posterRef}
          initial={{ opacity: 0, x: -60 }}
          animate={posterInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="z-10 md:mt-15 md:text-left text-neutral-300 text-2xl"
        >
          <h2>Poster Designing</h2>
        </motion.div>

        <div className="flex justify-center gap-15">
          <motion.div
            ref={posterImgRef}
            initial={{ opacity: 0, y: 60 }}
            animate={posterImgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex mt-10 mb-10 flex-wrap"
            id="Work"
          >
            <img
              src="/logo/Cambodia.jpg"
              alt="Cambodia"
              style={{
                width: "250px",
                margin: "0 auto",
              }}
            />
            </motion.div>
            <motion.div
            ref={posterImgRef}
            initial={{ opacity: 0, y: 60 }}
            animate={posterImgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex mt-10 mb-10 flex-wrap"
            id="Work"
          >
            <img
              src="/logo/Iphone.jpg"
              alt="Iphone"
              style={{
                width: "600px",
                margin: "0 auto",
              }}
            />
            </motion.div>
            <motion.div
            ref={posterImgRef}
            initial={{ opacity: 0, y: 60 }}
            animate={posterImgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="flex mt-10 mb-10 flex-wrap"
            id="Work"
          >
            <img
              src={qoute}
              alt="Qoute"
              style={{
                width: "250px",
                margin: "0 auto",
              }}
            />
            </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.div
          ref={cadthangRef}
            initial={{ opacity: 0, y: 60 }}
            animate={cadthangInview ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            id="Work"
            >
            <img
            src="/logo/Cadt Hang.jpg" alt="" 
            style={{
              width: "700px",
            }}
            className="flex justify-end"/>
          </motion.div>
        </div>
        

        

        {/* UX/UI Design Section */}
        <motion.div
          ref={uxuiRef}
          initial={{ opacity: 0, x: 60 }}
          animate={uxuiInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="z-10 md:mt-15 md:text-left text-neutral-300 text-2xl"
        >
          <h2>UX/UI Design</h2>
        </motion.div>

        <motion.div
          ref={uxuiImgRef}
          initial={{ opacity: 0, y: 60 }}
          animate={uxuiImgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="transition-all mt-6"
          id="naek"
        >
          <img
            src="/logo/Macc.png"
            alt="Naek"
            style={{
              width: "1000px",
              borderRadius: "15px",
              margin: "0 auto",
            }}
          />
          <div className="flex justify-center mt-5">
          <View onClick={() => setIsOpen(true)} />
        </div>

        </motion.div>

        
        
        
      </motion.div>
      {/* ✅ Only render when open */}
      <motion.div
      ref={detailRef}
          initial={{ opacity: 0, x: 60 }}
          animate={detailInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          id="detail"
      >
        {isOpen && <NaekDetail onClose={() => setIsOpen(false)}/>}

        </motion.div>
        
        <div className="mt-20">
          <div className="text-neutral-300 mb-6 text-2xl flex justify-center"><p>School Project</p></div>
          <div className="flex justify-center">
            <video src="/video/MojoClothes.mp4"
            autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ willChange: "opacity" }}
          className="w-200"
            ></video>
          </div>
        </div>

        <div className="flex gap-1">
          <motion.div
            ref={cocaRef}
            initial={{ opacity: 0, y: 60 }}
            animate={cocaInview ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="transition-all mt-25 mb-15"
            id="naek"
          >
            <img
              src={CocaUI122}
              style={{
                width: "800px",
                height: "403px",
                margin: "0 auto",
              }}
            />
          </motion.div>

          <motion.div
            ref={irishRef}
            initial={{ opacity: 0, y: 60 }}
            animate={irishInview ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="transition-all mt-25 mb-15"
            id="naek"
          >
            <img
              src={IrishWreckk}
              style={{
                width: "800px",
                margin: "0 auto",
              }}
            />
          </motion.div>
        </div>
    </section>
  );
};

export default Work;
