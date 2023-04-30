import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "../Shared/Carousel/Carousel";
import bkashLogo from "../../assets/images/bkash.png";
import nogodLogo from "../../assets/images/ngLogo.png";
import Plans from "../Donation/Plans/Plans";
const DonationLayout = () => {
  const [paymentMethod, setPaymentMethod] = useState("1");
  const [donationPackage, setDonationPackage] = useState(0);
  const handleSelectPaymentMethod = (event) => {
    const method = event.target.value;
    setPaymentMethod(method);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // full payement obj making remaining
    const details = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      phnNumber: event.target.phnnum.value,
      email: event.target.email.value,
      donationPackage: donationPackage,
    };
    console.log(details);
  };
  return (
    <div>
      <Navbar></Navbar>
      {/* Poster div */}
      <div className="w-full h-[500px] bg-orange-600 relative">
        <img
          className="w-full h-full  object-cover opacity-80"
          src="https://images.unsplash.com/photo-1610500795224-fb86b02926d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="bg-transparent w-2/3 absolute top-[25%] left-[18%]">
          <div>
            <h6 className="font-Mono font-bold text-white text-[12px]">
              MONTHLY DONATION PROGRAM
            </h6>
            <h2 className="text-[28px] font-Mono font-bold text-white">
              Become a monthly donar
            </h2>
          </div>
          <p className="text-white font-Mono text-[16px] font-medium w-[50%] mt-2">
            Consider becoming a monthly donor to support a cause you care about.
            Small recurring donations can make a big impact and help create
            lasting change.
          </p>
          <a
            href="#donationform"
            className="bg-orange-600 mt-5 p-2 rounded-lg hover:rounded-none text-white font-Mono font-semibold text-[12px] duration-200"
          >
            Donate Now..
          </a>
        </div>
      </div>
      {/* Carousel */}
      <Plans></Plans>
      <div
        className="bg-orange-600 w-full h-[100vh] flex justify-center items-center"
        id="donationform"
      >
        <form onSubmit={handleSubmit} className="bg-white w-[30%] mx-auto px-6">
          <h3 className="font-Mono text-[36px] font-bold text-center my-5">
            FSA ORG
          </h3>
          <h6 className="font-Robo font-semibold text-[24px] text-center bg-orange-200 py-2">
            Donation Form
          </h6>
          {/* personal info */}
          <div className="w-full my-5">
            <div className="">
              <div className="my-2 flex flex-col">
                <label
                  htmlFor="fname"
                  className="text-[18px] font-Mono font-semibold"
                >
                  First Name
                </label>
                <input
                  className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-full my-2  flex flex-col">
                <label
                  htmlFor="lname"
                  className="text-[18px] font-Mono font-semibold"
                >
                  Last Name
                </label>
                <input
                  className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="">
              <div className="w-full my-2 flex flex-col">
                <label
                  htmlFor="phnnum"
                  className="text-[18px] font-Mono font-semibold"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phnnum"
                  name="phnnum"
                  placeholder="Enter PhoneNumber"
                  className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                />
              </div>
              <div className="w-full my-2 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[18px] font-Mono font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* payment info */}
          <div className="w-[80%]  mt-2">
            <h3 className="font-Mono text-[18px] font-bold mb-2">
              Donation Packages:
            </h3>
            <div className="flex w-full space-x-5 justify-start mb-2">
              <button
                onClick={() => setDonationPackage(5)}
                className="px-6 text-[16px] py-2 rounded-lg hover:bg-white hover:text-orange-600 border-orange-600 border-2 bg-orange-600 text-white font-bold font-Mono"
              >
                $5
              </button>
              <button
                onClick={() => setDonationPackage(10)}
                className="px-6 text-[16px] py-2 rounded-lg hover:bg-white hover:text-orange-600 border-orange-600 border-2 bg-orange-600 text-white font-bold font-Mono"
              >
                $10
              </button>
              <button
                onClick={() => setDonationPackage(15)}
                className="px-6 text-[16px] py-2 rounded-lg hover:bg-white hover:text-orange-600 border-orange-600 border-2 bg-orange-600 text-white font-bold font-Mono"
              >
                $15
              </button>
              <button
                onClick={() => setDonationPackage(20)}
                className="px-6 text-[16px] py-2 rounded-lg hover:bg-white hover:text-orange-600 border-orange-600 border-2 bg-orange-600 text-white font-bold font-Mono"
              >
                $20
              </button>
            </div>
            {/* payemnt method selection */}
            <div className="font-Mono text-[18px] font-bold flex items-center mb-2">
              <label htmlFor="payment-id">Select Payment Method: </label>
              <select
                onChange={handleSelectPaymentMethod}
                name="payment-method"
                id="payment-id"
                className=" px-5 py-2 text-[16px]"
              >
                <option
                  value="1"
                  selected
                  className="font-bold text-[14px]"
                  disabled
                >
                  Select
                </option>
                <option value="2" className="font-bold text-[14px]">
                  Nagad
                </option>
                <option value="3" className="font-bold text-[14px]">
                  Bkash
                </option>

                <option value="4" className="font-bold text-[14px]">
                  Card
                </option>
              </select>
            </div>
            {/* bkash */}
            {paymentMethod === "3" && (
              <div className="my-3" data-aos="flip-up">
                <div className="flex justify-start items-center my-2">
                  <img className="h-[50px] w-[100px]" src={bkashLogo} alt="" />
                </div>
                <div className="font-Mono font-bold text-[16px] mb-2">
                  <label htmlFor="bkash-num">Bkash Account Number: </label>
                  <input
                    type="text"
                    name="bkash-num"
                    placeholder="Enter Bkash Number"
                    id="bkash-num"
                    className="shadow-gray-300 shadow-inner px-2 py-2 rounded-lg ml-2 text-[14px] outline-none"
                  />
                </div>
                <div className="font-Mono font-bold text-[16px]">
                  <label htmlFor="bkash-transaction-num" className="">
                    Enter Transaction Number:
                  </label>
                  <input
                    type="text"
                    name="bkash-transaction"
                    id="transaction-num"
                    placeholder="Enter Transaction Number"
                    className="shadow-gray-300 shadow-inner px-2 py-2 rounded-lg ml-2 text-[14px] outline-none"
                  />
                </div>
              </div>
            )}
            {/* nagad */}
            {paymentMethod === "2" && (
              <div className="my-3" data-aos="flip-up">
                <div className="flex justify-start items-center my-2">
                  <img className="h-[50px] w-[100px]" src={nogodLogo} alt="" />
                </div>
                <div className="font-Mono font-bold text-[16px] mb-2">
                  <label htmlFor="nagad-num" className="block mb-2">
                    Nagad Account Number
                  </label>
                  <input
                    type="text"
                    name="nagad-num"
                    placeholder="Enter Nagad Number"
                    id="nagad-num"
                    className="shadow-gray-300 shadow-inner block px-2 py-2 rounded-lg  text-[14px] outline-none"
                  />
                </div>
                <div className="font-Mono font-bold text-[16px]  ">
                  <label htmlFor="nagad-transaction-num" className="block mb-2">
                    Enter Transaction Number
                  </label>
                  <input
                    type="text"
                    name="nagad-transaction"
                    id="nagad-transaction-num"
                    placeholder="Enter Transaction Number"
                    className="shadow-gray-300 shadow-inner block px-2 py-2 rounded-lg  text-[14px] outline-none"
                  />
                </div>
              </div>
            )}
            {/* Card */}
            {paymentMethod === "4" && (
              <div className="font-Mono mb-5 " data-aos="flip-up">
                <h1 className="text-[18px] font-bold">Payment Details</h1>
                <h3 className="font-bold text-[16px]">Card Number</h3>
                <input
                  type="text"
                  name="card-num"
                  placeholder="Valid Card Number"
                  className="text-[14px] border-2 border-gray-300 py-1 pl-1 rounded-md"
                />

                <div className="flex  items-center w-full space-x-5 my-2 ">
                  <div className="w-1/3">
                    <h3 className="font-bold text-[14px]">EXPIRATION DATE</h3>
                    <input
                      type="date"
                      name="exp-date"
                      id=""
                      className="py-1 text-[14px] rounded-md font-bold font-Mono border-2 border-gray-200"
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="font-bold text-[14px]">CV CODE</h3>
                    <input
                      type="text"
                      name="cv-code"
                      id=""
                      className="text-[14px] w-full border-2 border-gray-300 py-1 pl-1 rounded-md"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-[14px] mt-2">COUPON CODE</h3>
                <input
                  type="text"
                  name="coupon"
                  className="border-2 border-gray-300 rounded-md py-[2px]"
                />
              </div>
            )}
          </div>
          <input
            type="submit"
            value="SUBMIT"
            className="w-full bg-orange-600 rounded-md hover:rounded-none py-3 text-[16px] font-Mono font-bold text-white hover:text-orange-600 hover:bg-white border-2 border-orange-600 duration-300 mb-8"
          />
        </form>
      </div>
    </div>
  );
};

export default DonationLayout;
