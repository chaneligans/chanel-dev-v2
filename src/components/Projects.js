import React from "react";
import studyChumsImg from "../images/study-chums.png";
import domatesImg from "../images/domates.png";
import casinoBotImg from "../images/casino-bot.png";

export class Projects extends React.Component {
  createProject(title, photo, description, technologies) {
    const id = "project-" + title;
    const item = (
      <div id={id} className="project-item">
        <div className="project-img-container">
          <img className="project-img" src={photo} alt={title}></img>
        </div>
        <div className="project-title">{title}</div>
        <div className="project-desc">{description}</div>
        <div className="project-tech">{technologies}</div>
      </div>
    );
    return item;
  }

  render() {
    const title = (
      <div id="project-title" className="section-title">
        Projects
      </div>
    );

    const studyChumsDesc =
      "Collaborated with a team to develop a social media web application" +
      " that connects college students of similar majors together to " +
      "arrange study groups and chat about school, projects, or gathering";
    const studyChumsTech = (
      <ul>
        <li>Firebase</li>
        <li>Firebase</li>
        <li>Firebase</li>
        <li>Firebase</li>
      </ul>
    );
    const studyChums = this.createProject(
      "Study Chums",
      studyChumsImg,
      studyChumsDesc,
      studyChumsTech
    );

    const domatesDesc = "jfssdkjfddfkd";
    const domatesTech = (
      <ul>
        <li>Firebase</li>
        <li>Firebase</li>
        <li>Firebase</li>
        <li>Firebase</li>
      </ul>
    );
    const domates = this.createProject(
      "Domates",
      domatesImg,
      domatesDesc,
      domatesTech
    );

    const casinoBotDesc = "asdfadffsdf";
    const casinoBotTech = (
      <ul>
        <li>Firebase</li>
        <li>Firebase</li>
        <li>Firebase</li>
        <li>Firebase</li>
      </ul>
    );
    const casinoBot = this.createProject(
      "CasinoBot",
      casinoBotImg,
      casinoBotDesc,
      casinoBotTech
    );

    return (
      <div id="projects" className="section">
        {title}
        <div id="project-items">
          {studyChums} {casinoBot} {domates}
        </div>
      </div>
    );
  }
}
