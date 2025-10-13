import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Sent from "../components/ButtonSent";
import Button from "../components/Social";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_wik08fh",
        "template_lw3k4qx",
        {
          from_name: formData.name,
          to_name: "Red Bora",
          from_email: formData.email,
          to_email: "boraofficial76@gmail.com",
          message: formData.message,
        },
        "hVDbZjK4qlfMea4TT"
      );
      setIsLoading(false);
      alert("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("failed!");
    }
    //service_wik08fh
    //template_lw3k4qx
  };
  // Ref for scroll-triggered animation
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, margin: "-100px" });

  const sentRef = useRef(null);
  const sentInView = useInView(sentRef, { once: true, margin: "-100px" });
  return (
    <section
      id="contact"
      className="w-screen px-15 relative overflow-hidden mt-15 min-h-screen"
    >
      {/* video background - optimized for smoothness */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ willChange: "opacity" }}
      >
        <source src="/video/videoM.mp4" type="video/mp4" />
      </video> */}
      <img 
      className="absolute inset-0 w-full h-full object-cover -z-10"
      src="/logo/Inovation.jpg" alt="" />
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none -z-5" />

      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="items-start px-4 hidden sm:block relative z-10"
      >
        <div className="z-10 -mt-20 md:mt-5 font-bold md:text-left text-white text-2xl ">
          <h2>Contact</h2>
        </div>

        <div className="mt-2 text-neutral-400">
          <hr />
        </div>

        <div className="flex justify-center font-semibold text-3xl text-orange-500 mt-10">
          <p className="text-white mt-6 text-5xl font-bold flex justify-center">
            Want Your Project Comes to Life?
          </p>
        </div>

        <motion.div
          ref={sentRef}
          initial={{ opacity: 0, y: 80 }}
          animate={sentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="wrap"
        >
          <div className="wrapper">
            <div className="text-white object-center flex justify-center">
              <form onSubmit={handleSubmit}>
                <div className="chat">
                  <h2 className="let">Let's get in touch</h2>
                  <div className="InputName">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="text-neutral-400">
                      {" "}
                      <hr />
                    </div>
                  </div>

                  <div></div>
                  <div className="Input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-neutral-400">
                    {" "}
                    <hr />
                  </div>
                  <div>
                    <h2 className="message">Message me</h2>
                    <div className="int">
                      <textarea
                        className="sms"
                        name="message"
                        placeholder="Tell me about your project...."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          width: 340,
                          height: 300,
                        }}
                      />
                      <div className="btn">
                        <button>
                          {!isLoading ? "" : ""}
                          <Sent />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Social">
                  <div id="Ssocial" className="flex justify-center ">
                    <Button />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* video background moved above, nothing needed here */}
      <p className="mt-25"></p>
    </section>
  );
};
export default Contact;
