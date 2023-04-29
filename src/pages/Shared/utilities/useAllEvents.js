import axios from "axios";
import { useEffect } from "react";

const useAllEvents = () => {
  useEffect(async () => {
    const activities = await axios.get("http://localhost:5000/events");
    const { data } = activities;
    console.log(data);
    return data;
  }, []);
};
export default useAllEvents;
