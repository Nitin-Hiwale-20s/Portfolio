import React from "react";
import { motion } from "framer-motion";
import { FileText, Eye, ExternalLink, Sparkles } from "lucide-react";

const Resume = ({ darkMode }) => {
  const resumePdfLink =
    "https://drive.google.com/file/d/1DUfcZIsMhC8ePoAkF3iCMpbTjZst030J/view?usp=drive_link";

  const profile = {
    name: "Nitin Rajesh Hiwale",
    title:
      "Full-Stack Developer | MERN Stack | Java & DSA Enthusiast | 3rd Year CS Student",
  };

  return (
    <section className={`py-24 px-6 transition-colors duration-500 ${
      darkMode ? "bg-[#0a0a0c]" : "bg-orange-50/20"
    }`}>
      <motion.div
        className={`max-w-3xl mx-auto p-10 md:p-16 rounded-[3.5rem] border transition-all duration-500 relative overflow-hidden ${
          darkMode 
          ? "bg-white/5 border-white/10 shadow-2xl shadow-black" 
          : "bg-white border-orange-100 shadow-2xl shadow-orange-200/40"
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Decorative Glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2"
          >
            <Sparkles size={14} /> Professional CV
          </motion.div>

          {/* Header Area */}
          <header className="mb-12">
            <motion.h1
              className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter transition-colors duration-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Nitin <span className="text-orange-500">Hiwale</span>
            </motion.h1>

            <motion.p
              className={`text-lg md:text-xl font-bold max-w-xl mx-auto leading-tight mb-6 transition-colors duration-500 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {profile.title}
            </motion.p>
            
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full" />
          </header>

          {/* Action Button: Only View */}
          <div className="w-full max-w-sm">
            <motion.a
              href={resumePdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 rounded-[2rem] shadow-xl shadow-orange-500/40 transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine Animation */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
              
              <Eye size={22} className="group-hover:scale-110 transition-transform" />
              <span className="text-lg">View Full Resume</span>
            </motion.a>
          </div>

          {/* Footer Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`mt-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-500 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            <ExternalLink size={14} className="text-orange-500" />
            Verified Adobe Document
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
