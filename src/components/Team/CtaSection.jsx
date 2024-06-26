import React from 'react'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  return (
    <>
        <section
  className="cta-section-3 fix section-padding bg-cover bg-cta"
  style={{ backgroundImage: 'url("./src/assets/img/cta-banner/02.webp")' }}
>
  <div className="container">
    <div className="cta-wrapper-3">
      <h2
        className="text-white wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        Make your website unforgettable <br /> join the IdealSoft community
      </h2>
      <Link
        to="/contact"
        className="theme-btn hover-white wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        JOIN TO DOWNLOAD
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

export default CtaSection