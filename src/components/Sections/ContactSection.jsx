import React, { useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { itemVariants, containerVariants } from "../../utils/helper";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { TelegramIcon } from "../../assets/icons/TelegramIcon";
import { LinkedinIcon } from "../../assets/icons/LinkedinIcon";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5478bf69-921a-4b33-9df9-c36f21b3c702",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Portfolio Contact from ${formData.name}`,
          message: formData.description,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-18 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center sm:mb-16 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-xs sm:text-sm uppercase tracking-widest sm:mb-4 ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className={`mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light sm:mt-5 md:mt-6`}
          >
            Get In
            <span className="text-blue-500 font-medium"> Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-lg md:mt-10 max-w-4xl mt-5 mx-auto font-light px-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Ready to start your next project? Let's discuss how can we bring
            ideas to life
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-6 sm:pt-8 "
        >
          {/* Left Section - Contact Information */}
          <motion.div
            variants={itemVariants}
            className={`p-4 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl w-full lg:w-[55%]`}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal">
                Contact Information
              </h2>
              <p
                className={`mt-6 sm:mt-6 lg:mt-9 text-sm leading-6 sm:text-base ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm dedicated to providing reliable support and delivering
                quality work, ensuring that every project meets your
                expectations.
              </p>

              <div
                className={`space-y-5 sm:space-y-6 lg:space-y-8 mt-8 sm:mt-8 lg:mt-9 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    St 444, Chamkar Mon, Phnom Penh
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    <a
                      href="mailto:laytongly@gmail.com"
                      className="hover:underline break-all"
                    >
                      laytongly@gmail.com
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    <a href="tel:+85587895155" className="hover:underline">
                      +855 878 951 55
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-12">
              <a
                href="https://facebook.com/laytong.ly/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a
                href="https://www.instagram.com/laytongg_lee/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a
                href="https://t.me/laytongg"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/laytong-ly-7178b72a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            variants={itemVariants}
            className={`mt-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 w-full lg:w-[45%] transition-colors duration-500 ${
              isDarkMode
                ? "bg-gray-900/50 border-gray-700 text-gray-200"
                : "bg-gray-100 border-gray-200 text-gray-900"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  className={`block text-sm sm:text-base font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-3 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-sm sm:text-base font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-3 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-sm sm:text-base font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full px-3 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-sm sm:text-base font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Message"
                  rows="4"
                  value={formData.description}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className={`w-full px-3 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
