import React from 'react'
import { Link } from 'react-router-dom'

const ServiceProductiveSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }; 
  return (
    <>
        <section className="service-productive fix section-padding">
  <div className="service-productive-wrapper style-2">
    <div className="circle-shape">
      <img
        src="./src/assets/img/circle-shape.webp"
        alt="shape-img"
        className="text-circle"
      />
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="productive-image-2">
            <img src="./src/assets/img/services/04.webp" alt="img" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 mt-5 mt-xl-0">
          <div className="productive-content">
            <div
              className="section-title wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "none"
              }}
            >
              <h2>
                We made things easier <br /> for your business
              </h2>
            </div>
            <p
              className="mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "none"
              }}
            >
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day going forward, a new normal that
              has evolved from operational X is on the runway
            </p>
            <div className="icon-items-area">
              <div
                className="icon-item d-flex align-items-center wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "none"
                }}
              >
                <div className="icon">
                  <i className="flaticon-light-bulb" />
                </div>
                <div className="content">
                  <h5>
                    Deliver <br /> Awesome Idea
                  </h5>
                </div>
              </div>
              <div
                className="icon-item d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "none"
                }}
              >
                <div className="icon">
                  <i className="flaticon-review" />
                </div>
                <div className="content">
                  <h5>
                    Moneyback <br /> Gurantee
                  </h5>
                </div>
              </div>
            </div>
            <h6
              className="wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "none"
              }}
            >
              We’re commited to deliver high quality productive service
            </h6>
            <div
              className="author-items wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                visibility: "visible",
                animationDelay: "0.9s",
                animationName: "none"
              }}
            >
              <div className="about-button">
                <Link to="/about" onClick={scrollToTop} className="theme-btn">
                  {" "}
                  Discover More{" "}
                </Link>
              </div>
              {/* <img src="./src/assets/img/about/signature-2.webp" alt="signature" /> */}
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

export default ServiceProductiveSection