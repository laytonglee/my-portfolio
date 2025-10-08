import React, { useCallback, useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { HIGHLIGHTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HighlightsCard from "../HighlightsCard";

const HighlightsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Prevent Autoplay from being recreated on re-renders
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className={`py-18 sm:py-20 md:py-24 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-xs sm:text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Highlights
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light sm:mt-65 md:mt-6"
          >
            Key
            <span className="text-blue-500 font-medium"> Moments</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg max-w-4xl lg:max-w-4xl lg:text-lg mx-auto font-light mt-4 sm:mt-6 md:mt-8 px-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Significant projects, certifications, and experiences that
            demonstrate my skills and accomplishments.
          </motion.p>
        </motion.div>

        {/* Achievement Slider */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {HIGHLIGHTS.map((achieve, index) => (
                <div
                  className="flex-[0_0_100%] min-w-0 px-4 sm:px-4 md:p-4 "
                  key={index}
                >
                  <HighlightsCard achieve={achieve} isDarkMode={isDarkMode} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="mt-5 flex justify-center gap-2 sm:gap-3 sm:mt-10 md:mt-12">
            {HIGHLIGHTS.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-blue-500 w-6 sm:w-8"
                    : isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;
