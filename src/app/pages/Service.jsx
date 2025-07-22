"use client";

import React from "react";
import BlurText from "../Animation/BlurText";
import ServiceCard from "../Components/ServiceCard";
import { motion } from "motion/react";

// Icon
import { BiWorld } from "react-icons/bi";
import { MdBookOnline } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

const Service = () => {
  return (
    <section
      id="service"
      className="min-h-screen text-heading flex justify-center items-start flex-col py-20"
    >
      <div className="flex flex-col justify-start items-start py-10">
        <BlurText
          text="My Services"
          // delay={150}
          duration={1}
          animateBy="words"
          direction="top"
          className="text-lg text-highlight"
          animateOn="view"
        />
        <BlurText
          text="We provide the best for you"
          // delay={150}
          duration={1}
          animateBy="words"
          direction="top"
          className="text-2xl text-heading"
          animateOn="view"
        />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center max-md:flex-wrap"
      >
        <ServiceCard
          heading="Online Presence"
          para=" We help you establish a compelling digital presence with sleek, modern, and engaging websites tailored to your brand and business goals. "
          icon={<BiWorld size={45} />}
        />
        <ServiceCard
          heading="Responsive Platform"
          para="Our websites adapt flawlessly to all devices, ensuring a seamless and interactive experience for your users across desktops, tablets, and smartphones.
          "
          icon={<MdBookOnline size={45} />}
        />
        <ServiceCard
          heading="Affordable Rates"
          para="Get premium web development services at budget-friendly prices—perfect for startups, small businesses, and freelancers looking to grow online."
          icon={<TbPigMoney size={45} />}
        />
      </motion.div>
    </section>
  );
};

export default Service;
