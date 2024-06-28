import React from 'react'
import { Link } from 'react-router-dom'

const WebsiteCheckingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }; 
  return (
    <>
        <section className="website-checking section-padding">
  <div className="website-checking-wrapper">
    <div className="container">
      <div className="section-title text-center">
        <span
          className="text-white wow fadeInUp"
          style={{ visibility: "visible", animationName: "none" }}
        >
          Ready to buildup
        </span>
        <h2
          className="text-white wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "none"
          }}
        >
          Get your free quote today
        </h2>
      </div>
      <div className="website-checking-wrapper">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="checking-area">
              <div
                className="check-items d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "none"
                }}
              >
                <div className="check-input">
                  <input type="text" id="text" placeholder="Web URL" />
                </div>
                <div className="check-input">
                  <input type="email" id="email" placeholder="Email Address" />
                </div>
              </div>
              <button
                className="theme-btn header-color-2 wow fadeInUp"
                data-wow-delay=".7s"
                type="submit"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "none"
                }}
              >
                CHECK NOW
              </button>
            </div>
            <h6
              className="wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                visibility: "visible",
                animationDelay: "0.9s",
                animationName: "none"
              }}
            >
              Please check our <Link to="/privacy-policy" onClick={scrollToTop } >Privacy Policy</Link> to find
              out how we manage and protect you data
            </h6>
          </div>
        </div>
        <div className="icon-area">
          <div className="row g-4">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "none"
              }}
            >
              <div className="icon-items">
                <div className="icon">
                  <i className="flaticon-travel-agency" />
                </div>
                <div className="content">
                  <h5>Professional Agency</h5>
                  <p>
                    Nullam eu nibh vitae est tempor molestie ullam patha Quisque
                    dignissim maximus ipsum cong
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "none"
              }}
            >
              <div className="icon-items style-2">
                <div className="icon">
                  <i className="flaticon-travel-agency" />
                </div>
                <div className="content">
                  <h5>Unique method</h5>
                  <p>
                    Nullam eu nibh vitae est tempor molestie ullam patha Quisque
                    dignissim maximus ipsum cong
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default WebsiteCheckingSection