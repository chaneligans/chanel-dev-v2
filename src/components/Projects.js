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
        <div className="project-desc-container">
          <div className="project-title">{title}</div>
          <div className="project-desc">{description}</div>
          <div className="project-tech"><p>Technologies used:</p>{technologies}</div>
        </div>
      </div>
    );
    return item;
  }

  render() {
    const title = (
      <div id="project-title" className="section-title">
        Featured Projects
      </div>
    );

    const studyChumsDesc =
      "I collaborated with a team to develop a social media web application" +
      " that connects college students together to arrange study groups and " +
      "chat about school, projects, or gathering. My favorite part about this " +
      "project was seeing all the different components (profiles, searching, " +
      "messaging) come together to make an interesting platform.";
    const studyChumsTech = (
      <ul>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Firebase</li>
        <li>Node.JS</li>
      </ul>
    );
    const studyChums = this.createProject(
      "Study Chums",
      studyChumsImg,
      studyChumsDesc,
      studyChumsTech
    );

    const domatesDesc =
      "Domates is a team project I made along with 3 others for BeachHacks 2019."+
      " The idea behind it was to allow people to donate their belongings without"+
      " the hassle of having to take it to a donation center. This project is "+
      "somewhat special to me because it proved to me how much I could learn and build"+
      " using a new technology (React Native) in such a short amount of time.";
    const domatesTech = (
      <ul>
        <li>React Native</li>
        <li>Node.JS</li>
        <li>Firebase</li>
        <li>Android Studio</li>
      </ul>
    );
    const domates = this.createProject(
      "Domates",
      domatesImg,
      domatesDesc,
      domatesTech
    );

    const casinoBotDesc =
      "CasinoBot is a Discord bot I created that was inspired by another bot" +
      " named Yui. I made it in hopes of providing a way for my friends on Discord" +
      " to be able to play games with each other without the need of a computer." +
      " My favorite part about this project was using different kinds of technologies" +
      " to bring the bot to life!";
    const casinoBotTech = (
      <ul>
        <li>Python</li>
        <li>MySQL</li>
        <li>Raspberry Pi</li>
        <li>Discord API</li>
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
