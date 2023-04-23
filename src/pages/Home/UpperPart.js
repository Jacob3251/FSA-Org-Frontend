import React, { useContext, useState } from "react";

import "./Home.css";
import { activityContext } from "../../contexts/activityContext";
import { useLoaderData } from "react-router-dom";
const UpperPart = () => {
  const { activities, setActivites, currentActivities, setCurrentActivities } =
    useContext(activityContext);
  const [keyword, setKeyword] = useState("");
  function filterDataByKeyword(data, keyword) {
    const filteredData = [];

    data.forEach((item) => {
      const temp = item.keywords;
      for (let i = 0; i < temp.length; i++) {
        console.log("data item == ", temp[i], "Keyword == ", keyword);
        if (
          item.name.toUpperCase().includes(keyword.toUpperCase()) ||
          temp[i].toUpperCase().includes(keyword.toUpperCase())
        ) {
          const original = filteredData.find((u) => u.id === item.id);
          if (!original) {
            filteredData.push(item);
          }
        }
      }

      // filteredData.push(filtered[0]);
    });
    if (filteredData.length === 0) {
      return data;
    }
    return filteredData;
  }
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.name.value;
    if (keyword === "") {
      setCurrentActivities(activities);
      return;
    }
    console.log("Input ", keyword);
    const data = filterDataByKeyword(activities, keyword);
    console.log(data);
    setCurrentActivities(data);
  };
  const handleSearchByChange = (event) => {
    // event.preventDefault();
    const keyword = event.target.value;
    if (keyword === "") {
      setCurrentActivities(activities);
      return;
    }
    console.log("Input ", keyword);
    const data = filterDataByKeyword(activities, keyword);
    console.log(data);
    setCurrentActivities(data);
  };

  return (
    <div className=" py-10 flex justify-center items-center flex-col ">
      <h3 className="text-[36px] text-black font-Mono font-bold mb-8">
        START SOCIAL WORK FOR GETTING REPUTATION
      </h3>
      <form
        onSubmit={handleSearch}
        className="flex w-[60%] mx-auto justify-center items-center"
      >
        <input
          onChange={handleSearchByChange}
          type="text"
          placeholder="Search..."
          name="name"
          className="rounded-tl-[5px] rounded-bl-[5px] py-[5px] px-5  w-[80%] outline-[#3F90FC]"
        />
        <input
          type="submit"
          className="bg-[#3F90FC] rounded-tr-[5px] rounded-br-[5px] p-[5px] font-Mono text-[16px] text-white"
        />
      </form>
    </div>
  );
};

export default UpperPart;
