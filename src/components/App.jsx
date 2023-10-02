import React from "react";
import Navbar from "./Navbar";
import LandingComponent from "./LandingComponent";
import Features from "./Features";
import "../styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingComponent />
        <Features />
      </main>
    </>
  );
}

export default App;
