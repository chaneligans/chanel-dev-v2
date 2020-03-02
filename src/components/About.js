import React from "react";
import photo from "../images/headshot.png";

export class About extends React.Component {
  render() {
    const pic = <img id="about-headshot" src={photo}></img>;
    const title = (
      <div id="about-title" className="section-title">
        About Me
      </div>
    );
    const desc = (
      <div id="about-desc">
        I'm Chanel, a graduating Computer Science student at California State
        University, Long Beach. I've always been passionate about creating
        things, and developing is just one of the many ways I like to express
        myself. My main interests are software development and full stack
        development because I like how easy it is to incorporate creativity into
        both!
      </div>
    );
    const skills = [
      "Java",
      "Python",
      "MySQL",
      "C++",
      "React",
      "JavaScript",
      "HTML & CSS",
      "Git",
      "Firebase"
    ];

    const skillsList = skills.map(skill => {
      return (
        <li className="about-skill" key={skill}>
          {skill}
        </li>
      );
    });

    return (
      <div id="about" className="section">
        {pic}
        <div id="about-right">
          {title} {desc} Here are some of the skills I've learned so far: <ul id="about-skills">{skillsList}</ul>
        </div>
      </div>
    );
  }
}
