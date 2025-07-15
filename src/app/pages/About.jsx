"use client";

import React from "react";
import AboutText from "../Components/AboutText.jsx";
import { Link } from "react-scroll";

//Animation
import { motion } from "motion/react";
import ProfileCard from "../Animation/ProfileCard.jsx";
import BlurText from "../Animation/BlurText.jsx";
import SplitText from "../Animation/SplitText.jsx";

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
        {/* </motion.div> */}
      </div>

      {/* <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center max-lg:hidden"
        > */}

      <div className="flex flex-row justify-center items-center  max-md:flex-col max-md:mt-4">
        <div  className="flex justify-center items-center">
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

        <SplitText
          className="font-semibold text-center text-para p-1 m-10 max-md:m-0 max-md:mt-5"
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
      </div>
      {/* <Link to="#contact" smooth={true} duration={500}>
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
      </Link> */}
      {/* </motion.div> */}
      {/* </div> */}

      {/* <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center w-[100vh] max-lg:hidden"
      > */}
      {/* <SplitText
        className="font-semibold text-center text-para first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:text-highlight p-2"
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
      /> */}
      {/* </motion.div> */}

      {/* MobileView */}
      {/* <div className="hidden max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center w-full">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden justify-center items-center max-lg:flex"
        >
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
        </motion.div> */}

        {/* <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center w-full"
        > */}
        {/* <SplitText
          className="font-semibold text-center  text-para first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:text-highlight p-2 pt-5"
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
        /> */}
        {/* </motion.div> */}
      {/* </div> */}
    </section>
  );
};

export default about;
