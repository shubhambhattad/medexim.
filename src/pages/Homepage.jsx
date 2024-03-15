import React from "react";
import MainHero from "../components/MainHero";
import Service from "../components/Service";
import Product from "../components/Product";
import AboutUs from "../components/AboutUs";
import OurTea from "../components/OurTea";
import Banner from "../components/Banner";
import Review from "../components/Review";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <MainHero />
      <Service />
      <Product />
      <AboutUs />
      <OurTea />
      <Banner />
      <Review />
      <Footer />
    </div>
  );
}

export default Homepage;
