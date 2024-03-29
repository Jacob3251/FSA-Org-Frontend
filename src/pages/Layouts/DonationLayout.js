import React, { useRef, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "../Shared/Carousel/Carousel";
import bkashLogo from "../../assets/images/bkash.png";
import nogodLogo from "../../assets/images/ngLogo.png";
import Plans from "../Donation/Plans/Plans";
import Footer from "../Shared/Footer/Footer";
import { Toaster, toast } from "react-hot-toast";
const DonationLayout = () => {
  const [paymentMethod, setPaymentMethod] = useState("1");
  const [donationPackage, setDonationPackage] = useState("5");
  const packageRef = useRef();
  const handleSelectPaymentMethod = (event) => {
    const method = event.target.value;
    setPaymentMethod(method);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // full payement obj making remaining
    let payemntInfo;
    // nagad case
    if (paymentMethod === "2") {
      const accNum = event.target.nagadNum.value;
      const transactionNum = event.target.nagadTransaction.value;
      // console.log(accNum);
      payemntInfo = {
        name: "Nagad",
        accountNumber: accNum,
        transactionId: transactionNum,
      };
    }
    // bkash case
    if (paymentMethod === "3") {
      const accNum = event.target.bkashNum.value;
      const transactionNum = event.target.bkashTransaction.value;
      // console.log(accNum);
      payemntInfo = {
        name: "Bkash",
        accountNumber: accNum,
        transactionId: transactionNum,
      };
    }

    // Card Payment

    if (paymentMethod === "4") {
      const cardNum = event.target.cardNum.value;
      const cvCode = event.target.cvCode.value;
      const expDate = event.target.expDate.value;
      const coupon = event.target.coupon.value;
      // console.log(accNum);
      payemntInfo = {
        name: "Card Payment",
        cardNumber: cardNum,
        CVC: cvCode,
        expDate: expDate,

        couponCode: coupon,
      };
    }

    const details = {
      fullName: event.target.fname.value,
      phnNumber: event.target.phnnum.value,
      email: event.target.email.value,
      donationPackage: donationPackage,
      paymentType: paymentMethod,
      paymentInformation: payemntInfo,
    };
    console.log(details);
    toast.success("Donation Complete😋!!");
    setPaymentMethod("1");
    event.target.reset();
  };
  return (
    <div className="w-[100vw] overflow-hidden">
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
          <p className="text-white font-Mono text-[16px] font-medium md:w-[50%] mt-2 mb-2">
            Consider becoming a monthly donor to support a cause you care about.
            Small recurring donations can make a big impact and help create
            lasting change.
          </p>
          <a
            href="#donationform"
            className="bg-orange-600 px-3 py-2 bg-opacity-80 hover:bg-opacity-100 rounded-md hover:rounded-none text-white font-Robo font-medium tracking-wider
             text-[14px] duration-500"
          >
            Donate Now..
          </a>
        </div>
      </div>
      {/* Carousel */}
      <Plans></Plans>
      {/* Payment systems portal */}
      <div className="bg-white p-2 md:p-5" id="donationform">
        <h2 className="text-center  text-orange-600  font-Robo text-[32px] drop-shadow-md mb-5  pb-2">
          Donate Now!!
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-5 overflow-hidden">
          <div className="hidden md:flex justify-start items-start">
            <img
              className="w-[40vw] flipper"
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/Cartoon_Guy_Catching_Money_With_A_Net.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-200 w-full px-2 md:px-6 rounded-md "
            >
              <h3 className="font-Mono text-[36px] font-bold text-center py-5">
                FSA ORG
              </h3>
              <h6 className="font-Robo font-semibold text-[24px] text-center bg-white py-2">
                Donation Form
              </h6>
              {/* personal info */}
              <div className="w-[85%] mx-auto my-5">
                <div className="">
                  <div className="my-2 flex flex-col">
                    <label
                      htmlFor="fname"
                      className="text-[18px] font-Mono font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter Name"
                    />
                  </div>
                  {/* <div className="w-full my-2  flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-[18px] font-Mono font-semibold"
                    >
                      Last Name
                    </label>
                    <input
                      required
                      className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter Last Name"
                    />
                  </div> */}
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
                      required
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
                      required
                      placeholder="Enter Email"
                      className="w-full mt-1 shadow-inner shadow-gray-600 p-2 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              {/* payment info */}
              <div className="w-[85%] mx-auto flex flex-col overflow-hidden mt-2">
                <h3 className="font-Mono text-[18px] font-bold mb-2">
                  Donation Packages:
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setDonationPackage("5")}
                    className={`px-6 text-[16px] py-2 rounded-lg  border-orange-600 border-2   font-bold font-Mono ${
                      donationPackage === "5"
                        ? "bg-white text-orange-600"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    $5
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationPackage("10")}
                    className={`px-6 text-[16px] py-2 rounded-lg  border-orange-600 border-2   font-bold font-Mono ${
                      donationPackage === "10"
                        ? "bg-white text-orange-600"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    $10
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationPackage("15")}
                    className={`px-6 text-[16px] py-2 rounded-lg  border-orange-600 border-2   font-bold font-Mono ${
                      donationPackage === "15"
                        ? "bg-white text-orange-600"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    $15
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationPackage("20")}
                    className={`px-6 text-[16px] py-2 rounded-lg  border-orange-600 border-2   font-bold font-Mono ${
                      donationPackage === "20"
                        ? "bg-white text-orange-600"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    $20
                  </button>
                </div>
                {/* payemnt method selection */}
                <div className="font-Mono text-[18px] font-bold flex items-center mb-2">
                  <label htmlFor="payment-id">Select Payment Method: </label>
                  <select
                    name="payment-method"
                    id="payment-id"
                    className=" px-5 py-2 text-[16px]"
                    onChange={handleSelectPaymentMethod}
                  >
                    <option
                      value="1"
                      selected={paymentMethod === 1 ? true : false}
                      className="font-bold text-[14px]"
                      // disabled
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
                      <img
                        className="h-[50px] w-[100px]"
                        src={bkashLogo}
                        alt=""
                      />
                    </div>
                    <div className="font-Mono font-bold text-[16px] mb-2">
                      <label htmlFor="bkashNum">Bkash Account Number: </label>
                      <input
                        type="text"
                        required
                        name="bkashNum"
                        placeholder="Enter Bkash Number"
                        id="bkashNum"
                        className="shadow-gray-300 shadow-inner px-2 py-2 rounded-lg ml-2 text-[14px] outline-none"
                      />
                    </div>
                    <div className="font-Mono font-bold text-[16px]">
                      <label htmlFor="bkashTransactionNum" className="">
                        Enter Transaction Number:
                      </label>
                      <input
                        type="text"
                        required
                        name="bkashTransaction"
                        id="bkashTransactionNum"
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
                      <img
                        className="h-[50px] w-[100px]"
                        src={nogodLogo}
                        alt=""
                      />
                    </div>
                    <div className="font-Mono font-bold text-[16px] mb-2">
                      <label htmlFor="nagadNum" className="block mb-2">
                        Nagad Account Number
                      </label>
                      <input
                        type="text"
                        name="nagadNum"
                        required
                        placeholder="Enter Nagad Number"
                        id="nagadNum"
                        className="shadow-gray-300 shadow-inner block px-2 py-2 rounded-lg  text-[14px] outline-none"
                      />
                    </div>
                    <div className="font-Mono font-bold text-[16px]  ">
                      <label
                        htmlFor="nagadTransactionNum"
                        className="block mb-2"
                      >
                        Enter Transaction Number
                      </label>
                      <input
                        type="text"
                        name="nagadTransaction"
                        required
                        id="nagadTransactionNum"
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
                      name="cardNum"
                      required
                      placeholder="Valid Card Number"
                      className="text-[14px] border-2 border-gray-300 py-1 pl-1 rounded-md"
                    />

                    <div className="flex justify-center items-center w-full space-x-5 my-2 ">
                      <div className="">
                        <h3 className="font-bold text-[14px]">
                          EXPIRATION DATE
                        </h3>
                        <input
                          type="date"
                          name="expDate"
                          required
                          id=""
                          className="py-1 text-[14px] rounded-md font-bold font-Mono border-2 border-gray-200"
                        />
                      </div>
                      <div className="">
                        <h3 className="font-bold text-[14px]">CV CODE</h3>
                        <input
                          type="text"
                          name="cvCode"
                          required
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
                className="w-full my-2 bg-orange-600 rounded-md hover:rounded-none py-3 text-[16px] font-Mono font-bold text-white hover:text-orange-600 hover:bg-white border-2 border-orange-600 duration-300 mb-8"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer footercls="mt-0"></Footer>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
};

export default DonationLayout;
