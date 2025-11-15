import React from "react";
import "./Hero.css";
import PortfolioBack from "../assets/Black1.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${PortfolioBack})` }}
    >
      <div className="container text-white animate-fadeIn">
        <h1 className="welcome animated-text">WELCOME</h1>
        <p className="iam slide-up-delay1">I AM</p>
        <h2 className="name slide-up-delay2">Nitin Rajesh</h2>
        <h2 className="surname slide-up-delay3">Hiwale</h2>

        <div className="underline mx-auto my-4 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 animate-expand"></div>

        <p className="role glow-text slide-up-delay4">
          Full-Stack Developer | MERN Stack | Java & DSA Enthusiast <br />
          JavaScript & React.js | 3rd Year Computer Science Student!
        </p>
      </div>
    </div>
  );
};

export default Hero;
