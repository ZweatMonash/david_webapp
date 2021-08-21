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
          &emsp; &emsp;Fascinated by how machinery works and eager to understand
          the inner workings of systems, I studied Electrical Engineering at
          Monash University in 2015. Although I was doing well in classes, I was
          still unsatisfied with the courses as my questions were still
          unanswered.
          <br></br> &emsp; &emsp;Later in 2019, I joined the Monash Nova Rover
          where I first got a deep dive into engineering. It became clear to me
          that robotics engineering is what I want to pursue. After graduating,
          I joined Agerris engineering team to enable farmers with the latest
          robotics technology to increase crop productivity and yield. I am very
          fortunate to be part of an industry that is bringing real change in
          shaping the future of agriculture.
        </p>
      </div>
    </div>
  );
};

export default Hero;
