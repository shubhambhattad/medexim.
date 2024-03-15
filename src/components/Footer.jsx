import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div
          className="container container-custom"
          style={{ marginTop: "10rem" }}
        >
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="foot-contact-block">
                <img
                  src="images/meditune_logo.png"
                  className="img-fluid"
                  alt="#"
                />
                <p>
                  Lorem ipsum dolor sit amet, consect <br /> etur adipisicing
                  elit, sed do eius mod <br />
                  tempor incididunt ut labore et dolore
                  <br /> magna aliqua. Ut enim ad minim
                </p>
                <a href="tel:31234567890">
                  <h4>
                    <i className="fas fa-phone"></i>3123 456 7890
                  </h4>
                </a>
                <a href="mailto:info@medihyms.com">
                  <h4>
                    <i className="far fa-envelope"></i>info@medihymns.com
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 offset-lg-1">
              <div className="foot-link-box">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Blogs & News
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="foot-link-box">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Pediatrics
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Dermatology
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Cardiology
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Psychological
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Surgery
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right"></i>Family
                      Medicine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 offset-lg-1">
              <div className="foot-link-box footlink-box_btn">
                <a href="#" className="btn btn-outline-success">
                  Find a Doctor
                </a>
                <a href="#" className="btn btn-outline-success">
                  Career
                </a>
                <a href="#" className="btn btn-outline-success">
                  Newsletter
                </a>
                <ul>
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
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>©Medihymns 2024 Allright Reserved</p>
                <a href="#" id="scroll">
                  <i className="fas fa-angle-double-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
