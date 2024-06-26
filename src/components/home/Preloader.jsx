import React from 'react'
import { Link } from 'react-router-dom'

const Preloader = () => {
  return (
    <>
        <>
  {/* Preloader Start */}
  <div id="preloader" className="preloader">
    <div className="animation-preloader">
      <div className="spinner" />
      <div className="txt-loading">
        <span data-text-preloader="I" className="letters-loading">
          {" "}
          I{" "}
        </span>
        <span data-text-preloader="D" className="letters-loading">
          {" "}
          D{" "}
        </span>
        <span data-text-preloader="E" className="letters-loading">
          {" "}
          E{" "}
        </span>
        <span data-text-preloader="A" className="letters-loading">
          {" "}
          A{" "}
        </span>
        <span data-text-preloader="L" className="letters-loading">
          {" "}
          L{" "}
        </span>
        <span data-text-preloader="S" className="letters-loading">
          {" "}
          S{" "}
        </span>
        <span data-text-preloader="O" className="letters-loading">
          {" "}
          O{" "}
        </span>
        <span data-text-preloader="F" className="letters-loading">
          {" "}
          F{" "}
        </span>
        <span data-text-preloader="T" className="letters-loading">
          {" "}
          T{" "}
        </span>
      </div>
      <p className="text-center">Loading</p>
    </div>
    <div className="loader">
      <div className="row">
        <div className="col-3 loader-section section-left">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-left">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-right">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-right">
          <div className="bg" />
        </div>
      </div>
    </div>
  </div>
  {/*<< Mouse Cursor Start >>*/}
  <div className="mouse-cursor cursor-outer" />
  <div className="mouse-cursor cursor-inner" />
  {/* Offcanvas Area Start */}
  <div className="fix-area">
    <div className="offcanvas__info">
      <div className="offcanvas__wrapper">
        <div className="offcanvas__content">
          <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
            <div className="offcanvas__logo">
              <Link to="/">
                <img src="./src/assets/img/logo/header-logo.svg" alt="logo-img" />
              </Link>
            </div>
            <div className="offcanvas__close">
              <button>
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="mobile-menu fix mb-3" />
          <div className="offcanvas__contact">
            <h4>Contact Info</h4>
            <ul>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="offcanvas__contact-text">
                  <a target="_blank" href="#">
                    Main Street, Melbourne, Australia
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-envelope" />
                </div>
                <div className="offcanvas__contact-text">
                  <Link to="mailto:connect@idealsoft.com">
                    <span>connect@idealsoft.com</span>
                  </Link>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-clock" />
                </div>
                <div className="offcanvas__contact-text">
                  <a target="_blank" href="#">
                    Mod-friday, 09am -05pm
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="far fa-phone" />
                </div>
                <div className="offcanvas__contact-text">
                  <Link to="tel:+11002345909">+11002345909</Link>
                </div>
              </li>
            </ul>
            <div className="header-button mt-4">
              <Link to="/contact" className="theme-btn text-center">
                Contact Us
              </Link>
            </div>
            <div className="social-icon d-flex align-items-center">
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#">
                <i className="fab fa-youtube" />
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="offcanvas__overlay" />
</>

    </>
  )
}

export default Preloader