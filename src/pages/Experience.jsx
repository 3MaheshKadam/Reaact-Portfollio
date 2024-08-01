import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      <div className="w-full py-10 flex flex-col items-center justify-center gap-5 phone:gap-2 phone:py-2">
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
            <span className="text-orange-500"> Skills Journey</span>
          </motion.div>
        </h1>
        <hr className="w-64 phone:w-48" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <div className="py-14 flex flex-col gap-5 items-center justify-center">
          <SkillItem
            color="bg-orange-500"
            skill="HTML | CSS | JS"
            period="( 2021 - 2022 )"
          />
          <SkillItem
            color="bg-black"
            skill="React JS | Tailwind CSS"
            period="( 2022 - 2023 )"
          />
          <SkillItem
            color="bg-orange-500"
            skill="Express JS | MongoDB"
            period="( 2023 - 2024 )"
          />
          <SkillItem
            color="bg-black"
            skill="Next JS"
            period="( 2024 - Pursuing )"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
