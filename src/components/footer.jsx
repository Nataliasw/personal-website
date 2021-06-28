import React from "react";

const Footer = () => {

  const today = new Date();

  return (
    <div className="section__footer">
      <div className="footer__container">
        <p className="footer__text">
          Copyright Natalia S. {today.getFullYear()}
        </p>
      </div>
    </div>
  )
};


export default Footer;