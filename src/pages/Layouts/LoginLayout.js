import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/images/companyLogo.png";
import { AuthContext } from "../../contexts/userContext";

const LoginLayout = () => {
  const { user, signInWithGooglePopUp, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  return (
    <div className=" w-[34%] mx-auto flex flex-col justify-center items-center">
      {/* logo */}
      <div className="flex my-8">
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
      {/* Social Login part */}
      <div className=" w-full flex flex-col items-center py-[130px] px-[56px] mt-10 hover:border-blue-500 border-[#ABABAB] border-2">
        <h2 className="mb-[20px]  text-[24px] font-bold font-Mono">
          Login With
        </h2>

        <button
          className="flex  items-center border-[#C7C7C7] border-2 font-Mono text-[16px] rounded-full pl-1 py-[6px] w-full"
          onClick={signInWithGooglePopUp}
        >
          <FcGoogle className="text-4xl mr-[24%]" />
          <span className="text-black text-[16px] font-semibold font-Mono">
            Continue with Google!!!
          </span>
        </button>
        <h3 className="font-Mono mt-2">
          Don't have an account?{" "}
          <button
            // to="/register"
            className="text-blue-500 underline"
            onClick={() => user && console.log(user?.displayName)}
          >
            Create an account
          </button>
        </h3>
        {user && <button onClick={() => logOut()}>Log out</button>}
        {/* {errorElement} */}
      </div>
    </div>
  );
};

export default LoginLayout;
