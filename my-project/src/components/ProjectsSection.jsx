import React from "react";
import { motion } from "framer-motion";

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
    liveLink: "#",
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

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-500 text-lg">A selection of my technical implementations and web development work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-2xl mb-6 h-48">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.split(", ").map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] uppercase font-bold rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center pt-4 border-t border-gray-100">
                {project.githubLink !== "#" && (
                  <a href={project.githubLink} className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">GitHub</a>
                )}
                {project.liveLink !== "#" && (
                  <a href={project.liveLink} className="ml-auto text-sm font-bold text-indigo-600 hover:underline">Live Demo →</a>
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
