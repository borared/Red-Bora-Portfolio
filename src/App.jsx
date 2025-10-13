import React, { useState } from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Work from "./section/Work";
import Contact from "./section/Contact";
import Footer from "./section/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearnPage from "./section/LearnPage";
import Skill from "./section/Skill";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full overflow-x-hidden">
              <Navbar />
              <Hero />
              <About />
              <Work />
              <Skill/>
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/learnpage" element={<LearnPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
