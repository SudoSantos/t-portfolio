import React from "react";
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
                temporibus incidunt cum excepturi, consectetur vel iste
                distinctio veniam, reprehenderit, obcaecati nisi repudiandae
                accusantium. Voluptates facilis consectetur corporis porro
                sapiente?
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                <span>+</span>
              </h3>
              <p><span className="md:text-base text-xs">Projects</span></p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                <span>+</span>
              </h3>
              <p><span className="md:text-base text-xs">years experience</span></p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">20
                <span>+</span>
              </h3>
              <p><span className="md:text-base text-xs">happy clients</span></p>
            </div>
            

          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
