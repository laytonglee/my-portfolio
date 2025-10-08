import React, { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isOpenMenu, setIsMenuOpen] = useState(false);

  // Ultra smooth scrolling function with advanced easing
  const smoothScrollTo = (elementId, duration = 1800) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Account for navbar height (adjust this value based on your navbar height)
    const navbarHeight = 80;
    const targetPosition = element.offsetTop - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    // Ultra smooth easing function (ease-in-out quart with extra smoothness)
    const ultraSmoothEase = (t) => {
      // Combination of ease-in-out quart and sine for maximum smoothness
      const easeInOutQuart =
        t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

      const easeInOutSine = -(Math.cos(Math.PI * t) - 1) / 2;

      // Blend both easing functions for ultimate smoothness
      return easeInOutQuart * 0.7 + easeInOutSine * 0.3;
    };

    // Smooth interpolation with micro-adjustments
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = ultraSmoothEase(progress);

      // Add micro-smoothing to reduce any potential jankiness
      const currentPosition = startPosition + distance * ease;

      // Use smooth scrolling with sub-pixel precision
      window.scrollTo({
        top: currentPosition,
        behavior: "instant", // We handle the smoothness ourselves
      });

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToSection = (sectionId) => {
    // Ultra smooth 1.8 second scroll with buttery smoothness
    smoothScrollTo(sectionId, 1200);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900/70" : "bg-white"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Code2 size={24} className="text-blue-500" />
          {""}
          <span
            className={`text-lg ml-1 cursor-default ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Laytong LY
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 ">
          {["Home", "About", "Skills", "Projects", "Highlights", "Contact"].map(
            (item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.4,
                }}
                className={`text-sm uppercase tracking-wider transition-all duration-500 ease-out ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            )
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full cursor-pointer transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isOpenMenu)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isOpenMenu ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/*Mobile Menu */}
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Highlights",
              "Contact",
            ].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
