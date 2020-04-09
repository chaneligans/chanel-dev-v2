import React from "react";

export class Experience extends React.Component {
  createExperience(title, description, date, location) {
    const id = "exp-" + title;
    const item = (
      <div id={id} className="exp-item">
        <div className="exp-title">{title}</div>
        <div className="exp-loc"> @ {location}</div>
        <div className="exp-date">{date}</div>
        <div className="exp-desc">{description}</div>
      </div>
    );
    return item;
  }

  render() {
    const title = (
      <div id="exp-title" className="section-title">
        Work Experience
      </div>
    );

    const sharkLabLoc = "Shark Lab, CSULB";
    const sharkLabDate = "Oct 2019 - Present";
    const sharkLabDesc =
      "At the Shark Lab, I am responsible for updating and creating "+
      "ADA compliant content for CSULB’s official SharkLab website"+
      " using Drupal. I also assist with organizing data collected "+
      "from sharks that swim past various sensors using MySQL.";
    const sharkLab = this.createExperience(
      "Webmaster & Programming Assistant",
      sharkLabDesc,
      sharkLabDate,
      sharkLabLoc
    );

    const acmLoc = "Association for Computing Machinery, CSULB";
    const acmDate = "May 2019 - Present";
    const acmDesc =
      "As the Lead Webmaster for ACM, I created the association’s official"+
      " website as well as the BeachHacks 2020 website using HTML, CSS, and React."+
      " I also assign developmental tasks to other webmasters to add new functional"+
      " features to each website.";
    const acm = this.createExperience("Lead Webmaster", acmDesc, acmDate, acmLoc);

    const cecsLoc = "Introduction to Programming and Problem Solving, CSULB"
    const cecsDate = "Jan 2019 - May 2019";
    const cecsDesc =
      "During my time as an Instructional Student Assistant, I led 2 classes per week"+
      " of up to 30 students to assist students with their lab assignments."+
      " I also evaluated students’ laboratory and homework assignments"+
      " to provide constructive feedback on good programming practice.";      
    const cecs = this.createExperience(
      "CSULB Instructional Student Assistant",
      cecsDesc,
      cecsDate,
      cecsLoc
    );

    return (
      <div id="experience" className="section">
        {title}
        <div id="exp-items">
            {sharkLab}
            {acm}
            {cecs}
        </div>
      </div>
    );
  }
}
