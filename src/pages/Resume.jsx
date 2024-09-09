import React, { useState } from "react";
import Skills from "../components/skills";
// import "./Resume.css";
import Education from "../components/education";
import Volunteering from "../components/volunteering";

function Resume() {
  const [activeSection, setActiveSection] = useState("Skills");

  const renderContent = () => {
    switch (activeSection) {
      case "Skills":
        return <Skills />;
      case "Education":
        return <Education />;
      case "Volunteering":
        return <Volunteering />;
      default:
        return <Skills />;
    }
  };

  return (
    <div className="main-container">
      <h1 className="section-title">Resume</h1>
      <div className="resume-container">
        <div className="left-menu">
          <button
            onClick={() => setActiveSection("Skills")}
            className={activeSection === "Skills" ? "active" : ""}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveSection("Education")}
            className={activeSection === "Education" ? "active" : ""}
          >
            Education
          </button>
          <button
            onClick={() => setActiveSection("Volunteering")}
            className={activeSection === "Volunteering" ? "active" : ""}
          >
            Volunteering
          </button>
        </div>
        <div className="right-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Resume;
