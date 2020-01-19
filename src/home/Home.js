import React from "react";
import "./Home.css";

export class Home extends React.Component {
  render() {
    const hand = <div id="home-hand">&#128075;</div>;
    const title = <div class="home-title">Hello!</div>;
    const name = (
      <div class="home-title">
        My name is <span id="home-name">Chanel Mendoza</span>.
      </div>
    );
    const desc = (
      <div class="home-desc">I am an aspiring <span id="home-job">software engineer</span>.</div>
    );
    const contactBtn = <button>Get in Touch</button>;
    return (
      <div id="home" class="section">
        {hand}
        <div id="home-right">
          {title}
          {name}
          {desc}
          {contactBtn}
        </div>
      </div>
    );
  }
}
