import React from "react";
import "../css/style.css";
import sample from "../images/computer.png";

const Navigation = () => {
  return (
    <div className="navigation">

      <nav className="navigation__nav">

        <img src={sample} alt="computer logo" className="navigation__logo"></img>
        <h1 className="navigation__name">
          <span className="jumpy">N</span>
          <span className="jumpy">a</span>
          <span className="jumpy">t</span>
          <span className="jumpy">a</span>
          <span className="jumpy">l</span>
          <span className="jumpy">i</span>
          <span className="jumpy">a</span>
          <span className="jumpy">S</span>
          <span className="jumpy navigation__disapear">.</span>
        </h1>
        <ul className="navigation__list">
          <li className="navigation__list-item"><a href="#project" className="navigation__link"><span>01</span>Projects</a></li>
          <li className="navigation__list-item"><a href="#resume" className="navigation__link"><span>02</span>Resume</a></li>
          <li className="navigation__list-item"><a href="#contact" className="navigation__link"><span>03</span>Contact me</a></li>
        </ul>
        <div className="navigation__icon-container">
          <a href="https://github.com/Nataliasw/" className="navigation__icon" target="_blank" ><i className="fab fa-github-square navigation__icon--1"></i></a>
          <a href="https://www.linkedin.com/in/natalia-%C5%9Bwiercz-2bb66719b/" className="navigation__icon" target="_blank"><i className="fab fa-linkedin navigation__icon--2"></i></a>
        </div>

      </nav>
    </div>

  )
};

export default Navigation;

