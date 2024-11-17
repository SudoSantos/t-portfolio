import React from "react";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj4.jpg";
import proj3 from "../assets/proj2.jpg";
import proj4 from "../assets/proj3.jpg";

const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex text-center sm:text-start items-center justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500">
              These are some my most recent projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group h-48 overflow-hidden rounded-lg shadow-lg sm:h-60 md:h-80">
            <img
              src={proj1}
              alt=""
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group h-48 overflow-hidden rounded-lg shadow-lg sm:col-span-1 md:col-span-2 sm:h-60 md:h-80">
            <img
              src={proj4}
              alt=""
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group h-48 overflow-hidden rounded-lg shadow-lg sm:col-span-1 md:col-span-2 sm:h-60 md:h-80">
            <img
              src={proj3}
              alt=""
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group h-48 overflow-hidden rounded-lg shadow-lg sm:h-60 md:h-80">
            <img
              src={proj2}
              alt=""
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
