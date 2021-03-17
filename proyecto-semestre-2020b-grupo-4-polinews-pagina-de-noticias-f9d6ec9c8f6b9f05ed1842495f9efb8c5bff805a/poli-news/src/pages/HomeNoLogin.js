import React from "react";
import withoutAuth from "../hocs/withoutAuth";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import SocialMedia from "../components/SocialMedia";
import CarouselEvents from "../components/CarouselEvents";
import CarouselInterships from "../components/CarouselInterships";
import AboutUs from "../components/AboutUs";

const HomeNoLogin = () => {
  return (
    <>
      <div className="square">
        <Welcome />
      </div>

      <div>
        <SocialMedia />
      </div>

      <div className="square-two">
        <CarouselEvents />
      </div>

      <div className="square-two">
        <CarouselInterships />
      </div>

      <div>
        <AboutUs />
      </div>

      <Footer />
    </>
  );
};
export default withoutAuth(HomeNoLogin);
