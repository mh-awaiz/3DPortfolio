"use client";

import React, { useState, useRef } from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

//Animation
import GlareHover from "../Animation/GlareHover.jsx";
import { motion } from "motion/react";

const Navbar = () => {
  //Toggle
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);

    if (navRef.current) {
      if (!toggle) {
        navRef.current.style.display = "flex";
      } else {
        navRef.current.style.display = "none";
      }
    }
    return navRef;
  };

  return (
    <motion.nav
      initial={{ y: -5, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center text-sm font-medium w-full  py-5 px-20 max-lg:px-10 bg-backgroundColor"
    >
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Nav Logo"
          width={40}
          height={40}
          className="rounded-md max-lg:hidden hover:cursor-pointer"
        />
        <Image
          src="/Logo.png"
          alt="Nav Logo"
          width={25}
          height={25}
          className="hidden rounded-md max-lg:flex hover:cursor-pointer"
        />
      </Link>

      {/* Mobile View */}
      <div className="hidden max-lg:flex justify-end items-center w-full">
        {toggle ? (
          <IoCloseSharp
            size={25}
            className="text-heading cursor-pointer"
            onClick={() => {
              handleToggle();
            }}
          />
        ) : (
          <GiHamburgerMenu
            size={25}
            className="text-heading cursor-pointer"
            onClick={() => {
              handleToggle();
            }}
          />
        )}
      </div>

      <div
        ref={navRef}
        className="hidden max-lg:absolute flex-col justify-center items-center z-10 bg-backgroundColor text-center  rounded-lg shadow-sm shadow-highlight w-auto transition-all duration-300 ease-in-out left-10 right-10 top-20"
      >
        <Navlink
          href="#about"
          section="About"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Navlink
          href="#service"
          section="Service"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Navlink
          href="#project"
          section="Projects"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Navlink
          href="#techstack"
          section="Tech Stack"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Navlink
          href="#testimonial"
          section="Testimonial"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Navlink
          href="#contact"
          section="Contact"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>

      <div className="flex gap-5 max-lg:hidden">
        <Navlink href="#about" section="About" />
        <Navlink href="#service" section="Service" />
        <Navlink href="#project" section="Projects" />
        <Navlink href="#techstack" section="Tech Stack" />
        <Navlink href="#testimonial" section="Testimonial" />
        <Navlink href="#contact" section="Contact" />
      </div>

      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <button className="text-heading text-sm font-semibold border-2 border-cta bg-cta px-7 py-2 rounded hover:bg-backgroundColor hover:text-cta duration-200 transition-all max-lg:hidden">
          Lets Work
        </button>
      </GlareHover>
    </motion.nav>
  );
};

export default Navbar;
