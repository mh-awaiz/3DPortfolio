"use client";

import React, { Suspense } from "react";
import Head from "next/head";

//Icon
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

//Animations
import BlurText from "../Animation/BlurText";
import GlassIcons from "../Animation/GlassIcons";
import { motion } from "motion/react";
import ShinyText from "../Animation/ShinyText";
import { Canvas } from "@react-three/fiber";
import { Computer } from "../Animation/Computer";
import { Environment, OrbitControls } from "@react-three/drei";

const TechStack = () => {
  const items1 = [
    {
      icon: <FaReact className="text-[#61DBFB]" size={30} />,
      color: "black",
      label: "React.js",
    },

    {
      icon: <SiFramer className="text-heading" size={30} />,
      color: "black",
      label: "Framer Motion",
    },

    {
      icon: <RiTailwindCssFill className="text-[#06b6d4]" size={30} />,
      color: "black",
      label: "Tailwind CSS",
    },
    {
      icon: <SiReactrouter className="text-red-400" size={30} />,
      color: "black",
      label: "React Router",
    },

    {
      icon: (
        <svg
          width="400"
          height="100"
          viewBox="0 0 170 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" fill="#111" />
          <text
            x="10"
            y="35"
            font-family="Arial Black, sans-serif"
            font-size="50"
            fill="#FDF6D9"
            font-style="italic"
            font-weight="900"
            text-color="#F18500"
          >
            GSAP
          </text>
        </svg>
      ),
      color: "black",
      label: "GSAP",
    },
    {
      icon: (
        <svg
          width="256"
          height="291"
          viewBox="0 0 256 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M127.997 0L255.994 72.75V218.25L127.997 291L0 218.25V72.75L127.997 0Z"
            fill="#000000"
          />
          <path
            d="M127.997 21.674L234.393 84.57V206.43L127.997 269.326L21.601 206.43V84.57L127.997 21.674Z"
            fill="white"
          />
          <path
            d="M127.997 43.353L212.796 96.392V194.608L127.997 247.647L43.198 194.608V96.392L127.997 43.353Z"
            fill="#000000"
          />
          <text
            x="50%"
            y="58%"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="56"
            font-family="Arial, Helvetica, sans-serif"
            fill="white"
          >
            R3F
          </text>
        </svg>
      ),
      color: "black",
      label: "R3F",
    },
  ];

  const items2 = [
    {
      icon: <SiNextdotjs className="text-heading" size={30} />,
      color: "black",
      label: "Next.js",
    },

    {
      icon: <RiSupabaseFill className="text-[#3ECF8E]" size={30} />,
      color: "black",
      label: "Supabase",
    },

    {
      icon: <BiLogoPostgresql className="text-[#336791]" size={50} />,
      color: "black",
      label: "PostgreSQL",
    },
    {
      icon: <SiPrisma className="text-heading" size={30} />,
      color: "black",
      label: "Prisma",
    },
    {
      icon: <SiClerk className="text-heading" size={30} />,
      color: "black",
      label: "Clerk",
    },
    {
      icon: <FaNodeJs className="text-[#4DB33D]" size={30} />,
      color: "black",
      label: "Node.js",
    },
  ];

  return (
    <>
      <Head>
        <title>Tech Stack | Mohammed Awaiz Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the technologies and tools used by Mohammed Awaiz including React, Next.js, Node.js, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tech Stack - Mohammed Awaiz" />
        <meta
          property="og:description"
          content="Get to know the full technology stack powering Mohammed Awaiz’s portfolio and projects."
        />
      </Head>

      <section
        id="techstack"
        className="min-h-screen text-heading flex flex-col justify-center items-start py-20"
      >
        {/* <SplashCursor /> */}

        <div className="flex flex-col justify-center items-start z-10">
          <BlurText
            text="My Tech-Stack"
            // delay={150}
            duration={1}
            animateBy="words"
            direction="top"
            className="text-lg text-highlight"
            animateOn="view"
          />
          <BlurText
            text="This is how magic takes place"
            // delay={150}
            duration={1}
            animateBy="words"
            direction="top"
            className="text-2xl text-heading"
            animateOn="view"
          />
        </div>

        <div className="flex justify-evenly items-center w-full">
          <div className="h-[80vh] w-full absolute ">
            <Canvas
              // camera={{ position: [30, 20, 20], fov: 35 }}
              className=" z-0 "
            >
              <Suspense fallback={null}>
                <Computer position={[1, 0, 3]} />
                {/* <OrbitControls /> */}
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>

          {/* Animation Mobile Viewport */}

          <div className="flex flex-row justify-between items-center w-full mt-20 flex-wrap max-md:flex-col max-md:mt-10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="z-10 "
            >
              <ShinyText
                text={
                  <h3 className="font-semibold text-cta text-xl">
                    Front-End Technologies
                  </h3>
                }
                disabled={false}
                speed={3}
                className="custom-class text-xl"
              />
              <div style={{ position: "relative" }}>
                <GlassIcons
                  items={items1}
                  className="custom-class grid-cols-3 h-auto "
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="z-10"
            >
              <ShinyText
                text={
                  <h3 className="font-semibold text-cta text-xl">
                    Back-End Technologies
                  </h3>
                }
                disabled={false}
                speed={3}
                className="custom-class text-xl"
              />
              <div style={{ position: "relative" }}>
                <GlassIcons
                  items={items2}
                  className="custom-class grid-cols-3"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
