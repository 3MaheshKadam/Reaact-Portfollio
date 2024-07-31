import React from "react";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center mt-8">
      <Link
        to="mailto:abcd@gmail.com"
        className="flex items-center justify-center bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default HireMe;
