import React from "react";

const Activity = ({ activity }) => {
  // Tried to implement different colors randomly
  // const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#00008B"];
  // const x = parseInt(activity.id);
  // const y = Math.floor(Math.random() * 3);

  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={() => alert(activity.name)}
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
