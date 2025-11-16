import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const resumePdfLink =
    "https://acrobat.adobe.com/id/urn:aaid:sc:AP:933a7ff8-ebd1-4eb5-b93a-a033adfff4bc";

  const profile = {
    name: "Nitin Rajesh Hiwale",
    title:
      "Full-Stack Developer | MERN Stack | Java & DSA Enthusiast | JavaScript & React.js | 3rd Year Computer Science Student",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfLink;
    link.download = "Nitin_Hiwale_Resume.pdf";
    link.click();
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto my-8 px-4 sm:px-6 md:px-8 py-20 bg-white shadow-lg rounded-xl border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <header className="text-center pb-4 border-b border-gray-300">
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 leading-snug"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          {profile.title}
        </motion.h2>
      </header>

      {/* PDF Resume Buttons */}
      <section className="text-center my-6 flex flex-col sm:flex-row justify-center gap-4">
        
        {/* View Button */}
        <motion.a
          href={resumePdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 sm:px-6 rounded-full text-sm sm:text-base shadow-md"
          whileHover={{ scale: 1.07, boxShadow: "0px 4px 12px rgba(0,0,0,0.20)" }}
          whileTap={{ scale: 0.95 }}
        >
          📄 View Resume
        </motion.a>

        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 sm:px-6 rounded-full text-sm sm:text-base shadow-md"
          whileHover={{ scale: 1.07, boxShadow: "0px 4px 12px rgba(0,0,0,0.20)" }}
       
        >
         
        </motion.button>
      </section>

      <p className="text-xs sm:text-sm text-gray-500 text-center mt-3">
        Tap above to view or directly download the complete resume.
      </p>

      <hr className="my-4 border-gray-200" />
    </motion.div>
  );
};

export default Resume;
