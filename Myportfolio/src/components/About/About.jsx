import React from "react";
import "./About.css";
import { motion } from "motion/react";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-card-container">
        <motion.div initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}} className="about-card">
          <h1>HELLO!</h1>
          <h1> I AM VIVEK</h1>
        </motion.div>
        <motion.div initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:0.6}} className="about-card">
          I am a passionate 3rd-year Computer Science student with a strong
          foundation in full-stack development and an unwavering love for
          building impactful web applications. My focus is on creating
          efficient, user-friendly applications with clean, scalable code
        </motion.div>
        <motion.div initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}}  className="about-card">
          I thrive on solving complex problems and continuously learning new
          technologies to stay ahead in the ever-evolving tech landscape. My
          goal is to contribute to innovative projects that make a difference in
          people's lives.
        </motion.div>

        <motion.div initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={{duration:0.6}}  className="about-card">
          Feel free to explore my projects below or connect with me to discuss
          exciting opportunities or collaborations.
        </motion.div>
      </div>
    </div>
  );
}

export default About;
