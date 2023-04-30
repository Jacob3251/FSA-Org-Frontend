import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import {
  FcBullish,
  FcDonate,
  FcPlus,
  FcSurvey,
  FcTodoList,
} from "react-icons/fc";
const AdminLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex w-[85%]  mx-auto space-x-5">
        {/* Controller Panel */}
        <div className="bg-[#f5f5f5] flex flex-col space-y-3 px-5 py-5 rounded-lg">
          <h3 className="flex font-Robo text-[24px] justify-center items-center space-x-2">
            <FcBullish /> <span>Dashboard</span>
          </h3>
          <button className="font-Mono text-[16px] font-bold bg-green-500 px-5 py-2 rounded-md flex items-center space-x-3">
            <FcTodoList />
            <span>Events</span>
          </button>
          <button className="font-Mono text-[16px] font-bold bg-green-500 px-5 py-2 rounded-md flex items-center space-x-3">
            <FcSurvey />
            <span>Blogs</span>
          </button>

          <button className="font-Mono text-[16px] font-bold bg-green-500 px-5 py-2 rounded-md flex items-center space-x-3">
            <FcDonate /> <span>Donations</span>
          </button>
        </div>
        {/* View Panel */}
        <div className="bg-yellow-600 w-full">
          {/* New Event Add */}
          <div className="flex px-5 py-2 justify-between items-center bg-[#f5f5f5] w-full rounded-lg mb-3">
            <div>
              <h3 className="font-Mono text-[16px] font-bold">Add New Event</h3>
              <p className="font-Robo text-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              </p>
            </div>
            <button className="text-[26px] hover:scale-110 duration-150">
              <FcPlus />
            </button>
          </div>
          {/* New Blogs Add */}
          <div className="flex px-5 py-2 justify-between items-center bg-[#f5f5f5] w-full rounded-lg mb-5">
            <div>
              <h3 className="font-Mono text-[16px] font-bold">Add New Blog</h3>
              <p className="font-Robo text-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              </p>
            </div>
            <button className="text-[26px] hover:scale-110 duration-150">
              <FcPlus />
            </button>
          </div>

          {/* All Volunteers manage*/}
          <div className="bg-[#f5f5f5] px-5 py-3">
            <h3 className="text-[16px] font-Mono font-bold ">All Volunteers</h3>
            <p className="text-[10px] font-Robo font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, vero odit aliquam voluptas voluptatem veritatis?
            </p>
            {/* data table below */}
            <div>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Registration Time</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="bg-red-500">
                    <td>01</td>
                    <td>Nayeem</td>
                    <td>Babysiting</td>
                    <td>30-4-2023</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Nayeem</td>
                    <td>Babysiting</td>
                    <td>30-4-2023</td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Nayeem</td>
                    <td>Babysiting</td>
                    <td>30-4-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
