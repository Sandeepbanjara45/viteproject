import React from 'react'
import { Link } from 'react-router-dom'

const NewsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }; 
  return (
    <>
        <section className="news-section fix section-padding">
  <div className="container">
    <div className="row">
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-news-items-2">
          <div
            className="news-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/news/04.webp")' }}
          >
            <div className="post-date">
              <h5>20</h5>
              <span>Feb</span>
            </div>
            <div className="news-content">
              <div className="icon">
                <i className="fal fa-tag" />
                <span>Statup</span>
              </div>
              <h4>
                <Link to="/team" onClick={scrollToTop}>
                  Crafting a digital identity: the art of agency web design
                </Link>
              </h4>
              <ul className="post-list">
                <li>
                  <i className="far fa-comment-alt" />
                  <span>02 Comments</span>
                </li>
                <li>
                  <Link to="/team" onClick={scrollToTop}>
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-news-items-2 active">
          <div
            className="news-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/news/05.webp")' }}
          >
            <div className="post-date">
              <h5>22</h5>
              <span>April</span>
            </div>
            <div className="news-content">
              <div className="icon">
                <i className="fal fa-tag" />
                <span>Consulting</span>
              </div>
              <h4>
                <Link to="/team" onClick={scrollToTop}>
                  How to manage business’s online reputation
                </Link>
              </h4>
              <ul className="post-list">
                <li>
                  <i className="far fa-comment-alt" />
                  <span>02 Comments</span>
                </li>
                <li>
                  <Link to="/team" onClick={scrollToTop}>
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".7s"
        style={{
          visibility: "visible",
          animationDelay: "0.7s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-news-items-2">
          <div
            className="news-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/news/06.webp")' }}
          >
            <div className="post-date">
              <h5>20</h5>
              <span>Feb</span>
            </div>
            <div className="news-content">
              <div className="icon">
                <i className="fal fa-tag" />
                <span>Business</span>
              </div>
              <h4>
                <Link to="/team" onClick={scrollToTop}>
                  Top crypto exchange systems influencers in china
                </Link>
              </h4>
              <ul className="post-list">
                <li>
                  <i className="far fa-comment-alt" />
                  <span>02 Comments</span>
                </li>
                <li>
                  <Link to="/team" onClick={scrollToTop}>
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </li>
              </ul>
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
        <div className="single-news-items-2">
          <div
            className="news-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/news/10.webp")' }}
          >
            <div className="post-date">
              <h5>20</h5>
              <span>Feb</span>
            </div>
            <div className="news-content">
              <div className="icon">
                <i className="fal fa-tag" />
                <span>Statup</span>
              </div>
              <h4>
                <Link to="/team" onClick={scrollToTop}>
                  Crafting a digital identity: the art of agency web design
                </Link>
              </h4>
              <ul className="post-list">
                <li>
                  <i className="far fa-comment-alt" />
                  <span>02 Comments</span>
                </li>
                <li>
                  <Link to="/team" onClick={scrollToTop}>
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-news-items-2">
          <div
            className="news-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/news/12.webp")' }}
          >
            <div className="post-date">
              <h5>22</h5>
              <span>April</span>
            </div>
            <div className="news-content">
              <div className="icon">
                <i className="fal fa-tag" />
                <span>Consulting</span>
              </div>
              <h4>
                <Link to="/team" onClick={scrollToTop}>
                  How to manage business’s online reputation
                </Link>
              </h4>
              <ul className="post-list">
                <li>
                  <i className="far fa-comment-alt" />
                  <span>02 Comments</span>
                </li>
                <li>
                  <Link to="/team" onClick={scrollToTop}>
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
        data-wow-delay=".7s"
        style={{
          visibility: "visible",
          animationDelay: "0.7s",
          animationName: "fadeInUp"
        }}
      >
        <div className="single-news-items-2">
          <div
            className="news-image bg-cover"
            style={{ backgroundImage: 'url("./src/assets/img/news/13.webp")' }}
          >
            <div className="post-date">
              <h5>20</h5>
              <span>Feb</span>
            </div>
            <div className="news-content">
              <div className="icon">
                <i className="fal fa-tag" />
                <span>Business</span>
              </div>
              <h4>
                <Link to="/team" onClick={scrollToTop}>
                  Top crypto exchange systems influencers in china
                </Link>
              </h4>
              <ul className="post-list">
                <li>
                  <i className="far fa-comment-alt" />
                  <span>02 Comments</span>
                </li>
                <li>
                  <Link to="/team" onClick={scrollToTop}>
                    <i className="fas fa-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="page-nav-wrap mt-5 text-center">
      <ul>
        <li>
          <a className="page-numbers" href="#">
            <i className="fal fa-long-arrow-left" />
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            01
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            02
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            ..
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            10
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            11
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            <i className="fal fa-long-arrow-right" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

    </>
  )
}

export default NewsSection