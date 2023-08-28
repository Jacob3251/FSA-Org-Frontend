import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideArticleSuggestion from "./SideArticleSuggestion";
import BlogManager, { BlogContext } from "../../contexts/blogContext";
import { AuthContext } from "../../contexts/userContext";
import Footer from "../Shared/Footer/Footer";
const SingleBlog = () => {
  const { parentPost } = useContext(AuthContext);
  const postId = useParams();
  const blog = useLoaderData();
  const { author, _id, title, type, tags, content, imgUrl } = blog;
  // const [screenResolution, setScreenResolution] = useState(window?.innerWidth);
  // const handleResolution = () => {
  //   setScreenResolution(window?.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResolution);
  // }, [window?.innerWidth]);
  return (
    <BlogManager>
      {/* Navbar */}
      <div className="mb-5 ">
        <Navbar></Navbar>
      </div>
      {/* <p>{parentPost}</p> */}
      {/* Content Area */}
      <div className="w-[85%] mx-auto ">
        <div className="flex flex-col lg:flex-row w-full space-y-5  lg:space-y-0 lg:space-x-5">
          {/* Main Article */}
          <div className="w-full lg:w-[75%]">
            {/* img part */}
            <div>
              <img src={imgUrl} className="w-full" alt="" />
            </div>
            {/* content area */}
            <div>
              <h3 className="text-[36px] font-Robo my-2">{title}</h3>
              <h5 className="text-gray-700 mb-3 text-[14px]">
                Posted by: <span className="italic">{author}</span>
              </h5>
              <p className="text-18px  text-wrap ">{content}</p>
            </div>
          </div>
          {/* Side Article Suggestion */}
          <SideArticleSuggestion
            ParentPost={postId.postId}
          ></SideArticleSuggestion>
        </div>
      </div>
      <Footer footercls="mt-5"></Footer>
    </BlogManager>
  );
};

export default SingleBlog;
