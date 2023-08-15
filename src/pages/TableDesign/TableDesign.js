import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const TableDesign = ({ data }) => {
  const handleParticipatedVolunteerDeletion = async (item) => {
    console.log("item to be deleted", item);
    await axios
      .delete(`http://localhost:5000/eventSelection/${item._id}`)
      .then((response) => console.log(response.data));
  };
  return (
    <div className="overflow-x-auto w-full mt-5">
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr className="">
            <th>
              <div className="text-[14px] font-bold">SL NO:</div>
            </th>
            <th>
              <div className="text-[14px] font-bold">Name</div>
            </th>
            <th>
              <div className="text-[14px] font-bold">Event Name</div>
            </th>
            <th>
              <div className="text-[14px] font-bold">Date</div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((u, index) => (
            <tr>
              <th>
                <div className="font-bold text-[12px]">{index + 1}</div>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold text-[12px]">{u.name}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold text-[12px]">{u.event}</div>
              </td>
              <td>
                <div className="font-bold text-[12px]">{u.date}</div>
              </td>
              <td>
                <button
                  onClick={() => handleParticipatedVolunteerDeletion(u)}
                  className="text-[20px] hover:text-red-500 duration-150"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesign;
