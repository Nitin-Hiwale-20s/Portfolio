import React from "react";
import { motion } from "framer-motion";

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Professional Experience
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
              <div className="flex justify-between items-center mb-4">
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              
              <ul className="space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-indigo-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
