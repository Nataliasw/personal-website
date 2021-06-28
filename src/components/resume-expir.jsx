import React, { useState } from "react";

const Expirence = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  return (
    <div className={click ? "resume__container--resize resume__container resume__container-about" : "resume__container resume__container-about"}>
      <div>
        <h3 className="heading__resume">Employment History</h3>
        <button className="resume__button" onClick={handleClick}><i className={click ? "resume__icon--up fas fa-angle-double-down" : "resume__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>

      {click && <div className={click && "resume__paragraph--appear"}>
        <div className="resume__expir-container">
          <div className="row resume__expir">

            <div className="col-2-of-3 "><h4 className="resume__expir-title"><span className="resume__expir-bold">Customer Manage Exchange Serivce Specialist</span> CHEP Polska </h4>
              <p>
                <ul className="resume__expir-list">
                  <li className="resume__expir-item">
                    Managing customer accounts (medium and large companies from FMCG sector) and maintaining every contact with clients.
                  </li>
                  <li>
                    Processing and analizing data related to pallets pooling and its cost, authoring and presenting reports and presentations.
                  </li>
                  <li>
                    Analizing customer invoices in terms of their corectness.
                  </li>
                </ul>
              </p>
            </div>


            <div className="col-1-of-3 resume__expir-span">
              Warsaw 03.2020-11.2020
            </div>
          </div>
        </div>

        <div className="resume__expir-container">
          <div className="row resume__expir">

            <div className="col-2-of-3 "><h4 className="resume__expir-title"><span className="resume__expir-bold">Technology Department Intern</span> Midroc Alucrom </h4>
              <p>
                <ul className="resume__expir-list">
                  <li className="resume__expir-item">
                    Participating in quality control and quality managment systems courses.
                  </li>
                  <li className="resume__expir-item">
                    Perfoming administrative duties.
                  </li>
                </ul>
              </p>
            </div>


            <div className="col-1-of-3 resume__expir-span">
              Debska Wola 08.2018 - 09.2018 <br></br> and 07.2019 - 08.2019
            </div>
          </div>
        </div>

        <div className="resume__expir-container">
          <div className="row resume__expir">

            <div className="col-2-of-3 "><h4 className="resume__expir-title"><span className="resume__expir-bold">Sales Assistant</span> New Look Polska</h4>
              <p>
                <ul className="resume__expir-list">
                  <li className="resume__expir-item">
                    Cash register and convoy handling, prepering deliveries and necessary documents.
                  </li>

                </ul>
              </p>
            </div>


            <div className="col-1-of-3 resume__expir-span">
              Poznan 12.2017 - 10.2018
            </div>
          </div>
        </div>


        <div className="resume__expir-container">
          <div className="row resume__expir">

            <div className="col-2-of-3 "><h4 className="resume__expir-title"><span className="resume__expir-bold">Food and Beverage Assistant</span> Hilton Worldwide Hotels</h4>

            </div>


            <div className="col-1-of-3 resume__expir-span">
              Scotland 06.2016 - 09.2016 <br></br> and 07.2017 - 09.2017
            </div>
          </div>
        </div>



      </div>}
    </div >

  )


};


export default Expirence;