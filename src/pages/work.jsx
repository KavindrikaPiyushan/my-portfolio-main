import React, { useState } from "react";
// import "./work.css";
import Project from "../components/project";
import projectsdata from "../data/data";

function Work() {
  const [activeSection, setActiveSection] = useState("All");

  const filteredProjects =
    activeSection === "All"
      ? projectsdata
      : projectsdata.filter((project) => project.category === activeSection);

  const renderContent = () => {
    return filteredProjects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  };

  return (
    <div className="main-container">
      <h1 className="section-title">Work</h1>
      <div className="work-container">
        <div className="left-menu">
          <button
            onClick={() => setActiveSection("All")}
            className={activeSection === "All" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setActiveSection("Web")}
            className={activeSection === "Web" ? "active" : ""}
          >
            Web
          </button>
          <button
            onClick={() => setActiveSection("App")}
            className={activeSection === "App" ? "active" : ""}
          >
            App
          </button>
          {/* <button
            onClick={() => setActiveSection("Design")}
            className={activeSection === "Design" ? "active" : ""}
          >
            Design
          </button> */}
        </div>
        <div className="right-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Work;
