import React from 'react'
import { Link } from 'react-router-dom'
 

const HeroSection = () => {
  return (
    <>
        <>
  {/* Hero Section Start */}
  <section className="hero-section-4 hero-4">
    <div className="swiper hero-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/hero/07.webp")' }}
          />
          <div
            className="shape-image"
            data-animation="fadeInLeft"
            data-delay="2.1s"
          >
            <img src="./src/assets/img/hero/shape-3.webp" alt="shape-img" />
          </div>
          <div
            className="shape-image-2"
            data-animation="fadeInRight"
            data-delay="2.3s"
          >
            <img src="./src/assets/img/hero/shape-4.webp" alt="shape-img" />
          </div>
          <div
            className="box-shape"
            data-animation="fadeInRight"
            data-delay="2.4s"
          >
            <img src="./src/assets/img/hero/box-shape.webp" alt="shape-img" />
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-8">
                <div className="hero-content">
                  <div className="d-sm-inline video-play-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-popup ripple play-video"
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      <i className="fas fa-play" />
                    </Link>
                    <span
                      className="ms-3 d-line"
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      Showreel
                    </span>
                  </div>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    We’re a Expert <br /> Digital Marketing <br /> Agency.
                  </h1>
                  <div className="hero-button">
                    <Link
                      to="/contact"
                      data-animation="fadeInUp"
                      data-delay="1.7s"
                      className="theme-btn hover-white"
                    >
                      DISCOVER MORE
                    </Link>
                    <div
                      className="d-sm-inline contact-icon"
                      data-animation="fadeInUp"
                      data-delay="1.7s"
                    >
                      <i className="fal fa-phone-alt" />
                      <Link to="tel:+91 96538 20555">+91 96538 20555</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fal fa-arrow-right" />
                  </button>
                  <button className="array-next">
                    <i className="fal fa-arrow-left" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/hero/08.webp")' }}
          />
          <div
            className="shape-image"
            data-animation="fadeInLeft"
            data-delay="2.1s"
          >
            <img src="./src/assets/img/hero/shape-3.webp" alt="shape-img" />
          </div>
          <div
            className="shape-image-2"
            data-animation="fadeInRight"
            data-delay="2.3s"
          >
            <img src="./src/assets/img/hero/shape-4.webp" alt="shape-img" />
          </div>
          <div
            className="box-shape"
            data-animation="fadeInRight"
            data-delay="2.4s"
          >
            <img src="./src/assets/img/hero/box-shape.webp" alt="shape-img" />
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-8">
                <div className="hero-content">
                  <div className="d-sm-inline video-play-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-popup ripple play-video"
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      <i className="fas fa-play" />
                    </Link>
                    <span
                      className="ms-3 d-line"
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      Showreel
                    </span>
                  </div>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    We’re a Full- <br /> Range Digital <br /> Agency.
                  </h1>
                  <div className="hero-button">
                    <Link
                      to="/"
                      data-animation="fadeInUp"
                      data-delay="1.7s"
                      className="theme-btn hover-white"
                    >
                      DISCOVER MORE
                    </Link>
                    <div
                      className="d-sm-inline contact-icon"
                      data-animation="fadeInUp"
                      data-delay="1.7s"
                    >
                      <i className="fal fa-phone-alt" />
                      <Link to="tel:+19993452577">+1 (999) 345 2577</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fal fa-arrow-right" />
                  </button>
                  <button className="array-next">
                    <i className="fal fa-arrow-left" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div
            className="hero-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/hero/09.webp")' }}
          />
          <div
            className="shape-image"
            data-animation="fadeInLeft"
            data-delay="2.1s"
          >
            <img src="./src/assets/img/hero/shape-3.webp" alt="shape-img" />
          </div>
          <div
            className="shape-image-2"
            data-animation="fadeInRight"
            data-delay="2.3s"
          >
            <img src="./src/assets/img/hero/shape-4.webp" alt="shape-img" />
          </div>
          <div
            className="box-shape"
            data-animation="fadeInRight"
            data-delay="2.4s"
          >
            <img src="./src/assets/img/hero/box-shape.webp" alt="shape-img" />
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-8">
                <div className="hero-content">
                  <div className="d-sm-inline video-play-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-popup ripple play-video"
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      <i className="fas fa-play" />
                    </Link>
                    <span
                      className="ms-3 d-line"
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      Showreel
                    </span>
                  </div>
                  <h1
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    We’re a Best <br /> IT Solutions <br /> Agency.
                  </h1>
                  <div className="hero-button">
                    <Link
                      to="/"
                      data-animation="fadeInUp"
                      data-delay="1.7s"
                      className="theme-btn hover-white"
                    >
                      contact us
                    </Link>
                    <div
                      className="d-sm-inline contact-icon"
                      data-animation="fadeInUp"
                      data-delay="1.7s"
                    >
                      <i className="fal fa-phone-alt" />
                      <Link to="tel:+19993452577">+1 (999) 345 2577</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fal fa-arrow-right" />
                  </button>
                  <button className="array-next">
                    <i className="fal fa-arrow-left" />
                  </button>
                </div>
              </div>
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

export default HeroSection