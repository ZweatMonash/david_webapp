import React from "react";
import "./navbar.css";
import CV from "../../../public/documents/Davids-CV.pdf";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <ul className="nav-list">
        <li className="nav-left">
          <h2>David Htet</h2>
          <p>Mechatronics Engineer at Agerris</p>
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
