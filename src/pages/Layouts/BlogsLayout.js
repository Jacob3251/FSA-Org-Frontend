import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import bloglogo from "../../assets/images/blogs.jpg";
import Blogs from "../Blogs/Blogs";
import BlogManager, { BlogContext } from "../../contexts/blogContext";
const BlogsLayout = () => {
  const blogs = useLoaderData();
  return (
    <BlogManager className="relative">
      <img
        src={bloglogo}
        className="bg-img absolute top-0 left-0 h-[800px] w-[100%]"
        alt=""
      />
      <div className=" ">
        <Navbar></Navbar>
      </div>
      <div className="w-[85%] mx-auto pt-8 ">
        <h3 className="font-Mono text-[36px] text-center font-bold">
          Our Latest News
        </h3>
        <hr className="border-b-2 border-gray-500 my-2" />
        <Blogs blogs={blogs}></Blogs>
      </div>
    </BlogManager>
  );
};

export default BlogsLayout;
