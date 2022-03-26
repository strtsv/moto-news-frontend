import React from "react";

import i1 from "../../assets/images/home-07-420x528.jpg";
import i2 from "../../assets/images/home-08-420x528.jpg";
import i3 from "../../assets/images/home-09-420x528.jpg";
import i4 from "../../assets/images/home-10-82x82.jpg";
import i5 from "../../assets/images/home-11-82x82.jpg";
import i6 from "../../assets/images/home-12-82x82.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-md section-md-2 bg-gray-100">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-8">
              <h3 className="text-center text-sm-left">Featured News</h3>
              <article
                className="tour-modern mt-30 mt-xl-60 wow fadeIn"
                data-wow-delay=".05s"
              >
                <div className="tour-modern-media">
                  <a className="tour-modern-figure" href="single-review.html">
                    <img
                      className="tour-modern-image"
                      src={i1}
                      alt
                      width={420}
                      height={528}
                    />
                  </a>
                </div>
                <div className="tour-modern-main">
                  <h4 className="tour-modern-title">
                    <a href="single-review.html">
                      BSB: Buchan and FS-3 get factory Kawasaki support
                    </a>
                  </h4>
                  <p className="tour-modern-time">June 22, 2019</p>
                  <p className="tour-modern-text">
                    It’s all change in the Kawasaki ranks as FS-3 Racing will
                    become the Japanese factory’s official factory-backed squad
                    from the start of the 2020 Bennetts British Superbike
                    Championship...
                  </p>
                </div>
              </article>
              <article className="tour-modern wow fadeIn" data-wow-delay=".1s">
                <div className="tour-modern-media">
                  <a className="tour-modern-figure" href="single-review.html">
                    <img
                      className="tour-modern-image"
                      src={i2}
                      alt
                      width={420}
                      height={528}
                    />
                  </a>
                </div>
                <div className="tour-modern-main">
                  <h4 className="tour-modern-title">
                    <a href="single-review.html">
                      Magny-Cours WorldSBK: Baz returns after Bol d’Or fireball
                      crash
                    </a>
                  </h4>
                  <p className="tour-modern-time">June 22, 2019</p>
                  <p className="tour-modern-text">
                    Ten Kate Yamaha’s Loris Baz will be straight back to
                    WorldSBK action after a massive crash at the Bol d’Or last
                    weekend saw his YART R1 burned to a crisp. Erwan Nigon,
                    running third...
                  </p>
                </div>
              </article>
              <article className="tour-modern wow fadeIn" data-wow-delay=".15s">
                <div className="tour-modern-media">
                  <a className="tour-modern-figure" href="single-review.html">
                    <img
                      className="tour-modern-image"
                      src={i3}
                      alt
                      width={420}
                      height={528}
                    />
                  </a>
                </div>
                <div className="tour-modern-main">
                  <h4 className="tour-modern-title">
                    <a href="single-review.html">
                      Moto2 grid chopped back to 30 bikes for 2020
                    </a>
                  </h4>
                  <p className="tour-modern-time">June 22, 2019</p>
                  <p className="tour-modern-text">
                    Next year’s Moto2 grid will be limited to 30 bikes in 15
                    teams of two with several big names dropping out of
                    contention. Tech3, Kiefer Racing and Tasca will not be
                    present in 2020 while Gresini...
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4">
              <div className="row row-30 row-md-50 row-xxl-80">
                <div className="col-md-6 col-lg-12">
                  <h3 className="text-center text-sm-left wow fadeIn">
                    Press Releases
                  </h3>
                  <article
                    className="box-8 mt-30 mt-xl-60 wow fadeIn"
                    data-wow-delay=".1s"
                  >
                    <h6>
                      <a href="#">
                        Heartbreak for Yoshimura Suzuki as championship slips
                        away
                      </a>
                    </h6>
                    <h6>
                      <a href="#">
                        SRC Moto launches accessory line for the Royal Enfield
                        Himalayan
                      </a>
                    </h6>
                    <h6>
                      <a href="#">
                        Kelly and Dumas earn exciting wins in Pittsburgh for
                        Team Hammer
                      </a>
                    </h6>
                    <h6>
                      <a href="#">
                        Honda Racing celebrate 60 years of racing success in
                        Assen
                      </a>
                    </h6>
                  </article>
                </div>
                <div className="col-md-6 col-lg-12">
                  <h3 className="text-center text-sm-left wow fadeIn">
                    Popular News
                  </h3>
                  <div className="group-post-minimal mt-30 mt-xl-60">
                    {}
                    <article className="post-minimal">
                      <a className="post-minimal-media" href="single-post.html">
                        <img
                          className="post-minimal-image"
                          src={i4}
                          alt
                          width={82}
                          height={82}
                        />
                      </a>
                      <div className="post-minimal-main">
                        <h4 className="post-minimal-title">
                          <a href="single-post.html">MotoGP</a>
                        </h4>
                        <p className="post-minimal-text">
                          Discover the latest MotoGP news, stories and
                          highlights.
                        </p>
                      </div>
                    </article>
                    {}
                    <article className="post-minimal">
                      <a className="post-minimal-media" href="single-post.html">
                        <img
                          className="post-minimal-image"
                          src={i5}
                          alt
                          width={82}
                          height={82}
                        />
                      </a>
                      <div className="post-minimal-main">
                        <h4 className="post-minimal-title">
                          <a href="single-post.html">WorldSBK</a>
                        </h4>
                        <p className="post-minimal-text">
                          Find the latest World Superbikes news and results at
                          Moto.
                        </p>
                      </div>
                    </article>
                    {}
                    <article className="post-minimal">
                      <a className="post-minimal-media" href="single-post.html">
                        <img
                          className="post-minimal-image"
                          src={i6}
                          alt
                          width={82}
                          height={82}
                        />
                      </a>
                      <div className="post-minimal-main">
                        <h4 className="post-minimal-title">
                          <a href="single-post.html">Motocross</a>
                        </h4>
                        <p className="post-minimal-text">
                          Read the latest news about the most popular
                          cross-country race.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
