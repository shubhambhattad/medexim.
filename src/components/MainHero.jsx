import React from "react";
import CarouselComponent from "./Carousel/CarouselComponent";

function MainHero() {
  return (
    <div>
      {" "}
      <header>
        <div className="banner--wrap">
          <nav>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                      <img
                        src="images/meditune_logo.png"
                        alt="#"
                        style={{ maxWidth: "130px", height: "auto" }}
                      />
                    </a>
                    <button
                      className="navbar-toggler nav-custome1"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span
                        className="navbar-toggler-icon"
                        style={{ marginTop: "40px" }}
                      ></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{ fontSize: "1.2rem" }}
                          >
                            Home <i className="fas fa-plus"></i>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown1"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{ fontSize: "1.2rem" }}
                          >
                            All Products <i className="fas fa-plus"></i>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{ fontSize: "1.2rem" }}
                          >
                            About Us <i className="fas fa-plus"></i>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown3"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{ fontSize: "1.2rem" }}
                          >
                            Contact Us <i className="fas fa-plus"></i>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown4"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{ fontSize: "1.2rem" }}
                          >
                            Blogs <i className="fas fa-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </nav>

          {/* <div className="container">
            <div className="banner-slider">
              <div className="banner">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div className="main-title">
                      <span>We are here for you</span>
                      <h1>What Makes Us Better, Makes You Better.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eu lacus ex. ClassName aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos ipsum
                        dolor sit amet.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Make Appointment
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                        className="play-btn popup-youtube"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                    <div className="anim-container flex-fill">
                      <svg
                        className="circle-svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 754 733"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="big-circle"
                          opacity="0.071"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                          fill="#4D72D0"
                        />
                        <path
                          className="small-circle"
                          opacity="0.051"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                          fill="#4D72D0"
                        />
                      </svg>

                      <img
                        src="./images/hero-doctor-1.png"
                        className="img-fluid animated-hero"
                        alt="hero"
                      />

                      <ul className="main-slider-social">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div className="main-title">
                      <span>We are here for you</span>
                      <h1>What Makes Us Better, Makes You Better.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eu lacus ex. ClassName aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos ipsum
                        dolor sit amet.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Make Appointment
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                        className="play-btn popup-youtube"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                    <div className="anim-container flex-fill">
                      <svg
                        className="circle-svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 754 733"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="big-circle"
                          opacity="0.071"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                          fill="#4D72D0"
                        />
                        <path
                          className="small-circle"
                          opacity="0.051"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                          fill="#4D72D0"
                        />
                      </svg>

                      <img
                        src="./images/hero-doctor-1.png"
                        className="img-fluid animated-hero"
                        alt="hero"
                      />

                      <ul className="main-slider-social">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div className="main-title">
                      <span>We are here for you</span>
                      <h1>What Makes Us Better, Makes You Better.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eu lacus ex. ClassName aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos ipsum
                        dolor sit amet.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Make Appointment
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                        className="play-btn popup-youtube"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                    <div className="anim-container flex-fill">
                      <svg
                        className="circle-svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 754 733"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="big-circle"
                          opacity="0.071"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                          fill="#4D72D0"
                        />
                        <path
                          className="small-circle"
                          opacity="0.051"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                          fill="#4D72D0"
                        />
                      </svg>

                      <img
                        src="./images/hero-doctor-1.png"
                        className="img-fluid animated-hero"
                        alt="hero"
                      />

                      <ul className="main-slider-social">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </header>
      <CarouselComponent />
    </div>
  );
}

export default MainHero;
