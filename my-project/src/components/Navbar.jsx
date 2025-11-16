import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoNH.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "𝓗𝓸𝓶𝓮", path: "/" },
    { name: "𝓐𝓫𝓸𝓾𝓽", path: "/about" },
    { name: "𝓢𝓴𝓲𝓵𝓵𝓼", path: "/skills" },
    { name: "𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼", path: "/projects" },
    { name: "𝓔𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷", path: "/education" },
    { name: "𝓡𝓮𝓼𝓾𝓶𝓮", path: "/resume" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 backdrop-blur-md border-b z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-gray-300 shadow-lg"
          : "bg-transparent border-white/20"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full transition-all ${
              scrolled ? "" : "invert"
            }`}
          />
          <h1
            className={`font-semibold text-2xl md:text-4xl tracking-wide transition-all ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            𝓝𝓲𝓽𝓲𝓷
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 text-[18px] font-medium transition-all ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? scrolled
                        ? "text-orange-600"
                        : "text-orange-300"
                      : scrolled
                      ? "hover:text-orange-600"
                      : "hover:text-orange-300"
                  } transition-all duration-200 tracking-wide`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden transition-all ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full backdrop-blur-lg border-t transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 bg-black/90"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-6 text-[20px] font-medium text-orange-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-400" : "hover:text-orange-200"
                  } transition-all duration-200 tracking-wide`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
