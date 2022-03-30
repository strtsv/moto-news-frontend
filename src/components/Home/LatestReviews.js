import React from "react";

import i1 from "../../assets/images/home-14-340x250.jpg";
import i2 from "../../assets/images/home-15-340x250.jpg";
import i3 from "../../assets/images/home-16-340x250.jpg";

class LatestReviews extends React.Component {
  render() {
    return (
      <section className="section section-md section-md-3 bg-default text-center">
        <div className="container">
          <h3 className="wow fadeIn">Latest Bike Reviews</h3>
          <div className="row row-xl-wide row-40 row-md-50 mt-xl-90">
            <div className="col-sm-6 col-lg-4 wow fadeIn">
              {}
              <article className="post-classic">
                <a className="post-classic-figure" href="single-post.html">
                  <img
                    className="post-classic-image"
                    src={i1}
                    alt
                    width={340}
                    height={250}
                  />
                </a>
                <time className="post-classic-time" dateTime={2019}>
                  january 15, 2019
                </time>
                <div className="post-classic-divider" />
                <p className="heading-4 post-classic-title">
                  <a href="single-post.html">
                    HRC WorldSBK switch ‘not an easy decision’ for Bautista
                  </a>
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay=".05s">
              {}
              <article className="post-classic">
                <a className="post-classic-figure" href="single-post.html">
                  <img
                    className="post-classic-image"
                    src={i2}
                    alt
                    width={340}
                    height={250}
                  />
                </a>
                <time className="post-classic-time" dateTime={2019}>
                  january 15, 2019
                </time>
                <div className="post-classic-divider" />
                <p className="heading-4 post-classic-title">
                  <a href="single-post.html">
                    MotoGP Aragon: We need more speed to fight for the podium
                  </a>
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay=".1s">
              {}
              <article className="post-classic">
                <a className="post-classic-figure" href="single-post.html">
                  <img
                    className="post-classic-image"
                    src={i3}
                    alt
                    width={340}
                    height={250}
                  />
                </a>
                <time className="post-classic-time" dateTime={2019}>
                  january 15, 2019
                </time>
                <div className="post-classic-divider" />
                <p className="heading-4 post-classic-title">
                  <a href="single-post.html">
                    MXGP Indonesia: Watson chases Prado in MX2 qualy race
                  </a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestReviews;
