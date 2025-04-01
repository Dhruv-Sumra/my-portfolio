import React from "react";
import abBanner from "../assets/ab_banner.png";
import Ab_section from "./Ab_section";

const About = () => {
  return (
    <div id="about" className="mt-50 xl:mt-40 space-y-10">
      <h2 className="text-center text-4xl font-semibold drop-shadow-sm">
        About me
      </h2>

      <div className="flex justify-between items-center mt-5">
        <div className="w-1/3 hidden md:block">
          <img className="w-full" src={abBanner} alt="" />
        </div>

        <div className="md:w-2/4 lg:2/4 w-full">
            <Ab_section />  
        </div>
      </div>
    </div>
  );
};

export default About;
