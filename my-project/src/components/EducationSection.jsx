import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "B.C.S (Bachelor of Computer Science)",
    institution:
      "College: Vivekanand Arts, Sardar Dalipsingh Commerce and Science College\nUniversity: Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar",
    period: "July 2023 - Dec 2026 (Expected)",
    details: ["CGPA: 7.71/10 (First Year)", "CGPA: 8.36/10 (Second Year)"],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution:
      "College: YESHWANT VIDYALAYA PALOD\nMaharashtra State Board of Secondary and Higher Secondary Education, Pune",
    period: "Completed Feb 2023",
    details: ["Scored 478/600 (79.67%)", "Achieved First Class with Distinction"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const EducationSection = () => {
  return (
    <section className="w-full bg-slate-50 py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        >
          🎓 Education
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              {/* Degree + Period */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full italic self-start sm:self-auto">
                  {edu.period}
                </p>
              </div>

              {/* Institution */}
              <p className="text-sm sm:text-base font-medium text-gray-700 mb-4 whitespace-pre-line">
                {edu.institution}
              </p>

              {/* Details */}
              <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1 leading-relaxed">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
