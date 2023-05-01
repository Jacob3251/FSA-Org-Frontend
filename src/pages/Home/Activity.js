import React, { useContext } from "react";
import { AuthContext } from "../../contexts/userContext";
import axios from "axios";

const Activity = ({ activity }) => {
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  const { user } = useContext(AuthContext);

  const handleEventSelection = async () => {
    const date = getCurrentTime();
    if (user) {
      const selectionData = {
        name: user?.displayName,
        event: activity.name,
        eventDescription: activity.description,
        eventId: activity._id,
        email: user?.email,
        date: date,
      };
      await axios
        .post("http://localhost:5000/eventSelection", selectionData)
        .then((response) => console.log(response.data));
      // console.log(selectionData);
    }
  };
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={handleEventSelection}
      className={`bg-[#3F90FC] rounded-lg`}
      title={activity.description}
    >
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={activity.link}
          alt=""
          className="hover:opacity-80 scale-105 duration-500 hover:scale-110 "
        />
      </div>
      <h3 className="p-5 text-center text-white font-semibold font-Mono">
        {activity.name}
      </h3>
    </div>
  );
};

export default Activity;
