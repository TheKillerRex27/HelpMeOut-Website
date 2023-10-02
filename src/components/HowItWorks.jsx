import React from "react";
import Rec from "../assets/REC.png";
import '../styles/HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div>
        <h3 className="title">How it works</h3>
      </div>
      <div className="steps">
        <div className="step">
          <div className="step-num">1</div>
          <h4>Record Screen</h4>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={Rec} />
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <h4>Share Your Recording</h4>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <img src={Rec} />
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <h4>Learn Effortlessly</h4>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <img src={Rec} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
