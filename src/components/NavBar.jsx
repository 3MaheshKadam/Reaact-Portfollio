import React from "react";
import Link from "next/link";
import Logo from "./Logo.jsx";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons.js";
const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      &nbsp;
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className=" w-full px-24 py-8 font-medium flex justify-between items-center">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/experience" title="Experience" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-between gap-4">
        <Link
          href="https://github.com/3maheshkadam"
          target="_blank"
          className="w-6"
        >
          <GithubIcon />
        </Link>
        <Link
          href="https://linkedin.com/in/mahesh-kadam-6a9b13219"
          target="_blank"
          className="w-6"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://x.com/maheshkadam2524"
          target="_blank"
          className="w-6"
        >
          <TwitterIcon />
        </Link>
        <Link href="/" target="_blank" className="w-6">
          <SunIcon />
        </Link>
        <Link href="/" target="_blank" className="w-6" whileTap={{ scale: 1 }}>
          <MoonIcon />
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
