import React from "react";
import Hero from "./Hero";

import Section1 from "../Servicios/Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Footer from "../../components/Footer";
import Nosotros from "../Conocemos/Nosotros";
import Ubicanos from "../Ubicanos/Ubicanos";
import Testimonial from "../Testimonials/Testimonial";
import "../Home/Home.scss";

export default function Home() {
  return (
    <div>
      {/* es la imagen principal la que llama la atencion */}
      <Hero></Hero>
      {/* aqui las secciones seran los componentes en la carpeta home */}
      {/* <Section2></Section2> */}
      {/* ==========Conocenos Dignosticos rapidos==================== */}
      <Section5></Section5>
      {/* ==========Nuestros Servicios=============== */}
      <Section4></Section4>

      {/* ===========Nosotros=========================*/}
      <Nosotros></Nosotros>

      {/* ==========Paquetes==================== */}
      <Section1></Section1>
      {/* ==========Banner Resina==================== */}
      {/* <Section7></Section7> */}
      {/* ==========Banner Resina==================== */}
      <Section6></Section6>

      <Testimonial></Testimonial>
      <Ubicanos></Ubicanos>
      <Footer></Footer>
    </div>
  );
}
