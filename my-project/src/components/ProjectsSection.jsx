import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // Icons sathi

const projectsData = [
  {
    title: "Shri Chandika Mata Earth Movers",
    description: "A professional business website showcasing services, contact, and business identity using modern UI layouts.",
    techStack: "React, Tailwind, JavaScript, Vercel",
    liveLink: "https://shri-chandika-mata-earth-movers-por.vercel.app/",
    githubLink: "https://github.com/Nitin-Hiwale-20s/Shri-ChandikaMata-EarthMovers-Portfolio",
    imageUrl: "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40"
  },
  {
    title: "MERN Blog Application",
    description: "Full-stack blog platform with authentication, CRUD operations, and post management features.",
    techStack: "MERN, React Router, Express, MongoDB",
    liveLink: "https://drive.google.com/file/d/1jcq8EmQGsTfytel8TypkmCTkHq7V9iLZ/view",
    githubLink: "#",
    imageUrl: "https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A="
  },
  {
    title: "NextMart Grocery Platform",
    description: "Full-stack grocery application where users can browse products, manage carts, and place orders.",
    techStack: "Next.js, Node.js, Express.js, MongoDB",
    liveLink: "#",
    githubLink: "https://github.com/Nitin-Hiwale-20s",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
  },
  {
    title: "Weather Dashboard",
    description: "React-based weather app featuring real-time data and a 5-day forecast via OpenWeatherMap API.",
    techStack: "React, API, Tailwind CSS",
    liveLink: "https://weather-app-using-react-hazel.vercel.app/",
    githubLink: "https://github.com/Nitin-Hiwale-20s/Weather-App-using-React",
    imageUrl: "https://nordicapis.com/wp-content/uploads/6-Best-Free-and-Paid-Weather-APIs-1024x576.png"
  },
  {
    title: "Portfolio (MERN)",
    description: "Personal full-stack portfolio showcasing projects with a responsive layout and smooth animations.",
    techStack: "MERN, Tailwind CSS, Vercel",
    liveLink: "https://nitin-hiwale-portfolio.vercel.app/",
    githubLink: "https://github.com/Nitin-Hiwale-20s/Portfolio",
    imageUrl: "https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg"
  },
  {
    title: "JCB Web Clone",
    description: "Fully responsive clone of a corporate machinery website with a clean, modern UI structure.",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap",
    liveLink: "#",
    githubLink: "https://github.com/Nitin-Hiwale-20s/JCB-Website-Clone",
    imageUrl: "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40"
  },
  {
    title: "Zerodha Web Clone",
    description: "A professional-grade clone of the Zerodha trading platform focusing on high-fidelity UI components.",
    techStack: "React, JavaScript, Tailwind CSS",
    liveLink: "#",
    githubLink: "#",
    imageUrl: "https://zerodha.tech/static/images/product-mashup-2020-04.png"
  }
];

const ProjectsSection = ({ darkMode }) => {
  return (
    <section 
      className={`py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#0a0a0c]" : "bg-orange-50/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            My Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full shadow-lg shadow-orange-500/20"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            Explore my latest web development work, ranging from full-stack MERN apps to modern UI clones.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-[2.5rem] p-5 border transition-all duration-500 ${
                darkMode 
                ? "bg-white/5 border-white/10 shadow-2xl hover:bg-white/10" 
                : "bg-white border-orange-100 shadow-xl shadow-orange-100/30"
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[1.8rem] h-52 mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">View Details</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-black mb-3 transition-colors duration-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {project.title}
              </h3>
              
              <p className={`text-sm mb-6 line-clamp-2 transition-colors duration-500 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.split(", ").map((tech) => (
                  <span key={tech} className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg border transition-all duration-500 ${
                    darkMode 
                    ? "bg-orange-500/10 border-orange-500/30 text-orange-400" 
                    : "bg-orange-50 border-orange-100 text-orange-600"
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100/10 transition-colors duration-500">
                {project.githubLink !== "#" ? (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                      darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-orange-600"
                    }`}
                  >
                    <Github size={18} /> Code
                  </a>
                ) : <span className="text-xs text-gray-500 italic">Code Private</span>}
                
                {project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm font-black text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
