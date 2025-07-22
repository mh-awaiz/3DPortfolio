"use client";

import React from "react";

import TypewriterText from "../Components/TypewriterText.jsx";
import { Link } from "react-scroll";

//Animation
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Man from "../Animation/Man.jsx";
import { motion } from "motion/react";
import ShinyText from "../Animation/ShinyText.jsx";

//Icons
import { FaArrowDownLong } from "react-icons/fa6";
import HeroText from "./HeroText.jsx";

const HeroScection = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1000;

  return (
    <div
      id="/"
      className="home h-screen w-full flex justify-between items-center overflow-x-hidden bg-backgroundColor"
    >
      {/* w-[150vw] */}

      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-[150vw]"
      >
        <ShinyText
          text={<HeroText />}
          disabled={false}
          speed={3}
          className="custom-class"
        />
        <TypewriterText />
      </motion.div>

      {/* Animation */}
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute h-[100vh] w-full z-0 max-sm:w-[400px] max-sm:h-[400px] overflow-hidden max-md:-z-0"
      >
        <Canvas
          camera={{ position: isMobile ? [1.5, 1, 3] : [2.5, 1.5, 3], fov: 35 }}
          className="w-full h-full z-0"
        >
          <Suspense fallback={null}>
            <Man position={[-150, -250, -270]} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, delay: 1 }}
        className="px-1 py-2 border-2 border-cta  text-cta absolute rounded-md  mt-[35vh] animate-bounce hover:bg-cta hover:text-white transition-all duration-300 ease-in-out cursor-pointer left-[50vw] max-md:left-[46vw]"
      >
        <Link to="about" smooth={true} duration={500}>
          <FaArrowDownLong />
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroScection;
