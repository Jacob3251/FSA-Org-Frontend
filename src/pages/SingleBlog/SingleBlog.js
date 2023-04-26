import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideArticleSuggestion from "./SideArticleSuggestion";
const SingleBlog = () => {
  // const postId = useParams();
  // const blogs = useLoaderData();
  // const params = useParams();
  const blog = useLoaderData();
  const { author, _id, title, type, tags, content, imgUrl } = blog;

  return (
    <div>
      {/* Navbar */}
      <div className="mb-5 ">
        <Navbar></Navbar>
      </div>
      {/* Content Area */}
      <div className="w-[85%] mx-auto ">
        <div className="flex w-full  space-x-5">
          {/* Main Article */}
          <div className=" w-[75%]">
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
              <p className="text-18px">{content}</p>
            </div>
          </div>
          {/* Side Article Suggestion */}
          <SideArticleSuggestion></SideArticleSuggestion>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
