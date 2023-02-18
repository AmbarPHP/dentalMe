import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.scss';
import Servicios from './views/Servicios/Servicios';
import Footer from './components/Footer';
import Nosotros from './views/Conocemos/Nosotros';
import Home from './views/Home/Home';
import Menu from "./components/Menu";
import BarraSup from './components/BarraSup';
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import Hero from "./views/Home/Hero";
import TestimonialPage  from "./views/Testimonials/TestimonialPage";
import Ubicanos from "./views/Ubicanos/Ubicanos";

function App() {
  return (
<Router>
    {/* <BarraSup></BarraSup> */}
    {/* <Menu></Menu> */}
    
   
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/servicios" element={<Servicios />}></Route>
      <Route path="/about" element={<Nosotros/>}></Route>
      <Route path="/ubicacion" element={<Ubicanos/>}></Route>
      <Route path="/testimoniales" element={<TestimonialPage/>}></Route>
    </Routes>
  </Router>

  
  
  );
}

export default App;
