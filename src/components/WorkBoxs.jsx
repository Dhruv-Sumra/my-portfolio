import React from "react";
import data from "./work.json"

const SkillBoxs = () => {
    const work = data.work;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-10 px-5">
        {work && work.map(item=>(
            <div key={item.id} className="shadow-sm text-center space-y-5 p-7 rounded-lg light_green_bg">
                <div className="">
                <i className={`${item.logo} rounded-lg p-2 shadow-sm dark_bg text-2xl font-semibold`}></i>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                <p>{item.body}</p>
            </div>
        ))}
    </div>
  );
};

export default SkillBoxs;
