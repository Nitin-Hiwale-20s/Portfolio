import React from 'react';

const projectsData = [
  {
    title: 'Weather Website',
    imageUrl: 'https://nordicapis.com/wp-content/uploads/6-Best-Free-and-Paid-Weather-APIs-1024x576.png',
    description: "This is a React.js weather app that provides real-time weather info and a 5-day forecast for any city using the OpenWeatherMap API.",
    techStack: 'React, Node.js, MongoDB',
    liveLink: 'https://weather-app-using-react-hazel.vercel.app/',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/Weather-App-using-React',
  },
  {
    title: 'JCB Web Clone',
    imageUrl: 'https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40',
    description: 'Built a responsive clone of the JCB website that works on all devices (desktop, tablet, mobile).',
    techStack: 'HTML5, CSS,Java.Script,Bootstrap',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/JCB-Website-Clone',
    liveLink: '#'
  },

    {
    title: 'Zerodha Web Clone',
    imageUrl: 'https://zerodha.tech/static/images/product-mashup-2020-04.png',
    description: 'Developed a full responsive Zerodha trading platform clone using React.js and JavaScript.',
    techStack: 'React, Node.js, MongoDB, Node.js, java Script ',
    liveLink: '#',
    githubLink:'#',
  },
  {
    title: 'Portfolio ',
    imageUrl: 'https://yt3.ggpht.com/n0kUfbJxuIFxgGjk5YrAlzRZljyKfWDCtpv-oQ9WeOdctzWrzteN1d1RkQ9Mjc2-q7bbhzaa_Q=s176-c-k-c0x00ffffff-no-rj',
      description: 'MERN Stack Portfolio: A responsive full-stack web portfolio built with MongoDB, Express, React, and Node.js. Showcases projects, skills, and real-world app functionality with interactive UI.',
        techStack: 'MERN Stack, Tailwind CSS',
    liveLink: '#',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/Portfolio',
  },
    {
    title: 'Blog Application (MERN Stack)',
    imageUrl: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
        description: 'Built a full-stack Blog Application using the MERN stack: MongoDB, Express.js, React.js, and Node.js.',
       techStack: 'React, MERN Stack, Node.js, MongoDB',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Shri Chandika Mata Earth Movers Website',
    imageUrl: 'https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40',
    description: 'A modern and responsive business website built using React.js, Tailwind CSS, and React Router. It showcases the company’s machinery services, customer reviews, and contact details with a clean and mobile-friendly design.',
    techStack: ' React.js, Tailwind CSS, JavaScript, Vercel'',
    liveLink: 'https://shri-chandika-mata-earth-movers-por.vercel.app/',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/Shri-ChandikaMata-EarthMovers-Portfolio',
  },

];

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LiveLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

const ProjectsSection = () => {
  return (
   
    <section className="w-full bg-slate-50 py-12 md:py-24 text-center"> 
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">My Projects</h2>
      <p className="text-gray-600 mb-8 sm:mb-12">Here are some of the projects I've worked on.</p>
      
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
           
            className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg overflow-hidden" 
          >
            {/* Background Blob - Kept as is */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-48 h-48 bg-blue-600/70 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Project Title - Kept as is */}
              <div className="bg-blue-600/80 rounded-lg p-2 mb-4 text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Main Content - Force stack on mobile, then switch to row on small screens and up */}
              <div className="flex flex-col items-center gap-4 text-left sm:flex-row sm:items-start"> 
                {/* Image - Flex-shrink-0 is good. Centered for mobile (default for flex-col) */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-28 h-28 rounded-full border-4 border-cyan-300 object-cover flex-shrink-0"
                />
                <div className="flex-grow text-center sm:text-left"> {/* Aligned text for better mobile readability */}
                  <p className="text-sm leading-snug">{project.description}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-bold">Tech Stack: </span>
                    {project.techStack}
                  </p>
                </div>
              </div>

              {/* Footer Links - Kept as is, justify-between works well */}
              <div className="mt-5 flex justify-between items-center">
                <div className="flex gap-4">
                  {/* GitHub Link */}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      title="GitHub Repository"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {/* Live Link Icon (only visible if link is valid) */}
                   {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform hidden sm:block" // Hide the icon link on mobile since the button is present
                      title="Live Demo"
                    >
                      <LiveLinkIcon />
                    </a>
                  )}
                </div>
                {/* Live Demo Button (always visible if link is valid) */}
                {project.liveLink && project.liveLink !== '#' && (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
