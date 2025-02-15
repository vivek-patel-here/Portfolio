import React from "react";
import "./Projectcard.css";
import { motion } from "framer-motion";

function Projectcard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0,x:-100}}
      whileInView={{ opacity:1, x:0 }}
      transition={{duration:0.6}}
      className="project-card"
    >
      <img src={project.image} />
      <div>
        <p className="proj-card-title">{project.title}</p>
        <p className="proj-card-desc">{project.description}</p>
        <p>
          <a href={project.link} target="_blank">
            Explore project <i class="ri-arrow-right-up-line"></i>
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Projectcard;
