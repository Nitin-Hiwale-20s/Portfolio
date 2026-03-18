import React from "react";
import logo from "../assets/logoNH.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
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

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.5 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0c] text-white pt-16 pb-8 overflow-hidden w-full border-t border-gray-800/30">
      
      {/* Dynamic Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent blur-[1px]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/40">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6 text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-1 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 shadow-lg shadow-orange-500/20"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0a0a0c]"
                />
              </motion.div>
              <div>
                <h1 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white">
                  Nitin <span className="text-orange-500">Hiwale</span>
                </h1>
                <p className="text-[10px] text-orange-400 font-black uppercase tracking-[0.2em]">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Transforming complex problems into elegant, high-performance web solutions.
            </p>
          </motion.div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {skills.map((section, index) => (
              <motion.div
                key={section.title}
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-gray-100 font-bold mb-5 text-sm uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <motion.li 
                      key={item} 
                      variants={itemVariant}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <span className="text-gray-500 group-hover:text-orange-400 transition-all duration-300 text-sm cursor-pointer flex items-center gap-2 font-semibold">
                        <span className="w-1 h-1 bg-orange-600 rounded-full group-hover:shadow-[0_0_8px_rgba(249,115,22,1)]" />
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            &copy; {currentYear} Nitin Hiwale
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-4 text-gray-500">
               <a href="https://github.com/Nitin-Hiwale-20s" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors text-xl"><FaGithub /></a>
               <a href="http://www.linkedin.com/in/nitin-hiwale-5409gn" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors text-xl"><FaLinkedin /></a>
               <a href="https://www.instagram.com/nitin_hiwale_96k/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors text-xl"><FaInstagram /></a>
            </div>

            <div className="w-[1px] h-6 bg-gray-800" />

            <button
              onClick={scrollToTop}
              className="p-3 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-orange-500 group"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={14} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;