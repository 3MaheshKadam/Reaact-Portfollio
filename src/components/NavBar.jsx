import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo.jsx";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons.jsx";

// Define animation variants
const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.2,
    y: -10,
    transition: { y: { yoyo: Infinity, duration: 0.5 } },
  },
};

// CustomLink component
const CustomLink = ({ to, title, className = "" }) => {
  return (
    <Link to={to} className={`${className} group relative`}>
      {title}
      &nbsp;
    </Link>
  );
};

// NavBar component
const NavBar = () => {
  return (
    <header className="w-full px-24 py-8 font-medium flex justify-between items-center">
      <nav>
        <CustomLink to="/" title="Home" className="mr-4" />
        <CustomLink to="/about" title="About" className="mx-4" />
        <CustomLink to="/projects" title="Projects" className="mx-4" />
        <CustomLink to="/experience" title="Experience" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-between gap-4">
        <motion.a
          href="https://github.com/3maheshkadam"
          target="_blank"
          className="w-6"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/mahesh-kadam-6a9b13219"
          target="_blank"
          className="w-6"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://x.com/maheshkadam2524"
          target="_blank"
          className="w-6"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <SunIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <MoonIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
