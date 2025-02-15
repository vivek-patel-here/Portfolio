import React from "react";
import "./Skill.css";
import assets from "../../assets/assets"
import {motion} from "motion/react"

function Skill() {
  return (
    <div className="skill" id="skill">
      <h1>Skills</h1>
      <div className="skillContainer">

        <motion.div initial={{opacity:0,x:200}}  whileInView={{opacity:1,x:0}} transition={{delay:0.1,duration:1}} className="right skill-container">
          <h2>Frontend Development</h2>
          <div className="skill-icon-container">
            {assets.frontendlogo.map((item)=>{
              return<img src={item} className="skill-icon" />
            })}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:-200}}  whileInView={{opacity:1,x:0}} transition={{delay:0.1,duration:1}} className="left skill-container">
          <h2>Backend Development</h2>
          <div className="skill-icon-container">
          {assets.backendlogo.map((item)=>{
              return<img src={item} className="skill-icon" />
            })}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:200}}  whileInView={{opacity:1,x:0}} transition={{delay:0.1,duration:1}} className="right skill-container">
          <h2>Databases</h2>
          <div className="skill-icon-container">
          {assets.database.map((item)=>{
              return<img src={item} className="skill-icon" />
            })}

          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{delay:0.1,duration:1}} className="left skill-container">
          <h2>Programming Languages</h2>
          <div className="skill-icon-container">
          {assets.programminglanguage.map((item)=>{
              return<img src={item} className="skill-icon" />
            })}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:200}}  whileInView={{opacity:1,x:0}} transition={{delay:0.1,duration:1}} className="right skill-container">
          <h2>Other</h2>
          <div className="skill-icon-container">
          {assets.othertechnology.map((item)=>{
              return<img src={item} className="skill-icon" />
            })}

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Skill;
