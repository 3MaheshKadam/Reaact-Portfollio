import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import dummy from "../assets/dummy.pdf"; // Ensure the path to the PDF is correct
import { LinkArrow } from "../components/Icons.jsx";
import HireMe from "../components/HireMe.jsx";
import lightBulb from "../assets/profile/svgs/miscellaneous_icons_1.svg";
import reactt from "../assets/profile/profile/react.png";
import mongo from "../assets/profile/profile/mongodb.png";
import express from "../assets/profile/profile/expressjs.png";
import node from "../assets/profile/profile/node.png";
import next from "../assets/profile/profile/nextjs.png";

const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen ">
      <div className=" absolute  left-2 flex   top-20 pt-4 px-2 gap-2   ">
        <img src={mongo} alt="MongoDB" className="w-12 h-12 mb-2" />
        <img src={express} alt="Express" className="w-12 h-12 mb-2" />
        <img src={reactt} alt="React" className="w-12 h-12 mb-2" />
        <img src={node} alt="Node.js" className="w-12 h-12 mb-2" />
        <img src={next} alt="Next.js" className="w-12 h-12 mb-2" />
      </div>
      <div className="layout p-0 ">
        <div className="flex items-center justify-between  w-full  bg-slate-400 ">
          <div className="w-1/2">
            <img src={profilePic} alt="Mahesh" className="w-full px-20" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text={"I'm Mahesh, A MERN stack developer."}
              className="!text-left !text-xl md:!text-4xl lg:!text-8xl"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <a
                href={dummy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download
              >
                Resume
                <LinkArrow className={"w-6 ml-1"} />
              </a>
              <a
                href="mailto:maheshkadam9298@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-lg font-semibold text-dark hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute sm:z-0 lg:z-10 right-6   top-20 inline-block w-24 ">
        <img src={lightBulb} alt="Filament" className="w-full h-auto" />
      </div>
    </main>
  );
};

export default Home;
