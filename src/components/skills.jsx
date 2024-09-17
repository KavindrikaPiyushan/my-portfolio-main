import React from "react";
import "./skills.css";

import git from "../assets/Git.svg";
import python from "../assets/python.svg";
import css from "../assets/CSS3.svg";
import html from "../assets/HTML5.svg";
import js from "../assets/JavaScript.svg";
import react from "../assets/react.svg";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/node.svg";
import flutter from "../assets/Flutter.svg";
import mongodb from "../assets/Mongodb.svg";
import boostrap from "../assets/Bootstrap.svg";
import docker from "../assets/Docker.svg";
import Figma from "../assets/Figma.svg";
import pandas from "../assets/Pandas.svg";
import vs from "../assets/VS.svg";
import tensorflor from "../assets/TensorFlow.svg";
import numpy from "../assets/NumPy.svg";
import scikitlearn from "../assets/scikit-learn.svg";
import tailwind from "../assets/tailwind.svg"
import expressJs from "../assets/express.jpg"
import java from "../assets/java.svg"

function Skills() {
  return (
    <div className="skills-section">
      <div className="skill-item">
        <img src={html} alt="html"></img>
      </div>
      <div className="skill-item">
        <img src={css} alt="css"></img>
      </div>
      <div className="skill-item">
        <img src={js} alt="js" className="rounded-lg"></img>
      </div>
      <div className="skill-item">
        <img src={git} alt="git"></img>
      </div>
      <div className="skill-item">
        <img src={nodejs} alt="nodejs"></img>
      </div>
      <div className="skill-item">
        <img src={expressJs} alt="nodejs" className="rounded-lg"></img>
      </div>
      <div className="skill-item">
        <img src={react} alt="react"></img>
      </div>
      <div className="skill-item">
        <img src={mysql} alt="mysql"></img>
      </div>
      <div className="skill-item">
        <img src={python} alt="python"></img>
      </div>
      <div className="skill-item">
        <img src={java} alt="python" className="rounded-lg"></img>
      </div>
      {/* <div className="skill-item">
        <img src={pandas} alt="pandas"></img>
      </div> */}
      <div className="skill-item">
        <img src={tailwind} alt="tailwind"></img>
      </div>
      <div className="skill-item">
        <img src={vs} alt="VS Code"></img>
      </div>
      {/* <div className="skill-item">
        <img src={docker} alt="docker"></img>
      </div> */}
      {/* <div className="skill-item">
        <img src={flutter} alt="flutter"></img>
      </div> */}
      <div className="skill-item">
        <img src={boostrap} alt="boostrap"></img>
      </div>
      <div className="skill-item">
        <img src={mongodb} alt="mongodb"></img>
      </div>
      <div className="skill-item">
        <img src={Figma} alt="figma"></img>
      </div>
      {/* <div className="skill-item">
        <img src={tensorflor} alt="tensorflor"></img>
      </div> */}
      {/* <div className="skill-item">
        <img src={numpy} alt="numpy"></img>
      </div> */}
      {/* <div className="skill-item">
        <img src={scikitlearn} alt="scikitlearn"></img>
      </div> */}
    </div>
  );
}

export default Skills;
