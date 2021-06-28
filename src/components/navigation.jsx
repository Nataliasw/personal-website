import React from "react";
import "../css/style.css";


const Navigation = () => {
  return (
    <div className="navigation">

      <nav className="navigation__nav">

        <img src="images/computer.png" alt="computer logo" className="navigation__logo"></img>
        <h1 className="navigation__name">
          <span className="jumpy">N</span>
          <span className="jumpy">a</span>
          <span className="jumpy">t</span>
          <span className="jumpy">a</span>
          <span className="jumpy">l</span>
          <span className="jumpy">i</span>
          <span className="jumpy">a</span>
          <span className="jumpy">S</span>
          <span className="jumpy">.</span>
        </h1>
        <ul className="navigation__list">
          <li><a href="#project" className="navigation__link"><span>01</span>Projects</a></li>
          <li><a href="#resume" className="navigation__link"><span>02</span>Resume</a></li>
          <li><a href="#contact" className="navigation__link"><span>03</span>Contact me</a></li>
        </ul>
        <a href="#" className="navigation__icon" ><i className="fab fa-github-square navigation__icon--1"></i></a>
        <a href="#" className="navigation__icon"><i className="fab fa-linkedin navigation__icon--2"></i></a>

      </nav>
    </div>

  )
};

export default Navigation;

