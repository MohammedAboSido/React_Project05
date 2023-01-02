import React from "react";
import Hero from "./Hero/Hero";
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
    </>
  );
};

export default Home;
