"use client";

import React from "react";
import AboutText from "../Components/AboutText.jsx";

//Animation
import { motion } from "motion/react";
import ProfileCard from "../Animation/ProfileCard.jsx";
import BlurText from "../Animation/BlurText.jsx";
import SplitText from "../Animation/SplitText.jsx";

const about = () => {
  return (
    <section
      id="about"
      className="min-h-screen text-heading flex justify-between items-center gap-2 flex-wrap py-20"
    >
      <div className="flex flex-col justify-between items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-10"
        >
          <BlurText
            text="About me"
            // delay={150}
            duration={2}
            animateBy="words"
            direction="top"
            className="text-lg text-highlight"
            animateOn="view"
          />
          <BlurText
            text="Get to know me better"
            // delay={150}
            duration={2}
            animateBy="words"
            direction="top"
            className="text-2xl text-heading"
            animateOn="view"
          />
        </motion.div>

        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
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
            onContactClick={() => console.log("Contact clicked")}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center w-[100vh]"
      >
        <SplitText
          className="font-semibold text-center text-pretty text-para first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:text-highlight p-2"
          text={<AboutText />}
          delay={1}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          animateOn="view"
        />
      </motion.div>
    </section>
  );
};

export default about;
