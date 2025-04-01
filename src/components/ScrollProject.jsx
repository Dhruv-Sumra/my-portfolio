import React from "react";
import figmaWatch from "/src/assets/figmaWatch.jpeg";
import athlethub from "/src/assets/athlethub.jpeg";
import { projects } from "/src/components/projects.json";

const ScrollProject = () => {
  return (
    <div className="h-full w-full md:w-full md:gap-5 grid grid-cols-1 md:grid-cols-2 mt-10 ">
      {projects &&
        projects.slice(0, 2).map((item) => (
          <div className="w-full h-5/6 shadow-lg px-5 py-3 bg-green-100 rounded-2xl ">
            <div className="h-10/12 w-full relative ">
              <img
                className="h-full rounded-2xl opacity-80 w-full object-cover object-top shadow-sm"
                src={item.img}
                alt=""
              />

              <div className="flex justify-start space-x-5 px-3 py-1 items-center">
                <div className="text-2xl md:text-3xl flex space-x-3 ">
                  <a
                    title={item.link}
                    href={item.link}
                    target="_blank"
                    rel="watch_website"
                  >
                    <i className="drop-shadow-lg fa-solid fa-link"></i>
                  </a>
                  <a
                    title={item.gitlink}
                    href={item.gitlink}
                    target="_blank"
                    rel="watch_website"
                  >
                    <i className="drop-shadow-lg fa-brands fa-github"></i>
                  </a>
                </div>

                <div className="">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="hidden md:block">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ScrollProject;
