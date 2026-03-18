import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed - Remote",
    duration: "Aug 2025 – Sep 2025",
    description: [
      "Developed a responsive business website for an Earth Movers company using React.js, HTML5, and CSS3.",
      "Gathered client requirements and designed modern UI layouts.",
      "Improved mobile responsiveness and overall user engagement.",
      "Deployed the website using Vercel and managed version control with GitHub."
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "StaxTech - Remote",
    duration: "May 2025 – June 2025",
    description: [
      "Completed a 1-month internship focused on full-stack web development.",
      "Worked on both frontend and backend tasks using React.js, Node.js, MongoDB, and REST APIs.",
      "Built and integrated REST APIs using Express.js and MongoDB.",
      "Learned real-world development workflows and deployment processes."
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Experience({ darkMode }) {
  return (
    <section 
      id="experience" 
      className={`py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0a0c]" : "bg-orange-50/10"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Professional <span className="text-orange-300">Experience</span>
          </h2>
          {/* Heading Underline - Lite Orange */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-300 to-amber-200 mx-auto rounded-full shadow-sm"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative border-l-2 border-orange-200/40 ml-4 md:ml-10 space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot Icon (Lite Orange 300) */}
              <div className={`absolute -left-[17px] top-0 p-2 rounded-full border-4 transition-all duration-500 ${
                darkMode 
                ? "bg-[#0a0a0c] border-orange-300 text-orange-200" 
                : "bg-white border-orange-200 text-orange-400"
              }`}>
                <Briefcase size={18} />
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(253, 186, 116, 0.5)" }} // orange-300 equivalent
                className={`p-8 rounded-3xl border transition-all duration-500 ${
                  darkMode 
                  ? "bg-white/5 border-white/10 shadow-2xl shadow-black hover:bg-white/10" 
                  : "bg-white border-orange-50 shadow-xl shadow-orange-100/20 hover:border-orange-200"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {exp.role}
                    </h3>
                    <p className="text-orange-300 font-bold text-lg">{exp.company}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-500 ${
                    darkMode ? "bg-orange-300/10 text-orange-200" : "bg-orange-50 text-orange-400"
                  }`}>
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* Lite Orange Bullet Point */}
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-300 shrink-0 shadow-sm shadow-orange-200/50"></span>
                      <p className={`text-base leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}