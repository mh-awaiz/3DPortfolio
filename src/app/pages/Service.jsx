"use client";

import React from "react";
import BlurText from "../Animation/BlurText";
import ServiceCard from "../Components/ServiceCard";

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
          duration={2}
          animateBy="words"
          direction="top"
          className="text-lg text-highlight"
          animateOn="view"
        />
        <BlurText
          text="We provide the best for you"
          // delay={150}
          duration={2}
          animateBy="words"
          direction="top"
          className="text-2xl text-heading"
          animateOn="view"
        />
      </div>

      <div className="flex flex-row justify-center items-centermt flex-wrap">
        <ServiceCard
          heading="Online Presence"
          para="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam est
            aliquam eveniet beatae aperiam nihil odio officia quae unde ex
            recusandae voluptatum libero repellendus nulla quod, maxime enim
            quas iure.
          "
          icon={<BiWorld size={45} />}
        />
        <ServiceCard
          heading="Responsive Platform"
          para="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam est
            aliquam eveniet beatae aperiam nihil odio officia quae unde ex
            recusandae voluptatum libero repellendus nulla quod, maxime enim
            quas iure.
          "
          icon={<MdBookOnline size={45} />}
        />
        <ServiceCard
          heading="Affordable Rates"
          para="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam est
            aliquam eveniet beatae aperiam nihil odio officia quae unde ex
            recusandae voluptatum libero repellendus nulla quod, maxime enim
            quas iure.
          "
          icon={<TbPigMoney size={45} />}
        />
      </div>
    </section>
  );
};

export default Service;
