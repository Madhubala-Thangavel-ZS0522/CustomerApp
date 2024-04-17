import React from "react";
import "./Footer.css";
import Logo from "/assets/CommonLogo.svg";
import googleplay from "/assets/googlepayclr.png";
import applestore from "/assets/applestoreclr.png";
import socialmedia from "/assets/Ellipse 60.svg";

const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb_footer_section_padding">
          <div className="sb_footer_links">
            <div className="sb_footer-links_div">
              <img src={Logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div className="sb_footer-links_div">
              <h4>Shop By Category</h4>
              <a href="/diary">
                <p>Diary</p>
              </a>
              <a href="/poultry">
                <p>Poultry</p>
              </a>
              <a href="/Seafood">
                <p>Sea Food</p>
              </a>
              <a href="/Vegetables">
                <p>Vegetables</p>
              </a>
              <a href="freshfruits">
                <p>Fresh Fruits</p>
              </a>
              <a href="flowers">
                <p>Flowers</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Quick Links</h4>
              <a href="/explorefarms">
                <p>Explore Farms</p>
              </a>
              <a href="/home">
                <p>Home</p>
              </a>
              <a href="/about us">
                <p>About us</p>
              </a>
              <a href="/faqs">
                <p>FAQs</p>
              </a>
              <a href="/sell withus">
                <p>Sell with us</p>
              </a>
              <a href="/privacypolicy">
                <p>Privacy Policy</p>
              </a>
              <a href="/termsandconditions">
                <p>Terms & conditions</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <a>
                <p>Login to your account</p>
              </a>
              <a>
                <p>Register with Us</p>
              </a>
              <div className="appstore">
                <a>
                  <img src={googleplay} alt="google-icon" />
                </a>
                <a>
                  <img src={applestore} alt="apple-icon" />
                </a>
              </div>
              <a>
                <p>Follow Us</p>
              </a>
              <div className="socialmedia">
                <p>
                  <img src={socialmedia} alt="" />
                </p>
                <p>
                  <img src={socialmedia} alt="" />
                </p>
                <p>
                  <img src={socialmedia} alt="" />
                </p>
                <p>
                  <img src={socialmedia} alt="" />
                </p>
              </div>
            </div>
            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>&copy; 2024. All rights are reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
