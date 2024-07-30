import React from "react";
import profilePic from "../assets/profile/profile/developer-pic-1.png";
const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      .
      <layout className="p-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            {/* //w-1/2 */}
            <img src={profilePic} alt="Mahesh" className="w-full   px-20" />
          </div>
          <div className="w-1/2">
            <h1>IIt will work one day and i'll make it</h1>
            <p className="">
              {" "}
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.{" "}
            </p>
          </div>
        </div>
      </layout>
    </main>
  );
};

export default Home;
