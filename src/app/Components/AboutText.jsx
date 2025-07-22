"use client";

import React, { useRef, useState } from "react";

const AboutText = () => {
  const textRef = useRef(null);
  const [status, isStatus] = useState(false);

  const handleClick = () => {
    if (textRef.current.style.display === "block") {
      textRef.current.style.display = "none";
      isStatus(!status);
    } else {
      textRef.current.style.display = "block";
      isStatus(!status);
    }
  };

  return (
    <>
      <p className="font-semibold text-center text-para max-lg:hidden pl-20">
        Passionate about crafting engaging digital experiences through beautiful
        and functional user interfaces! Hi! I'm a Front-End Web Developer with a
        flair for transforming ideas into interactive, live applications. I
        specialize in HTML5, CSS, JavaScript, Tailwind CSS, and React.js,
        bringing modern web design to life. With a constant drive to grow, I am
        always exploring the latest trends in web development and delving into
        new, exciting projects. My journey has been a blend of overcoming
        challenges and creating user-centric web solutions that are not just
        appealing but also accessible and efficient. When I’m not coding, you
        might find me sketching out new UI ideas or reading up on the latest
        front-end development trends. My goal is simple: to create digital
        experiences that users love and remember. I'm excited to connect with
        like-minded professionals and collaborate on projects that push the
        boundaries of front-end web development.💻
      </p>

      <div className="hidden max-lg:flex justify-center items-center flex-col mt-5">
        <p className=" font-semibold text-center text-para">
          Passionate about crafting engaging digital experiences through
          beautiful and functional user interfaces! Hi! I'm a Front-End Web
          Developer with a flair for transforming ideas into interactive, live
          applications.
        </p>

        <p ref={textRef} className="hidden font-semibold text-center text-para">
          I specialize in HTML5, CSS, JavaScript, Tailwind CSS, and React.js,
          bringing modern web design to life. With a constant drive to grow, I
          am always exploring the latest trends in web development and delving
          into new, exciting projects. My journey has been a blend of overcoming
          challenges and creating user-centric web solutions that are not just
          appealing but also accessible and efficient. When I’m not coding, you
          might find me sketching out new UI ideas or reading up on the latest
          front-end development trends. My goal is simple: to create digital
          experiences that users love and remember. I'm excited to connect with
          like-minded professionals and collaborate on projects that push the
          boundaries of front-end web development.💻
        </p>

        <button
          onClick={() => handleClick()}
          className="text-gray-500  hover:cursor-pointer hover:text-gray-700 underline-offset-1"
        >
          {status ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
};

export default AboutText;
