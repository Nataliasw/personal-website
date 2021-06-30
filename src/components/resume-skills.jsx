import React, { useState } from "react";

const Skills = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  return (
    <div className={click ? "resume__container--resize resume__container resume__container-about" : "resume__container resume__container-about"}>
      <div>
        <h3 className="heading__resume">Skills</h3>
        <button className="resume__button" onClick={handleClick}><i className={click ? "resume__icon--up fas fa-angle-double-down" : "resume__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>

      {click && <div className={click && "resume__paragraph--appear"}>

        {/* Programming skills */}
        <h4 className="heading__resume-skill">Programming/Development</h4>
        <ul className="resume__skill-list">
          <li className="resume__skill-item"><span className="resume__skill-bold-1">JavaScript</span> - abilty to write code in ES6 standard. Ablity to use and build websites with frameworks: <span className="resume__skill-bold">React, Node.js, Redux, jQuery, Ejs, Typescript.</span></li>
          <li className="resume__skill-item"><span className="resume__skill-bold-1">CSS</span> - building styling and animations for websites. Ability to use <span className="resume__skill-bold">Sass, Bootstrap and Bulma</span>for design.</li>
          <li className="resume__skill-item"><span className="resume__skill-bold-1">GIT</span> - knowlege of basic commands: adding, commiting with description, pushing projects in Github and updating it, creating new branches.</li>

        </ul>

        {/* Programs skills */}

        <h4 className="heading__resume-skill">Programs</h4>
        <ul className="resume__skill-list">
          <li className="resume__skill-item"><span className="resume__skill-bold">MS Power BI</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">MS Visio</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">MS Excel</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">MS Teams</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">MathCAD</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">AutoCAD</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">MS PowerPoint</span> </li>
          <li className="resume__skill-item"><span className="resume__skill-bold">Procreate</span> </li>
        </ul>

        <h4 className="heading__resume-skill">Languages</h4>
        <ul className="resume__skill-list">
          <li className="resume__skill-item"><span className="resume__skill-bold-1">English</span> - C1</li>
          <li className="resume__skill-item"><span className="resume__skill-bold-1">German</span> - B1 </li>
        </ul>
      </div>}
    </div>

  )


};


export default Skills;