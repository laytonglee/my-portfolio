import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, itemVariants } from "../../utils/helper";
import EducationCard from "../EducationCard";
import WorkExperienceCard from "../WorkExperienceCard";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative sm:py-20 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className={`text-xs sm:text-sm md:text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Get to know Me
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 sm:mt-5 md:mt-6"
          >
            About
            <span className="text-blue-500 font-medium"> Me</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`sm:text-lg md:text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-4xl mx-auto font-light mt-5 sm:mt-6 md:mt-8 px-4 sm:px-0`}
          >
            I'm a passionate developer with a strong focus on building modern,
            scalable web applications. My journey blends creativity and
            problem-solving, where I enjoy turning ideas into impactful digital
            experiences.
          </motion.p>
        </motion.div>

        {/* Sections */}
        <div className="mt-10 space-y-8 sm:mt-20 md:mt-24 lg:mt-28 sm:space-y-20 md:space-y-24 lg:space-y-28">
          <EducationCard />
          <WorkExperienceCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
