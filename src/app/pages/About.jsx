"use client";

import React from "react";
import Head from "next/head";
import AboutText from "../Components/AboutText.jsx";
import { Link } from "react-scroll";
import { GoogleAnalytics } from "@next/third-parties/google";

//Animation
import ProfileCard from "../Animation/ProfileCard.jsx";
import BlurText from "../Animation/BlurText.jsx";

const about = () => {
  return (
    <>
      <Head>
        <title>About Mohammed Awaiz | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Learn more about Mohammed Awaiz, a full-stack developer passionate about crafting beautiful and efficient web applications."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Mohammed Awaiz" />
        <meta
          property="og:description"
          content="Discover the story and skills of Mohammed Awaiz, full-stack developer and creative technologist."
        />
      </Head>
      <GoogleAnalytics gaId="G-D732XM553N" />

      <section
        id="about"
        className="min-h-screen text-heading flex justify-between items-center gap-2 flex-wrap py-10"
      >
        <div className="flex flex-col justify-between items-start">
          <BlurText
            text="About me"
            // delay={150}
            duration={1}
            animateBy="words"
            direction="top"
            className="text-lg text-highlight"
            animateOn="view"
          />
          <BlurText
            text="Get to know me better"
            // delay={150}
            duration={1}
            animateBy="words"
            direction="top"
            className="text-2xl text-heading"
            animateOn="view"
          />
        </div>

        <div className="flex flex-row justify-center items-center  max-md:flex-col max-md:mt-4">
          <div className="flex justify-center items-center">
            <Link to="#contact" smooth={true} duration={500}>
              <ProfileCard
                name="Mohammed Awaiz"
                title="AI Web Developer"
                handle="awaiz167"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/profile.png"
                iconUrl="/icon.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => {
                  window.location.href =
                    "mailto:webdevawaiz@gmail.com?subject=Let's Connect&body=Hi Awaiz, Id like to get in touch with you.";
                }}
              />
            </Link>
          </div>

          <AboutText />
        </div>
      </section>
    </>
  );
};

export default about;
