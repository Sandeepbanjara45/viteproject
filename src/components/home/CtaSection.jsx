import React from 'react'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }; 
  return (
    <>
        <>
  {/* Cta Section Start */}
  <section
    className="cta-section-2 fix section-padding background-image"
    style={{ backgroundImage: 'url("./src/assets/img/cta-banner/01.webp")' }}
  >
    <div className="shape-image">
      <img src="./src/assets/img/layer-shape-2.webp" alt="shape-img" />
    </div>
    <div className="container">
      <div className="cta-wrapper-4">
        <div className="cta-content">
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Better digital agencysolution &amp; <br /> service at you
            fingertrips
          </h2>
          <div className="cta-button mt-4 wow fadeInUp" data-wow-delay=".5s">
            <Link to="/contact" onClick={scrollToTop} className="theme-btn hover-white">
              DISCOVER MORE
            </Link>
          </div>
        </div>
        <div className="cta-image wow fadeInUp" data-wow-delay=".4s">
          <img src="./src/assets/img/cta.webp" alt="img" />
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default CtaSection