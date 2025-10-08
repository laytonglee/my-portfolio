import React from "react";
import { useTheme } from "../context/ThemeContext";
import { itemVariants, containerVariants } from "../utils/helper";
import { motion } from "framer-motion";
import TimelineItemCard from "./TimelineItemCard";
import { EDUCATIONS } from "../utils/data";

const EducationCard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`px-4 sm:p-8 md:p-10 lg:p-0 sm:mt-10 md:mt-12  ${
        isDarkMode ? "text-gray-400" : "text-gray-500"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="sm:mb-10 md:mb-12"
      >
        <motion.h1
          variants={itemVariants}
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } text-2xl sm:text-3xl md:text-4xl font-normal`}
        >
          My Education
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className={`${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } text-base sm:text-lg md:text-lg mt-4 sm:mt-5 md:mt-6`}
        >
          Focused on tech-driven learning through practical experience and
          innovative coursework.
        </motion.p>
      </motion.div>

      {EDUCATIONS.map((edu, idx) => (
        <TimelineItemCard key={idx} {...edu} />
      ))}
    </div>
  );
};

export default EducationCard;
