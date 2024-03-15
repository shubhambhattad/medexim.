import React, { useEffect } from "react";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      const carousel = document.getElementById("carouselExampleControls");
      const nextButton = carousel.querySelector(".carousel-control-next");
      nextButton.click();
    }, 100000); // Change the interval duration as needed

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <>
      <div
        id="carouselExampleControl"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false" // Disable auto-sliding
        style={{ margin: "30px" }} // Added margin style
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="images/Resource-Page.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/Resource-Page.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/Resource-Page.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default CarouselComponent;
