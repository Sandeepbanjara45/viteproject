import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }; 
  return (
    <>
        <section className="project-section-5 section-padding fix">
  <div className="project-wrapper-2">
    <div className="container">
      <div className="row g-4">
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="project-items-3 mt-0">
            <div
              className="project-image bg-cover"
              style={{ backgroundImage: 'url("./src/assets/img/project/14.webp")' }}
            >
              <div className="project-content">
                <Link to="/team" className="icon" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-right"></i>
                </Link>
                <p>San Fransisco </p>
                <h4>
                  <Link to="/team" onClick={scrollToTop}>Digital Consulting</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="project-items-3 mt-0">
            <div
              className="project-image bg-cover"
              style={{ backgroundImage: 'url("./src/assets/img/project/15.webp")' }}
            >
              <div className="project-content">
                <Link to="/team" className="icon" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-right"></i>
                </Link>
                <p>San Fransisco </p>
                <h4>
                  <Link to="/team" onClick={scrollToTop}>Digital Consulting</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="project-items-3 mt-0">
            <div
              className="project-image bg-cover"
              style={{ backgroundImage: 'url("./src/assets/img/project/16.webp")' }}
            >
              <div className="project-content">
                <Link to="/team" className="icon" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-right"></i>
                </Link>
                <p>San Fransisco </p>
                <h4>
                  <Link to="/team" onClick={scrollToTop}>Digital Consulting</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="project-items-3 mt-0">
            <div
              className="project-image bg-cover"
              style={{ backgroundImage: 'url("./src/assets/img/project/10.webp")' }}
            >
              <div className="project-content">
                <Link to="/team" className="icon" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-right"></i>
                </Link>
                <p>San Fransisco </p>
                <h4>
                  <Link to="/team" onClick={scrollToTop}>Digital Consulting</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="project-items-3 mt-0">
            <div
              className="project-image bg-cover"
              style={{ backgroundImage: 'url("./src/assets/img/project/11.webp")' }}
            >
              <div className="project-content">
                <Link to="/team" className="icon" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-right"></i>
                </Link>
                <p>San Fransisco </p>
                <h4>
                  <Link to="/team" onClick={scrollToTop}>Digital Consulting</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="project-items-3 mt-0">
            <div
              className="project-image bg-cover"
              style={{ backgroundImage: 'url("./src/assets/img/project/12.webp")' }}
            >
              <div className="project-content">
                <Link to="/team" className="icon" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-right"></i>
                </Link>
                <p>San Fransisco </p>
                <h4>
                  <Link to="/team" onClick={scrollToTop}>Digital Consulting</Link>
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
  )
}

export default ProjectSection