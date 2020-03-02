import React from "react";

export class Contact extends React.Component {
  render() {
    const mailbox = (
      <div id="mailbox" className="large-emoji">
        &#128238;
      </div>
    );
    const title = <div className="home-title">Get in touch!</div>;
    const desc = <div className="desc">Want to work together, say hello, or just chat?</div>;
    const sentence = <div className="desc">Send me an e-mail and I'll get back to you as soon as possible!</div>
    const contactBtn = (
      <button id="contact-btn" className="btn">
        <a href="mailto:chanelmdza@gmail.com">Send an E-mail</a>
      </button>
    );

    return (
      <div id="contact" className="section">
        {mailbox}
        <div id="flex-right">
          {title}
          {desc}
          {sentence}
          {contactBtn}
        </div>
      </div>
    );
  }
}
