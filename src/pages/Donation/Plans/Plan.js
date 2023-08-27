import React from "react";

const Plan = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 place-content-center  p-2  w-[95%] md:w-[85%] mx-auto mb-2">
      {plans.map((plan) => (
        <div
          className=" flex bg-neutral-300 rounded-md drop-shadow-md justify-center items-center flex-col font-Mono pt-8"
          key={plan.id}
        >
          <h3 className="font-extrabold font-Robo text-[28px]">
            ${plan.amount}
          </h3>
          <h5 className="font-bold text-[14px]">Monthly</h5>
          <p
            style={{ textWrap: "wrap" }}
            className="px-5 text-start text my-5 font-serif"
          >
            {plan.text}
          </p>
          <button className="my-5 bg-orange-600 px-3 py-3 font-bold text-white hover:text-orange-600 hover:bg-white duration-300 border-2 border-orange-600">
            Give ${plan.amount} Monthly
          </button>
        </div>
      ))}
    </div>
  );
};

export default Plan;
