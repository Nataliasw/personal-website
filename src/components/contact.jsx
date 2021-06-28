import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_rpuo4tn", "template_wd2dmqg", e.target, "user_h759UYyvhnWxd9ERV97C4")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }




  return (
    <div className="section__contact" id="contact">
      <h2 className="heading__projects heading__projects--2">
        <span className="heading__projects--letter">C</span>
        <span className="heading__projects--letter">o</span>
        <span className="heading__projects--letter">n</span>
        <span className="heading__projects--letter">t</span>
        <span className="heading__projects--letter">a</span>
        <span className="heading__projects--letter">c</span>
        <span className="heading__projects--letter">t</span>
        <span className="heading__projects--letter">&nbsp;</span>
        <span className="heading__projects--letter">m</span>
        <span className="heading__projects--letter">e</span>
      </h2>
      <div className="contact__container">
        <form onSubmit={sendEmail} className="contact__form">
          <div className="contact__container-top">
            <input type="text" className="contact__input " placeholder="Name" name="name" required={true}></input>
            <img src="../images/envelope.png" className="contact__image" alt="evelope doodle"></img>
            <i className="fab fa-earlybirds contact__icon"></i>
          </div>
          <div>
            <input type="email" className="contact__input " placeholder="Email" name="email" required={true}></input>
          </div>
          <div>
            <input type="text" className="contact__input " placeholder="Subject" name="subject" required={true}></input>
          </div>
          <div className="contact__message">

            <textarea className="contact__input " cols="70" rows="8" placeholder="Your message" name="message" required={true}></textarea>
            <input type="submit" className="contact__button social__btn" value="&raquo; Send message &laquo;" onClick="return false"></input>
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>
  )
};

export default Contact;