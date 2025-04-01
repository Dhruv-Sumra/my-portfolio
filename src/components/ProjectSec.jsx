import React from "react";
import { Link } from "react-router-dom";
import ScrollProject from "./ScrollProject";

const ProjectSec = () => {
  return (
    <div className="h-auto w-full mt-170 md:mt-10 md:flex md:justify-between md:items-center md:space-x-3 ">
      <div className="md:w-1/4 w-full text-center md:text-start h-full md:flex md:justify-center ">
        <div className="my-auto px-3 space-y-3">
          <h2 className="text-4xl font-semibold">Latest Projects</h2>
          <p className="text-lg opacity-80">Few projects on frontend web applications in react js</p>
          <Link to={"projects"}>
            <button className="cursor-pointer font-semibold  hover:outline-1 bg-amber-600 hover:text-amber-900 text-green-100 hover:bg-white   px-3 py-1 text-xl rounded-full">All Projects</button>
          </Link>
        </div>
      </div>

      <div className="w-full">
            <ScrollProject/>
      </div>
    </div>
  );
};

export default ProjectSec;
