import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className=" grid grid-cols-4 py-10 gap-[30px]">
      {blogs.map((blog) => (
        <Blog blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
