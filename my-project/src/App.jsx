import React from 'react';
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
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LandingPage />
              <EducationSection />
              <Experience/>
              <SkillsSection />
              <Resume />
              <ProjectsSection />
              
              <ContactMe/>
            </>
          }
        />

    
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<LandingPage/>}/>
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>

       <Footer /> 
    </>
  );
};

export default App;
