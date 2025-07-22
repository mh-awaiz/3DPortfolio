"use client";

import React from "react";
import AboutText from "../Components/AboutText.jsx";
import { Link } from "react-scroll";

//Animation
import ProfileCard from "../Animation/ProfileCard.jsx";
import BlurText from "../Animation/BlurText.jsx";


const about = () => {
  return (
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
  );
};

export default about;
