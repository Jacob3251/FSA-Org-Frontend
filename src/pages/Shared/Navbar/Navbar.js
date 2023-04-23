import React from "react";
import logo from "../../../assets/images/companyLogo.png";
import "./NavBar.css";
import {
  useAuthState,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const Navbar = () => {
  // const [user, loading] = useSignInWithGoogle(auth);
  const [signOut] = useSignOut(auth);
  const [user, loading] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
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
          <Link to="/" className="btn ">
            Home
          </Link>
          <Link to="/donation" className="btn ">
            Donation
          </Link>
          {user && (
            <Link to="/event" className="btn ">
              Events
            </Link>
          )}
          <Link to="/blogs" className="btn ">
            Blogs
          </Link>
        </div>
        {/* Login Menu */}
        <div className="flex justify-center items-center space-x-2">
          <Link to="/register" className=" reg ">
            Register
          </Link>
          <Link to="/admin" className=" admin ">
            Admin
          </Link>
          <span>{loading ? "Loading" : "Logged In"}</span>
          <button
            onClick={async () => {
              await signOut();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
