import React from "react";
import Navbar from "./Navbar";
import LandingComponent from "./LandingComponent";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
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
      <Footer />
    </>
  );
}

export default App;
