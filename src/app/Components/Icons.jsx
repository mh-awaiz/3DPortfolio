"use client";

import React from "react";

const Icons = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition"
    >
      {icon}
    </a>
  );
};

export default Icons;
