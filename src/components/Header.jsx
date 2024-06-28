import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
  return (
    <>
      <header>
  <div className="header-top ">
    <div className="container-fluid">
      <div className="header-top-wrapper">
        <ul>
          <li>
            <i className="fal fa-map-marker-alt me-2" /> Kesari Chand Choudhary
            Nagar Jaipur
          </li>
          <li>
            <i className="fal fa-envelope me-2" />
            <Link to="mailto:connect@idealsoft.com">
              <span>connect@idealsoft.com</span>
            </Link>
          </li>
        </ul>
        <div className="social-icon d-flex align-items-center">
          <span className="me-3">Follow us:</span>
          <Link to="#">
            <i className="fab fa-facebook-f me-3" />
          </Link>
          <Link to="#">
            <i className="fab fa-twitter me-3" />
          </Link>
          <Link to="#">
            <i className="fab fa-youtube me-3" />
          </Link>
          <Link to="#">
            <i className="fab fa-linkedin-in" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div id="header-sticky" className="header-2">
    <div className="container-fluid ">
      <div className="mega-menu-wrapper">
        <div className="header-main ">
          <div className="header-left">
            <div className="logo">
              <Link to="/" className="header-logo" onClick={scrollToTop} >
                <img src="./src/assets/img/logo/header-logo.svg" alt="logo-img" />
              </Link>
            </div>
            <div className="mean__menu-wrapper d-none d-lg-block">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="has-dropdown active menu-thumb">
                      <Link to="/" onClick={scrollToTop} > Home </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={scrollToTop} >About</Link>
                    </li>
                    <li>
                      <Link to="/service" onClick={scrollToTop} >
                        Services
                        <i className="fas fa-angle-down" />
                      </Link>
                      
                      <ul className="submenu">
                              <li className="has-dropdown">
                                <Link to="/it-service" onClick={scrollToTop} >
                                  IT Department
                                  <i class="fa-solid fa-angle-right"></i>

                                  {/* <FaAngleDown className="angle-down" /> */}
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/web-development" onClick={scrollToTop} >
                                      Web Development
                                  <i class="fa-solid fa-angle-right"></i>

                                    </Link>
                                    <ul className="submenu">
                                  <li>
                                    <Link to="/wordpress" onClick={scrollToTop} >Wordpress</Link>
                                  </li>
                                  <li>
                                    <Link to="/shopify" onClick={scrollToTop} >Shopify</Link>
                                  </li>
                                  <li>
                                    <Link to="/e-commerce" onClick={scrollToTop} >E-commerce</Link>
                                  </li>
                                  
                                </ul>
                                  </li>
                                  <li>
                                    <Link to="/android-development" onClick={scrollToTop} >
                                      Android Development
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-dropdown">
                                <Link to="/digital-marketing" onClick={scrollToTop} >
                                  Digital Marketing
                                  {/* <FaAngleDown className="angle-down" /> */}
                                  <i class="fa-solid fa-angle-right"></i>
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/seo" onClick={scrollToTop} >SEO</Link>
                                  </li>
                                  <li>
                                    <Link to="/google" onClick={scrollToTop} >Google Ads</Link>
                                  </li>
                                  <li>
                                    <Link to="/meta" onClick={scrollToTop} >Meta Ads</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/graphic-designing" onClick={scrollToTop} >
                                  Graphic Designing
                                  {/* <FaAngleDown className="angle-down" /> */}
                                  <i class="fa-solid fa-angle-right"></i>
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/influencer-marketing" onClick={scrollToTop} >
                                      Influencer Marketing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/social-media" onClick={scrollToTop} >
                                      Social Media Marketing
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                    </li>
                    <li>
                      <Link to="/blog" onClick={scrollToTop} >
                        Blog
                        <i className="fas fa-angle-down" />
                      </Link>
                      <ul className="submenu">                        
                        <li>
                          <Link to="/blog-details" onClick={scrollToTop} >Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/hire" onClick={scrollToTop} > Hiring </Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to="/other" onClick={scrollToTop} >
                        Others
                        <i className="fas fa-angle-down" />
                      </Link>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <Link to="/project" onClick={scrollToTop} >Projects</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/team" onClick={scrollToTop} >
                            Team
                            <i class="fa-solid fa-angle-right"></i>

                          </Link>
                          <ul className="submenu">                        
                        <li>
                          <Link to="/team-details" onClick={scrollToTop} >Team Details</Link>
                        </li>
                      </ul>
                         
                        </li>
                        <li>
                          <Link to="/testimonial" onClick={scrollToTop} >testimonial</Link>
                        </li>
                        <li>
                          <Link to="/pricing" onClick={scrollToTop} >Pricing</Link>
                        </li>
                        <li>
                          <Link to="/faq" onClick={scrollToTop} >Faq's</Link>
                        </li>
                        <li>
                          <Link to="/error" onClick={scrollToTop} >404 Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact" onClick={scrollToTop} >Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="header-right d-flex justify-content-end align-items-center">
            <div className="search-wrp">
              <input placeholder="Search...." aria-label="Search" />
              <button>
                <i className="far fa-search" />
              </button>
            </div>
            <div className="header-button">
              <Link to="/get-quote" className="theme-btn" onClick={scrollToTop} >
                GET A QUOTE
              </Link>
            </div>
            <div className="header__hamburger d-lg-none my-auto">
              <div className="sidebar__toggle">
                <i className="far fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header