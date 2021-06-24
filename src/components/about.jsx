import React from "react";

const About = () => {
  return (
    <div className="section__about">
      <i class="fas fa-angle-double-down about__icon about__icon--1"></i>
      <div className="about__container">
        <span className="about__name">N</span>
        <span className="about__name">a</span>
        <span className="about__name">t</span>
        <span className="about__name">a</span>
        <span className="about__name">l</span>
        <span className="about__name">i</span>
        <span className="about__name">a</span>
        <span className="about__name">&nbsp;</span>
        <span className="about__name">S</span>
        <span className="about__name">.</span>
        <a href="#project" className="about__button" onClick="return false">Scroll down &darr;</a>
        <i class="fas fa-angle-double-down about__icon about__icon--2"></i>
      </div>

    </div>
  )
};

export default About;