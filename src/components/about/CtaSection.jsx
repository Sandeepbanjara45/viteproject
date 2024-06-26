import React from 'react'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  return (
    <>
        <section
  className="cta-section-2 fix section-padding background-image"
  style={{ backgroundImage: 'url("./src/assets/img/cta-banner/01.webp")' }}
>
  <div className="shape-image">
    <img src="./src/assets/img/layer-shape-4.webp" alt="shape-img" />
  </div>
  <div className="container">
    <div className="cta-wrapper-2">
      <div className="cta-content">
        <h2
          className="wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "hidden",
            animationDelay: "0.3s",
            animationName: "none"
          }}
        >
          Watch the video and see what it feels <br /> like to work with us
        </h2>
        <div
          className="cta-button mt-5 wow fadeInUp"
          data-wow-delay=".5s"
          style={{
            visibility: "hidden",
            animationDelay: "0.5s",
            animationName: "none"
          }}
        >
          <Link to="/contact" className="theme-btn hover-white">
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CtaSection