import React from 'react'
import { Link } from 'react-router-dom'

const FeatureSection = () => {
  return (
    <>
        <>
  {/* Feature Section  Start */}
  <section className="feature-section fix section-padding pt-0">
    <div className="container">
      <div className="feature-wrapper">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="feature-content">
              <div className="section-title">
                <span className="wow fadeInUp">
                  We are IdealSoft digital agency
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Great digital <br /> agency since 1999
                </h2>
              </div>
              <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                The main elements of a marketing strategy are your target goals
                and objectives and the tax you will employ to <br /> markter to
                your achive the goals you
              </p>
              <div className="feature-button wow fadeInUp" data-wow-delay=".7s">
                <Link to="/about" className="theme-btn">
                  DISCOVER MORE
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="feature-image">
              <img src="./src/assets/img/choose/feature.webp" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default FeatureSection