import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopBtn from '../ScrollToTopBtn';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <>
        {/* Footer Section Start */}
        <footer className="footer-section style-2 fix bg-cover">
          <div className="container">
            <div className="footer-widgets-wrapper">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <Link to="/" onClick={scrollToTop}>
                        <img src="./src/assets/img/logo/footer-logo.svg" alt="logo-img" />
                      </Link>
                    </div>
                    <div className="footer-content">
                      <p>
                        Address Kesari Chand Choudhary Nagar, Plot number A-1, Ajmer Rd, behind
                        SHIV TAMPLE, KCC Nagar, Heerapura, Jaipur, Rajasthan 302021
                      </p>
                      <h6>
                        <Link to="tel:++91 96538 20555">+91 96538 20555</Link>
                      </h6>
                      <div className="social-icon d-flex align-items-center">
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="#" className="active">
                          <i className="fab fa-vimeo-v" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Navigtion</h3>
                    </div>
                    <ul className="list-area">
                      <li>
                        <Link to="/" onClick={scrollToTop}>Home</Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={scrollToTop}>About Us</Link>
                      </li>
                      <li>
                        <Link to="/service" onClick={scrollToTop}>Services</Link>
                      </li>
                      <li>
                        <Link to="/blog" onClick={scrollToTop}>Blog</Link>
                      </li>
                      <li>
                        <Link to="/hire" onClick={scrollToTop}>Hiring</Link>
                      </li>
                      <li>
                        <Link to="/blog-details" onClick={scrollToTop}>News</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={scrollToTop}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 ps-lg-5 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Services</h3>
                    </div>
                    <ul className="list-area">
                      <li>
                        <Link to="/web-development" onClick={scrollToTop}>Web Development</Link>
                      </li>
                      <li>
                        <Link to="/android-development" onClick={scrollToTop}>Android Development</Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing" onClick={scrollToTop}>Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/influencer-marketing" onClick={scrollToTop}>Influencer Marketing</Link>
                      </li>
                      <li>
                        <Link to="/seo" onClick={scrollToTop}>SEO</Link>
                      </li>
                      <li>
                        <Link to="/google" onClick={scrollToTop}>Google Ads</Link>
                      </li>
                      <li>
                        <Link to="/meta" onClick={scrollToTop}>Meta Ads</Link>
                      </li>

                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-content">
                      <div className="footer-input">
                        <input type="email" placeholder="Subscribe our newsletter" />
                        <button className="newsletter-button" type="submit">
                          <i className="flaticon-send" />
                        </button>
                      </div>
                      <p>
                        The ultimate Webflow template for agencies <br /> startups,
                        and small businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-wrapper">
                <p>Copyright © 2024 Real dream technology and payment solution pvt.. Ltd</p>
                <p>All Rights Reserved</p>
                <ul style={{ display: "flex", gap: "20px" }}>
                  <li style={{ color: "#bfbfbf", cursor: "pointer", border: "2px solid", padding: "3px", fontSize: "10px" }} >
                    <Link to="Privacy-Policy" style={{ color: "inherit" }} onClick={scrollToTop}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li style={{ color: "#bfbfbf", cursor: "pointer", border: "2px solid", padding: "3px", fontSize: "10px" }} >
                    <Link to="terms-conditionas" style={{ color: "inherit" }} onClick={scrollToTop}>
                      terms and conditions
                    </Link>
                  </li>
                  <li style={{ color: "#bfbfbf", cursor: "pointer", border: "2px solid", padding: "3px", fontSize: "10px" }} >
                    <Link to="Refund-Policy" style={{ color: "inherit" }} onClick={scrollToTop}>
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ScrollToTopBtn/>
        </footer>
      </>

    </>
  )
}

export default Footer