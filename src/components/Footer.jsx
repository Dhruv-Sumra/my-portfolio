import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="bg-amber-900 w-full text-amber-500 absolute left-0 h-25 opacity-90 flex flex-col py-2 justify-between items-center ">
      <div className="md:w-1/4 w-2/4 m-auto">
        <Social />
      </div>

      <div className="text-green-200 text-xs md:text-lg">
        <p>Copyright &copy; Dhruv Sumra. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
