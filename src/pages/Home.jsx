import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import dummy from "../assets/dummy.pdf"; // Ensure the path to the PDF is correct
import { LinkArrow } from "../components/Icons.jsx";
const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className="layout p-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <img src={profilePic} alt="Mahesh" className="w-full px-20" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text={"It will work one day and I'll make it!"}
              className="!text-left"
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
    </main>
  );
};

export default Home;
