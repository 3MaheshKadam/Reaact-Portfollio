import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactt from "../assets/profile/skill/reactt.png";
import database from "../assets/profile/skill/database.png";
import expressjs from "../assets/profile/skill/expressjs.png";
import figma from "../assets/profile/skill/figma.png";
import html from "../assets/profile/skill/html-5.png";
import postman from "../assets/profile/skill/postman.png";
import tailwind from "../assets/profile/skill/tailwind.png";
import js from "../assets/profile/skill/js.png";
import nodejs from "../assets/profile/skill/nodejs.png";
import github from "../assets/profile/skill/github.png";

const SkillItem = ({ color, skill, period }) => (
  <div className="flex flex-col gap-5 items-center">
    <div className="border-dashed border-2 border-gray-400 p-1 rounded-full">
      <div
        className={`w-8 h-8 ${color} rounded-full phone:w-4 phone:h-4`}
      ></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold phone:text-xl">{skill}</h1>
      <p className="text-lg text-gray-400 phone:text-sm">{period}</p>
    </div>
    <br />
    <hr className="w-24 rotate-90 border-dashed border-2 border-gray-400" />
  </div>
);

const Skillset = () => {
  const skills = [
    { skill: "HTML", icon: html, level: "Expert" },
    { skill: "Tailwind CSS", icon: tailwind, level: "Advanced" },
    { skill: "JavaScript", icon: js, level: "Expert" },
    { skill: "React", icon: reactt, level: "Advanced" },
    { skill: "Node.js", icon: nodejs, level: "Intermediate" },
    { skill: "MongoDB", icon: database, level: "Intermediate" },
    { skill: "Next.js", icon: expressjs, level: "Intermediate" },
    { skill: "Git", icon: github, level: "Intermediate" },
    { skill: "Postman", icon: postman, level: "Intermediate" },
    { skill: "Figma", icon: figma, level: "Beginner" },
  ];

  return (
    <div className="py-10 flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold phone:text-lg text-orange-500">
        Skillset
      </h1>
      <hr className="w-64 phone:w-48" />
      <div className="grid grid-cols-2 gap-8 mt-8 phone:grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <motion.div
            key={skill.skill}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <img src={skill.icon} alt={skill.skill} className="w-16 h-16" />
            <h2 className="mt-4 text-xl font-bold">{skill.skill}</h2>
            <p className="text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function Experience() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col">
      {/* Experience Section */}
      <motion.div
        className="w-full py-10 flex flex-col items-center justify-center gap-5 phone:gap-2 phone:py-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <h1 className="flex items-center gap-2 text-3xl font-bold phone:text-lg phone:gap-1">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            My
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-500"> Experience</span>
          </motion.div>
        </h1>
        <hr className="w-64 phone:w-48" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.5 }}
        className="py-14 flex flex-col gap-5 items-center justify-center"
      >
        <SkillItem
          color="bg-orange-500"
          skill="Web Development Internship"
          period="Bluestock Fintech | Aug 2024 - Present"
        />
        <SkillItem
          color="bg-black"
          skill="Freelance Developer"
          period="Self-employed | 2023 - 2024"
        />
      </motion.div>

      {/* Skillset Section */}
      <Skillset />
    </div>
  );
}

export default Experience;
