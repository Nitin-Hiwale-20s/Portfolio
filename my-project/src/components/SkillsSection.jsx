import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertInDark: true },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertInDark: true },
  { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Terminal", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terminal/terminal-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  },
};

const SkillsSection = ({ darkMode }) => {
  return (
    <section 
      className={`py-20 px-6 md:px-16 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0a0c]" : "bg-orange-50/30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-16">
        
        {/* Text Section */}
        <motion.div
          className="xl:w-1/3 text-center xl:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight transition-colors duration-500 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            My Professional <br />
            <span className="text-orange-400 underline decoration-orange-500/30">Skillset</span>.
          </h2>
          <p className={`mb-8 text-lg transition-colors duration-500 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            I leverage the latest tools and frameworks to build high-performance, 
            scalable MERN stack applications with clean and efficient code.
          </p>
          
          <div className="hidden xl:block">
             <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full mb-4"></div>
             <p className="text-sm font-bold uppercase tracking-widest text-orange-600">Tech Stack 2026</p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="xl:w-2/3 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: 2,
                transition: { duration: 0.2 } 
              }}
              className={`group relative p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 border ${
                darkMode 
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/50" 
                : "bg-white border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300"
              }`}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] ${
                  darkMode && skill.invertInDark ? "invert brightness-200" : ""
                }`}
              />
              <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-tighter text-center transition-colors duration-500 ${
                darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-orange-600"
              }`}>
                {skill.name}
              </p>
              
              {/* Hover Background Glow (Orange) */}
              <div className="absolute inset-0 bg-orange-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;