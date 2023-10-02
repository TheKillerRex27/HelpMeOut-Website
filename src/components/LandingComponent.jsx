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
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="install-button">
          <a href="#">
            Install HelpMeOut <img src={arrow} />
          </a>
        </button>
      </div>
      <div className="picture-grid">
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
      </div>
    </section>
  );
}

export default LandingComponent;
