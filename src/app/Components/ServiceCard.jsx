"use client";

import React from "react";
import SpotlightCard from "../Animation/SpotlightCard.jsx";
import { motion } from "motion/react";
import ShinyText from "../Animation/ShinyText.jsx";

const ServiceCard = ({ heading, para, icon }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <SpotlightCard
        className="custom-spotlight-card flex flex-col justify-evenly items-start bg-transparent m-5 h-[50vh] border-[1.5px]"
        spotlightColor="rgba(167, 139, 250, 0.5)"
      >
        <div>{icon}</div>

        <h3 className="text-xl text-heading">{heading}</h3>
        {/* <p className="text-sm text-para">{para}</p> */}

        <ShinyText
          text={para}
          disabled={false}
          speed={3}
          className="custom-class text-sm text-para"
        />
      </SpotlightCard>
    </motion.div>
  );
};

export default ServiceCard;
