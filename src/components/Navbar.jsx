import { useState, useEffect } from "react";
import {
  FiDownload,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { personalInfo } from "../data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="/"
          className="text-2xl font-extrabold text-gray-900"
        >
          &lt;PD /&gt;
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-medium text-gray-600 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            </li>
          ))}

        </ul>

        {/* Desktop Resume */}

        <a
          href={personalInfo.resume}
          className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 md:flex"
        >
          <FiDownload />
          Resume
        </a>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-700 transition md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t border-gray-200 bg-white md:hidden"
          >

            <div className="flex flex-col px-6 py-5">

              {navItems.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg font-medium text-gray-700 transition hover:text-blue-600"
                >
                  {item.label}
                </a>

              ))}

              <a
                href={personalInfo.resume}
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <FiDownload />
                Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;