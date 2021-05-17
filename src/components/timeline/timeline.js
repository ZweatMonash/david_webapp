import React from "react";
import "./timeline.css";
import VerticalTimelineComponent from "./VerticalTimelineComponent";

const Timeline = () => {
  return (
    <>
      <div id="timeline-wrapper">
        <h1>My Journey</h1>
        <VerticalTimelineComponent />
      </div>
    </>
  );
};

export default Timeline;
