import React from "react";
import "./hero.css";
import RenderRover from "./RenderRover";

const Hero = () => {
  const parentID = "hero-wrapper";

  return (
    <div id={parentID}>
      <RenderRover parentID={parentID} />
      <p style={{ textAlign: "center" }}>
        The rover which I worked on during my time at Monash Nova Rover (MNR).
        Thanks MNR for making my uni experience awesome.
      </p>
      <div>
        <h1>Background</h1>
        <p>
          Thanks for visiting this page (still in work-in progress). My name is
          David Htet. I came from a warm, sunny south-east asian country known
          as "Myanmar". I am currently residing in Australia, working as a
          mechatronics/dev-ops engineer in the agriculture industry. My hobbies
          include gaming, reading, and working on tech-projects. As a believer
          in tech, I am super excited to see what the future holds, especially
          in the field of the AI, Crypto-currencies, and Robotics. If you share
          the same interest feel free to contact me (links in the footer). Happy
          scrolling!
        </p>
      </div>
    </div>
  );
};
export default Hero;
