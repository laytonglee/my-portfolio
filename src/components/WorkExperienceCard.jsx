import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "../utils/helper";
import TimelineItemCard from "./TimelineItemCard";
import { EXPERIENCES } from "../utils/data";

const WorkExperienceCard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="px-4 sm:p-8 md:p-10 lg:p-0 sm:mt-10 md:mt-12 ">
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
          Work Experience
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className={`${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } text-base sm:text-lg md:text-lg mt-4 sm:mt-5 md:mt-6`}
        >
          Hands-on experience in building scalable systems, solving real-world
          problems, and collaborating on impactful tech projects.
        </motion.p>
      </motion.div>

      {EXPERIENCES.map((exp, idx) => (
        <TimelineItemCard key={idx} {...exp} />
      ))}
    </div>
  );
};

export default WorkExperienceCard;
