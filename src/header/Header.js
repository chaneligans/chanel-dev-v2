import React from "react";
import logo from "../logo.svg";
import "./Header.css";

export class Nav extends React.Component {
  render() {
    const sections = ["about", "experience", "portfolio", "resume", "contact"];
    const sectionLinks = sections.map(section => {
      return (
        <a href={"#" + section} className="nav-item">
          {section}
        </a>
      );
    });

    return (
      <header>
        <img src={logo} id="logo"></img>
        <nav>{sectionLinks}</nav>
      </header>
    );
  }
}
