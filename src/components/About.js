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
        I'm Chanel, a fourth-year Computer Science student at California State
        University, Long Beach. Phasellus non risus id purus vehicula
        condimentum. Maecenas vel suscipit justo. Suspendisse ac fringilla
        tortor, a commodo lacus. Cras ac nulla lacus. Maecenas interdum massa
        nec velit tempus, accumsan porta est rhoncus. In egestas enim a est
        congue, a pharetra dolor mattis. In pellentesque finibus augue, et
        posuere libero dapibus ut.
      </div>
    );
    const skills = [
      "Java",
      "Python",
      "MySQL",
      "C++",
      "JavaScript",
      "HTML & CSS",
      "Git",
      "Firebase"
    ];

    const skillsList = skills.map(skill => {
      return <li className="about-skill" key={skill}>{skill}</li>;
    });

    return (
      <div id="about" className="section">
        {pic}
        <div id="about-right">
          {title} {desc} <ul id="about-skills">{skillsList}</ul>
        </div>
      </div>
    );
  }
}
