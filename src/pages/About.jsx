import React from "react";
import { Helmet } from "react-helmet";
import AnimatedText from "../components/AnimatedText";
import profilePic from "../assets/profile/profile/kurta_png.png";
import profilePicc from "../assets/profile/profile/developer-pic-1.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center bg-light dark:bg-dark text-dark dark:text-light">
        <div className="p-4 sm:p-8">
          <AnimatedText
            text="Solutions with Impact!"
            className="sm:text-3xl md:text-4xl !text-6xl sm:mb-5"
          />
          <motion.div
            className="mt-10 grid w-full grid-cols-1 md:grid-cols-8 lg:grid-cols-6 gap-8 md:gap-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="md:col-span-6 lg:col-span-4 bg-gray-300 dark:bg-gray-800 flex flex-col items-start justify-start py-4 sm:py-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="px-4 sm:px-24 mb-4 text-lg font-bold uppercase text-dark dark:text-light/75">
                Biography
              </h2>
              <p className="px-4 sm:px-24 py-1 font-semibold">
                I am a passionate web developer with expertise in JavaScript,
                React, and Next.js, focused on crafting dynamic, user-friendly
                applications.
              </p>
              <p className="px-4 sm:px-24 py-1 font-semibold">
                My experience spans both front-end and back-end development,
                allowing me to deliver seamless, comprehensive solutions. Having
                worked on real-time projectsnt.
              </p>
              <p className="px-4 sm:px-24 py-1 font-semibold">
                I am an enthusiastic learner who thrives on tackling challenges
                and contributing to project success.
              </p>
            </motion.div>
            <motion.div
              className="col-span-1 md:col-span-2 lg:col-span-2 flex justify-center lg:justify-end items-center lg:mx-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Profile picture for small screens */}
              <img
                src={profilePicc}
                alt="Mahesh"
                className="block md:hidden w-full h-auto rounded-2xl border-2 border-solid border-gray-600 dark:border-gray-400 lg:w-3/4 lg:h-auto lg:border-4 lg:border-gray-700 dark:lg:border-gray-600"
              />
              {/* Profile picture for medium screens and larger */}
              <img
                src={profilePic}
                alt="Mahesh"
                className="hidden md:block w-full h-auto rounded-2xl border-2 border-solid border-gray-600 dark:border-gray-400 lg:w-3/4 lg:h-auto lg:border-4 lg:border-gray-700 dark:lg:border-gray-600"
              />
            </motion.div>
          </motion.div>
          {/* Professional Statistics Section */}
          <motion.div
            className="flex flex-col items-center justify-center mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <AnimatedText
              className="!text-4xl font-bold mb-6"
              text="Professional Statistics"
            />
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="text-3xl font-semibold">2+</div>
                <div className="text-lg font-semibold">Satisfied Clients</div>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="text-3xl font-semibold">5+</div>
                <div className="text-lg font-semibold">Projects Completed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-semibold">1</div>
                <div className="text-lg font-semibold">Years of Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default About;
