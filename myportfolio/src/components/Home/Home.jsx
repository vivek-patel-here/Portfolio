import React, { useRef } from "react";
import "./Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  let nameRef = useRef();

  useGSAP(() => {
    gsap.from(nameRef.current, { x: -100, duration: 0.8, opacity: 0 });
    gsap.from(".home-title", {
      x: 200,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".home-tagline", {
      opacity: 0,
      duration: 1,
      scale: 0,
    });
  });

  return (
    <div className="home" id="home">
      <div className="home-container">
        <h1 ref={nameRef}>VIVEK PATEL</h1>
        <p className="home-title">
          Full-Stack Developer | MERN Stack Enthusiast
        </p>
        <p className="home-tagline">
          Code, Create, Innovate - Welcome to my world.
        </p>
      </div>
    </div>
  );
}

export default Home;
