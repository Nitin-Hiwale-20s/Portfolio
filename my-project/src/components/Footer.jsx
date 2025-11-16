import React from "react";
import logo from "../assets/logoNH.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

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

  // Stagger effect for skill items
  const listVariant = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-gray-900 text-white pt-10 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700 text-center sm:text-left"
        >
          {/* Logo & Intro */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3">
              <motion.img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover mx-auto sm:mx-0"
                whileHover={{ rotate: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <h1 className="font-bold text-2xl md:text-3xl">Nitin Hiwale</h1>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building modern web apps using the MERN Stack and clean UI design.
            </p>
          </motion.div>

          {/* Skills Sections */}
          {skills.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-3">{section.title}</h4>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-2"
              >
                {section.items.map((item, i) => (
                  <motion.li key={item} variants={listVariant}>
                    <span className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm cursor-pointer">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4 sm:gap-0 text-center"
        >
          <p className="text-sm text-gray-500">
            &copy; {currentYear} <span className="font-semibold">Nitin Hiwale</span>. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-gray-400 text-2xl">
            {[ 
              { icon: <FaInstagram />, link: "https://www.instagram.com/nitin_hiwale_96k/" },
              { icon: <FaLinkedin />, link: "http://www.linkedin.com/in/nitin-hiwale-5409gn" },
              { icon: <FaGithub />, link: "https://github.com/Nitin-Hiwale-20s" }
            ].map(({ icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.25, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="hover:text-indigo-400"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
