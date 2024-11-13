import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
      <div className="w-[1200px] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex items-center sm:items-start flex-col justify-around">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact <span>Me</span>
            </h1>
            <p className="text-normal  text-lg text-gray-400 mt-2">
              Let's connect on LinkedIn <br /> or send me am Email
            </p>

            <div className="flex items-center mt-2 text-gray-400">
              <MdOutlineMail />

              <div className="ml-4 text-md tracking-wide w-40">
                <p>Andrew Anthony</p>
              </div>
            </div>
          </div>
          <form action="https://getform.io/f/avrrwlka" method="post" className="p-6 flex flex-col justify-center max-w-[700px]">
            <div className="flex flex-col">
              <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"/>
            </div>

            <div className="flex flex-col mt-2">
              <textarea id="message" name="email" placeholder="Your Message" className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"></textarea>
            </div>

            <div className="flex flex-col mt-2">
              <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"/>
            </div>

            <button type="submit" className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
