import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "../Shared/Carousel/Carousel";
import Plans from "../Donation/Plans/Plans";
const DonationLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* Poster div */}
      <div className="w-full h-[500px] bg-orange-600 relative">
        <img
          className="w-full h-full  object-cover opacity-80"
          src="https://images.unsplash.com/photo-1610500795224-fb86b02926d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="bg-transparent w-2/3 absolute top-[25%] left-[18%]">
          <div>
            <h6 className="font-Mono font-bold text-white text-[12px]">
              MONTHLY DONATION PROGRAM
            </h6>
            <h2 className="text-[28px] font-Mono font-bold text-white">
              Become a monthly donar
            </h2>
          </div>
          <p className="text-white font-Mono text-[16px] font-medium w-[50%] mt-2">
            Consider becoming a monthly donor to support a cause you care about.
            Small recurring donations can make a big impact and help create
            lasting change.
          </p>
          <button className="bg-orange-600 mt-5 p-2 rounded-lg hover:rounded-none text-white font-Mono font-semibold text-[12px] duration-200">
            Donate Now..
          </button>
        </div>
      </div>
      {/* Carousel */}
      <Plans></Plans>
      <div className="bg-red-500 w-full h-[100vh]"></div>
    </div>
  );
};

export default DonationLayout;
