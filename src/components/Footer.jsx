import React from "react";
import linkedin from "../assets/profile/svgs/linkedin.svg";
import github from "../assets/profile/profile/github.png";
import insta from "../assets/profile/profile/instagram.png";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* About Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">
            Mahesh Kadam
          </h3>
          <p className="text-base leading-relaxed">
            Hello, I'm Mahesh Kadam, born and brought up in Pune. Completed my
            Diploma at AISSMS in Computer Engineering and currently pursuing a
            Bachelor Of Engineering from Pune University SPPU.
          </p>
        </div>

        {/* Center "Made with Love" Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto mb-4 md:mb-0 order-last md:order-none">
          <div className="flex items-center leading-none">
            Built with{" "}
            <span className="text-red-500 text-2xl px-1">&#9825;</span> by&nbsp;
            <a href="#home" className="text-primary-500 hover:text-primary-400">
              Mahesh Kadam
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/mahesh-kadam-6a9b13219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/3MaheshKadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/maheshkadam_2524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Navigation and Contacts Section */}
        <div className="flex flex-col sm:flex-row justify-between md:w-1/3 sm:space-x-8 mb-8 md:mb-0">
          <div className="flex-1">
            <h4 className="font-bold mb-2 text-orange-500">Navigation</h4>
            <ul>
              <li>
                <a href="#home" className="hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mt-4 sm:mt-0 mb-2 text-orange-500">
              Contacts
            </h4>
            <p>+91-8668903099</p>
            <p>maheshkadam928@gmail.com</p>
            <p>mahesh-portfolio.netlify.app</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
