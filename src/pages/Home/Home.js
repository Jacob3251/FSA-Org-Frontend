import React, { useState } from "react";
import "./Home.css";
import Navbar from "../Shared/Navbar/Navbar";
import mainImg from "../../assets/images/people.png";
import UpperPart from "./UpperPart.js";
import Footer from "../Shared/Footer/Footer";
import Activities from "./Activities";
const Home = () => {
  return (
    <div className="relative ">
      <img
        alt="bg_image"
        src={mainImg}
        className="bg-img absolute top-0 left-0 h-[500px] w-[100%]"
      />
      <div className="">
        <Navbar></Navbar>
        <UpperPart></UpperPart>
        <Activities></Activities>
        <Footer footercls={""}></Footer>
      </div>
    </div>
  );
};

export default Home;
