import React from "react";
import "./About.css";
import {motion} from "framer-motion"

export default function About() {
  return (
    <div className="about" id="about">
      <motion.div initial={{opacity:0,scale:0,x:-100}}  whileInView={{opacity:1,scale:1,x:0}} transition={{duration:0.6}} className="about-greet">
        <h1>HELLO!</h1>
        <h1>I AM</h1>
        <h1 className="about-name">VIVEK</h1>
      </motion.div>

      <motion.p initial={{opacity:0,scale:0,x:-100}}  whileInView={{opacity:1,scale:1,x:0}} transition={{duration:0.6}}>
        I thrive on solving complex problems and continuously learning new
        technologies to stay ahead in the ever-evolving tech landscape. My goal
        is to contribute to innovative projects that make a difference in
        people's lives.
      </motion.p>
      <motion.p initial={{opacity:0,scale:0,x:-100}}  whileInView={{opacity:1,scale:1,x:0}} transition={{duration:0.6}}>
        I am a passionate 3rd-year Computer Science student with a strong
        foundation in full-stack development and an unwavering love for building
        impactful web applications. My focus is on creating efficient,
        user-friendly applications with clean, scalable code.
      </motion.p>
      <motion.p initial={{opacity:0,scale:0,x:-100}}  whileInView={{opacity:1,scale:1,x:0}} transition={{duration:0.6}}>
        Feel free to explore my projects below or connect with me to discuss
        exciting opportunities or collaborations.
      </motion.p>
    </div>
  );
}
