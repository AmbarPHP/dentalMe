import React from "react";
import Servicios from "./Servicios";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function ServicePage() {
  return (
    <div>
      <Banner name="Nuestros servicios"></Banner>
      <Servicios></Servicios>
      <Footer></Footer>
    </div>
  );
}
