import React, { useContext } from "react";
import { AuthContext } from "../../contexts/userContext";
import axios from "axios";
import { toast } from "react-hot-toast";

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
        .then((response) => {
          toast.success("Successfully enrolled!");
        });
      // console.log(selectionData);
    } else {
      toast.error("You need to be signed in silly!!");
    }
  };
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={handleEventSelection}
      className={`home-cart`}
      title={activity.description}
    >
      <div className="home-cart-img-div">
        <img src={activity.link} alt="" className="home-cart-img" />
      </div>
      <h3 className="home-cart-text">{activity.name}</h3>
    </div>
  );
};

export default Activity;
