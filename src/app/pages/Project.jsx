"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import BlurText from "../Animation/BlurText";
import "../../app/globals.css";
import PixelCard from "../Animation/PixelCard";
import { GoogleAnalytics } from "@next/third-parties/google";

const Project = () => {
  const [expand, setExpand] = useState(false);
  // const desktopExpandRef = useRef(null);
  const mobileExpandRef = useRef(null);

  const handleChange = () => {
    setExpand(!expand);

    if (expand === true) {
      mobileExpandRef.current.style.display = "none";
    } else {
      mobileExpandRef.current.style.display = "flex";
    }

    // if (
    //   desktopExpandRef.current.style.display === "none" &&
    //   mobileExpandRef.current.style.display === "none"
    // ) {
    //   desktopExpandRef.current.style.display = "grid";
    //   mobileExpandRef.current.style.display = "max-lg:flex";
    // } else {
    //   desktopExpandRef.current.style.display = "none";
    //   mobileExpandRef.current.style.display = "none";
    // }
  };
  return (
    <>
      <Head>
        <title>Projects | Mohammed Awaiz Portfolio</title>
        <meta
          name="description"
          content="Explore web development and design projects by Mohammed Awaiz. Innovative, responsive, and high-performance websites."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mohammed Awaiz Projects" />
        <meta
          property="og:description"
          content="Browse past work and creative web solutions crafted by Mohammed Awaiz."
        />
      </Head>
      <GoogleAnalytics gaId="G-D732XM553N" />

      <section
        id="project"
        className="min-h-screen text-heading flex justify-around items-start flex-col py-20"
      >
        <div className="flex flex-col justify-start items-start">
          <BlurText
            text="My Projects"
            // delay={150}
            duration={2}
            animateBy="words"
            direction="top"
            className="text-lg text-highlight"
            animateOn="view"
          />
          <BlurText
            text="See our work so far"
            // delay={150}
            duration={2}
            animateBy="words"
            direction="top"
            className="text-2xl text-heading"
            animateOn="view"
          />
        </div>

        {/* Desktop View */}
        <div className="grid justify-center items-center gap-4 grid-cols-4 w-full max-md:hidden mt-5">
          <a href="https://mohammedawaiz.netlify.app/" target="_blank">
            <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
          <a href="https://ecelljmi.in/" target="_blank">
            <PixelCard className="bg-P7 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>

          <a href="https://vslip.netlify.app/" target="_blank">
            <PixelCard className="bg-P3 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>

          <a href="https://porfoliowebsiteexample.netlify.app/" target="_blank">
            <PixelCard className="bg-P4 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
          <a href="https://fjenterpries.netlify.app/" target="_blank">
            <PixelCard className="bg-P5 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>

          <a href="https://tesla2clone.netlify.app/" target="_blank">
            <PixelCard className="bg-P6 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>

          <a href="https://finterweb.netlify.app/" target="_blank">
            <PixelCard className="bg-P8 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
          <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
            <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
        </div>

        {/* Expanded Div for Desktop */}
        {/* <div
        ref={desktopExpandRef}
        className="hidden justify-center items-center gap-4 grid-cols-4 w-full max-md:hidden mt-5"
      >
        <a href="https://mohammedawaiz.netlify.app/" target="_blank">
          <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://ecelljmi.in/" target="_blank">
          <PixelCard className="bg-P7 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>

        <a href="https://vslip.netlify.app/" target="_blank">
          <PixelCard className="bg-P3 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>

        <a href="https://porfoliowebsiteexample.netlify.app/" target="_blank">
          <PixelCard className="bg-P4 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://fjenterpries.netlify.app/" target="_blank">
          <PixelCard className="bg-P5 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>

        <a href="https://tesla2clone.netlify.app/" target="_blank">
          <PixelCard className="bg-P6 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
          <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
      </div> */}

        {/* Mobile View */}
        <div className="hidden w-full max-md:flex justify-center items-center  max-md:flex-wrap gap-4 mt-5">
          <a href="https://mohammedawaiz.netlify.app/" target="_blank">
            <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
          <a href="https://ecelljmi.in/" target="_blank">
            <PixelCard className="bg-P7 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>

          <a href="https://vslip.netlify.app/" target="_blank">
            <PixelCard className="bg-P3 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>

          <a href="https://porfoliowebsiteexample.netlify.app/" target="_blank">
            <PixelCard className="bg-P4 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
          <a href="https://fjenterpries.netlify.app/" target="_blank">
            <PixelCard className="bg-P5 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
        </div>

        {/* Expanded Div for Mobile */}
        <div
          ref={mobileExpandRef}
          className="hidden gap-4 w-full justify-center items-center max-md:flex-wrap mt-5"
        >
          <a href="https://finterweb.netlify.app/" target="_blank">
            <PixelCard className="bg-P8 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
          <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
            <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
          </a>
        </div>

        <button
          onClick={() => handleChange()}
          className=" hidden max-lg:block pt-2 m-auto"
        >
          {expand ? (
            <p className="text-gray-500 hover:cursor-pointer hover:text-gray-700 underline-offset-1">
              Show Less
            </p>
          ) : (
            <p className="text-gray-500 hover:cursor-pointer hover:text-gray-700 underline-offset-1">
              Show More
            </p>
          )}
        </button>
      </section>
    </>
  );
};

export default Project;
