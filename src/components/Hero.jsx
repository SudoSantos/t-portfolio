import React from "react";
import profilepic from "../assets/profilepic5.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div
        className="my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center"
        id="home"
      >
        <div className=" flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hi! I'm Anthony Andrew
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Web Designer",
                1000,
                "Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              with a 4+ years experience
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 my-7 text-purple-600">
            <a href="/">
              <AiFillLinkedin />
            </a>
            <a href="https://wa.link/lcdze5">
              <FaWhatsapp />
            </a>

            <a href="https://github.com/SudoSantos">
              <AiFillGithub />
            </a>
           
          </div>
        </div>

        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
