import React from "react";
import "../css/footer.css";
import insta from "../assets/inst.svg";
import twitter from "../assets/twitter.svg";
import web from "../assets/web.svg";
import fb from "../assets/fb.svg";
import location from "../assets/locat.svg";
import phone from "../assets/phn.svg";
import mail from "../assets/ctamail.svg";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContents">
        <div className="collegeInfo">
          <h1>Mahendra</h1>
          <p1>
            Empowering Minds, Transforming<br></br>Futures. Welcome to
            Excellence!
          </p1>
          <div className="collegeSocial">
            <img src={fb} />
            <img src={insta} />
            <img src={twitter} />
            <img src={web} />
          </div>
        </div>

        <div className="linksContainer">
          <div className="quickLink">
            <h1>Quick Links</h1>
            <a href="#">· Home</a>
            <a href="#about">· About</a>
            <a href="#events">· Events</a>
            <a href="#contact">· Contact</a>
            <a href="#courses">· Courses</a>
          </div>
          <div className="quickLink">
            <h1>Support</h1>
            <a>· Terms & Conditions</a>
            <a>· Help & Services</a>
            <a>· Privacy Policy</a>
            <a>· FAQs</a>
          </div>
          <div className="quickLink">
            <h1>Contact Info</h1>
            <div className="cta">
              <img src={phone} />
              <a>08345247</a>
            </div>
            <div className="cta">
              <img src={mail} />
              <a>example@gmail.com</a>
            </div>
            <div className="cta">
              <img src={location} />
              <a>Ghorahi, Dang</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="footerBreaker"></hr>
      <p>Copyright . All rights reserved</p>
    </div>
  );
}

export default Footer;
