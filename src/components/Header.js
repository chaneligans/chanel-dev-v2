import React from "react";
import logo from "../logo.svg";

export class Nav extends React.Component {
  render() {
    const sections = ["about", "projects", "experience", "contact"];
    const sectionLinks = sections.map(section => {
      return (
        <a href={"#" + section} className="nav-item" key={section}>
          {section}
        </a>
      );
    });

    const resumeLink = (
      <a href="https://drive.google.com/open?id=1ptINCDsmI93iHQeL5UDTI5zUNBJHJw7c">
        resume
      </a>
    );

    return (
      <header>
        <span id="header-logo"><a href="#home">🤖</a></span>
        <nav>
          {sectionLinks} {resumeLink}
        </nav>
      </header>
    );
  }
}
