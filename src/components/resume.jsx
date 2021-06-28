import React, { useState } from "react";

import sample from "../pdf/certificate.pdf";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core';


//Parts of resume components
import About from "./resume-about";
import Skills from "./resume-skills";
import Certificate from "./certificates";
import Expirience from "./resume-expir";


const Resume = () => {

  const [defaultPdf] = useState(sample);
  const [toggle, setToggle] = useState(false);




  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleToggle = () => {
    setToggle(prevValue => {
      return !prevValue
    })
  };


  return (
    <div className="section__resume" id="resume">
      <div className="resume__container-top">
        <h2 className="heading__projects heading__projects--2">
          <span className="heading__projects--letter">R</span>
          <span className="heading__projects--letter">e</span>
          <span className="heading__projects--letter">s</span>
          <span className="heading__projects--letter">u</span>
          <span className="heading__projects--letter">m</span>
          <span className="heading__projects--letter">e</span>
        </h2>

        {/* Pdf button toggle section */}

        <button onClick={handleToggle} className="resume__button-pdf">See short PDF version</button>
        {toggle && defaultPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdf}
            plugins={[defaultLayoutPluginInstance]} />
        </Worker></>}

      </div>

      <About></About>
      <Skills></Skills>
      <Certificate></Certificate>
      <Expirience></Expirience>
      {/* Pdf button toggle section

      <button onClick={handleToggle}>See the PDF</button>
      {toggle && defaultPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdf}
          plugins={[defaultLayoutPluginInstance]} />
      </Worker></>} */}

    </div>
  )
};

export default Resume;