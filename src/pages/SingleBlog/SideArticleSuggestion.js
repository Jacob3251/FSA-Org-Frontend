import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SideArticleSuggestion = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((response) => {
      const { data } = response;
      setBlogs(data);
    });
  }, []);

  return (
    <div className=" w-[25%] px-5 pb-5">
      {blogs.map((blog) => (
        <div
          className="p-5 bg-gray-100 mb-3 flex overflow-hidden justify-between"
          onClick={() => navigate(`/blogs/${blog._id}`)}
        >
          {/* title part */}
          <div className="flex flex-col ">
            <h3 className="font-Robo font-medium text-gray-950 text-[14px]">
              {blog.title}
            </h3>
            <p className="text-gray-800 font-medium text-[12px]">
              Posted By: <i>{blog.author}</i>
            </p>
          </div>
          <div className="w-[30%]">
            <img src={blog.imgUrl} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideArticleSuggestion;
