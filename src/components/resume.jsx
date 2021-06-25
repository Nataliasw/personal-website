import React, { useState } from "react";

import sample from "../pdf/certificate.pdf";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import About from "./resume-about";


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
    <div className="section__resume">
      <h2 className="heading__projects heading__projects--2">
        <span className="heading__projects--letter">R</span>
        <span className="heading__projects--letter">e</span>
        <span className="heading__projects--letter">s</span>
        <span className="heading__projects--letter">u</span>
        <span className="heading__projects--letter">m</span>
        <span className="heading__projects--letter">e</span>
      </h2>

      <About>
      </About>


      {/* Pdf button toggle section */}

      <button onClick={handleToggle}>See the PDF</button>
      {toggle && defaultPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdf}
          plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

    </div>
  )
};

export default Resume;