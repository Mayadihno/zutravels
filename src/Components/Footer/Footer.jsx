import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__copyright">
            <h3>Copyright ZuTravels</h3>
          </div>
          <div className="footer__links">
            <p>
              <a href="#/" className="active">
                Home
              </a>
            </p>
            <p>
              <a href="#/">About</a>
            </p>
            <p>
              <a href="#/">Stories</a>
            </p>
            <p>
              <a href="#/">Book</a>
            </p>
            <p>
              <a href="#/">Contact</a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
