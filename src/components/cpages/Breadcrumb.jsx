import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <>
        <div
  className="breadcrumb-wrapper section-padding bg-cover"
  style={{ backgroundImage: 'url("./src/assets/img/breadcrumb.webp")' }}
>
  <div
    className="layer-shape wow fadeInLeft"
    data-wow-delay=".3s"
    style={{
      visibility: "visible",
      animationDelay: "0.3s",
      animationName: "fadeInLeft"
    }}
  >
    <img src="./src/assets/img/layer-shape-3.webp" alt="shape-img" />
  </div>
  <div
    className="breadcrumb-shape wow fadeInRight"
    data-wow-delay=".5s"
    style={{
      visibility: "visible",
      animationDelay: "0.5s",
      animationName: "fadeInRight"
    }}
  >
    <img src="./src/assets/img/breadcrumb-shape.webp" alt="shape-img" />
  </div>
  <div className="container">
    <div className="page-heading">
      <h1
        className="wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        Others
      </h1>
      <ul
        className="breadcrumb-items wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <i className="fal fa-minus" />
        </li>
        <li>Other</li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default Breadcrumb