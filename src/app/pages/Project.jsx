"use client";

import React from "react";
import BlurText from "../Animation/BlurText";
import "../../app/globals.css";
import PixelCard from "../Animation/PixelCard";

const Project = () => {
  return (
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

      <div className="grid justify-center items-center gap-4 grid-cols-4 w-full max-md:hidden mt-5">
        <a href="https://mohammedawaiz.netlify.app/" target="_blank">
          <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
          <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
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
        <a href="https://mohammedawaiz.netlify.app/" target="_blank">
          <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
          <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
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
      </div>

      {/* Mobile View */}
      <div className="hidden justify-center items-center gap-4 grid-cols-4 w-full max-md:flex max-md:flex-wrap mt-5">
        <a href="https://mohammedawaiz.netlify.app/" target="_blank">
          <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
          <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://vslip.netlify.app/" target="_blank">
          <PixelCard className="bg-P3 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://porfoliowebsiteexample.netlify.app/" target="_blank">
          <PixelCard className="bg-P4 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>

        <a href="https://ecelljmi.in/" target="_blank">
          <PixelCard className="bg-P7 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://fjenterpries.netlify.app/" target="_blank">
          <PixelCard className="bg-P5 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://tesla2clone.netlify.app/" target="_blank">
          <PixelCard className="bg-P6 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://mohammedawaiz.netlify.app/" target="_blank">
          <PixelCard className="bg-P1 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
        </a>
        <a href="https://businessexamplewebsite.netlify.app/" target="_blank">
          <PixelCard className="bg-P2 bg-no-repeat bg-cover w-[40vh] h-[20vh] cursor-pointer " />
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
      </div>
    </section>
  );
};

export default Project;
