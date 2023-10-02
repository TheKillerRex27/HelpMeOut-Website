import React from "react";
import arrow from "../assets/install-arrow.svg";
import photo1 from "../assets/stock-photo-1.png";
import photo2 from "../assets/stock-photo-2.png";
import photo3 from "../assets/stock-photo-3.png";
import "../styles/LandingComponent.css";

function LandingComponent() {
  return (
    <section className="landing">
      <div>
        <h1 className="landing-title">
          Show Them <br /> Don't Just Tell
        </h1>
        <p className="landing-text">
          Help your friends and loved ones by creating and sending <br /> videos
          on how to get things done on a website.
        </p>
        <button className="install-button">
          <a href="https://drive.google.com/file/d/1M5ftDFkNvPFziW74z_EfBs21tBOX32Y5/view?usp=sharing">
            Install HelpMeOut <img src={arrow} />
          </a>
        </button>
      </div>
      <div className="picture-grid">
        <div className="first-child">
          <img src={photo1} />
          <img src={photo2} />
        </div>
        <img src={photo3} />
      </div>
    </section>
  );
}

export default LandingComponent;
