import React from "react";
import { Helmet } from "react-helmet";
import AnimatedText from "../components/AnimatedText";
import profilePic from "../assets/profile/profile/kurta_png.png";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Filament | About Page</title>
        <meta
          name="description"
          content="A passionate web developer specializing in dynamic applications and modern technologies."
        />
      </Helmet>
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark text-dark dark:text-light">
        <div className="p-4 sm:p-8">
          <AnimatedText
            text="Solutions with Impact !"
            className="sm:text-3xl md:text-4xl !text-6xl"
          />
          <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-8 lg:grid-cols-6 gap-8 md:gap-16">
            <div className="md:col-span-6 lg:col-span-4 bg-gray-300 dark:bg-gray-800 flex flex-col items-start justify-start py-4 sm:py-8">
              <h2 className="px-4 sm:px-24 mb-4 text-lg font-bold uppercase text-dark dark:text-light/75">
                Biography
              </h2>
              <p className="px-4 sm:px-24 py-1 font-semibold">
                I am a passionate web developer specializing in creating
                dynamic, user-friendly applications using modern technologies.
                With a strong foundation in JavaScript, React, and Next.js
              </p>
              <p className="px-4 sm:px-24 py-1 font-semibold">
                I excel at delivering seamless and intuitive user experiences.
                My background in both front-end and back-end development allows
                me to tackle complex projects and provide comprehensive
                solutions tailored to meet the unique needs of each client.
              </p>
              <p className="px-4 sm:px-24 py-1 font-semibold">
                My experience includes working on real-time projects for
                clients. As an enthusiastic learner who enjoys the development
                process, I am eager to take on new challenges, collaborate with
                others, and contribute to the success of every project I handle.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-2 flex justify-center lg:justify-end items-center lg:mx-4">
              <img
                src={profilePic}
                alt="Mahesh"
                className="w-full h-auto rounded-2xl border-2 border-solid border-gray-600 dark:border-gray-400 lg:w-3/4 lg:h-auto lg:border-4 lg:border-gray-700 dark:lg:border-gray-600"
              />
            </div>
          </div>
          {/* New Section for Large Screens */}
          <div className="flex flex-col items-center justify-center mt-10">
            <AnimatedText
              className="!text-4xl font-bold mb-6"
              text="Professional Statistics"
            />
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="text-3xl font-semibold">10+</div>
                <div className="text-lg font-semibold">Satisfied Clients</div>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="text-3xl font-semibold">20+</div>
                <div className="text-lg font-semibold">Projects Completed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-semibold">2</div>
                <div className="text-lg font-semibold">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
