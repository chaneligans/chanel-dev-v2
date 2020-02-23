import React from "react";
import logo from "../logo.svg";

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
        {/* <img src={logo} id="logo"></img>  */}
        <span id="header-logo">🤖</span>
        <nav>{sectionLinks}</nav>
      </header>
    );
  }
}
