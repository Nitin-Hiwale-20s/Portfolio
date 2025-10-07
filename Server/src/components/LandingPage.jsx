// import React from "react";
// import photo from "../assets/Nitin20.jpg";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
//           Nitin Rajesh Hiwale{" "}
//         </h1>

//         <span className="text-slate-600 font-medium">
//           <h3>
//             {" "}
//             Full-Stack Developer||MERN||JAVA+DSA||JavaScript||React.js|| 3rd
//             Year CS Student!{" "}
//           </h3>
//           <br/>
//         </span>

//         <div>
//           <p>
//             {" "}
//             Third-year BSc Computer Science student at Dr. Babasaheb Ambedkar
//             Marathwada University with a strong foundation in programming, web
//             development, and data structures. Passionate about learning emerging
//             technologies like Java and full-stack development. Proven ability to
//             deliver projects with a focus on user-centric design and technical
//             excellence.{" "}
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative">
//         <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
//           {/* Outer Dotted Circle */}
//           <div className="absolute inset-0 border-4 border-dashed border-gray-300 rounded-full"></div>

//           {/* Floating Labels */}
//           <div className="absolute -top-4 right-10 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
//             MERN
//           </div>
//           <div className="absolute top-10 -right-6 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
//             Algorithms
//           </div>
//           <div className="absolute bottom-8 -right-6 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
//             Data Structures
//           </div>
//           <div className="absolute -bottom-6 left-10 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
//             Projects
//           </div>
//           <div className="absolute top-6 left-2 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
//             Aptitude
//           </div>

//           {/* Center Image */}
//           <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
//             <img
//               src={photo}
//               alt="Instructor"
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import photo from "../assets/Nitin20.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-20">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
          Nitin Rajesh Hiwale
        </h1>

        <h3 className="text-slate-600 font-medium text-base sm:text-lg">
          Full-Stack Developer | MERN | Java + DSA | JavaScript | React.js | 3rd
          Year CS Student
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
          Third-year BSc Computer Science student at Dr. Babasaheb Ambedkar
          Marathwada University with a strong foundation in programming, web
          development, and data structures. Passionate about learning emerging
          technologies like Java and full-stack development. Proven ability to
          deliver projects with a focus on user-centric design and technical
          excellence.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center">
          {/* Outer Dotted Circle */}
          <div className="absolute inset-0 border-2 sm:border-4 border-dashed border-gray-300 rounded-full"></div>

          {/* Floating Labels */}
          <div className="absolute -top-3 right-6 bg-white px-3 py-1 rounded-full shadow text-xs sm:text-sm font-medium">
            MERN
          </div>
          <div className="absolute top-10 -right-4 bg-white px-3 py-1 rounded-full shadow text-xs sm:text-sm font-medium">
            Algorithms
          </div>
          <div className="absolute bottom-6 -right-4 bg-white px-3 py-1 rounded-full shadow text-xs sm:text-sm font-medium">
            Data Structures
          </div>
          <div className="absolute -bottom-5 left-8 bg-white px-3 py-1 rounded-full shadow text-xs sm:text-sm font-medium">
            Projects
          </div>
          <div className="absolute top-6 left-1 bg-white px-3 py-1 rounded-full shadow text-xs sm:text-sm font-medium">
            Aptitude
          </div>

          {/* Center Image */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
            <img
              src={photo}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
