import React from "react";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Join from "./Join/Join";
import Plans from "./Plans/Plans";
import Program from "./Program/Program";
import Reasons from "./Reasons/Reasons";
import Testimonial from "./Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
