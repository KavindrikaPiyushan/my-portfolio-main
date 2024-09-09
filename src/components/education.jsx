import React from "react";
import "./education.css";
import Moratuwa from "../assets/moratuwa.png";
import Ananda from "../assets/ananda.png";

function Education() {
  return (
    <div className="education-container">
      <div className="education-item">
        <div className="uni-data">
          <h1>University of Moratuwa</h1>
          <h6>Bachelor of Science in Computer Science and Engineering</h6>
          <p>2022 - 2026</p>
        </div>
        <div className="edu-img-container">
          <img className="edu-img" src={Moratuwa} alt="Moratuwa University" />
        </div>
      </div>
      <div className="education-item">
        <div className="uni-data">
          <h1>Ananda College, Colombo 10</h1>
          <h6>G.C.E. A/L (2020) : 4As (Physical Science Stream)</h6>
          <h6>G.C.E. O/L (2016) : 9As</h6>
        </div>
        <div className="edu-img-container">
          <img className="edu-img" src={Ananda} alt="Ananda College" />
        </div>
      </div>
    </div>
  );
}

export default Education;
