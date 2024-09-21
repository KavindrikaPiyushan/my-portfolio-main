import React from "react";
import "./education.css";
import Moratuwa from "../assets/moratuwa.png";
import school from "../assets/bandaranayake_college.jpg";

function Education() {
  return (
    <div className="education-container">
      <div className="education-item   bg-[#1c1d1f] ">
        <div className="uni-data ">
          <h1 className=" text-[#00ff00] pb-2">University of Moratuwa</h1>
          <h6>Bachelor of Science Honours in Information Technology </h6>
          <p>2022 - 2026</p>
        </div>
        <div className="edu-img-container">
          <img className="edu-img w-[20px]" src={Moratuwa} alt="Moratuwa University" />
        </div>
      </div>
      <div className="education-item  bg-[#1c1d1f]">
        <div className="uni-data">
          <h1 className=" text-[#00ff00] pb-2">Bandaranayake College, Gampaha</h1>
          <h6>G.C.E. A/L (2020) :  Physics A Combined Maths B Chemistry B</h6>
          <h6>G.C.E. O/L (2016) : 7As , 2Bs</h6>
        </div>
        <div className="edu-img-container">
          <img className="edu-img rounded-full " src={school} alt="Bandaranayake College Gampaha" />
        </div>
      </div>
    </div>
  );
}

export default Education;
