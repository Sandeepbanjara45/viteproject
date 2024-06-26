import React from 'react'

const TestimonialSection = () => {
  return (
    <>
        <section className="testimonial-section section-padding fix section-bg">
  <div className="left-shape">
    <img src="./src/assets/img/client/left-shape.webp" alt="shape-img" />
  </div>
  <div className="right-shape">
    <img src="./src/assets/img/client/right-shape.webp" alt="shape-img" />
  </div>
  <div className="container">
    <div className="section-title text-center">
      <span
        className="wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        Success stories
      </span>
      <h2
        className="wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "hidden",
          animationDelay: "0.3s",
          animationName: "none"
        }}
      >
        Why customers love to <br /> working with us
      </h2>
    </div>
    <div className="row">
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "hidden",
          animationDelay: "0.3s",
          animationName: "none"
        }}
      >
        <div className="testimonial-card-items">
          <div
            className="testimonial-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/client/01.jpg")' }}
          />
          <div className="icon">
            <i className="flaticon-quotation" />
          </div>
          <div className="testimonial-content">
            <p>
              Bring to the table win-win strategies to ensure proactive
              domination. At the end of the day going forward normal that has
              evolved from operational X is on the
            </p>
            <h4>Janes Cooper</h4>
            <span>Designer</span>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "hidden",
          animationDelay: "0.5s",
          animationName: "none"
        }}
      >
        <div className="testimonial-card-items active">
          <div
            className="testimonial-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/client/02.jpg")' }}
          />
          <div className="icon">
            <i className="flaticon-quotation" />
          </div>
          <div className="testimonial-content">
            <p>
              Bring to the table win-win strategies to ensure proactive
              domination. At the end of the day going forward normal that has
              evolved from operational X is on the
            </p>
            <h4>Jack Daniel</h4>
            <span>Designer</span>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".7s"
        style={{
          visibility: "hidden",
          animationDelay: "0.7s",
          animationName: "none"
        }}
      >
        <div className="testimonial-card-items">
          <div
            className="testimonial-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/client/03.jpg")' }}
          />
          <div className="icon">
            <i className="flaticon-quotation" />
          </div>
          <div className="testimonial-content">
            <p>
              Bring to the table win-win strategies to ensure proactive
              domination. At the end of the day going forward normal that has
              evolved from operational X is on the
            </p>
            <h4>Ava Olivia</h4>
            <span>Designer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default TestimonialSection