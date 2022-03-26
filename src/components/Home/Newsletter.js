import React from "react";
import $ from "jquery";

import i from "../../assets/images/home-13-1920x800.jpg";

class Newsletter extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="section parallax-container section-xl context-dark text-center"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content">
          <div className="container">
            <div className="heading-1 wow fadeIn">Join Our Newsletter</div>
            <h4 className="wow fadeIn text-white-8" data-wow-delay=".025s">
              Subscribe to our newsletter to receive the latest news &
              <br className="d-none d-md-block" /> updates from the world of
              motorcycle sport.
            </h4>
            <div
              className="block-2 block-centered mt-30 wow fadeIn"
              data-wow-delay=".05s"
            >
              <form
                className="rd-form rd-mailform form-inline-2 form-lg text-center"
                data-form-output="form-output-global"
                data-form-type="subscribe"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap form-wrap-icon">
                  <input
                    className="form-input"
                    id="subscribe-form-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="subscribe-form-email">
                    E-mail
                  </label>
                  <div className="icon form-icon mdi mdi-email-outline" />
                </div>
                <div className="form-button">
                  <button className="button button-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
