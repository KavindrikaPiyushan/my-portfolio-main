import React from "react";
import ProjectCard from "../components/ProjectCard";
import mergex from "../assets/projects/mergex.png";
import vertex from "../assets/projects/Vertex.png";
import pramuka from "../assets/projects/PramukaStore.jpg";
import RevoClean from "../assets/projects/RevoClean.jpg"
import ReactLImg from "../assets/react.svg";
import CSSImg from "../assets/CSS3.svg";
import HTMLImg from "../assets/HTML5.svg";
import NodeImg from "../assets/node.svg";
import ExpressImg from "../assets/express.jpg";
import MongoDBImg from "../assets/Mongodb.svg";
import TailwindImg from "../assets/tailwind.svg";
import '../style/Projects.css'


function Projects() {
  const projects = [
    {
      image: mergex, // Corrected syntax
      description: "MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape.",
      title: "MergeX",
      techStack: [ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg],
    },
    {
      image: vertex, // Corrected syntax
      description: "Vertex is a comprehensive web-based platform designed for selling and managing video games.",
      title: "Vertex Game Store",
      techStack: [ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg],
    },
    {
      image: pramuka, // Corrected syntax
      description: "An E-commerce website with stock management, order tracking, cart, and online payment capabilities.",
      title: "Pramuka Store",
      techStack: [ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg],
    },
    {
      image: RevoClean, // Corrected syntax
      description: "RevoClean is an automated wastewater purification unit, a hardware project that uses the ESP32-E.",
      title: "RevoClean",
      techStack: [ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg],
    },
    // Add more project objects here...
  ];
  return (
    <div className="main-container flex flex-col  ">
    <h1 className="section-title">Projects</h1>
    <div className="grid customSm:grid-cols-2 custom:grid-cols-3 2xl:grid-cols-4 justify-between p-[50px] pt-0 sm:m-auto customSm:m-0">

      {/* <ProjectCard
        className='project-card'
        image={mergex}
        description="MergeX is an innovative applicant tracking system (ATS) set to transform the recruitment landscape."
        title="MergeX"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
       className='project-card'
        image={vertex}
        description="Vertex is a comprehensive web based platform designed for selling and managing video games."
        title="Vertex Game Store"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
      <ProjectCard
        image={pramuka}
        description="An E-commerce website with stock management, order tracking, cart , and online payment capabilities."
        title="Pramuka Store"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard>
       <ProjectCard
        image={RevoClean}
        description="RevoClean is an automated wastewater purification unit, a hardware project that uses the ESP32-E."
        title="RevoClean"
        techStack={[ReactLImg, NodeImg, ExpressImg, MongoDBImg, TailwindImg]}
       
      ></ProjectCard> */}

      {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            description={project.description}
            title={project.title}
            techStack={project.techStack}
            delay={index * 0.4} // Calculate delay dynamically
          />
        ))}

     
      </div>
     
    </div>
  );
}

export default Projects;
