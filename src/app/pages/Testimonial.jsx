"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Testimonials from "../Constant/Testimonials.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "../globals.css";

//Animation
import BlurText from "../Animation/BlurText.jsx";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = Testimonials.length;
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // Optional autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Client Testimonials | Mohammed Awaiz</title>
        <meta
          name="description"
          content="Hear what clients say about working with Mohammed Awaiz. Trusted full-stack developer with proven results."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Testimonials - Mohammed Awaiz" />
        <meta
          property="og:description"
          content="Real reviews and feedback from people who’ve worked with Mohammed Awaiz on web development projects."
        />
      </Head>

      <section
        id="testimonial"
        className="min-h-screen text-heading flex justify-center items-start flex-col py-20"
      >
        <div className="flex flex-col justify-start items-start">
          <BlurText
            text="Testimonials"
            // delay={150}
            duration={1}
            animateBy="words"
            direction="top"
            className="text-lg text-highlight"
            animateOn="view"
          />
          <BlurText
            text="People Experience working with us"
            // delay={150}
            duration={1}
            animateBy="words"
            direction="top"
            className="text-2xl text-heading"
            animateOn="view"
          />
        </div>

        <div className="flex justify-center items-center relative w-full max-w-4xl mx-auto overflow-hidden px-4 mt-20 max-md:mt-15 max-md:p-0 ">
          <div
            ref={containerRef}
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Testimonials.map((testimonials, index) => (
              <div
                key={index}
                className="min-w-full px-2 py-12 bg-backgroundColor text-heading rounded-lg shadow-lg flex justify-center items-center max-md:py-0"
              >
                <figure className="flex flex-col items-center justify-center text-center max-md:px-5">
                  <div className="flex mb-4 text-yellow-300">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={20} />
                    ))}
                  </div>
                  <blockquote>
                    <p className="text-2xl font-semibold max-w-2xl mx-auto max-md:text-base">
                      {testimonials.feedback}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={testimonials.img}
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-300">
                      <cite className="pr-3 font-medium max-md:text-[11px]">
                        {testimonials.name}
                      </cite>
                      <cite className="pl-3 text-sm text-gray-500 max-md:text-[11px]">
                        {testimonials.position}
                      </cite>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 border-2 border-cta bg-cta text-heading hover:bg-backgroundColor hover:text-cta transition-all duration-300 rounded-full max-md:p-1.5 max-md: -translate-x-1/1"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 border-2 border-cta bg-cta text-heading hover:bg-backgroundColor hover:text-cta transition-all duration-300 rounded-full max-md:p-1.5 max-md:translate-x-1/1"
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
