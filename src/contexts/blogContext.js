import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./userContext";

export const BlogContext = createContext();

const BlogManager = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const { parentPost } = useContext(AuthContext);
  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((response) => {
      const filtered = response.data
        .filter((item) => item._id !== parentPost)
        .slice(0, 5);
      setBlogs(filtered);
    });
  }, [parentPost]);
  const BlogsInfo = { blogs, setBlogs };
  return (
    <BlogContext.Provider value={BlogsInfo}>{children}</BlogContext.Provider>
  );
};

export default BlogManager;
