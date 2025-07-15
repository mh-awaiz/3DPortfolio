"use client";

import React from "react";
import SpotlightCard from "../Animation/SpotlightCard.jsx";
import ShinyText from "../Animation/ShinyText.jsx";

const ServiceCard = ({ heading, para, icon }) => {
  return (
    <div>
      <SpotlightCard
        className="custom-spotlight-card flex flex-col justify-evenly items-start bg-transparent m-5 h-[50vh] border-[1.5px] max-md:m-3"
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
    </div>
  );
};

export default ServiceCard;
