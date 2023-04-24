import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import bloglogo from "../../assets/images/blogs.jpg";
import Blogs from "../Blogs/Blogs";
const BlogsLayout = () => {
  const blogs = useLoaderData();
  return (
    <div className="relative">
      <img
        src={bloglogo}
        className="bg-img absolute top-0 left-0 h-[800px] w-[100%]"
        alt=""
      />
      <div className="bg-green-500 ">
        <Navbar></Navbar>
      </div>
      <div className="w-[85%] mx-auto pt-10 ">
        <h3 className="font-Robo text-[24px] text-center">
          Our latest achievements
        </h3>
        <Blogs blogs={blogs}></Blogs>
      </div>
    </div>
  );
};

export default BlogsLayout;
