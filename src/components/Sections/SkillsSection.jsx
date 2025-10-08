// src/components/sections/SkillsSection.jsx
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-18 px-4 sm:py-20 md:py-24 lg:py-32 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10 ">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className={`text-xs sm:text-sm md:text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 sm:mt-5 md:mt-6"
          >
            Skills &
            <span className="text-blue-500 font-medium"> Technologies</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-4xl mx-auto font-light mt-5 sm:mt-6 md:mt-8 px-4  sm:px-0`}
          >
            A comprehensive toolkit for building modern, scalable web
            applications from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-20 md:mt-24 lg:mt-28 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 sm:gap-x-10 md:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24 place-items-center"
          variants={containerVariants}
        >
          {SKILLS.map((skill, idx) => {
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <motion.div
                  className="w-18 h-18 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 my-3 sm:my-4 mx-auto flex items-center justify-center"
                  initial={{ filter: isDesktop ? "grayscale(100%)" : "none" }}
                  animate={{ filter: isDesktop ? "grayscale(100%)" : "none" }}
                  transition={{ duration: 0.3 }}
                  whileHover={
                    isDesktop ? { scale: 1.1, filter: "grayscale(0%)" } : {}
                  }
                >
                  {isDesktop ? (
                    <skill.component />
                  ) : skill.originalSvg ? (
                    <skill.originalSvg />
                  ) : (
                    <skill.component />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
