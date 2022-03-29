import React from "react";

import i1 from "../../assets/images/home-03-270x273.jpg";
import i2 from "../../assets/images/home-04-270x273.jpg";
import i3 from "../../assets/images/home-05-270x273.jpg";
import i4 from "../../assets/images/home-06-270x273.jpg";

class PopularReviews extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <div className="layout-2 wow fadeIn">
            <h3>Popular bike Reviews</h3>
            <div className="layout-2-item">
              <a
                className="button button-sm button-style-1"
                href="bike-reviews-2.html"
              >
                View All
              </a>
            </div>
          </div>
          <div className="row row-30 mt-xl-70">
            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn">
              <article className="tour-minimal context-dark">
                <div
                  className="tour-minimal-inner"
                  style={{
                    backgroundImage: "url(" + i1 + ")",
                  }}
                >
                  <div className="tour-minimal-header">
                    <div className="tour-minimal-badge">News</div>
                  </div>
                  <div className="tour-minimal-main">
                    <div className="tour-minimal-title">
                      <a href="single-review.html">
                        2020 KTM 300 XC TPI First Ride Review
                      </a>
                    </div>
                  </div>
                  <div className="tour-minimal-caption">
                    <p>For 2020, the Austrian manufacturer has added its...</p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
              data-wow-delay=".05s"
            >
              <article className="tour-minimal context-dark">
                <div
                  className="tour-minimal-inner"
                  style={{
                    backgroundImage: "url(" + i2 + ")",
                  }}
                >
                  <div className="tour-minimal-header">
                    <div className="tour-minimal-badge">Review</div>
                  </div>
                  <div className="tour-minimal-main">
                    <div className="tour-minimal-title">
                      <a href="single-review.html">
                        Royal Enfield Continental GT 650
                      </a>
                    </div>
                  </div>
                  <div className="tour-minimal-caption">
                    <p>
                      An all-new 648cc air & oil-cooled parallel twin is...{" "}
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
              data-wow-delay=".05s"
            >
              <article className="tour-minimal context-dark">
                <div
                  className="tour-minimal-inner"
                  style={{
                    backgroundImage: "url(" + i3 + ")",
                  }}
                >
                  <div className="tour-minimal-header">
                    <div className="tour-minimal-badge">Review</div>
                  </div>
                  <div className="tour-minimal-main">
                    <div className="tour-minimal-title">
                      <a href="single-review.html">
                        Harley-Davidson <br /> Low Rider S
                      </a>
                    </div>
                  </div>
                  <div className="tour-minimal-caption">
                    <p>
                      The biggest improvement to the Low Rider S over the...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
              data-wow-delay=".1s"
            >
              <article className="tour-minimal context-dark">
                <div
                  className="tour-minimal-inner"
                  style={{
                    backgroundImage: "url(" + i4 + ")",
                  }}
                >
                  <div className="tour-minimal-header">
                    <div className="tour-minimal-badge">Review</div>
                  </div>
                  <div className="tour-minimal-main">
                    <div className="tour-minimal-title">
                      <a href="single-review.html">
                        2020 Yamaha <br /> YZF-R1
                      </a>
                    </div>
                  </div>
                  <div className="tour-minimal-caption">
                    <p>R1 owners are now able to choose between two... </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PopularReviews;
