import React from 'react'
import { Link } from 'react-router-dom'

const PricingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }; 
  return (
    <>
        <section className="pricing-section section-padding">
  <div className="container">
    <div className="section-title text-center">
      <span
        className="wow fadeInUp"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        Our pricing plans
      </span>
      <h2
        className="wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        Choose Your Optimal <br /> Pricing Plans
      </h2>
    </div>
    <div className="row">
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-pricing-items">
          <div className="pricing-header">
            <h2>
              {/* $75 <sub>/ month</sub> */}
              Wordpress
            </h2>
            <span>Perfect Plan for Starters.</span>
            <div className="icon-area">
              <img src="./src/assets/img/icon/starter.webp" alt="icon-img" />
              <div className="content">
                <span>Starter</span>
              </div>
            </div>
          </div>
          <ul>
            <li>
            <i className="flaticon-check-mark" /> 24*7 Premium support site optimisation 
            </li>
            <li>
              <i className="flaticon-check-mark" /> SEO &amp; digital marketing 
              Analysing
            </li>
            <li>
              <i className="flaticon-check-mark" /> Customer Management
            </li>
            <li>
              <i className="flaticon-check-mark" /> Full Access Library
            </li>
            <li className="last-list">
              <i className="flaticon-check-mark" /> 24 Hours Support
            </li>
          </ul>
          <div className="pricing-button">
            <Link to="#"  onClick={scrollToTop} className="theme-btn header-color">
              CHOOSE PLAN
            </Link>
          </div>
          <div className="shape-image">
            <img src="./src/assets/img/shape-2.webp" alt="shape-img" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-pricing-items">
          <div className="pricing-header">
            <h2>
              {/* $150 <sub>/ month</sub> */}
              Shopify
            </h2>
            <span>Collaborate Professionally.</span>
            <div className="icon-area">
              <img src="./src/assets/img/icon/commercial.webp" alt="icon-img" />
              <div className="content">
                <span>Commercial</span>
              </div>
            </div>
          </div>
          <ul>
            <li>
            <i className="flaticon-check-mark" /> 24*7 Premium support site optimisation 
            </li>
            <li>
              <i className="flaticon-check-mark" /> SEO &amp; digital marketing 
              Analysing
            </li>
            <li>
              <i className="flaticon-check-mark" /> Customer Management
            </li>
            <li>
              <i className="flaticon-check-mark" /> Full Access Library
            </li>
            <li className="last-list">
              <i className="flaticon-check-mark" /> 24 Hours Support
            </li>
          </ul>
          <div className="pricing-button">
            <Link to="#" onClick={scrollToTop} className="theme-btn">
              CHOOSE PLAN
            </Link>
          </div>
          <div className="shape-image">
            <img src="./src/assets/img/shape-2.webp" alt="shape-img" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".7s"
        style={{
          visibility: "visible",
          animationDelay: "0.7s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-pricing-items">
          <div className="pricing-header">
            <h2>
              {/* $75 <sub>/ month</sub> */}
              Digital Marketing
            </h2>
            <span>True Power of Management</span>
            <div className="icon-area">
              <img src="./src/assets/img/icon/enterprise.webp" alt="icon-img" />
              <div className="content">
                <span>Enterprise</span>
              </div>
            </div>
          </div>
          <ul>
            <li>
            <i className="flaticon-check-mark" /> 24*7 Premium support site optimisation 
            </li>
            <li>
              <i className="flaticon-check-mark" /> SEO &amp; digital marketing 
              Analysing
            </li>
            <li>
              <i className="flaticon-check-mark" /> Customer Management
            </li>
            <li>
              <i className="flaticon-check-mark" /> Full Access Library
            </li>
            <li className="last-list">
              <i className="flaticon-check-mark" /> 24 Hours Support
            </li>
          </ul>
          <div className="pricing-button">
            <Link to="#" onClick={scrollToTop} className="theme-btn header-color">
              CHOOSE PLAN
            </Link>
          </div>
          <div className="shape-image">
            <img src="./src/assets/img/shape-2.webp" alt="shape-img" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-pricing-items">
          <div className="pricing-header">
            <h2>
              {/* $75 <sub>/ month</sub> */}
              Ecommerce
            </h2>
            <span>Perfect Plan for Starters.</span>
            <div className="icon-area">
              <img src="./src/assets/img/icon/starter.webp" alt="icon-img" />
              <div className="content">
                <span>Starter</span>
              </div>
            </div>
          </div>
          <ul>
            <li>
            <i className="flaticon-check-mark" /> 24*7 Premium support site optimisation 
            </li>
            <li>
              <i className="flaticon-check-mark" /> SEO &amp; digital marketing 
              Analysing
            </li>
            <li>
              <i className="flaticon-check-mark" /> Customer Management
            </li>
            <li>
              <i className="flaticon-check-mark" /> Full Access Library
            </li>
            <li className="last-list">
              <i className="flaticon-check-mark" /> 24 Hours Support
            </li>
          </ul>
          <div className="pricing-button">
            <Link to="#"  onClick={scrollToTop} className="theme-btn header-color">
              CHOOSE PLAN
            </Link>
          </div>
          <div className="shape-image">
            <img src="./src/assets/img/shape-2.webp" alt="shape-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default PricingSection