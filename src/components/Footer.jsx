import React from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const  currentYear  = new Date().getFullYear();
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">
        Andrew C. Anthony <br /> {currentYear} All rights reserved
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <a href="https://github.com/SudoSantos"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/sudosantos/"><FaLinkedin /></a>
        <a href="https://wa.link/lcdze5"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default Footer;
