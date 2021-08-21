import React from "react";
import "./navbar.css";
import CV from "../../../public/documents/Davids-CV.pdf";
import Name from "./name";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <ul className="nav-list">
        <li className="nav-left">
          <h2>
            David Htet |
            <Name
              text={[
                "<strong> Mechatronics</strong>",
                "<strong> Robotics</strong>",
                "<strong> Software</strong>",
              ]}
            />
          </h2>
        </li>
        <li className="nav-right">
          <button>
            <a href={CV} download="David_CV">
              Get Resume
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
