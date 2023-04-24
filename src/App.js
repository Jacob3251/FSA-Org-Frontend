import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/Layouts/HomeLayout";
import LoginLayout from "./pages/Layouts/LoginLayout";
import RegisterLayout from "./pages/Layouts/RegisterLayout";
import AdminLayout from "./pages/Layouts/AdminLayout";
import DonationLayout from "./pages/Layouts/DonationLayout";
import BlogsLayout from "./pages/Layouts/BlogsLayout";
import EventLayout from "./pages/Layouts/EventLayout";
import ErrorElement from "./pages/Layouts/ErrorElement";
import axios from "axios";
import RequireAuth from "./pages/Shared/utilities/RequireAuth";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      loader: async () => {
        const activities = await axios.get("deed.json");
        const { data } = activities;
        return data;
      },
    },
    {
      path: "/login",
      element: <LoginLayout></LoginLayout>,
    },
    {
      path: "/register",
      element: <RegisterLayout></RegisterLayout>,
    },
    {
      path: "/admin",
      element: <AdminLayout></AdminLayout>,
    },
    {
      path: "/donation",
      element: (
        <RequireAuth>
          <DonationLayout></DonationLayout>
        </RequireAuth>
      ),
    },
    {
      path: "/event",
      element: (
        <RequireAuth>
          <EventLayout></EventLayout>
        </RequireAuth>
      ),
    },
    {
      path: "/blogs",
      element: (
        <RequireAuth>
          <BlogsLayout></BlogsLayout>
        </RequireAuth>
      ),
      loader: async () => {
        const blogs = await axios.get("blogs.json");
        const { data } = blogs;
        return data;
      },
    },
    {
      path: "/blogs/:postId",
      element: <SingleBlog></SingleBlog>,
      loader: async () => {
        const blogs = await axios.get("blogs.json");
        const { data } = blogs;
        return data;
      },
    },
    {
      path: "*",
      element: <ErrorElement></ErrorElement>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
