import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
        <>
  {/* Choose Us Section Start */}
  <section className="choose-us-section fix section-padding">
    <div className="left-shape float-bob-y">
      <img src="./src/assets/img/shape-5.webp" alt="shape-img" />
    </div>
    <div className="container">
      <div className="choose-wrapper style-2 mb-0">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="choose-image-items">
              <div
                className="choose-image bg-cover wow fadeInUp"
                data-wow-delay=".3s"
                style={{ backgroundImage: 'url("./src/assets/img/choose/03.webp")' }}
              >
                <div className="box-shape">
                  <img src="./src/assets/img/about/box-shape.webp" alt="shape-img" />
                </div>
              </div>
              <div
                className="choose-image-2 wow fadeInRight"
                data-wow-delay=".5s"
              >
                <img src="./src/assets/img/choose/04.webp" alt="choose-img" />
              </div>
              <div className="icon-box">
                <i className="flaticon-send" />
                <div className="circle-text">
                  <img
                    src="./src/assets/img/circle-text.webp"
                    alt="img"
                    className="text-circle"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
            <div className="choose-content">
              <div className="section-title wow fadeInUp" data-wow-delay=".3s">
                <h2>
                  Explore worlds leading <br /> local and gloabl agencies
                </h2>
              </div>
              <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget
                tincidunt <br /> ipsum. Eget tincidunt
              </p>
              <div
                className="icon-area style-2 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-items active">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h5>Cloud based</h5>
                    <p>
                      Nullam eu nibh vitae est tempor molestie <br /> Quisque
                      dignissim maximus ipsum
                    </p>
                  </div>
                </div>
                <div className="icon-items">
                  <div className="icon">
                    <i className="flaticon-maintenance" />
                  </div>
                  <div className="content">
                    <h5>Technical support</h5>
                    <p>
                      Nullam eu nibh vitae est tempor molestie <br /> Quisque
                      dignissim maximus ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-author wow fadeInUp" data-wow-delay=".9s">
                <div className="about-button">
                  <Link to="/about" className="theme-btn">
                    {" "}
                    Discover More{" "}
                  </Link>
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

export default ContactUs