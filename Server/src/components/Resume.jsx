import React from 'react';

const Resume = () => {
  const resumePdfLink =
    "https://acrobat.adobe.com/id/urn:aaid:sc:AP:1eddda64-218c-4c95-b550-9fe8a3cc5aa8";

  const profile = {
    name: "Nitin Rajesh Hiwale",
    title:
      "Full-Stack Developer | MERN Stack | Java & DSA Enthusiast | JavaScript & React.js | 3rd Year Computer Science Student",
  };

  return (
    <div className="max-w-3xl mx-auto my-8 px-4 sm:px-6 md:px-8 py-20 bg-white shadow-lg rounded-xl border border-gray-200">
      
      {/* Header */}
      <header className="text-center pb-4 border-b border-gray-300"> 
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
          {profile.name}
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 leading-snug">
          {profile.title}
        </h2>
      </header>

      {/* PDF Resume Button */}
      <section className="text-center my-6">
        <a
          href={resumePdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 sm:px-6 rounded-full text-sm sm:text-base shadow-md transition duration-300"
        >
          📄 View Full Resume (PDF)
        </a>
        <p className="text-xs sm:text-sm text-gray-500 mt-3">
          Tap above to view or download the complete resume.
        </p>
      </section>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

  
    </div>
  );
};

export default Resume;
