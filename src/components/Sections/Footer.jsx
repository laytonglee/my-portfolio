import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { HeartIcon } from "../../assets/icons/HeartIcon";
import { BrokenHeartIcon } from "../../assets/icons/BrokenHeartIcon";

const Footer = () => {
  const [isBroken, setIsBroken] = useState(false);
  const { isDarkMode } = useTheme();

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "Email",
    },
  ];

  return (
    <footer
      className={`w-full px-4 sm:px-6 pt-6 sm:pt-8 pb-3 transition-all duration-500 backdrop-blur-xl ${
        isDarkMode ? "bg-gray-900/70" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-400 hover:text-white"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider with Heart */}
        <div
          className="flex items-center justify-center gap-3 sm:gap-4 my-5 sm:my-6 cursor-pointer"
          onMouseEnter={() => setIsBroken(true)}
          onMouseLeave={() => setIsBroken(false)}
        >
          <div
            className={`h-px w-12 sm:w-16 ${
              isDarkMode ? "bg-gray-500" : "bg-gray-800"
            }`}
          ></div>
          {isBroken ? (
            <BrokenHeartIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce text-red-500" />
          ) : (
            <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce text-red-500" />
          )}
          <div
            className={`h-px w-12 sm:w-16 ${
              isDarkMode ? "bg-gray-500" : "bg-gray-800"
            }`}
          ></div>
        </div>

        {/* Copyright */}
        <p
          className={`text-center text-xs sm:text-sm mb-5 sm:mb-6 px-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          © 2025 <span className="font-bold">Laytong LY</span> All rights
          reserved.
        </p>

        {/* Back to Top Arrow */}
        <div
          className="flex justify-center mt-6 sm:mt-8 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          role="button"
          tabIndex={0}
          aria-label="Back to top"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <ArrowUp
            className={`w-7 h-8 sm:w-8 sm:h-10 animate-bounce transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-200 group-hover:text-white"
                : "text-gray-600 group-hover:text-gray-900"
            }`}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
