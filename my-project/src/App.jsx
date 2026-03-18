import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LandingPage from './components/LandingPage.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experiences.jsx';
import ContactMe from './components/ContactMe.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Apply theme class to body (he CSS animations sathi garjeche aahe)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* ITHE darkMode PASS KARA ---> */}
              <Hero darkMode={darkMode} /> 
              <LandingPage darkMode={darkMode} />
              <Experience darkMode={darkMode} />
              <SkillsSection darkMode={darkMode} />
              <ProjectsSection darkMode={darkMode} />
              <EducationSection darkMode={darkMode} />
              <Resume darkMode={darkMode} />
              <ContactMe darkMode={darkMode} />
            </>
          }
        />

        {/* Individual Routes sathi pan props dya */}
        <Route path="/home" element={<Hero darkMode={darkMode} />} />
        <Route path="/about" element={<LandingPage darkMode={darkMode} />} />
        <Route path="/skills" element={<SkillsSection darkMode={darkMode} />} />
        <Route path="/projects" element={<ProjectsSection darkMode={darkMode} />} />
        <Route path="/education" element={<EducationSection darkMode={darkMode} />} />
        <Route path="/resume" element={<Resume darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer darkMode={darkMode} /> 
    </>
  );
};

export default App;