"use client";

import React from "react";
import Navlink from "./Navlink";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUserCircle,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-sm font-medium w-full py-5 bg-backgroundColor text-heading max-lg:flex-col max-lg:gap-5 max-lg:text-center max-lg:justify-center shadow-sm shadow-highlight px-20 max-lg:px-10 z-20 border-highlight border-t-[0.001px]">
      {/* Left side */}

      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold max-lg:flex max-lg:text-sm max-lg:justify-center max-lg:items-center">
          Mohammed Awaiz
        </h2>
        <p className="text-para text-sm mt-1 max-lg:text-xs">
          <span className="text-highlight">©</span> {new Date().getFullYear()}{" "}
          All rights reserved.
        </p>
      </div>

      {/* center */}
      <div className="text-center md:text-left flex flex-col justify-between  items-start gap-1 max-lg:hidden">
        <h2 className="hidden text-lg font-semibold max-lg:flex">Pages</h2>
        <div className="flex justify-between items-center gap-5 max-lg:flex-wrap max-lg:justify-evenly">
          <Navlink href="/" section="Home" />
          <Navlink href="#about" section="About" />
          <Navlink href="#service" section="Service" />
          <Navlink href="#project" section="Projects" />
          <Navlink href="#techstack" section="Tech Stack" />
          <Navlink href="#testimonial" section="Testimonial" />
          <Navlink href="#contact" section="Contact" />
        </div>
      </div>

      {/* Right side */}
      <div className="text-center md:text-left  items-start ">
        <h2 className="hidden text-lg font-semibold max-lg:flex max-lg:text-sm max-lg:justify-center max-lg:items-center max-lg:mb-2 text-highlight">
          Social Media Links
        </h2>
        <div className="flex justify-between items-center gap-5 max-lg:hidden">
          <Icons
            href="https://github.com/awaiz"
            icon={<FaGithub size={20} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<FaLinkedin size={20} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<FaInstagram size={20} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<TbBrandFiverr size={20} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<FaUserCircle size={20} />}
          />
        </div>

        {/* MobileView */}
        <div className="hidden justify-between items-center gap-5 max-lg:flex">
          <Icons
            href="https://github.com/awaiz"
            icon={<FaGithub size={15} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<FaLinkedin size={15} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<FaInstagram size={15} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<TbBrandFiverr size={15} />}
          />
          <Icons
            href="https://github.com/awaiz"
            icon={<FaUserCircle size={15} />}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
