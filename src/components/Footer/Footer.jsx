import React from "react";
// Styling
import "./footerStyling.css";
// Icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div
                className="f_widget company_widget wow fadeInLeft"
                datawowdelay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title">Get in Touch</h3>
                <p>Don’t miss any updates of our new offers and features.!</p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate={true}
                  _lpchecked="1"
                >
                  <input
                    type="text"
                    name="email"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
            <div>
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                datawowdelay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Links</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Products</a>
                  </li>
                  <li>
                    <a href="/">Offers</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                datawowdelay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Term &amp; conditions</a>
                  </li>
                  <li>
                    <a href="/">Reporting</a>
                  </li>
                  <li>
                    <a href="/">Documentation</a>
                  </li>
                  <li>
                    <a href="/">Support Policy</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                datawowdelay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Team Solutions
                </h3>
                <div className="f_social_icon">
                  <a href="/">
                    <FaFacebookF />
                  </a>

                  <a href="/">
                    <FaTwitter />
                  </a>

                  <a href="/">
                    <FaLinkedin />
                  </a>

                  <a href="/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div>
          <div>
            <div>
              <p>© Ahmed Mahmoud 2022 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
