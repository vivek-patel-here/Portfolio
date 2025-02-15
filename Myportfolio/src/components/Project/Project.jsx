import React from 'react'
import "./Project.css"
import Projectcard from '../ProjectCard/Projectcard'
import assets from "../../assets/assets.js"

function Project() {
    const projects =assets.projects;
  return (
    <div className='project' id='project'>
            <h1 className='pro-title'>PROJECTS</h1>
        <div className="project-container">
        { projects.map((project)=>{
         return <Projectcard project={project}/>
       })}
        </div>
    </div>
  )
}

export default Project