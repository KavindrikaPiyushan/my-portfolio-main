import React from "react";
import Skills from "../components/skills";
// import "./Resume.css";
import Education from "../components/education";
import Volunteering from "../components/volunteering";

function Resume() {
  return (
    <div className="main-container ">
      <h1 className="section-title">Resume</h1>
      <div className="resume-container  pt-0">
        
        <div className="w-[70%] ">
         <h1 className="subTitle active w-[200px] mx-auto my-5 ">Skills</h1>
          <div>
          <Skills />
          </div>
        
        
        <div className=" ">
         <h1 className="subTitle active w-[200px] mx-auto my-5 ">Education</h1>
          <div>
          <Education />
          </div>
        </div>

        <div className=" ">
         <h1 className="subTitle active w-fit mx-auto my-5 ">Extracurricular Activities
</h1>
          <div>
          <Volunteering />
          </div>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default Resume;
