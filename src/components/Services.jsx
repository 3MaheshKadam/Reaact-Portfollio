import React from "react";
import { motion } from "framer-motion";
import web from "../assets/profile/services/web.png";
import backend from "../assets/profile/services/backend.png";
import custom from "../assets/profile/services/custom.png";
import api from "../assets/profile/services/api.png";
import Consultation from "../assets/profile/services/Consultation.png";
import maintainance from "../assets/profile/services/maintainance.png";
import AnimatedText from "./AnimatedText.jsx";

const Services = () => {
  return (
    // Services Section
    <motion.div
      className="mt-10 w-full bg-gray-300 dark:bg-gray-800 p-4 sm:p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
    >
      <AnimatedText
        text="Services I Offer"
        className="!text-3xl font-bold mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <img src={web} alt="Web Development" className="mb-4 w-16 h-16" />
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-base text-center text-gray-700 dark:text-gray-300">
            Building responsive and high-performance web applications using the
            latest technologies including React.js, Next.js, and more.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={backend}
            alt="Backend Development"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
          <p className="text-base text-center text-gray-700 dark:text-gray-300">
            Developing robust server-side applications and APIs using Node.js,
            Express.js, and MongoDB.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={custom}
            alt="Custom Software Creation"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold mb-3">
            Custom Software Creation
          </h3>
          <p className="text-base text-center text-gray-700 dark:text-gray-300">
            Develop custom software tailored to your specific needs, whether
            it's an online store or a social blogging site.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <img src={api} alt="API Building" className="mb-4 w-16 h-16" />
          <h3 className="text-xl font-semibold mb-3">API Building</h3>
          <p className="text-base text-center text-gray-700 dark:text-gray-300">
            Create and design APIs that allow different parts of your app, or
            even different apps, to talk to each other smoothly and efficiently.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={Consultation}
            alt="Consultation & Training"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold mb-3">
            Consultation & Training
          </h3>
          <p className="text-base text-center text-gray-700 dark:text-gray-300">
            Offering expert guidance on web technologies, project management,
            and best practices in development, as well as providing training
            sessions.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={maintainance}
            alt="Maintenance & Deployment"
            className="mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold mb-3">
            Maintenance & Deployment
          </h3>
          <p className="text-base text-center text-gray-700 dark:text-gray-300">
            Ensuring your applications run smoothly with ongoing maintenance and
            deploying new features or updates as needed.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
