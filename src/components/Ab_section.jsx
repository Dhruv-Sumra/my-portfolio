import React , {useState}from "react";
import PersonalInfo from "./PersonalInfo";
import Qualification from "./Qualification";
import Skills from "./Skills";

const Ab_section = () => {
    const [activeComponent, setActiveComponent] = useState("PersonalInfo");


  return (
    <div className="h-full w-full">
      <div className="h-11 xl:w-3/4 md:text-xl md:h-13 flex justify-between items-center rounded-full px-1 xl:px-5 md:px-10 bg-green-100 font-semibold ">
      <button onClick={() => setActiveComponent("PersonalInfo")} className={`cursor-pointer ${activeComponent === "PersonalInfo" ? 'bg-amber-700 text-green-100 transition-all' : ''} md:px-3 px-2 py-1 rounded-full cursor-pointer `}>
          Personal info
        </button>
        <button onClick={() => setActiveComponent("Qualification")} className={`cursor-pointer ${activeComponent === "Qualification" ? 'bg-amber-700 text-green-100 transition-all' : ''} md:px-3 px-3 py-1 rounded-full cursor-pointer `}>
          Qualification
        </button>
        <button onClick={() => setActiveComponent("Skills")} className={`cursor-pointer ${activeComponent === "Skills" ? 'bg-amber-700 text-green-100 transition-all' : ''} md:px-3 px-3 py-1 rounded-full cursor-pointer `}>
          Skills
        </button>

      </div>

      <div className="h-100 w-full flex overflow-hidden">
        {activeComponent === "PersonalInfo" && <PersonalInfo />}
        {activeComponent === "Qualification" && <Qualification />}
        {activeComponent === "Skills" && <Skills />}

      </div>
    </div>
  );
};

export default Ab_section;
