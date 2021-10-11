import React from "react";
import "./hero.css";
import RenderRover from "./RenderRover";

const Hero = () => {
  return (
    <div id="hero-wrapper">
      <RenderRover parentID={"hero-wrapper"} />
      <div id="pitch">
        <h1>Background</h1>
        <p>
          &emsp; &emsp;
          <br></br> &emsp; &emsp; A Mechatronics Engineer highly experienced in the field
          of robotics motion, sensors integration, and software development lifecycle.
          Working in an agile start-up to deliver agriculture robots to enable farmers
          with the latest robotics technology which increases crop productivity and yield.
          Actively involved in client-facing roles to better understand user requirements
          for prioritizing future feature development.
        </p>
      </div>
    </div>
  );
};

export default Hero;
