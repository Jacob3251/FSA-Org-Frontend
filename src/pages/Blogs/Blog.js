import React from "react";
import { wordLimiter } from "../Shared/utilities/functions";
import { useNavigate } from "react-router-dom";
const Blog = ({ blog }) => {
  const { type, author, content, _id } = blog;
  const Type = type.toUpperCase();
  const Author = author.toUpperCase();
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer bg-[#D3D3D3] rounded-t-[15px]">
      <div className=" overflow-hidden rounded-t-[15px]">
        <img
          className="hover:opacity-80 hover:scale-105 duration-500 "
          src={blog.imgUrl}
          alt={blog.title}
        />
      </div>
      {/* Author and type  */}
      <div className="bg-[#f5f5f5] bg-opacity-30 py-2 px-3 flex space-x-5 justify-between text-[14px]">
        <h3 className=" py-2 px-5 font-semibold ">{Type}</h3>
        <h3 className=" py-2 px-5 font-medium italic">{Author}</h3>
        {/* <h3 className="bg-yellow-300 py-2 ">Author</h3> */}
      </div>
      {/* content part */}
      <div className="px-5 pb-5 ">
        <h3 className=" py-5 text-black font-Robo font-semibold text-[16px]">
          {blog.title}
        </h3>
        <p className="text-gray-800 font-Mono text-[14px]">
          {wordLimiter(blog.content, 25)}...
        </p>
        <button
          onClick={() => navigate(`/blogs/${_id}`)}
          className=" bg-white     font-semibold font-Mono text-[14px] my-5 w-full  duration-200  px-5 py-3"
        >
          Read full blog
        </button>
      </div>
    </div>
  );
};

export default Blog;
