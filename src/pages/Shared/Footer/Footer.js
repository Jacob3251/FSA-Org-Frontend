import React from "react";

const Footer = ({ footercls }) => {
  return (
    <div
      className={`text-center font-Mono font-semibold py-5 bg-gray-200 mt-5 ${footercls}`}
    >
      Copyright @2023. Developed by Adil
    </div>
  );
};

export default Footer;
