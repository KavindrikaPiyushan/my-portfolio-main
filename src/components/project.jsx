import React from "react";
import "./project.css";

function Project({ project }) {
  return (
    <div className="project-container">
      <div className="project-details">
        <div className="project-number-outline"></div>
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <p className="technologies">{project.technologies}</p>
        <div className="work-links">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="work-image">
        <img src={project.image} alt="ProjectImage" />
      </div>
    </div>
  );
}

export default Project;
