import React from "react";
import ProjectCard from "../components/ProjectCard";
import mergex from "../assets/projects/mergex.png";
import vertex from "../assets/projects/Vertex.png";
import ReactLImg from "../assets/react.svg";
import CSSImg from "../assets/CSS3.svg";
import HTMLImg from "../assets/HTML5.svg";
import NodeImg from "../assets/node.svg";
import ExpressImg from "../assets/express.jpg";
import MongoDBImg from "../assets/Mongodb.svg";
import TailwindImg from "../assets/tailwind.svg";



function Projects() {
  return (
    <div className="main-container flex flex-col  ">
    <h1 className="section-title">Projects</h1>
    <div className="grid grid-cols-4 justify-between p-[50px] pt-0">

      <ProjectCard
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
        image={vertex}
        description="Vertex is a comprehensive web based platform designed for selling and managing video games."
        title="Vertex Game Store"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
       <ProjectCard
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      </div>
     
    </div>
  );
}

export default Projects;
