import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ecom from "../assets/profile/projects/ecom.jpg";
import estate from "../assets/profile/projects/estate.png";
import movies from "../assets/profile/projects/movies.png";
import notes from "../assets/profile/projects/notes.png";
import weather from "../assets/profile/projects/weather.jpg";
import blog from "../assets/profile/projects/blog.jpg";

const projects = [
  {
    id: 1,
    title: "Blog Platform",
    image: blog,
    link: "https://mern-blog-app-qpoe.onrender.com/signin",
  },
  {
    id: 2,
    title: "Movies App",
    image: movies,
    link: "https://next-movie-app-sable-three.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate",
    image: estate,
    link: "https://mern-estate-16o5.onrender.com/",
  },
  { id: 4, title: "Notes App", image: notes, link: "#" }, // Replace # with the actual link when available
  {
    id: 5,
    title: "E-commerce",
    image: ecom,
    link: "https://ecommerce-mern-eight-orcin.vercel.app/",
  },
  { id: 6, title: "Weather App", image: weather, link: "#" }, // Replace # with the actual link when available
];

const Projects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark dark:text-light">
          Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and below the view
          animate={{ opacity: 1, y: 0 }} // Final state: visible and at its original position
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleClick(project.link)}
              whileHover={{ scale: 1.05 }} // Scale up slightly on hover
              whileTap={{ scale: 0.95 }} // Scale down slightly on tap/click
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }} // Zoom in image slightly on hover
                transition={{ duration: 0.3 }} // Smooth transition for the hover effect
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-dark dark:text-light text-center">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
