"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BlurText from "../Animation/BlurText";
import GlareHover from "../Animation/GlareHover";
import Particles from "../Animation/Particles.jsx";
import "../globals.css";
import { motion } from "motion/react";

const Contact = () => {
  const formRef = useRef(null);
  const resultRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const form = formRef.current;
    const result = resultRef.current;

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      result.innerHTML = "Please wait...";

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });

        const jsonData = await response.json();

        if (response.status === 200) {
          result.innerHTML = jsonData.message;
          result.classList.remove("text-gray-500");
          result.classList.add("text-green-500");
        } else {
          result.innerHTML = jsonData.message;
          result.classList.remove("text-gray-500");
          result.classList.add("text-red-500");
        }
      } catch (error) {
        result.innerHTML = "Something went wrong!";
      }

      form.reset();
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <>
      <Head>
        <title>Contact Mohammed Awaiz | Get in Touch</title>
        <meta
          name="description"
          content="Looking to hire or collaborate? Contact Mohammed Awaiz, a web developer based in India."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Mohammed Awaiz" />
        <meta
          property="og:description"
          content="Reach out to Mohammed Awaiz for collaborations, web development projects, or freelance work."
        />
      </Head>

      <section
        id="contact"
        className="min-h-screen w-full text-heading flex justify-center items-center"
      >
        <div
          className="flex justify-center items-center"
          style={{ width: "100%", height: "600px", position: "relative" }}
        >
          <Particles
            particleColors={["#a78bfa", "#22c55e"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
          />

          <div className=" flex flex-wrap justify-around w-full z-10 absolute">
            <div className="flex flex-col justify-center items-start">
              <BlurText
                text="Contact Us"
                // delay={150}
                duration={1}
                animateBy="words"
                direction="top"
                className="text-lg text-highlight"
                animateOn="view"
              />
              <BlurText
                text="Your words matter to us."
                // delay={150}
                duration={1}
                animateBy="words"
                direction="top"
                className="text-2xl text-heading"
                animateOn="view"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <form
                ref={formRef}
                onSubmit={() => handleSubmit}
                className=" w-auto flex flex-col  justify-center rounded-md gap-3 max-md:mt-5"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  cols={60}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className={`p-5 w-full text-cta font-semibold bg-transparent border  rounded-md outline-none         ${
                    name
                      ? "border-cta text-cta"
                      : "border-highlight text-heading appearance-none focus:ring-0"
                  }`}
                  required
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  cols={60}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`p-5 w-full text-cta font-semibold bg-transparent border  rounded-md outline-none         ${
                    email
                      ? "border-cta text-cta"
                      : "border-highlight text-heading"
                  }`}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  cols={60}
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                  className={`p-5 w-full text-cta font-semibold bg-transparent border  rounded-md outline-none         ${
                    phone
                      ? "border-cta text-cta"
                      : "border-highlight text-heading"
                  }`}
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  cols={60}
                  rows={5}
                  placeholder="How can we help you..."
                  onChange={(e) => setMessage(e.target.value)}
                  className={`p-5 w-full text-cta font-semibold bg-transparent border  rounded-md outline-none         ${
                    message
                      ? "border-cta text-cta"
                      : "border-highlight text-heading"
                  }`}
                  required
                ></textarea>

                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <button
                    type="submit"
                    className="p-5 bg-cta rounded-md text-heading font-semibold border border-cta hover:bg-backgroundColor hover:text-cta duration-300 transition-all w-full"
                  >
                    Submit
                  </button>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  />
                </GlareHover>
              </form>
            </motion.div>
          </div>
          <p
            className="text-base text-center text-heading  z-10"
            ref={resultRef}
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
