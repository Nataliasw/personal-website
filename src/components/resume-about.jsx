import React, { useState } from "react";

const About = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  return (
    <div className={click ? "resume__container--resize resume__container resume__container-about" : "resume__container resume__container-about"}>
      <div>
        <h3 className="heading__resume">Get to know me</h3>
        <button className="resume__button" onClick={handleClick}><i className={click ? "resume__icon--up fas fa-angle-double-down" : "resume__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>
      {click && <div className={click && "resume__paragraph--appear"}>
        <p className=" resume__paragraph resume__paragraph--1">A Poznan University of Technology graduate, with several years of experience in Customer Service sector. Always interested in designing and creating, I decided to change my job. I have been actively learning programming languages and the basics of programming for six months, which allowed me to create my first small projects. I am a very thorough and pragmatic person, but also detail- and customer-oriented worker. </p>
        <p className="resume__paragraph resume__paragraph--2">📚 &nbsp; &nbsp; I enjoy reading about history and human nutrition.</p>
        <p className="resume__paragraph resume__paragraph--2">✈️ &nbsp; &nbsp; My favourite holiday destination is Croatia. </p>
        <p className="resume__paragraph resume__paragraph--2">🥗 &nbsp; &nbsp; In my free time I most likely be cooking or eating out! </p>
      </div>}
    </div>

  )


};


export default About;
