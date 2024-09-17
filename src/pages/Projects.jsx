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
    <div className="flex flex-col p-[50px] ">
    <div className="grid grid-cols-3 justify-between ">

      <ProjectCard
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
        image={vertex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
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
