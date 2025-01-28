import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  let [page,setPage]=useState("Home")
  return (
    <div className="navbar">
      <h1>{'</>'} Vivek </h1>
      <ul>
      <a href="#home">  <li className={page=="Home"?"active":""} onClick={()=>{setPage("Home")}}>Home</li></a>
        <a href="#about"> <li className={page=="About"?"active":""} onClick={()=>{setPage("About")}}>About</li></a>
        <a href="#project"> <li className={page=="Projects"?"active":""} onClick={()=>{setPage("Projects")}}>Projects</li></a>
       <a href="#skill">  <li className={page=="Skills"?"active":""} onClick={()=>{setPage("Skills")}}>Skills</li></a>
      </ul>
      <div className="nav-ref">
        <a href="https://www.linkedin.com/in/vivek-patel2004" target="_blank"><i class="ri-linkedin-box-fill nav-icon"></i></a>
        <a href="https://github.com/vivek-patel-here/" target="_blank"><i class="ri-github-fill nav-icon"></i></a>
      </div>
    </div>
  );
}

export default Navbar;
