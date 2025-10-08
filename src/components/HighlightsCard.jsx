// HighlightsCard.js
import { memo } from "react";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "../utils/helper"; // make sure containerVariants is imported

const HighlightsCard = memo(({ achieve, isDarkMode }) => (
  <motion.div
    variants={itemVariants} // individual card animation
    className={`p-4 rounded-2xl transition-colors duration-500 border ${
      isDarkMode ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"
    }`}
    whileHover={{
      scale: 1.01,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
  >
    <motion.div className="flex flex-col lg:flex-row items-stretch gap-6 ">
      {/* Text Section */}
      <div className="flex flex-col flex-grow space-y-4 pl-6">
        <div className="relative">
          <h3
            className={`text-2xl font-medium tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {achieve.title}
          </h3>
        </div>

        <div className="space-y-3 mr-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`mt-2 leading-relaxed flex flex-col items-start gap-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>{achieve.description_top}</span>
            <span className="mt-4">{achieve.description_bottom}</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center overflow-hidden ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              {achieve.icon && (
                <achieve.icon className="w-12 h-12 text-white" />
              )}
            </div>
          </motion.div>
          <div className="flex flex-col gap-1">
            <span
              className={`text-base font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {achieve.tag_top}
            </span>
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {achieve.tag_bottom}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 w-full lg:w-1/3">
        <img
          src={achieve.image}
          alt={achieve.title}
          className="rounded-2xl w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  </motion.div>
));

export default HighlightsCard;
