import React from "react";
import FeatureDemo from "../assets/feature-demo.png";
import Record from "../assets/record-circle.svg";
import Share from "../assets/bold-send.svg";
import Refresh from "../assets/refresh-square.svg";
import "../styles/Features.css";

function Features() {
  return (
    <section className="features">
      <div className="features-title">
        <h2>Features</h2>
        <p>Key Highlights of Our Extension</p>
      </div>
      <div className="features-display">
        <div>
          <div className="feature">
            <div className="img-container">
              <img src={Record} />
            </div>
            <div>
              <h3>Simple Screen Recording</h3>
              <p className="feature-desc">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="img-container">
              <img src={Share} />
            </div>
            <div>
              <h3>Easy-to-Share URL</h3>
              <p className="feature-desc">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="img-container">
              <img src={Refresh} />
            </div>
            <div>
              <h3>Revisit Recordings</h3>
              <p className="feature-desc">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <img src={FeatureDemo} />
      </div>
    </section>
  );
}

export default Features;
