import React from "react";
import { GoMarkGithub } from "react-icons/go/";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="page__footer">
      <div className="footerdiv">
        <a
          className="connect-list__link"
          href="https://github.com/ahmadiavin"
          target="newwindow"
        >
          <GoMarkGithub />
        </a>
      </div>

      <div className="footerdiv">
        <a
          className="connect-list__link"
          href="http://codepen.io/ahmadiavin/"
          target="newwindow"
        >
          <FaCodepen />
        </a>
      </div>

      <div className="footerdiv">
        <a
          className="connect-list__link"
          href="https://www.linkedin.com/school/devmountain/"
          target="newwindow"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
