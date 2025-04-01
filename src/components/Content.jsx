import React from "react";
import Social from "./Social";
import banner from '/src/assets/poster.webp'
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="pt-35 text-center space-y-10">

        <div className="space-y-3">
        <h1 className="text-5xl z-0 lg:text-6xl font-bold drop-shadow-lg">
          Hi,I am Dhruv Sumra
        </h1>

        <p className="text-lg lg:text-xl dark_text_green drop-shadow-lg ">
          A front-end web developer
        </p>
        </div>

        <p className="opacity-80 lg:text-lg m-auto lg:w-4/5">
          Passionate about building modern, responsive, and dynamic web
          applications
        </p>

        <br />

        <div className="space-y-3 md:space-y-0 md:space-x-5 md:flex justify-center">
          <button className="shadow-md rounded-xl p-3 outline-1 bg-green-300 text-lg font-bold cursor-pointer opacity-90 hover:opacity-100">
            Download CV <i class="fa-solid fa-download"></i>
          </button>
          <br />
          <Link to={'contact'}><button className="shadow-md rounded-xl p-3 outline-1 px-5 text-lg font-bold cursor-pointer opacity-90 hover:opacity-100">
            Contact Me <i class="fa-solid fa-paper-plane"></i>
          </button></Link>
        </div>

        <div className="mt-10 ">
          <Social />
        </div>
      </div>

      <div className="mt-30 h-full w-5/7 hidden md:block">
        <img src={banner} className="object-cover min-w-full h-full" alt="" />
      </div>
      

      <div className="">
        <div class="custom-shape-divider-bottom-1742903775">
          <div class="custom-shape-divider-bottom-1742904706">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <a href="#about" className="transition-all absolute bottom-0 left-1/2"><i class="fa-solid fa-arrow-down"></i></a>
    </div>
  );
};

export default Content;
