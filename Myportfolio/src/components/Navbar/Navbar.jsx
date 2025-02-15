import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="navbar">
      <p className="nav-title">Vivek Patel...</p>
      <ul className="nav-link-container">
        <li
          onClick={() => setActive("Home")}
          className={active == "Home" ? "nav-link nav-active" : "nav-link"}
        >
          <a href="#home"> Home</a>
        </li>
        <li
          onClick={() => setActive("About")}
          className={active == "About" ? "nav-link nav-active" : "nav-link"}
        >
          <a href="#about">About</a>{" "}
        </li>
        <li
          onClick={() => setActive("Project")}
          className={active == "Project" ? "nav-link nav-active" : "nav-link"}
        >
          <a href="#project"> Project</a>
        </li>
        <li
          onClick={() => setActive("Skill")}
          className={active == "Skill" ? "nav-link nav-active" : "nav-link"}
        >
          <a href="#skill">Skills</a>{" "}
        </li>
        <div className="nav-icon">
          <li className="nav-link-icon">
            <a
              href="https://www.linkedin.com/in/vivek-patel2004/"
              target="_blank"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </li>
          <li className="nav-link-icon">
            <a href="https://github.com/vivek-patel-here" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
