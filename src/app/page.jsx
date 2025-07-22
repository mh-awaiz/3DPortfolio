import React from "react";

//Pages
import About from "./pages/About.jsx";
import TechStack from "./pages/TechStack.jsx";
import Service from "./pages/Service.jsx";
import Project from "./pages/Project.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";
import HeroSection from "./Components/HeroSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Service />
      <TechStack />
      <Project />
      <Testimonial />
      <Contact />
    </>
  );
}
