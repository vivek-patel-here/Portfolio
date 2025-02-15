import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
