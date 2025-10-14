import { useNavigate } from "react-router-dom";
import React from "react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section>
      <footer id="footer" className="w-screen py-5 mt-15">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-white text-5xl font-normal mb-4">
            {`Let's bring what you come up with`}
          </h1>
          <p className="text-white text-lg mb-6 font-normal">
            I'm always excited to discuss new opportunities, collaborate on
            interesting projects, or simply chat about technology and
            innovation.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              id="learnbtn"
              className="bg-white text-black font-normal px-6 py-3 rounded-lg hover:text-black transition-all"
              onClick={() => navigate("/learnpage")}
            >
              Learn more about me
            </button>
            <p id="or" className="font-normal text-white items-center">
              OR
            </p>
            <a
              id="downloadbtn"
              href="/Red Bora CV.pdf"
              download="Red Bora CV.pdf"
              className="bg-white text-black font-normal px-6 py-3 rounded-lg hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <img
                src="/logo/icondownload.png"
                alt="Download"
                className="w-5 h-5"
                id="downloadicon"
              />
              Download my resume
            </a>
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

export default Footer;
