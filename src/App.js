import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.scss';
import ServicePage from './views/Servicios/ServicePage';
import Footer from './components/Footer';
import Home from './views/Home/Home';
import Menu from "./components/Menu";
import BarraSup from './components/BarraSup';
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import Hero from "./views/Home/Hero";
import TestimonialPage  from "./views/Testimonials/TestimonialPage";
import AboutUsPage from "./views/Conocemos/AboutUsPage";
import UbicanosPage from "./views/Ubicanos/UbicanosPage";

function App() {
  return (
<Router>
    {/* <BarraSup></BarraSup> */}
    {/* <Menu></Menu> */}
    
   
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/servicios" element={<ServicePage/>}></Route>
      <Route path="/about" element={<AboutUsPage/>}></Route>
      <Route path="/ubicacion" element={<UbicanosPage/>}></Route>
      <Route path="/testimoniales" element={<TestimonialPage/>}></Route>
    </Routes>
  </Router>

  
  
  );
}

export default App;
