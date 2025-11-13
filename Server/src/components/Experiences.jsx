import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "StaxTech - Remote",
    duration: "May 2025 – June 2025",
    description: [
      "Completed a 1-month internship focused on full-stack web development.",
      "Worked on both frontend and backend tasks using React.js, Node.js, MongoDB, and REST APIs.",
      "Contributed to real-world project development and learned deployment workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
