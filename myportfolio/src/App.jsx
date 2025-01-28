//jai siya Ram
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Project/Project.jsx";
import Skill from "./components/Skills/Skill.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Home />
        <hr />
        <About />
        <hr />
        <Project/>
        <hr />
        <Skill/>
        <hr />
        <Contact/>
      </div>
    </>
  );
}

export default App;
