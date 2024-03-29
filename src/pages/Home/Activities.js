import React, { useContext } from "react";
import { activityContext } from "../../contexts/activityContext";
import Activity from "./Activity";
const Activities = () => {
  const { activities, setActivites, currentActivities, setCurrentActivities } =
    useContext(activityContext);
  console.log(activities);
  return (
    <div className="w-[85%] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-[30px]">
        {currentActivities.map((activity) => (
          <Activity activity={activity} key={activity._id}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
