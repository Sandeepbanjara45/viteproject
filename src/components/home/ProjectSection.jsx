import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSection = () => {
  return (
    <>
        <>
  {/* Project Section Start */}
  <section className="project-section-4 section-padding fix">
    <div className="shape-image">
      <img src="./src/assets/img/project/shape-3.webp" alt="shape-img" />
    </div>
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">Our projects</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Check our latest projects
        </h2>
      </div>
    </div>
    <div className="project-wrapper-2">
      <div className="swiper project-slider-3">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="project-items-3">
              <div
                className="project-image bg-cover"
                style={{ backgroundImage: 'url("./src/assets/img/project/14.webp")' }}
              >
                <div className="project-content">
                  <Link to="/project" className="icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                  <p>San Fransisco</p>
                  <h4>
                    <Link to="/project">Digital Consulting</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-items-3">
              <div
                className="project-image bg-cover"
                style={{ backgroundImage: 'url("./src/assets/img/project/15.webp")' }}
              >
                <div className="project-content">
                  <Link to="/project" className="icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                  <p>San Fransisco</p>
                  <h4>
                    <Link to="/project">Digital Consulting</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-items-3">
              <div
                className="project-image bg-cover"
                style={{ backgroundImage: 'url("./src/assets/img/project/16.webp")' }}
              >
                <div className="project-content">
                  <Link to="/project" className="icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                  <p>San Fransisco</p>
                  <h4>
                    <Link to="/project">Digital Consulting</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-items-3">
              <div
                className="project-image bg-cover"
                style={{ backgroundImage: 'url("./src/assets/img/project/06.webp")' }}
              >
                <div className="project-content">
                  <Link to="/project" className="icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                  <p>San Fransisco</p>
                  <h4>
                    <Link to="/project">Digital Consulting</Link>
                  </h4>
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

export default ProjectSection