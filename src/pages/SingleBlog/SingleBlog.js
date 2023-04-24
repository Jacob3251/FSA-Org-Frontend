import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleBlog = () => {
  const { postId } = useParams();
  const blogs = useLoaderData();
  const blog = blogs.find((item) => item.id == postId);
  return <div>This is single blog {blog.title}</div>;
};

export default SingleBlog;
