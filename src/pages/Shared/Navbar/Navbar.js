import React, { useContext, useState } from "react";
import logo from "../../../assets/images/companyLogo.png";
import "./NavBar.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdEditCalendar } from "react-icons/md";
import {
  FaBookOpen,
  FaDollarSign,
  FaHouseUser,
  FaPowerOff,
  FaTimes,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/userContext";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="w-full md:w-[85%] mx-auto py-2  mt-0  font-Mono 0">
      <div className="flex justify-between items-center w-full">
        {/* Logo Part */}
        <div className="flex">
          <img src={logo} className="w-[80px] h-[80px]" alt="logo" />
          <div className="flex flex-col   justify-center items-center">
            <h3 className="text-left text-black text-[18px] font-semibold w-full font-Mono">
              FSA Org
            </h3>
            <p className="font-Robo text-[10px] text-gray-700">
              LETS FAKE IT TILL YOU MAKE IT
            </p>
          </div>
        </div>
        {/* Menu Part */}
        <div className="md:flex justify-center items-center space-x-2 hidden">
          {/* Regular Menu */}
          <div className="flex text-[#0B0B0B]">
            <Link to="/" className="Btn ">
              Home
            </Link>
            <Link to="/donation" className="Btn ">
              Donation
            </Link>
            {user && (
              <Link to="/event" className="Btn ">
                Events
              </Link>
            )}
            <Link to="/blogs" className="Btn ">
              Blogs
            </Link>
          </div>
          {/* Login Menu */}
          <div className="flex justify-center items-center space-x-2">
            <Link to="/admin" className=" admin ">
              Admin
            </Link>
            {!user && (
              <Link to="/login" className=" reg ">
                Login
              </Link>
            )}
            {user && (
              <button
                className="text-red-600 hover:bg-white border-2 border-transparent hover:border-red-600 rounded-full text-xl  p-1"
                onClick={() => {
                  logOut();
                }}
              >
                <FaPowerOff className="" />
              </button>
            )}
          </div>
        </div>
        {/* Secondary Menu Toggler */}
        <div
          onClick={() => {
            setDropDown(!dropDown);
            console.log("pressed");
          }}
          className="btn-design md:hidden"
        >
          {dropDown === false ? <HiMenu className=""></HiMenu> : <FaTimes />}
        </div>
      </div>

      <div className={`${dropDown === false ? "wrapper" : "wrapper open"}`}>
        <div className={`expandable `}>
          <div className=" flex flex-col bg-white bg-opacity-25 justify-start text-[#0B0B0B] md:hidden">
            <Link to="/" className="nav-item ">
              <FaHouseUser className="btn-design px-0 mr-2" />
              Home
            </Link>
            <Link to="/donation" className="nav-item ">
              <FaDollarSign className="btn-design px-0 mr-2" />
              Donation
            </Link>
            {user && (
              <Link to="/event" className="nav-item ">
                <MdEditCalendar className="btn-design px-0 mr-2" />
                Events
              </Link>
            )}
            <Link to="/blogs" className="nav-item rounded-b-xl">
              <FaBookOpen className="btn-design px-0 mr-2" />
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
