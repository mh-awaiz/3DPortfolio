"use client";

import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  const [text] = useTypewriter({
    words: [" AI Web Developer 💻", "Freelancer 🧑‍💼"],
    loop: true,
  });

  return (
    <h1 className="text-6xl font-bold text-cta">
      <span className="text-heading">I'm a</span> {text}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypewriterText;
