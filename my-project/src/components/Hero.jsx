import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioBack from "../assets/Black1.jpg"; // Night Image
// import DayBack from "../assets/White1.jpg"; // Jar tujhyakade Light mode sathi dusri image asel tar

const Hero = ({ darkMode }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden transition-colors duration-500">
      
      {/* Background Logic */}
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.div
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${PortfolioBack})` 
            }}
          />
        ) : (
          <motion.div
            key="light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white"
          />
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className="relative z-10 container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Text Overlay */}
          <h1 className={`absolute left-1/2 -translate-x-1/2 -top-12 text-7xl md:text-9xl font-black tracking-widest select-none transition-colors duration-500 ${
            darkMode ? "text-white/5" : "text-black/5"
          }`}>
            PORTFOLIO
          </h1>

          <motion.p
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            animate={{ letterSpacing: "0.4em", opacity: 1 }}
            className={`text-sm md:text-base font-bold uppercase mb-4 transition-colors duration-500 ${
              darkMode ? "text-orange-400" : "text-orange-600"
            }`}
          >
            I AM
          </motion.p>

          <h2 className={`text-5xl md:text-8xl font-black transition-colors duration-500 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Nitin Rajesh <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Hiwale
            </span>
          </h2>

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            className="mx-auto my-8 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
          />

          <motion.p
            className={`text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span className={darkMode ? "text-white font-semibold" : "text-black font-bold"}>
              Full-Stack Developer
            </span>{" "}
            | MERN Stack | Java & DSA Enthusiast <br />
            <span className="text-sm md:text-lg italic mt-2 block">
              3rd Year Computer Science Student
            </span>
          </motion.p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all"
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 border-2 font-bold rounded-full transition-all ${
                darkMode 
                ? "border-white text-white hover:bg-white hover:text-black" 
                : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              My Projects
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className={`absolute bottom-0 w-full h-24 bg-gradient-to-t transition-colors duration-500 ${
        darkMode ? "from-black to-transparent" : "from-white to-transparent"
      }`} />
    </div>
  );
};

export default Hero;