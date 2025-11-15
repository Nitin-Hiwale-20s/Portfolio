import React from "react";
import "./Hero.css";
import PortfolioBack from "../assets/Black1.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${PortfolioBack})` }}
    >
      <div className="container text-white">
        <h1 className="welcome">WELCOME</h1>
        <p className="iam">I AM</p>
        <h2 className="name">Nitin Rajesh</h2>
        <h2 className="surname">Hiwale</h2>

        <div className="underline mx-auto my-4 w-24 h-1 bg-white"></div>

        <p className="role">
          Full-Stack Developer | MERN Stack | Java & DSA Enthusiast <br />
          JavaScript & React.js | 3rd Year Computer Science Student!
        </p>
      </div>
    </div>
  );
};

export default Hero;
