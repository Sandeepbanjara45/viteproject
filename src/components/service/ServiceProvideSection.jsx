import React from 'react'
import { Link } from 'react-router-dom'

const ServiceProvideSection = () => {
  return (
    <>
        <section className="service-provide section-padding">
  <div className="shape-image">
    <img src="./src/assets/img/arrow-shape.webp" alt="shape-img" />
  </div>
  <div className="container">
    <div className="section-title text-center">
      <span
        className="wow fadeInUp"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        What We Provide{" "}
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
        We always deliver best <br /> service for customer
      </h2>
    </div>
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        <div className="service-provide-items text-center">
          <div className="icon">
            <i className="flaticon-mobile-development" />
          </div>
          <div className="content">
            <h5>
              <Link to="/android-development">
                Mobile <br />
                Application
              </Link>
            </h5>
            <p>
              Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
              ut loreum ipsum dsu
            </p>
            <div className="arrow-icon">
              <Link to="/service">
                <i className="flaticon-next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <div className="service-provide-items text-center active">
          <div className="icon">
            <i className="flaticon-advertisig-agency" />
          </div>
          <div className="content">
            <h5>
              <Link to="/digital-marketing">
                Digital <br />
                Marketing
              </Link>
            </h5>
            <p>
              Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
              ut loreum ipsum dsu
            </p>
            <div className="arrow-icon">
              <Link to="/service">
                <i className="flaticon-next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".7s"
        style={{
          visibility: "visible",
          animationDelay: "0.7s",
          animationName: "fadeInUp"
        }}
      >
        <div className="service-provide-items text-center">
          <div className="icon">
            <i className="flaticon-curve" />
          </div>
          <div className="content">
            <h5>
              <Link to="/graphic-designing">
                Graphics <br />
                Designing
              </Link>
            </h5>
            <p>
              Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
              ut loreum ipsum dsu
            </p>
            <div className="arrow-icon">
              <Link to="/service">
                <i className="flaticon-next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".9s"
        style={{
          visibility: "visible",
          animationDelay: "0.9s",
          animationName: "fadeInUp"
        }}
      >
        <div className="service-provide-items text-center">
          <div className="icon">
            <i className="flaticon-advertisig-agency" />
          </div>
          <div className="content">
            <h5>
              <Link to="/web-development">
                Website <br />
                Development
              </Link>
            </h5>
            <p>
              Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt
              ut loreum ipsum dsu
            </p>
            <div className="arrow-icon">
              <Link to="/service">
                <i className="flaticon-next" />
              </Link>
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

export default ServiceProvideSection