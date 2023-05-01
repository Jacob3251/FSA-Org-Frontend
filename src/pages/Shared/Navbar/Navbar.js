import React, { useContext } from "react";
import logo from "../../../assets/images/companyLogo.png";
import "./NavBar.css";

import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { AuthContext } from "../../../contexts/userContext";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="w-[85%] mx-auto  mt-0 flex justify-between  items-center font-Mono ">
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
      <div className="flex justify-center items-center space-x-2">
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
    </div>
  );
};

export default Navbar;
