import React from "react";
import "../styles/Projects.css";
import one from "../imgs/1.png";
import two from "../imgs/2.png";
import three from "../imgs/3.png";
import four from "../imgs/4.png";
import five from "../imgs/5.png";
import six from "../imgs/6.png";
import seven from "../imgs/7.png";
import eight from "../imgs/8.png";
import nine from "../imgs/9.png";


function Projects() {
  return (
    <div className="projects">
      <h1>Um pouco dos meus trabalhos</h1>
        <div className="container">
            <div className="div-item">
              <img src={one} alt="" />
            </div>
            <div className="div-item">
              <img src={two} alt="" />
            </div>
            <div className="div-item">
              <img src={three} alt="" />
            </div>
            <div className="div-item">
              <img src={four} alt="" />
            </div>
            <div className="div-item">
              <img src={five} alt="" />
            </div>
            <div className="div-item">
              <img src={six} alt="" />
            </div>
            <div className="div-item">
              <img src={seven} alt="" />
            </div>
            <div className="div-item">
              <img src={eight} alt="" />
            </div>
            <div className="div-item">
              <img src={nine} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Projects;
