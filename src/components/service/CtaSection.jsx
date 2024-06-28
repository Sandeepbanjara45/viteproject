import React from 'react'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  
 
  return (
    <>
        <section
  className="cta-section-2 style-2 fix section-padding bg-cover"
  style={{ backgroundImage: 'url("./src/assets/img/cta-banner/video-bg.webp")' }}
>
  <div className="container">
    <div className="cta-wrapper-2">
      <div className="cta-content">
        <h2
          className="wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "none"
          }}
        >
          Watch the video and see what it feels <br /> like to work with us
        </h2>
        <Link
          to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
          className="video-icon video-popup wow fadeInUp"
          data-wow-delay=".5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "none"
          }}
        >
          <i className="flaticon-play-button" />
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CtaSection