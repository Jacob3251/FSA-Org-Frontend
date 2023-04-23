import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/images/companyLogo.png";
const LoginLayout = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-red-700">Error: {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
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
          onClick={() => signInWithGoogle()}
        >
          <FcGoogle className="text-4xl mr-[24%]" />
          <span className="text-black text-[16px] font-semibold font-Mono">
            Continue with Google!!!
          </span>
        </button>
        <h3 className="font-Mono mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Create an account
          </Link>
        </h3>
        {errorElement}
      </div>
    </div>
  );
};

export default LoginLayout;
