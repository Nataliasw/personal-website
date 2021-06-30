import React from "react";
import "../css/style.css";


const Projects = () => {
  return (
    <div className="section__projects" id="project">
      <h2 className="heading__projects">
        <span className="heading__projects--letter">P</span>
        <span className="heading__projects--letter">r</span>
        <span className="heading__projects--letter">o</span>
        <span className="heading__projects--letter">j</span>
        <span className="heading__projects--letter">e</span>
        <span className="heading__projects--letter">c</span>
        <span className="heading__projects--letter">t</span>
        <span className="heading__projects--letter">s</span>
      </h2>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp;
              </div>

              <div className="card__details">
                <span>Website where you can search book by title from NY Times Bestsellers database.</span>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__link">
                  <p className="card__link-heading">See the Booksearcher project</p>
                </div>
                <a href="https://nataliasw.github.io/booksearcher-app/" target="_blank" rel="noreferrer" className="btn btn--white card__button">Click!</a>
              </div>
            </div>
          </div>

        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp;
              </div>

              <div className="card__details">
                <span>Website for writing and executing your code on the go.</span>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__link">
                  <p className="card__link-heading">See the Preview Pack</p>
                </div>
                <a href="https://nataliasw.github.io/preview-pack/" target="_blank" rel="noreferrer" className="btn btn--white card__button">Click!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
                &nbsp;
              </div>

              <div className="card__details">
                <span>Website that helps you pick maps extenstions for Talisman board game.</span>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__link">
                  <p className="card__link-heading">See the Maps Draw project</p>
                </div>
                <a href="https://github.com/Nataliasw/Maps-draw-Talisman" target="_blank" rel="noreferrer" className="btn btn--white card__button">Click!</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="card__icon-container">
        <p className="card__icon-paragraph">See all projects at</p> <a href="https://github.com/Nataliasw/" className="card__icon-link" target="_blank" ><i className="fab fa-github-square card__icon-github"></i></a>
      </div>
    </div>
  )

}


export default Projects;