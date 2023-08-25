import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import {
  FcBullish,
  FcDonate,
  FcPlus,
  FcSurvey,
  FcTodoList,
} from "react-icons/fc";
import TableDesign from "../TableDesign/TableDesign";
import { useLoaderData } from "react-router-dom";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
const AdminLayout = () => {
  const registeredVolunteers = useLoaderData();
  const [blogInputDiv, setBlogInputDiv] = useState(false);
  const data = [
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
    { name: "Md Adil", eventName: "Babysitting", date: "30-04-2023", id: 1 },
  ];
  const addBlog = () => {
    setBlogInputDiv(!blogInputDiv);
  };
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
          <button className="font-Mono text-[16px] font-bold bg-white px-5 py-2 rounded-md flex items-center space-x-3">
            <FcTodoList />
            <span>Events</span>
          </button>
          <button className="font-Mono text-[16px] font-bold bg-white px-5 py-2 rounded-md flex items-center space-x-3">
            <FcSurvey />
            <span>Blogs</span>
          </button>

          <button className="font-Mono text-[16px] font-bold bg-white px-5 py-2 rounded-md flex items-center space-x-3">
            <FcDonate /> <span>Donations</span>
          </button>
        </div>
        {/* View Panel */}
        <div className=" w-full">
          {/* New Event Add */}
          <div className="flex px-5 py-2 justify-between items-center bg-[#f5f5f5] w-full rounded-lg mb-3">
            <div>
              <h3 className="font-Mono text-[16px] font-bold mt-3">
                Add New Event
              </h3>
              <p className="font-Robo text-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              </p>
            </div>
            <button className="text-[26px] hover:scale-110 duration-150">
              <FcPlus />
            </button>
          </div>
          {/* New Blogs Add */}
          <div className="bg-[#f5f5f5] w-full rounded-lg mb-5">
            {blogInputDiv === false ? (
              <div className="flex px-5 py-2 justify-between items-center">
                <div>
                  <h3 className="font-Mono text-[16px] font-bold mt-3">
                    Add New Blog
                  </h3>
                  <p className="font-Robo text-[10px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut
                  </p>
                </div>
                <button
                  className="text-[26px] hover:scale-110 duration-150"
                  onClick={addBlog}
                >
                  <FcPlus />
                </button>
              </div>
            ) : (
              <div className="relative bg-[#f5f5f5] w-full p-5 rounded-lg mb-5">
                <div
                  className="text-red-500 absolute right-4 top-3 text-[22px] hover:scale-110 duration-150"
                  onClick={addBlog}
                >
                  <FaTimes></FaTimes>
                </div>
                {/* blog input form below */}
                <form className="flex flex-col space-y-3 justify-start items-start">
                  {/* title */}
                  <div className="w-full rounded-lg">
                    <input
                      className="w-[95%] rounded-md py-1 px-2 text-[14px] outline-1 outline-neutral focus:outline-blue-500"
                      required
                      type="text"
                      placeholder="Enter Blog Title"
                    />
                  </div>
                  {/* content */}
                  <div className="w-full rounded-lg">
                    <textarea
                      className="w-[95%] rounded-md py-1 px-2 text-[14px] outline-1 outline-neutral focus:outline-blue-500"
                      required
                      placeholder="Enter Blog"
                      type="text"
                      rows={3}
                    />
                  </div>
                  {/* cover img link */}
                  <div className="w-full rounded-lg">
                    <input
                      className="w-[95%] rounded-md py-1 px-2 text-[14px] outline-1 outline-neutral focus:outline-blue-500"
                      required
                      placeholder="Enter Blog Cover Image Link"
                      type="text"
                    />
                  </div>
                  <div>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* All Volunteers manage*/}
          <div className=" px-5 py-3">
            <h3 className="text-[16px] font-Mono font-bold ">All Volunteers</h3>
            <p className="text-[10px] font-Robo font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, vero odit aliquam voluptas voluptatem veritatis?
            </p>
            {/* data table below */}
            <TableDesign data={registeredVolunteers}></TableDesign>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
