import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.C.S (Bachelor of Computer Science)",
    institution: "Vivekanand Arts, Sardar Dalipsingh Commerce and Science College",
    university: "Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar",
    period: "July 2023 - Dec 2026 (Expected)",
    details: ["CGPA: 7.71/10 (First Year)", "CGPA: 8.36/10 (Second Year)"],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "YESHWANT VIDYALAYA PALOD",
    university: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
    period: "Completed Feb 2023",
    details: ["Scored 478/600 (79.67%)", "Achieved First Class with Distinction"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const EducationSection = ({ darkMode }) => {
  return (
    <section 
      className={`w-full py-24 px-4 sm:px-6 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0a0c]" : "bg-orange-50/20"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <GraduationCap className="text-orange-500" size={40} />
            Academic <span className="text-orange-500">Journey</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full shadow-lg shadow-orange-500/20"></div>
        </div>

        {/* Education Timeline/Cards */}
        <div className="flex flex-col gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-6 sm:p-10 rounded-[2.5rem] border-l-[6px] border-orange-500 transition-all duration-500 ${
                darkMode 
                ? "bg-white/5 border-white/10 shadow-2xl hover:bg-white/10" 
                : "bg-white border-orange-100 shadow-xl shadow-orange-100/40"
              }`}
            >
              {/* Header: Degree & Period */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h3 className={`text-2xl md:text-3xl font-black ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>
                  {edu.degree}
                </h3>
                <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold self-start transition-all duration-500 ${
                  darkMode ? "bg-orange-500/10 text-orange-300" : "bg-orange-50 text-orange-700"
                }`}>
                  <Calendar size={16} />
                  {edu.period}
                </div>
              </div>

              {/* Body: Institution & University */}
              <div className="space-y-3 mb-8">
                <p className={`flex items-start gap-2 text-lg font-bold ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}>
                  <MapPin className="text-orange-500 mt-1 shrink-0" size={18} />
                  {edu.institution}
                </p>
                <p className={`text-sm md:text-base font-medium ml-7 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  {edu.university}
                </p>
              </div>

              {/* Achievements/Details */}
              <div className="flex flex-wrap gap-4">
                {edu.details.map((detail, i) => (
                  <div 
                    key={i} 
                    className={`px-4 py-2 rounded-2xl text-sm font-black border transition-all duration-500 ${
                      darkMode 
                      ? "bg-white/5 border-white/10 text-orange-400" 
                      : "bg-white border-orange-100 text-orange-600 shadow-sm"
                    }`}
                  >
                    ✨ {detail}
                  </div>
                ))}
              </div>

              {/* Background Accent Circle */}
              <div className="absolute top-1/2 -right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;