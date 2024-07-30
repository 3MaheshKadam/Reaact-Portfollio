import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <div className="hover:scale-110 bg-dark h-12 w-12 text-light flex justify-center items-center rounded-full text-xl font-bold">
        <Link className="hover:scale-110" to="/">
          MK
        </Link>
      </div>
    </div>
  );
};

export default Logo;
