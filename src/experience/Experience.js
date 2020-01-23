import React from "react";

export class Experience extends React.Component {
  createExperience(title, description, date, location) {
    const id = "exp-" + title;
    const item = (
      <div id={id} className="exp-item">
        <div class="exp-title">{title}</div>
        <div class="exp-loc">{location}</div>
        <div class="exp-date">{date}</div>
        <div class="exp-desc">{description}</div>
      </div>
    );
    return item;
  }

  render() {
    const title = (
      <div id="exp-title" className="section-title">
        Experience
      </div>
    );

    const sharkLabLoc = "Shark Lab, CSULB";
    const sharkLabDate = "Oct 2019 - Present";
    const sharkLabDesc =
      "Mauris consequat pellentesque purus nec finibus." +
      "Donec pretium massa in nisl tempus scelerisque. " +
      "Sed scelerisque nibh interdum elit faucibus condimentum.";
    const sharkLab = this.createExperience(
      "Webmaster & Programming Assistant",
      sharkLabDesc,
      sharkLabDate,
      sharkLabLoc
    );

    const acmLoc = "Association for Computing Machinery, CSULB";
    const acmDate = "May 2019 - Present";
    const acmDesc =
      "Mauris consequat pellentesque purus nec finibus." +
      "Donec pretium massa in nisl tempus scelerisque. " +
      "Sed scelerisque nibh interdum elit faucibus condimentum.";
    const acm = this.createExperience("Lead Webmaster", acmDesc, acmDate, acmLoc);

    const cecsLoc = "Introduction to Programming and Problem Solving, CSULB"
    const cecsDate = "Jan 2019 - May 2019";
    const cecsDesc =
      "Mauris consequat pellentesque purus nec finibus." +
      "Donec pretium massa in nisl tempus scelerisque. " +
      "Sed scelerisque nibh interdum elit faucibus condimentum.";
    const cecs = this.createExperience(
      "CSULB Instructional Student Assistant",
      cecsDesc,
      cecsDate,
      cecsLoc
    );

    return (
      <div id="experience" class="section">
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
