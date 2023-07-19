import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './views/Home/Home';
import ServicePage from './views/Servicios/ServicePage';
import AboutUsPage from "./views/Conocemos/AboutUsPage";
import TestimonialPage from "./views/Testimonials/TestimonialPage";
import UbicanosPage from "./views/Ubicanos/UbicanosPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/servicios" element={<ServicePage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/ubicacion" element={<UbicanosPage />}></Route>
        <Route path="/testimoniales" element={<TestimonialPage />}></Route>
      </Routes>
    </Router>



  );
}

export default App;
