import React from "react";

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import Ubicanos from "./Ubicanos";

export default function UbicanosPage() {
  return (
    <div>
      <Banner name="Ubicanos"></Banner>
      <Ubicanos />
      <AboutUs></AboutUs>

      <Footer></Footer>
    </div>
  );
}
