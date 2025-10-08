import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Zap, Users } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-18 px-4  sm:py-20 md:py-24 lg:py-32 sm:px-6 md:px-8 lg:px-12 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`text-xs sm:text-sm md:text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Featured Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light sm:mt-5 md:mt-6"
          >
            Recent
            <span className="text-blue-500 font-medium"> Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-lg md:max-w-3xl ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-4xl mx-auto font-light mt-5 sm:mt-6 md:mt-8 px-4 sm:px-0`}
          >
            A collection of projects that showcase my expertise in building
            modern web applications and solving complex problems
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-7 md:gap-8 mt-12 sm:mt-18 md:mt-20 lg:mt-24"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.id}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
