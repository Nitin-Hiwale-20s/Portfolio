// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import Navbar from './components/Navbar.jsx'
// import LandingPage from './components/LandingPage.jsx'
// import Hero from './components/Hero.jsx'
// import SkillsSection from './components/SkillsSection.jsx'
// import ProjectsSection from './components/ProjectsSection.jsx'
// import EducationSection from './components/EducationSection.jsx'
// import Resume from './components/Resume.jsx'
// import Footer from './components/Footer.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
  
//     <Navbar/>
//    <Hero/>
//     <LandingPage/> 
//     <SkillsSection/>
//     <ProjectsSection/>
//      <EducationSection/>
//      <Resume/>
//      <Footer/>
//   </StrictMode>,
// )




import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
