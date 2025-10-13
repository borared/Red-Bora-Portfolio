import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";

const LearnPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Refs for in-view movement
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img1InView = useInView(img1Ref, { once: true, margin: "-100px" });
  const img2InView = useInView(img2Ref, { once: true, margin: "-100px" });
  const img3InView = useInView(img3Ref, { once: true, margin: "-100px" });
  const img4InView = useInView(img4Ref, { once: true, margin: "-100px" });

  const navigate = useNavigate();

  // Handler for Contact me button
  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to allow navigation
  };

  return (
    <section>
      <div className="px-17">
        <Navbar />
      </div>

      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-white mt-20">More About Me</h1>
      </div>

      <div>
        <h1 className="text-3xl text-neutral-500 px-36 mt-10 flex justify-center">
          Education Journey
        </h1>
      </div>

      {/* Image + Text container */}
      <div className="relative w-full h-[450px] overflow-hidden mt-6 group">
        {/* Image with in-view movement */}
        <motion.img
          ref={img1Ref}
          src="/logo/CCADDTT.jpg"
          alt="Education Background"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          initial={{ opacity: 0, y: 80 }}
          animate={img1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Dark overlay (non-interactive) */}
        <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none" />

        {/* Text overlays */}
        <h1 className="absolute left-10 top-62 text-white text-3xl font-bold z-10">
          Bachelor of Computer Science
        </h1>
        <h1 className="absolute left-10 top-73 text-white text-2xl font-normal z-10">
          Cambodia Academy of Digital Technology (CADT)
        </h1>

        <div className="flex gap-3">
          <h1
            id="specialize"
            className="absolute left-10 top-85 text-blue-800 w-60 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Specialize: Software Engineer
          </h1>

          <h1
            id="specialize"
            className="absolute left-75 top-85 text-blue-800 w-60 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Focus: Full Stack Development
          </h1>
        </div>

        <h1 className="absolute bottom-5 left-10 text-white text-3xl font-bold z-10">
          2024 - Present
        </h1>
      </div>

      {/* Image + Text container */}
      <div className="relative w-full h-[450px] overflow-hidden mt-2 group">
        {/* Image with in-view movement */}
        <motion.img
          ref={img2Ref}
          src="/logo/HighSchool.jpg"
          alt="Education Background"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          initial={{ opacity: 0, y: 80 }}
          animate={img2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Dark overlay (non-interactive) */}
        <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none" />

        {/* Text overlays */}
        <h1 className="absolute left-10 top-62 text-white text-3xl font-bold z-10">
          High School Diploma
        </h1>
        <h1 className="absolute left-10 top-73 text-white text-2xl font-normal z-10">
          Prek Loung High School
        </h1>

        <div className="flex gap-3">
          <h1
            id="specialize"
            className="absolute left-10 top-85 text-blue-800 w-35 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Focus: Science
          </h1>

          <h1
            id="specialize"
            className="absolute left-50 top-85 text-blue-800 w-39 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Grade: A 99.403
          </h1>
        </div>

        <h1 className="absolute bottom-5 left-10 text-white text-3xl font-bold z-10">
          2022 - 2024
        </h1>
      </div>

      {/* Image + Text container */}
      <div className="relative w-full h-[450px] overflow-hidden mt-2 group">
        {/* Image with in-view movement */}
        <motion.img
          ref={img3Ref}
          src="/logo/pannasastra.jpg"
          alt="Education Background"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          initial={{ opacity: 0, y: 80 }}
          animate={img3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Dark overlay (non-interactive) */}
        <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none" />

        {/* Text overlays */}
        <h1 className="absolute left-10 top-62 text-white text-3xl font-bold z-10">
          Second Language Diploma
        </h1>
        <h1 className="absolute left-10 top-73 text-white text-2xl font-normal z-10">
          Pannasastra University of Cambodia
        </h1>

        <div className="flex gap-3">
          <h1
            id="specialize"
            className="absolute left-10 top-85 text-blue-800 w-35 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Focus: English
          </h1>

          <h1
            id="specialize"
            className="absolute left-50 top-85 text-blue-800 w-35 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Grade: B
          </h1>
        </div>

        <h1 className="absolute bottom-5 left-10 text-white text-3xl font-bold z-10">
          2023 - 2024
        </h1>
      </div>

      <div>
        <h1 className="text-3xl text-neutral-500 px-36 mt-20 flex justify-center">
          Experience
        </h1>
      </div>

      {/* Image + Text container */}
      <div className="relative w-full h-[450px] overflow-hidden mt-5 group">
        {/* Image with in-view movement */}
        <motion.img
          ref={img4Ref}
          src="/logo/Next-Gen.jpg"
          alt="Education Background"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          initial={{ opacity: 0, y: 80 }}
          animate={img4InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Dark overlay (non-interactive) */}
        <div className="absolute inset-0 bg-black/40 z-[5] pointer-events-none" />

        {/* Text overlays */}
        <h1 className="absolute left-10 top-62 text-white text-3xl font-bold z-10">
          Next-Gen Engagement Program - Batch II
        </h1>
        <h1 className="absolute left-10 top-73 text-white text-2xl font-normal z-10">
          Cambodia Academy of Digital Technology (CADT)
        </h1>

        <div className="flex gap-3">
          <h1
            id="specialize"
            className="absolute left-10 top-85 text-blue-800 w-60 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Focus: Web Development
          </h1>

          <h1
            id="specialize"
            className="absolute left-73 top-85 text-blue-800 w-50 flex justify-center items-center rounded-2xl bg-blue-200 text-1xl font-normal z-10"
          >
            Get Along with Senior
          </h1>
        </div>

        <h1 className="absolute bottom-5 left-10 text-white text-3xl font-bold z-10">
          5 weeks (Aug-Sep 2025)
        </h1>
      </div>

      <footer id="footer" className="w-screen py-5 mt-15">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl font-normal mb-4">
            Get along with me
          </h1>
          <p className="text-white text-lg mb-6 font-normal">
            I'm always excited to discuss new opportunities, collaborate on
            interesting projects, or simply chat about technology and
            innovation.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              id="contactbtn"
              className="bg-white text-black font-normal px-6 py-3 rounded-lg hover:text-black transition-all"
              onClick={handleContactClick}
            >
              Contact me
            </button>
          </div>
          <div id="endfooter">
            <p className="text-1xl text-neutral-400">
              ©2025 Red Bora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default LearnPage;
