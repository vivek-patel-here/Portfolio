import React from "react";
import "./Skill.css";
import assets from "../../assets/assets.js";

function Skill() {
  return (
    <div className="skill" id="skill">
      <h1>Skills</h1>
      <ul>
        <div className="skill-box-right-container">
          <div className="skill-box-right">
            <h2>Frontend Development</h2>
            <div className="logo-container">
              {assets.frontendlogo.map((logo, index) => {
                return <img src={logo} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="skill-box-left">
          <h2>Backend Development</h2>
          <div className="logo-container">
            {assets.backendlogo.map((logo, index) => {
              return <img src={logo} key={index} />;
            })}
          </div>
        </div>
        <div className="skill-box-right-container">
          <div className="skill-box-right">
            <h2>Databases</h2>
            <div className="logo-container">
              {assets.database.map((logo, index) => {
                return <img src={logo} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="skill-box-left">
          <h2>Programming Languages</h2>
          <div className="logo-container">
            {assets.programminglanguage.map((logo, index) => {
              return <img src={logo} key={index} />;
            })}
          </div>
        </div>
        <div className="skill-box-right-container">
          <div className="skill-box-right">
            <h2>Other Technologies</h2>
            <div className="logo-container">
              {assets.othertechnology.map((logo, index) => {
                return <img src={logo} key={index} />;
              })}
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Skill;
