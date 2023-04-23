import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Home from "../Home/Home";
import { useLoaderData } from "react-router-dom";
import { activityContext } from "../../contexts/activityContext";
const HomeLayout = () => {
  const data = useLoaderData();
  const [activities, setActivites] = useState(data);
  const [currentActivities, setCurrentActivities] = useState(activities);

  return (
    <div className="">
      <activityContext.Provider
        value={{
          activities,
          setActivites,
          currentActivities,
          setCurrentActivities,
        }}
      >
        <Home></Home>
      </activityContext.Provider>
    </div>
  );
};

export default HomeLayout;
