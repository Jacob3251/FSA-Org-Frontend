import React from "react";

const Plan = ({ plans }) => {
  return (
    <div className="flex p-2 space-x-2 justify-center items-center w-[85%] mx-auto mb-2">
      {plans.map((plan) => (
        <div
          className=" flex justify-center items-center flex-col font-Mono pt-8"
          key={plan.id}
        >
          <h3 className="font-bold text-[28px]">${plan.amount}</h3>
          <h5 className="font-bold text-[14px]">Monthly</h5>
          <p className="px-5 text-center my-5">{plan.text}</p>
          <button className="my-5 bg-orange-600 px-3 py-3 font-bold text-white hover:text-orange-600 hover:bg-white duration-300 border-2 border-orange-600">
            Give $10 Monthly
          </button>
        </div>
      ))}
    </div>
  );
};

export default Plan;
