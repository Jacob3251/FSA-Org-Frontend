import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh] w-[100vw]  font-Mono font-semibold">
      <div className=" flex flex-col items-center">
        <InfinitySpin width="200" color="#3F90FC" />
        <h3 className="animate-bounce">Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
