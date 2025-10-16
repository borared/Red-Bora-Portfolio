import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import View from "../components/ViewMore";
import NaekDetail from "../components/NaekDetail";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  // === Desktop refs ===
  const workRef = useRef(null);
  const posterRef = useRef(null);
  const CambodiaRef = useRef(null);
  const iphoneRef = useRef(null);
  const qouteRef = useRef(null);
  const cadthangRef = useRef(null);
  const uxuiRef = useRef(null);
  const maccRef = useRef(null);
  const detailRef = useRef(null);
  const mojoRef = useRef(null);
  const cocaRef = useRef(null);
  const irishRef = useRef(null);
  const cambodia2Ref = useRef(null);
  const qoute2Ref = useRef(null);
  const iphone2Ref = useRef(null);

  // === Mobile-only refs (new) ===
  const workMobileRef = useRef(null);
  const CambodiaMobileRef = useRef(null);
  const iphoneMobileRef = useRef(null);
  const qouteMobileRef = useRef(null);
  const cadthangMobileRef = useRef(null);
  const maccMobileRef = useRef(null);
  const mojoMobileRef = useRef(null);
  const cocaMobileRef = useRef(null);
  const irishMobileRef = useRef(null);

  // === Desktop useInView triggers ===
  const workInView = useInView(workRef, { once: true, margin: "-100px" });
  const posterInView = useInView(posterRef, { once: true, margin: "-100px" });
  const CambodiaInView = useInView(CambodiaRef, { once: true, margin: "-100px" });
  const iphoneInView = useInView(iphoneRef, { once: true, margin: "-100px" });
  const qouteInView = useInView(qouteRef, { once: true, margin: "-100px" });
  const cadthangInView = useInView(cadthangRef, { once: true, margin: "-100px" });
  const uxuiInView = useInView(uxuiRef, { once: true, margin: "-100px" });
  const maccInView = useInView(maccRef, { once: true, margin: "-100px" });
  const detailInView = useInView(detailRef, { once: true, margin: "-100px" });
  const mojoInView = useInView(mojoRef, { once: true, margin: "-100px" });
  const cocaInView = useInView(cocaRef, { once: true, margin: "-100px" });
  const irishInView = useInView(irishRef, { once: true, margin: "-100px" });

  // === Mobile useInView triggers (new) ===
  const workMobileInView = useInView(workMobileRef, { once: true, margin: "-100px" });
  const CambodiaMobileInView = useInView(CambodiaMobileRef, { once: true, margin: "-100px" });
  const iphoneMobileInView = useInView(iphoneMobileRef, { once: true, margin: "-100px" });
  const qouteMobileInView = useInView(qouteMobileRef, { once: true, margin: "-100px" });
  const cadthangMobileInView = useInView(cadthangMobileRef, { once: true, margin: "-100px" });
  const maccMobileInView = useInView(maccMobileRef, { once: true, margin: "-100px" });
  const mojoMobileInView = useInView(mojoMobileRef, { once: true, margin: "-100px" });
  const cocaMobileInView = useInView(cocaMobileRef, { once: true, margin: "-100px" });
  const irishMobileInView = useInView(irishMobileRef, { once: true, margin: "-100px" });
  
  //=== Table useInview triggers ===
  const cambodia2Inview = useInView(cambodia2Ref, { once: true, margin: "-100px" });
  const qoute2Inview = useInView(qoute2Ref, { once: true, margin: "-100px" });
  const iphone2Inview = useInView(iphone2Ref, { once: true, margin: "-100px" });

  return (
    <section className="w-screen px-17 bg-black sm:mt-15" id="work" ref={workRef}>
      {/* ==================== DESKTOP VIEW ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={workInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="px-4 items-start md:items-start hidden sm:block"
      >
        <div className="z-10 -mt-20 md:mt-5 font-bold md:text-left text-white text-2xl">
          <h2>My project</h2>
        </div>
        <div className="text-neutral-400 mt-1">
          <hr />
        </div>

        {/* Poster Designing */}
        <motion.div
          ref={posterRef}
          initial={{ opacity: 0, x: -60 }}
          animate={posterInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="z-10 md:mt-15 md:text-left text-neutral-300 text-2xl"
        >
          <h2>Poster Designing</h2>
        </motion.div>

        <div className="hidden xl:block">
          <div className="flex justify-center gap-15">
            <motion.div
              ref={CambodiaRef}
              initial={{ opacity: 0, y: 60 }}
              animate={CambodiaInView ? { opacity: 1, y: 0 } : {}}
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
              ref={iphoneRef}
              initial={{ opacity: 0, y: 60 }}
              animate={iphoneInView ? { opacity: 1, y: 0 } : {}}
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
              ref={qouteRef}
              initial={{ opacity: 0, y: 60 }}
              animate={qouteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              className="flex mt-10 mb-10 flex-wrap"
              id="Work"
            >
              <img
                src="/logo/qoute.jpg"
                alt="Qoute"
                style={{
                  width: "250px",
                  margin: "0 auto",
                }}
              />
            </motion.div>
          </div>
        </div>


        <div className="xl:hidden">
          <div className="justify-center gap-15">
            <motion.div
              ref={cambodia2Ref}
              initial={{ opacity: 0, y: 60 }}
              animate={cambodia2Inview ? { opacity: 1, y: 0 } : {}}
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
              ref={qoute2Ref}
              initial={{ opacity: 0, y: 60 }}
              animate={qoute2Inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              className="flex mt-10 mb-10 flex-wrap"
              id="Work"
            >
              <img
                src="/logo/qoute.jpg"
                alt="Qoute"
                style={{
                  width: "250px",
                  margin: "0 auto",
                }}
              />
            </motion.div>

            <motion.div
              ref={iphone2Ref}
              initial={{ opacity: 0, y: 60 }}
              animate={iphone2Inview ? { opacity: 1, y: 0 } : {}}
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
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            ref={cadthangRef}
            initial={{ opacity: 0, y: 60 }}
            animate={cadthangInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            id="Work"
          >
            <img
              src="https://res.cloudinary.com/dicrvjstp/image/upload/v1760497281/Cadt_Hang_riubcd.jpg"
              alt=""
              style={{
                width: "600px",
              }}
              className="flex justify-end mb-10"
            />
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
          ref={maccRef}
          initial={{ opacity: 0, y: 60 }}
          animate={maccInView ? { opacity: 1, y: 0 } : {}}
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
        <div className="hidden sm:block">{isOpen && <NaekDetail onClose={() => setIsOpen(false)} />}</div>
      </motion.div>

      <div className="hidden sm:block">
        <div className="text-neutral-300 mb-6 text-2xl flex justify-center mt-20">
          <p>School Project</p>
        </div>
        <motion.div
          ref={mojoRef}
          initial={{ opacity: 0, y: 60 }}
          animate={mojoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="flex justify-center"
        >
          <video
            src="https://res.cloudinary.com/dicrvjstp/video/upload/v1760585543/MojoClothes_uwxd1s.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ willChange: "opacity" }}
            className="w-200"
          ></video>
        </motion.div>
      </div>

      <div className="flex gap-1">
        <motion.div
          ref={cocaRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cocaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="transition-all mt-25 mb-15 hidden sm:block"
          id="naek"
        >
          <img src="/logo/CocaUI122.jpg" style={{ width: "800px", margin: "0 auto" }} />
        </motion.div>

        <motion.div
          ref={irishRef}
          initial={{ opacity: 0, y: 60 }}
          animate={irishInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="transition-all mt-25 mb-15 hidden sm:block"
          id="naek"
        >
          <img src="/logo/IrishWreckk.jpg" style={{ width: "770px", margin: "0 auto" }} />
        </motion.div>
      </div>

      {/* ==================== MOBILE VIEW (separate refs) ==================== */}
      <motion.section
        ref={workMobileRef}
        initial={{ opacity: 0, y: 80 }}
        animate={workMobileInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        id="work"
        className="z-10 mt-10 md:mt-20 md:text-left sm:hidden text-center px-7"
      >
        <div className="z-10 mt-10 md:mt-5 font-bold text-white text-2xl">
          <h2>My project</h2>
        </div>
        <div className="text-neutral-400 mt-1">
          <hr />
        </div>

        <div>
          <p className="text-neutral-400 mt-7 text-2xl">Poster Design</p>
        </div>

        <motion.div
          ref={CambodiaMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={CambodiaMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex mt-5 mb-10 justify-center"
          id="Work"
        >
          <img
            src="/logo/Cambodia.jpg"
            alt=""
            style={{
              width: "250px",
            }}
          />
        </motion.div>

        <motion.div
          ref={qouteMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={qouteMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex mb-5 justify-center -mt-5"
          id="Work"
        >
          <img
            src="/logo/qoute.jpg"
            alt=""
            style={{
              width: "250px",
            }}
          />
        </motion.div>

        <motion.div
          ref={iphoneMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={iphoneMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center items-center mb-10 w-full sm:hidden"
          id="Work"
        >
          <img
            src="/logo/Iphone.jpg"
            alt="Project"
            className="w-[90vw] max-w-[580px] object-contain mx-auto"
          />
        </motion.div>

        <motion.div
          ref={cadthangMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cadthangMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center items-center mb-10 w-full sm:hidden -mt-4"
          id="Work"
        >
          <img
            src="https://res.cloudinary.com/dicrvjstp/image/upload/v1760497281/Cadt_Hang_riubcd.jpg"
            alt="Project"
            className="w-[85vw] max-w-[580px] object-contain mx-auto"
          />
        </motion.div>

        <div>
          <p className="text-neutral-400 mt-7 mb-3 text-2xl">UX/UI Design</p>
        </div>

        <div>
          <p className="text-neutral-400 mt-7 mb-3 text-2xl whitespace-nowrap flex justify-center">Next-Gen Program - Batch II Project </p>
        </div>

        <motion.div
          ref={maccMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={maccMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center items-center mb-10 w-full sm:hidden"
          id="Work"
        >
          <img
            src="/logo/Macc.png"
            alt="Macc Project"
            className="w-[95vw] max-w-[600px] object-contain rounded-xl mx-auto"
          />
        </motion.div>

        <div>
          <p className="text-neutral-400 mt-7 mb-3 text-2xl flex justify-center">School Project</p>
        </div>

        <motion.div
          ref={mojoMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={mojoMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <video
            src="https://res.cloudinary.com/dicrvjstp/video/upload/v1760585543/MojoClothes_uwxd1s.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ willChange: "opacity" }}
            className="w-[85vw] max-w-[600px] object-contain mx-auto"
          ></video>
        </motion.div>

        <motion.div
          ref={cocaMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cocaMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center items-center mb-10 w-full sm:hidden"
          id="Work"
        >
          <img
            src="/logo/CocaUI122.jpg"
            alt="SchoolProject"
            className="w-[85vw] max-w-[600px] object-contain mt-5 mx-auto"
          />
        </motion.div>

        <motion.div
          ref={irishMobileRef}
          initial={{ opacity: 0, y: 60 }}
          animate={irishMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center items-center mb-10 w-full sm:hidden"
          id="Work"
        >
          <img
            src="/logo/IrishWreckk.jpg"
            alt="SchoolProject"
            className="w-[85vw] max-w-[600px] object-contain -mt-5 mx-auto"
            
          />
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Work;
