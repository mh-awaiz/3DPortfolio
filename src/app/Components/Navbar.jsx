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
// import MetallicPaint, { parseLogoImage } from "../Animation/MetallicPaint.jsx";

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

  //Logo Animation
  // const [imageData, setImageData] = (useState < ImageData) | (null > null);

  // useEffect(() => {
  //   async function loadDefaultImage() {
  //     try {
  //       const response = await fetch(logo);
  //       const blob = await response.blob();
  //       const file = new File([blob], "default.png", { type: blob.type });

  //       const parsedData = await parseLogoImage(file);
  //       setImageData(parsedData?.imageData ?? null);
  //     } catch (err) {
  //       console.error("Error loading default image:", err);
  //     }
  //   }

  //   loadDefaultImage();
  // }, []);

  return (
    <motion.nav
      initial={{ y: -5, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center text-sm font-medium w-full  py-5 px-20 max-lg:px-10 bg-backgroundColor "
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
          {/* <div style={{ width: "100%", height: "100vh" }}>
          <MetallicPaint
            imageData={imageData ?? new ImageData(1, 1)}
            params={{
              edge: 2,
              patternBlur: 0.005,
              patternScale: 2,
              refraction: 0.015,
              speed: 0.3,
              liquid: 0.07,
            }}
          />
        </div> */}
        </Link>

        {/* Mobile View */}
        <div className="hidden max-lg:flex">
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
        className="hidden flex-col justify-center items-center top-20 right-1 left-1 bg-backgroundColor text-center  rounded-lg shadow-sm shadow-highlight"
      >
        {/* <Navlink
          href="/"
          section="Home"
          navRef={navRef}
          toggle={toggle}
          setToggle={setToggle}
        /> */}
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
        {/* <Navlink href="/" section="Home" /> */}
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
