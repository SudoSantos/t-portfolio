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
              <h3 className="text-4xl font-semibold mb-5 text-center sm:text-start">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I’m Andrew Chukwudumeje Anthony, a passionate web developer and
                graphic designer from Nigeria with over 4 years of experience
                crafting user-friendly websites and eye-catching visuals. My
                love for coding drives me to continually improve and stay up to
                date with the latest trends, ensuring that my work is always
                cutting-edge. I take pride in being dedicated to my projects,
                delivering quality work with a focus on both functionality and
                aesthetics. I am also known for being sociable and easily
                likeable, I enjoy collaborating with clients and teams alike
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                4<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">years experience</span>
              </p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                20
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">colaborations</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
