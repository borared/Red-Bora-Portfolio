import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation({ onLinkClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      // ✅ Close mobile menu first so scroll works
      if (onLinkClick) onLinkClick(); 
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="nav-ul flex flex-col sm:flex-row px-4 space-y-4 sm:space-y-0 sm:space-x-10 md:space-x-20 xl:space-x-20 font-semibold transition-colors">
      {[
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "work", label: "Project" },
        { id: "contact", label: "Contact" },
      ].map((item) => (
        <li
          key={item.id}
          className="nav-li text-white transition-colors hover:text-white hover:underline"
        >
          <a
            href={`#${item.id}`}
            onClick={(e) => handleNav(e, item.id)}
            className="nav-link"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-x-0 z-20 bg-transparent w-full px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-12">
          <a
            href="/"
            onClick={handleHomeClick}
            className="text-xl font-bold transition-colors text-white  px-4"
          >
            © Red Bora.
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="px-4 flex cursor-pointer text-neutral-500 hover:text-white focus:outline-none relative w-6 h-6 sm:hidden"
          >
            <img
              src="/logo/menu.svg"
              alt="menu"
              className={`absolute w-6 h-6 transition-all duration-300 ${
                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            />
            <img
              src="/logo/close.svg"
              alt="close"
              className={`absolute w-6 h-6 transition-all duration-300 ${
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
          </button>
          <nav className="hidden sm:flex text-neutral-500">
            <Navigation />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden fixed top-12 left-0 w-full z-20 text-neutral-500 backdrop-blur-sm transition-all"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 10 }}
            style={{ maxHeight: "100vh", background: "rgba(0, 0, 0, 1)" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center py-6">
              {/* ✅ Pass setIsOpen(false) to close on mobile */}
              <Navigation onLinkClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
