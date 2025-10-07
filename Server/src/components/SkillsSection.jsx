import React from "react";

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
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Terminal", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terminal/terminal-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const SkillsSection = () => {
  return (
    <section className="bg-slate-50 py-14 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            My Professional <span className="text-blue-600">Skillset</span>.
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            I build scalable web apps using modern technologies, from front-end
            to back-end and databases.
          </p>
          <a
            href="projects"
            className="inline-block px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition text-gray-800 font-medium text-sm sm:text-base"
          >
            View My Projects &gt;
          </a>
        </div>

        {/* Skills Grid */}
        <div className="md:w-1/2 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
