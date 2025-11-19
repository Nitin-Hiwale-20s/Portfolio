import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Weather Website",
    imageUrl:
      "https://nordicapis.com/wp-content/uploads/6-Best-Free-and-Paid-Weather-APIs-1024x576.png",
    description:
      "A React weather app that shows real-time weather updates and 5-day forecast using OpenWeatherMap API.",
    techStack: "React, API, Tailwind",
    liveLink: "https://weather-app-using-react-hazel.vercel.app/",
    githubLink: "https://github.com/Nitin-Hiwale-20s/Weather-App-using-React",
  },
  {
    title: "JCB Web Clone",
    imageUrl:
      "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40",
    description:
      "A fully responsive JCB company website clone supporting all screen devices with modern UI and clean layout.",
    techStack: "HTML5, CSS, JavaScript, Bootstrap",
    liveLink: "#",
    githubLink: "https://github.com/Nitin-Hiwale-20s/JCB-Website-Clone",
  },
  {
    title: "Zerodha Web Clone",
    imageUrl: "https://zerodha.tech/static/images/product-mashup-2020-04.png",
    description:
      "A responsive clone of the Zerodha trading platform built using React and modern UI practices.",
    techStack: "React, JavaScript, Tailwind",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio (MERN)",
    imageUrl:
      "https://yt3.ggpht.com/n0kUfbJxuIFxgGjk5YrAlzRZljyKfWDCtpv-oQ9WeOdctzWrzteN1d1RkQ9Mjc2-q7bbhzaa_Q=s176-c-k-c0x00ffffff-no-rj",
    description:
      "A full-stack MERN portfolio with smooth UI, responsive layout and professional project showcase system.",
    techStack: "MERN, Tailwind CSS, Vercel",
    liveLink: "https://nitin-hiwale-portfolio.vercel.app/",
    githubLink: "https://github.com/Nitin-Hiwale-20s/Portfolio",
  },
  {
    title: "Blog Application (MERN)",
    imageUrl:
      "https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=",
    description:
      "Full-stack blog platform with authentication, CRUD operations, posts & comment features using MERN.",
    techStack: "MERN, React Router, Express, MongoDB",
    liveLink: "#",
    githubLink: "https://github.com/Nitin-Hiwale-20s/Blog-Application-MERN-Stack-",
  },
  {
    title: "Shri Chandika Mata Earth Movers Website",
    imageUrl:
      "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40",
    description:
      "A professional business website built using React & Tailwind showcasing services, contact, and business identity.",
    techStack: "React, Tailwind CSS, JavaScript, Vercel",
    liveLink:
      "https://shri-chandika-mata-earth-movers-por.vercel.app/",
    githubLink:
      "https://github.com/Nitin-Hiwale-20s/Shri-ChandikaMata-EarthMovers-Portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-600 mb-8 sm:mb-12"
      >
        Here are some of the projects I've worked on.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-48 h-48 bg-blue-600/70 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="bg-blue-600/80 rounded-lg p-2 mb-4 text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <div className="flex flex-col items-center gap-4 text-left sm:flex-row sm:items-start">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-28 h-28 rounded-full border-4 border-cyan-300 object-cover flex-shrink-0"
                />
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-sm leading-snug">{project.description}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-bold">Tech Stack: </span>
                    {project.techStack}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex gap-4">
                  {project.githubLink &&
                    project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        🔗 GitHub
                      </a>
                    )}
                </div>

                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-cyan-200/50 text-white text-sm font-semibold rounded-full hover:bg-cyan-200/70 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
