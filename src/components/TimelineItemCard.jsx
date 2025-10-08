import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const TimelineItemCard = ({
  title,
  subtitle,
  duration,
  description,
  points,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative mt-4 md:pl-64 lg:pl-72 py-4 group pl-12"
    >
      {/* Vertical Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className={`absolute left-2 md:left-64 lg:left-72 h-full w-px origin-top -translate-x-1/2 translate-y-5 group-last:hidden
        ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
      />

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        className={`absolute left-2 md:left-64 lg:left-72 w-3.5 h-3.5 rounded-full border-2 -translate-x-1/2 translate-y-1.5
        ${
          isDarkMode
            ? "bg-blue-400 border-gray-300"
            : "bg-blue-500 border-white"
        }`}
      />

      <div className="flex flex-col md:flex-row items-start mb-3 ">
        <motion.div
          className="md:absolute left-0 translate-y-0 w-full md:w-60 lg:w-64 mb-4 md:mb-0"
          variants={itemVariants}
        >
          <div
            className={`${
              isDarkMode ? "text-white" : "text-gray-900"
            } text-base sm:text-lg md:text-lg font-semibold`}
          >
            {title}
          </div>
          <div
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-xs sm:text-sm md:text-sm font-thin mt-1 sm:mt-2`}
          >
            {duration}
          </div>
        </motion.div>

        <div className="flex-1 md:ml-16 lg:ml-20">
          <motion.div
            className={`${
              isDarkMode ? "text-white" : "text-gray-900"
            } mt-1 text-base sm:text-lg md:text-lg font-semibold mb-2 sm:mb-3`}
            variants={itemVariants}
          >
            {subtitle}
          </motion.div>
          <motion.div
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mt-3 text-sm sm:text-base sm:mb-3`}
            variants={itemVariants}
          >
            {description}
          </motion.div>
          {points && (
            <motion.ul
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mt-4 text-sm sm:text-base space-y-3 sm:space-y-2 `}
              variants={itemVariants}
            >
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start mt-3"
                  variants={itemVariants}
                >
                  <span
                    className={`${
                      isDarkMode ? "text-blue-400" : "text-blue-500"
                    } `}
                  >
                    •
                  </span>
                  <span className="pl-2">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItemCard;
