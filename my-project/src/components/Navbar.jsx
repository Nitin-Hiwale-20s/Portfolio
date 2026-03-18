import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoNH.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "bg-black/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl"
            : "bg-white/70 backdrop-blur-xl border-b border-orange-50 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        
        {/* Logo Section */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* Border color changed to lighter amber */}
          <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-300 to-orange-400">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-transparent"
            />
          </div>
          <h1
            className={`font-black text-2xl tracking-tighter transition-colors duration-300 ${
              scrolled ? (darkMode ? "text-white" : "text-gray-900") : "text-white"
            }`}
          >
            Nitin<span className="text-amber-400">.</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      isActive
                        ? "text-amber-500 bg-amber-500/5 shadow-sm shadow-amber-500/10"
                        : scrolled
                        ? darkMode
                          ? "text-gray-400 hover:text-amber-300"
                          : "text-gray-500 hover:text-amber-500"
                        : "text-white/70 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button - Light Orange Style */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all duration-300 ${
              scrolled
                ? darkMode
                  ? "bg-white/5 border-white/10 text-amber-300 hover:bg-white/10"
                  : "bg-amber-50/50 border-amber-100 text-amber-600 hover:bg-amber-100"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-xl transition-all ${
            scrolled ? (darkMode ? "text-white" : "text-gray-900") : "text-white"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className={`md:hidden fixed inset-0 h-screen z-[-1] flex flex-col items-center justify-center space-y-10 ${
              darkMode ? "bg-black/98" : "bg-white/98"
            }`}
          >
            <ul className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-black uppercase tracking-widest transition-all ${
                        isActive ? "text-amber-500" : darkMode ? "text-white/20" : "text-gray-300"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            
            <button
              onClick={() => { setDarkMode(!darkMode); setMenuOpen(false); }}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-amber-500/20"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;