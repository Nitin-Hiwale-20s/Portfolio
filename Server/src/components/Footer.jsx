import React from "react";
import logo from "../assets/logoNH.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const skills = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      items: ["VS Code", "GitHub", "Postman", "Terminal"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-10 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700 text-center sm:text-left">
          
          {/* Logo and Intro */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover mx-auto sm:mx-0"
              />
              <h1 className="font-bold text-2xl md:text-3xl">Nitin Hiwale</h1>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building modern web apps using the MERN Stack and clean UI design.
            </p>
          </div>

          {/* Skills */}
          {skills.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4 sm:gap-0 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} <span className="font-semibold">Nitin Hiwale</span>. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-gray-400 text-2xl">
            <a
              href="https://www.instagram.com/nitin_hiwale_96k/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="http://www.linkedin.com/in/nitin-hiwale-5409gn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Nitin-Hiwale-20s"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
