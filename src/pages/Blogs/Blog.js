import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="cursor-pointer bg-[#D3D3D3] bg-opacity-80 rounded-t-lg">
      <div className=" overflow-hidden">
        <img
          className="hover:opacity-80 hover:scale-105 duration-500 "
          src={blog.imgUrl}
          alt={blog.title}
        />
      </div>
      {/* Author and type  */}
      <div className="bg-[#D3D3D3] bg-opacity-40 py-2 px-3 flex space-x-5 justify-between">
        <h3 className="bg-yellow-300 py-2 px-5">Type</h3>
        <h3 className="bg-yellow-300 py-2 px-5">Authorization</h3>
        {/* <h3 className="bg-yellow-300 py-2 ">Author</h3> */}
      </div>
      <h3 className="font-Mono py-5 ">{blog.title}</h3>
    </div>
  );
};

export default Blog;
