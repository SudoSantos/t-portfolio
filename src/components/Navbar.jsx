import React, { useState } from "react";
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-100 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold primary-color ml-4">A. ANDY</h1>
      <ul className="hidden md:flex">
        <li className="p-2 uppercase cursor-pointer"><Link to="home" spy={true} smooth={true}>Home</Link></li>
        <li className="p-2 uppercase cursor-pointer"><Link to="about" spy={true} smooth={true}>About</Link></li>
        <li className="p-2 uppercase cursor-pointer"><Link to="work" spy={true} smooth={true}>Work</Link></li>
        <li className="p-2 uppercase cursor-pointer"><Link to="experience" spy={true} smooth={true} >Experience</Link></li>
        <li className="p-2 uppercase cursor-pointer"><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className="block z-50 md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">A. ANDY</h1>
        <ul className="p-8 text-xl">
          <li className="p-5"><Link onClick={()=> setNav(false)} to="home" spy={true} smooth={true}>HOME</Link></li>
          <li className="p-5"><Link onClick={()=> setNav(false)} to="about" spy={true} smooth={true}>ABOUT</Link></li>
          <li className="p-5"><Link onClick={()=> setNav(false)} to="work" spy={true} smooth={true}>WORK</Link></li>
          <li className="p-5"><Link onClick={()=> setNav(false)} to="experience" spy={true} smooth={true} >EXPERIENCE</Link></li>
          <li className="p-5"><Link onClick={()=> setNav(false)} to="contact" spy={true} smooth={true}>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
