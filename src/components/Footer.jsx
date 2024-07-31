import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 text-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <span className="flex items-center">
            Built with{" "}
            <span className="text-red-500 text-2xl px-1">&#9825;</span> by&nbsp;
          </span>
          <Link to="/" className="text-primary-500 hover:text-primary-400">
            Filament
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/contact" className=" hover:text-primary">
            Contact-Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
