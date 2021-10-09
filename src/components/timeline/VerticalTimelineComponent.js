import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import GitHubIcon from "@material-ui/icons/GitHub";
import HouseIcon from "@material-ui/icons/House";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "./verticaltimeline.css";

import React from "react";

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#f25050", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #f25050" }}
        date="Mar 2021 - present"
        dateClassName="dateStyle"
        iconStyle={{ background: "#fc0303", color: "#fff" }}
        icon={<BusinessCenterIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Mechatronics/DevOps Engineer @ Agerris
        </h3>
        <h4 className="vertical-timeline-element-subtitle">QLD</h4>
        <p>
          - Used ROS and C++ to develop a 2D mapping algorithm from a stereo
          camera’s point cloud data for the robot's navigation system
        </p>
        <p>
          - Designed a computer vision-based obstacle maneuvering system for the
          autonomous tractor
        </p>
        <p>
          - Used Linux bash and Python for processing and analyzing GPS and
          sensor data
        </p>
        <p>
          - Collaborated with clients to understand user requirements for
          feature development planning
        </p>
        <p></p>
        <Button
          className="button-explore"
          variant="contained"
          href="https://agerris.com/"
          style={{ display: "block" }}
        >
          Vist Agerris
        </Button>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Nov 2020"
        dateClassName="dateStyle"
        contentStyle={{ background: "#fc7b03", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #fc7b03" }}
        iconStyle={{ background: "#fc7b03", color: "#fff" }}
        icon={<AccountBalanceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Graduated with First Class Honours in Electrical Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>- Awarded Dean’s Honors List for Academic Excellence; GPA - 3.66</p>
        <p></p>
        <Button
          className="button-explore"
          variant="contained"
          href="https://www.monash.edu/study/courses/majors-minors-specialisations/2021/specialisations/electrical-and-computer-systems-engineering-xs0004"
          style={{ display: "block" }}
        >
          Explore
        </Button>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Nov 2019 - Mar 2020"
        dateClassName="dateStyle"
        contentStyle={{ background: "#bab32d", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #bab32d" }}
        iconStyle={{ background: "#bab32d", color: "#fff" }}
        icon={<SearchIcon />}
      >
        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>
          - Performed movement data collection on AFL athletes using wearable
          sensor nodes (IMUs)
        </p>
        <p>
          - Processed joint angles of athletes’ lower bodies from the raw data
          collected using MATLAB
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#109401", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #109401" }}
        iconStyle={{ background: "#109401", color: "#fff" }}
        icon={<CalendarTodayIcon />}
      >
        <h3 className="vertical-timeline-element-title">IEEE Events Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>- Raised awareness of the organization’s values and inception</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Sep 2019 - Nov 2020"
        dateClassName="dateStyle"
        contentStyle={{ background: "#3192a8", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #3192a8" }}
        iconStyle={{ background: "#1fd1cb", color: "#fff" }}
        icon={<GitHubIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Software/Robotics Engineer @ Monash Nova Rover
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>
          - Propelled the team to 9th place in 2019 from 14th place in 2018, out
          of 35 competing teams
        </p>
        <p>
          - Used C++ and ROS to create a path planner and controller for the
          autonomous navigation system
        </p>
        <p>
          - Created a Gazebo simulation environment to improve safety for
          testing purposes
        </p>
        <p>
          - Assisted in sensor selection and performance analysis to meet budget
          plans
        </p>
        <p></p>
        <Button
          className="button-explore"
          variant="contained"
          href="https://www.novarover.space/"
          style={{ display: "block" }}
        >
          Visit Nova Rover
        </Button>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Feb 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#1f81d1", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1f81d1" }}
        iconStyle={{ background: "#1f81d1", color: "#fff" }}
        icon={<HouseIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Moved to Melbourne, Australia
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016 - 2018"
        dateClassName="dateStyle"
        contentStyle={{ background: "#03178a", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #03178a" }}
        iconStyle={{ background: "#2805f0", color: "#fff" }}
        icon={<AccountBalanceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Commenced my Engineering degree @ Monash Malaysia
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, Selangor
        </h4>
        <p>- Monash Higher Achiever Award Holder</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Feb 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#bd05f5", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #bd05f5" }}
        iconStyle={{ background: "#bd05f5", color: "#fff" }}
        icon={<DirectionsRunIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Left Yangon, Myanmar(Burma)
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "#f5056d", color: "#fff" }}
        icon={<FiberManualRecordIcon />}
      />
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
