import React from "react";
import Navbar from "./Navbar";
import LandingComponent from "./LandingComponent";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import "../styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingComponent />
        <Features />
        <HowItWorks />
      </main>
    </>
  );
}

export default App;
