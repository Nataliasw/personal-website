import React, { useState } from "react";
import certificate1 from "../pdf/certificate.pdf";
import certificate2 from "../pdf/certificate-2.pdf";

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core';

const Certificate = () => {

  const [firstPdf] = useState(certificate1);
  const [secondPdf] = useState(certificate2);
  const [toggleFirst, setToggle] = useState(false);
  const [toggleSecond, setToggleSecond] = useState(false);
  const [foldOne, setFoldOne] = useState(false);
  const [foldTwo, setFoldTwo] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleToggle = () => {
    setToggle(prevValue => {
      return !prevValue
    })
    setFoldOne(prevValue => {
      return !prevValue
    })
  };

  const handleToggleSecond = () => {
    setToggleSecond(prevValue => {
      return !prevValue
    })
    setFoldTwo(prevValue => {
      return !prevValue
    })

  };






  return (


    <div className={click ? "resume__container--resize resume__container resume__container-about" : "resume__container resume__container-about"}>
      <div>
        <h3 className="heading__resume">Education/ Certificates</h3>
        <button className="resume__button" onClick={handleClick}><i className={click ? "resume__icon--up fas fa-angle-double-down" : "resume__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>

      {click && <div className={click && "resume__paragraph--appear"}>
        <div className="resume__education resume__education-1">
          <ul className="resume__education-list">
            <li className="resume__education-item"><span className="resume__item-bold">Poznan University of Technology</span>2016-2020</li>
            <li className="resume__education-item"><span className="resume__item-bold">Chemistry and Process Engineering</span>Bachelor of Engineering</li>
          </ul>

        </div>

        <div className="resume__education resume__education-1">
          <ul className="resume__education-list">
            <li className="resume__education-item"><span className="resume__item-bold">The Complete 2021 Web Development Bootcamp (55h)</span>
              <button onClick={handleToggle} className="btn btn--white button__cert">{foldOne ? "Fold" : "See PDF"}</button>
              {toggleFirst && firstPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={firstPdf}
                  plugins={[defaultLayoutPluginInstance]} />
              </Worker></>}
            </li>
            <li className="resume__education-item"><span className="resume__item-bold">React and Typescript: Build a Portfolio Project (29.5h)</span>
              <button onClick={handleToggleSecond} className="btn btn--white button__cert">{foldTwo ? "Fold" : "See PDF"}</button>
              {toggleSecond && secondPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={secondPdf}
                  plugins={[defaultLayoutPluginInstance]} />
              </Worker></>}

            </li>
          </ul>

        </div>

      </div>}
    </div>

  )

};

export default Certificate;