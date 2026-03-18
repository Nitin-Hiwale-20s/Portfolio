import React from "react";
import photo from "../assets/Nitin20.jpg";
import { motion } from "framer-motion";

const LandingPage = ({ darkMode }) => {
  // Floating animation variant for tags
  const floatingVariant = (delay) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      },
    },
  });

  const tags = [
    { label: "MERN", pos: "-top-3 right-6", delay: 0 },
    { label: "Algorithms", pos: "top-10 -right-4", delay: 0.5 },
    { label: "Data Structures", pos: "bottom-6 -right-4", delay: 1 },
    { label: "Projects", pos: "-bottom-5 left-8", delay: 1.5 },
    { label: "Aptitude", pos: "top-6 left-1", delay: 2 },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-20 transition-colors duration-500 overflow-hidden ${
        darkMode ? "bg-[#0a0a0c] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Decorative Blobs (Only visible in Dark Mode) */}
      {darkMode && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]" />
        </>
      )}

      {/* Left Section: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text tracking-tight">
          Nitin Rajesh Hiwale
        </h1>

        <h3 className={`font-bold text-lg sm:text-xl transition-colors duration-500 ${
          darkMode ? "text-indigo-400" : "text-indigo-600"
        }`}>
          Full-Stack Developer | MERN | Java + DSA | React.js | 3rd Year CS Student
        </h3>

        <p className={`text-sm sm:text-lg leading-relaxed mt-4 font-light transition-colors duration-500 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}>
          Third-year BSc Computer Science student passionate about full-stack development,
          problem-solving, and modern JavaScript frameworks. Dedicated to building scalable,
          user-friendly apps with real-world impact.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 border-2 font-bold rounded-lg transition-all ${
              darkMode 
              ? "border-gray-700 text-white hover:bg-white hover:text-black" 
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Read More
          </motion.button>
        </div>
      </motion.div>

      {/* Right Section: Animated Image Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0 relative"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center">
          
          {/* Animated Outer Dotted Circle */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 border-4 border-dashed rounded-full transition-colors duration-500 ${
              darkMode ? "border-indigo-500/30" : "border-orange-400/40"
            }`}
          />

          {/* Floating Tags Section */}
          {tags.map((item, index) => (
            <motion.div
              key={index}
              variants={floatingVariant(item.delay)}
              initial="initial"
              animate="animate"
              className={`absolute ${item.pos} px-4 py-1.5 rounded-xl shadow-xl text-xs sm:text-sm font-bold z-20 backdrop-blur-md border transition-all duration-500 ${
                darkMode 
                ? "bg-white/5 border-white/10 text-indigo-300" 
                : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              {item.label}
            </motion.div>
          ))}

          {/* Profile Image with Glow Effect */}
          <div className={`relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 transition-all duration-500 ${
            darkMode ? "border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.3)]" : "border-white shadow-2xl"
          }`}>
            <img 
              src={photo} 
              alt="Nitin" 
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
