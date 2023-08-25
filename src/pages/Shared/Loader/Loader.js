import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="loader flex justify-center items-center">
        <div className="loader1"></div>
      </div>
      <span className="mt-2 font-Robo font-semibold text-animation">
        Loading
      </span>
    </div>
  );
};

export default Loader;
