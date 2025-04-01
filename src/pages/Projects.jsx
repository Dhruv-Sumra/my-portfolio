import React from "react";
import {projects} from "../components/projects.json";
import Footer from "./src/components/footer";

const Projects = () => {
  return (
    <div className="component_size bg-green-50 min-h-screen pt-25">
      <h2 className="text-center text-5xl font-bold">My Projects</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-15 pb-15">
        {projects &&
          projects.map((item) => (
            <div  key={item.id} className="max-h-120 bg-green-200 px-5 p-2 rounded-2xl shadow-lg">
              <div className="h-4/5 w-full">
                <img className="h-full w-full object-cover rounded-2xl opacity-80" src={item.img} alt="" />
              </div>

              <div className="flex justify-center items-center text-2xl space-x-5 p-2 py-2">
                <div className="flex text-3xl space-x-3"> 
              <a title={item.link} href={item.link} target="_blank" rel="watch_website"><i className="drop-shadow-lg fa-solid fa-link"></i></a>
              <a title={item.gitlink} href={item.gitlink} target="_blank" rel="watch_website"><i class="drop-shadow-lg fa-brands fa-github"></i></a>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                <p className="hidden md:block md:text-lg opacity-80">{item.body}</p>
              </div>
              </div>
            </div>
          ))}
      </div>

      <Footer/>
    </div>
  );
};

export default Projects;
