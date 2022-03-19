import React from "react";

import i1 from "../assets/images/logo-default-296x92.png";
import i2 from "../assets/images/logo-inverse-296x92.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic footer-classic-md bg-secondary">
        <div className="footer-classic-main">
          <div className="container">
            <div className="row row-40 justify-content-between">
              <div className="col-xl-4 col-lg-5 col-md-5 col-sm-10">
                <a className="brand" href="index.html">
                  <img
                    className="brand-logo-dark"
                    src={i1}
                    alt
                    width={148}
                    height={46}
                  />
                  <img
                    className="brand-logo-light"
                    src={i2}
                    alt
                    width={148}
                    height={46}
                  />
                </a>
                <h4>About Us</h4>
                <p className="text-white-7">
                  Moto is the biggest motorcycle-racing only website in the USA
                  and beyond. We are the destination for more than half a
                  million visitors every month.
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-xs-6 footer-classic-item-block-1">
                <h5 className="footer-classic-title">Navigation</h5>
                <ul className="list-marked-2 list-sm">
                  <li>
                    <a href="#">Featured News</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="our-team.html">Our Team</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-xs-6 footer-classic-item-block-2">
                <h5 className="footer-classic-title">Get in Touch</h5>
                <ul className="list-sm">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contacts</a>
                  </li>
                </ul>
                <ul className="list-inline list-inline-md">
                  <li>
                    <a className="link-2 icon mdi mdi-instagram" href="#" />
                  </li>
                  <li>
                    <a className="link-2 icon mdi mdi-facebook" href="#" />
                  </li>
                  <li>
                    <a className="link-2 icon mdi mdi-youtube-play" href="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-0">
          <div className="divider-2" />
        </div>
        <div className="footer-classic-aside">
          <div className="container">
            <p className="rights">
              <span>© </span>
              <span className="copyright-year" />
              <span>.</span>
              <span> </span>
              <span>Moto</span>
              <span>. All rights reserved. </span>
              <a href="privacy-policy.html">Privacy Policy</a>
              <span>.</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
