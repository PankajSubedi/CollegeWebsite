import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/contacts.css";

import image from "../assets/image.jpg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";
import insta from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";

function Contact() {
  const [state, handleSubmit] = useForm("xoqoeoej");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div id="contact" className="contactWrapper">
      <div className="contactTop">
        <h1>Contact</h1>
      </div>

      <div className="contactContainer">
        <div className="image-container">
          <img src={image} alt="Your Image" />
          <div className="contactDetails">
            <h1>Contact Information</h1>
            <p>
              Fill up form and our team will get back to you within 24 hours.
            </p>
            <div className="ctaContainer">
              <div className="cta">
                <img src={phone} />
                <h1>+977 9805473281</h1>
              </div>
              <div className="cta">
                <img src={mail} />
                <h1>example@gmail.com</h1>
              </div>
              <div className="cta">
                <img src={location} />
                <h1>ghorahi, Dang</h1>
              </div>
            </div>

            <div className="contactSocial">
              <img src={facebook} />
              <img src={insta} />
            </div>
          </div>
        </div>

        <div className="contactForm">
          <div className="contactField">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xoqoeoej"
              method="POST"
              className="contactInput"
            >
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                cols={30}
                rows={6}
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <input type="submit" value="Send" disabled={state.submitting} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
