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
      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">
                &nbsp;
              </div>

              <div class="card__details">
                <span>Website where you can search book by title from NY Times Bestsellers database.</span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__link">
                  <p class="card__link-heading">See the Booksearcher project</p>
                </div>
                <a href="https://nataliasw.github.io/booksearcher-app/" target="_blank" class="btn btn--white card__button">Click!</a>
              </div>
            </div>
          </div>

        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">
                &nbsp;
              </div>

              <div class="card__details">
                <span>Website for writing and executing your code on the go.</span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__link">
                  <p class="card__link-heading">See the Preview Pack</p>
                </div>
                <a href="https://nataliasw.github.io/preview-pack/" target="_blank" class="btn btn--white card__button">Click!</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">
                &nbsp;
              </div>

              <div class="card__details">
                <span>Website that helps you pick maps extenstions for Talisman board game.</span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__link">
                  <p class="card__link-heading">See the Maps Draw project</p>
                </div>
                <a href="https://github.com/Nataliasw/Maps-draw-Talisman" target="_blank" class="btn btn--white card__button">Click!</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Projects;