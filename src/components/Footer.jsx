import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
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
                <Link to="/">
                  <img src="./src/assets/img/logo/footer-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="footer-content">
                <p>
                  Address 301 Princes Street, Ei- <br /> Mahall Damietta
                  Egypt-104
                </p>
                <h6>
                  <Link to="tel:+19993452577">+1 (999) 345 2577</Link>
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
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/about">Portfolio</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/team">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
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
                  <Link to="/web-development">Web Design</Link>
                </li>
                <li>
                  <Link to="/web-development">Development</Link>
                </li>
                <li>
                  <Link to="/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/graphic-designing">Art Direction</Link>
                </li>
                <li>
                  <Link to="/service">Product Design</Link>
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
          <p>Copyright © 2024 IdealSoft</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</>

    </>
  )
}

export default Footer