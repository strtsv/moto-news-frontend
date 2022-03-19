import React from "react";
import $ from "jquery";
import Swiper from "swiper";

import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/jquery.ui.totop.my.js";
import "../assets/js/parallax.js";

import i1 from "../assets/images/logo-default-296x92.png";
import i2 from "../assets/images/logo-inverse-296x92.png";

import s1 from "../assets/images/home-01-1783x778.jpg";
import s2 from "../assets/images/home-02-1783x778.jpg";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
    });
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  render() {
    return (
      <header className="section page-header page-header-2 section-custom-1-ally bg-secondary">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-creative rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="95px"
            data-xl-stick-up-offset="95px"
            data-xxl-stick-up-offset="95px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap, .rd-navbar-toggle-element"
                  >
                    <span className="rd-navbar-toggle-inner">
                      <span className="rd-navbar-toggle-element">
                        <span />
                      </span>
                      <span className="rd-navbar-toggle-text">Menu</span>
                    </span>
                  </button>
                  {}
                  <div className="rd-navbar-brand">
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
                  </div>
                </div>
                <div className="rd-navbar-aside-outer">
                  <button
                    className="rd-navbar-aside-toggle"
                    data-multitoggle="#rd-navbar-aside"
                    aria-label="Aside Toggle"
                  >
                    <span />
                  </button>
                  <div className="rd-navbar-aside" id="rd-navbar-aside">
                    <ul className="rd-navbar-aside-list">
                      <li>
                        <ul className="list-inline list-inline-md">
                          <li>
                            <a
                              className="link-2 icon mdi mdi-instagram"
                              href="#"
                            />
                          </li>
                          <li>
                            <a
                              className="link-2 icon mdi mdi-facebook"
                              href="#"
                            />
                          </li>
                          <li>
                            <a
                              className="link-2 icon mdi mdi-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        {}
                        <div className="rd-navbar-search">
                          <button
                            className="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                            data-rd-navbar-toggle=".rd-navbar-search"
                          >
                            <span />
                          </button>
                          <form
                            className="rd-search"
                            action="search-results.html"
                            data-search-live="rd-search-results-live"
                            method="GET"
                          >
                            <div className="form-wrap">
                              <label
                                className="form-label"
                                htmlFor="rd-navbar-search-form-input"
                              >
                                Search
                              </label>
                              <input
                                className="rd-navbar-search-form-input form-input"
                                id="rd-navbar-search-form-input"
                                type="text"
                                name="s"
                                autoComplete="off"
                              />
                              <div
                                className="rd-search-results-live"
                                id="rd-search-results-live"
                              />
                            </div>
                            <button
                              className="rd-search-form-submit mdi mdi-magnify"
                              type="submit"
                            />
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rd-navbar-nav-wrap">
                {}
                <ul className="rd-navbar-nav">
                  <li className="rd-nav-item active">
                    <a className="rd-nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="rd-nav-item">
                    <a className="rd-nav-link" href="news.html">
                      News
                    </a>
                    {}
                    <ul className="rd-menu rd-navbar-dropdown">
                      <li className="rd-dropdown-item">
                        <a className="rd-dropdown-link" href="single-post.html">
                          Single Post
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="rd-nav-item">
                    <a className="rd-nav-link" href="#">
                      Bike Reviews
                    </a>
                    {}
                    <ul className="rd-menu rd-navbar-dropdown">
                      <li className="rd-dropdown-item">
                        <a
                          className="rd-dropdown-link"
                          href="bike-reviews.html"
                        >
                          Bike Reviews
                        </a>
                      </li>
                      <li className="rd-dropdown-item">
                        <a
                          className="rd-dropdown-link"
                          href="bike-reviews-2.html"
                        >
                          Bike Reviews 2
                        </a>
                      </li>
                      <li className="rd-dropdown-item">
                        <a
                          className="rd-dropdown-link"
                          href="single-review.html"
                        >
                          Single Review
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="rd-nav-item">
                    <a className="rd-nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="rd-nav-item">
                    <a className="rd-nav-link" href="#">
                      Pages
                    </a>
                    {}
                    <ul className="rd-menu rd-navbar-megamenu">
                      <li className="rd-megamenu-item">
                        <p className="rd-megamenu-title">Elements</p>
                        <div className="rd-megamenu-block">
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="typography.html"
                              >
                                Typography
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="buttons.html"
                              >
                                Buttons
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="forms.html"
                              >
                                Forms
                              </a>
                            </li>
                          </ul>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="icon-lists.html"
                              >
                                Icon Lists
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="counters-and-accordions.html"
                              >
                                Counters & Accordions
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="rd-megamenu-item">
                        <p className="rd-megamenu-title">Pages</p>
                        <div className="rd-megamenu-block">
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="our-team.html"
                              >
                                Our Team
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="contact-us.html"
                              >
                                Contact Us
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="gallery.html"
                              >
                                Gallery
                              </a>
                            </li>
                          </ul>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="404-page.html"
                              >
                                404 Page
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="coming-soon.html"
                              >
                                Coming Soon
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="privacy-policy.html"
                              >
                                Privacy policy
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="search-results.html"
                              >
                                Search results
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {}
        <section
          className="section swiper-container swiper-slider"
          data-loop="true"
          data-autoplay={4756}
          data-simulate-touch="false"
          data-direction="horizontal"
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              data-slide-bg={s1}
              style={{
                backgroundImage: "url(" + s1 + ")",
              }}
            >
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                      <h1
                        data-caption-animate="fadeInUp"
                        data-caption-delay={100}
                      >
                        MotoGP Aragon: Expectations
                      </h1>
                      <h4
                        className="title-modern"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={200}
                      >
                        June 24, 2019
                      </h4>
                      <p
                        className="big text-white-7"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={300}
                      >
                        Monster Energy factory Yamaha MotoGP rider
                        <br className="d-none d-xl-block" /> Valentino Rossi
                        admitted that he expected to...
                      </p>
                      <div
                        className="button-wrap"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={400}
                      >
                        <a
                          className="button button-primary"
                          href="single-post.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-slide-bg={s2}
              style={{
                backgroundImage: "url(" + s2 + ")",
              }}
            >
              <div className="swiper-slide-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                      <h1
                        data-caption-animate="fadeInUp"
                        data-caption-delay={100}
                      >
                        Assen BSB: Crash Disappointment
                      </h1>
                      <h4
                        className="title-modern"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={200}
                      >
                        June 25, 2019
                      </h4>
                      <p
                        className="big text-white-7"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={300}
                      >
                        Oxford Racing Ducati’s Tommy Bridewell bounced
                        <br className="d-none d-xl-block" /> straight back on to
                        the Assen Bennetts British...
                      </p>
                      <div
                        className="button-wrap"
                        data-caption-animate="fadeInUp"
                        data-caption-delay={400}
                      >
                        <a
                          className="button button-primary"
                          href="single-post.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="swiper-pagination" />
          {}
          <div className="swiper-button-prev">
            <svg
              width={16}
              height={18}
              viewBox="0 0 16 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M0.499999 9.86602C-0.166668 9.48112 -0.166667 8.51887 0.499999 8.13397L14 0.339744C14.6667 -0.0451553 15.5 0.435968 15.5 1.20577L15.5 16.7942C15.5 17.564 14.6667 18.0452 14 17.6603L0.499999 9.86602Z" />
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg
              width={16}
              height={18}
              viewBox="0 0 16 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z" />
            </svg>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
