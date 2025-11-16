import React from "react";
import photo from "../assets/Nitin20.jpg";
// import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-20 animate-fadeIn">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text tracking-wide animate-slideUp">
          Nitin Rajesh Hiwale
        </h1>

        <h3 className="text-slate-700 font-semibold text-base sm:text-lg animate-slideUpDelay1">
          Full-Stack Developer | MERN | Java + DSA | React.js | 3rd Year CS Student
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 animate-slideUpDelay2">
          Third-year BSc Computer Science student passionate about full-stack development,
          problem-solving, and modern JavaScript frameworks. Dedicated to building scalable,
          user-friendly apps with real-world impact.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative animate-slideUpDelay3">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center floating-image">

          {/* Animated Outer Dotted Circle */}
          <div className="absolute inset-0 border-4 border-dashed border-orange-400/60 rounded-full spin-slow"></div>

          {/* Floating Tags */}
          {[
            { label: "MERN", pos: "-top-3 right-6" },
            { label: "Algorithms", pos: "top-10 -right-4" },
            { label: "Data Structures", pos: "bottom-6 -right-4" },
            { label: "Projects", pos: "-bottom-5 left-8" },
            { label: "Aptitude", pos: "top-6 left-1" }
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.pos} bg-white px-3 py-1 rounded-full shadow text-xs sm:text-sm font-semibold tag-floating`}
            >
              {item.label}
            </div>
          ))}

          {/* Profile Image */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl profile-hover">
            <img src={photo} alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
