import React from "react";
import "./Project.css";
import Projectcard from "../ProjectCard/Projectcard";
import assets from "../../assets/assets.js";


function Project() {

  const projects =assets.projects;
  return (
    <div className="project" id="project">
      <div className="project-container">
       { projects.map((project)=>{
         return <Projectcard project={project}/>
       })}
        
      </div>
      <h1>PROJECTS</h1>
    </div>
  );
}

export default Project;
