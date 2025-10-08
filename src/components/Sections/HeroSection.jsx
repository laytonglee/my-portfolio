import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/images/profile-img.jpg";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto w-full z-10 pt-12">
          {/* ========== MOBILE + TABLET ========== */}
          <div className="lg:hidden flex flex-col items-center justify-center min-h-screen text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center"
            >
              {/* Profile Image */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-46 h-46 sm:w-36 sm:h-36 md:w-44 md:h-44 relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-full rounded-2xl overflow-hidden border-4 shadow-2xl ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    }`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                variants={textVariants}
                className={`text-xs sm:text-sm uppercase tracking-widest mb-4 ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                variants={itemVariants}
                className={`text-sm sm:text-base md:text-lg mb-8 max-w-md mx-auto font-light leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6"
              >
                {[{ icon: FiGithub }, { icon: FiLinkedin }, { icon: Mail }].map(
                  (social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-3 rounded-full transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  )
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* ========== DESKTOP ========== */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center pt-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest mb-6 ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-12 font-light leading-relaxed max-w-lg`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[{ icon: FiGithub }, { icon: FiLinkedin }, { icon: Mail }].map(
                  (social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-3 rounded-full transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative flex justify-end mr-20 mb-24"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative group"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-2xl opacity-60 group-hover:opacity-80 transition duration-500" />

                <div
                  className={`relative w-72 h-80 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl 
                    bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Profile"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
