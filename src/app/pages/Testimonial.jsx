"use client";

import React, { useState, useEffect, useRef } from "react";
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
    <section
      id="testimonial"
      className="min-h-screen text-heading flex justify-center items-start flex-col py-20"
    >
      <div className="flex flex-col justify-start items-start">
        <BlurText
          text="Testimonials"
          // delay={150}
          duration={2}
          animateBy="words"
          direction="top"
          className="text-lg text-highlight"
          animateOn="view"
        />
        <BlurText
          text="People Experience working with us"
          // delay={150}
          duration={2}
          animateBy="words"
          direction="top"
          className="text-2xl text-heading"
          animateOn="view"
        />
      </div>

      <div className="flex justify-center items-center relative w-full max-w-4xl mx-auto overflow-hidden px-4 mt-20">
        <div
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Testimonials.map((testimonials, index) => (
            <div
              key={index}
              className="min-w-full px-6 py-12 bg-backgroundColor text-heading rounded-lg shadow-lg flex justify-center items-center max-md:hidden"
            >
              <figure className="max-w-2xl flex flex-col items-center justify-center text-center mx-auto">
                <div className="flex mb-4 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={20} />
                  ))}
                </div>
                <blockquote>
                  <p className="text-2xl font-semibold max-w-2xl mx-auto">
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
                    <cite className="pr-3 font-medium">
                      {testimonials.name}
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500">
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
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 border-2 border-cta bg-cta text-heading hover:bg-backgroundColor hover:text-cta transition-all duration-300 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 border-2 border-cta bg-cta text-heading hover:bg-backgroundColor hover:text-cta transition-all duration-300 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* 
      <figure className="max-w-screen-md flex flex-col justify-center items-center">
        <div className="flex mb-4 text-yellow-300">
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <blockquote>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
              CTO at Flowbite
            </cite>
          </div>
        </figcaption>
      </figure> */}
    </section>
  );
};

export default Testimonial;
