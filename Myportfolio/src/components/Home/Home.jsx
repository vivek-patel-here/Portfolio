import React from "react";
import "./Home.css";
import { motion } from "motion/react";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-name">
        <motion.h1 initial={{x:200,opacity:0 }} whileInView={{x:0,opacity:1}} transition={{duration:0.5}}>Vivek</motion.h1>
        <motion.h1 initial={{x:-200 ,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>Patel</motion.h1>
      </div>
      <motion.p initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:1}} className="home-title">Full-Stack Developer | MERN Stack Enthusiast</motion.p>
      <motion.p initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:1}} className="home-desc">Code, Create, Innovate - Welcome to my world.</motion.p>
    </div>
  );
}

export default Home;
