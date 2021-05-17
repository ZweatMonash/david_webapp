import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer-wrapper">
      <h1> Contact me</h1>
      <ul className="footer-list">
        <li>
          <EmailIcon />
          <a href="mailto: zwe.david.htet@gmail.com">Email</a>
        </li>
        <li>
          <FacebookIcon />
          <a href="https://www.linkedin.com/in/zwehtet/">Facebook</a>
        </li>
        <li>
          <TwitterIcon />
          <a href="https://twitter.com/zwe229679">Twitter</a>
        </li>
        <li>
          <LinkedInIcon />
          <a href="https://www.linkedin.com/in/zwehtet/">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
