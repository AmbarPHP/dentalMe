import React from "react";
import Testimonial from "./Testimonial";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function TestimonialPage() {
  return (
    <div>
      <div>
        <Banner name="Tu opinion nos interesa"></Banner>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </div>
  );
}
