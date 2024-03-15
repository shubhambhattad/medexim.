import React from "react";

function Service() {
  return (
    <div className="container container-custom">
      <div className="row space">
        <div className="col-md-4">
          <div className="service-thumbnail d-flex flex-fill">
            <img
              src="./images/service-thumbnail01.png"
              className="img-fluid"
              alt="#"
            />
            <div className="service-thumbnail_text">
              <h4>Specialised Service</h4>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-thumbnail d-flex flex-fill">
            <img
              src="./images/service-thumbnail02.png"
              className="img-fluid"
              alt="#"
            />
            <div className="service-thumbnail_text">
              <h4>24/7 Advanced Care</h4>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-thumbnail border-0 d-flex flex-fill">
            <img
              src="./images/service-thumbnail03.png"
              className="img-fluid"
              alt="#"
            />
            <div className="service-thumbnail_text">
              <h4>Best Quality</h4>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="about-video_block">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <img
                  src="images/about-img.jpg"
                  className="img-fluid w-100"
                  alt="#"
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="video-play-text">
                  <h2>Short Story About Medihymn.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <p>
                    Sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostru
                    {/* <a href="#">Readmore</a> */}
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="facilities blue">
                        <h3>10000+</h3>
                        <span>Happy Patients</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="facilities green">
                        <h3>1000+</h3>
                        <span>Happy Clients</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="facilities yellow">
                        <h3>315+</h3>
                        <span>Experts</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="facilities gray">
                        <h3>10+</h3>
                        <span>Award Winner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
