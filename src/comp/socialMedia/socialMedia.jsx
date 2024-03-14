import React from "react";
import "./socialMedia.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Social = () => {
  return (
    <ul className="social-media-list">
      <li>
        <a href="https://github.com/DBordallo" target="_blank">
          <FaGithub className="fab" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/diego-bordallo/"
          target="_blank"
        >
          <FaLinkedin className="fab" />
        </a>
      </li>
      <li>
        <a href="mailto:bordallo.d@gmail.com" target="_blank">
          <SiGmail className="fab" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
