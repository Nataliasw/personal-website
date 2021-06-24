import React from "react";
import "./css/style.css";
import About from "./components/about";
import Navigation from "./components/navigation";
import Projects from "./components/projects";
import Resume from "./components/resume";

const App = () => {
  return (
    <div>
      <Navigation>
      </Navigation>
      <section className="section--1">
        <About>
        </About>
      </section>
      <section className="section--2">
        <Projects>
        </Projects>
      </section>
      <section className="section--3">
        <Resume>
        </Resume>
      </section>
    </div>
  )
}
export default App;