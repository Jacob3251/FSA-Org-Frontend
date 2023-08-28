import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../contexts/blogContext";
import { AuthContext } from "../../contexts/userContext";

const SideArticleSuggestion = ({ ParentPost }) => {
  const navigate = useNavigate();
  const { blogs } = useContext(BlogContext);
  const { parentPost, setParentPost } = useContext(AuthContext);
  return (
    <div className="w-full  lg:w-[25%] lg:px-5 pt-10 lg:pt-0">
      <h3 className="text-center lg:text-left font-Robo text-[22px] border-b-2 border-black lg:text-[28px] font-bold mb-2">
        MORE BLOGS
      </h3>

      <div className="pb-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-5 bg-neutral-200 drop-shadow-sm hover:drop-shadow-lg cursor-pointer mb-5 flex lg:flex-col-reverse 2xl:flex-row overflow-hidden justify-between rounded-md"
            onClick={() => {
              setParentPost(blog._id);
              navigate(`/blogs/${blog._id}`);
            }}
          >
            <div className="flex flex-col w-[45%] lg:w-full 2xl:w-[45%]">
              <h3 className="font-Robo font-medium text-gray-950 text-[14px]">
                {blog.title}
              </h3>
              <p className="text-gray-800 font-medium text-[12px]">
                Posted By: <i>{blog.author}</i>
              </p>
            </div>
            <div className="w-[45%] lg:w-full lg:mb-3 2xl:mb-0 2xl:w-[45%] overflow-hidden ">
              <img className="w-full  object-cover" src={blog.imgUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideArticleSuggestion;
