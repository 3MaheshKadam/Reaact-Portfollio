import React, { useState, useEffect, useRef } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="w-full px-4 py-4 font-medium flex flex-wrap items-center justify-between bg-white dark:bg-gray-800 shadow-md relative">
      {/* Logo */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Logo />
        <button
          className="block sm:hidden px-2 py-1 text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-4`}
      >
        <nav className="flex flex-col items-center w-full">
          <CustomLink
            to="/"
            title="Home"
            className="py-2 px-4 text-gray-700 dark:text-gray-300"
          />
          <CustomLink
            to="/about"
            title="About"
            className="py-2 px-4 text-gray-700 dark:text-gray-300"
          />
          <CustomLink
            to="/projects"
            title="Projects"
            className="py-2 px-4 text-gray-700 dark:text-gray-300"
          />
          <CustomLink
            to="/experience"
            title="Experience"
            className="py-2 px-4 text-gray-700 dark:text-gray-300"
          />
        </nav>

        <nav className="flex items-center justify-center gap-4 mt-4">
          <motion.a
            href="https://github.com/3maheshkadam"
            target="_blank"
            className="w-6 text-gray-700 dark:text-gray-300"
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
            className="w-6 text-gray-700 dark:text-gray-300"
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
            className="w-6 text-gray-700 dark:text-gray-300"
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
            className="w-6 text-gray-700 dark:text-gray-300"
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
            className="w-6 text-gray-700 dark:text-gray-300"
            rel="noopener noreferrer"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={iconVariants}
          >
            <MoonIcon />
          </motion.a>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex sm:items-center sm:space-x-4">
        <CustomLink
          to="/"
          title="Home"
          className="py-2 px-4 text-gray-700 dark:text-gray-300"
        />
        <CustomLink
          to="/about"
          title="About"
          className="py-2 px-4 text-gray-700 dark:text-gray-300"
        />
        <CustomLink
          to="/projects"
          title="Projects"
          className="py-2 px-4 text-gray-700 dark:text-gray-300"
        />
        <CustomLink
          to="/experience"
          title="Experience"
          className="py-2 px-4 text-gray-700 dark:text-gray-300"
        />
      </nav>

      {/* Social icons (Desktop) */}
      <nav className="hidden sm:flex items-center justify-between gap-4">
        <motion.a
          href="https://github.com/3maheshkadam"
          target="_blank"
          className="w-6 text-gray-700 dark:text-gray-300"
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
          className="w-6 text-gray-700 dark:text-gray-300"
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
          className="w-6 text-gray-700 dark:text-gray-300"
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
          className="w-6 text-gray-700 dark:text-gray-300"
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
          className="w-6 text-gray-700 dark:text-gray-300"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
        >
          <MoonIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
