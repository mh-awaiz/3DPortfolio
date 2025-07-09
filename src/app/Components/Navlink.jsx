"use client";

import React from "react";
import Link from "next/link";

const Navlink = ({ href, section, navRef, toggle, setToggle }) => {
  const handleClose = () => {
    setToggle(!toggle);

    const closeNav = navRef.current.style;
    if (closeNav.display === "flex") {
      closeNav.display = "none";
    } else {
      closeNav.display = "flex";
    }
  };
  return (
    <Link
      className="text-heading hover:text-primary hover:underline hover:underline-offset-8  duration-300 transition-all max-lg:p-2 max-lg:hover:bg-slate-950  max-lg:hover:no-underline max-lg:w-full hover:cursor-pointer"
      href={href}
      onClick={() => {
        handleClose();
      }}
    >
      {section}
    </Link>
  );
};

export default Navlink;
