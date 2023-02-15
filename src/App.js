import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.scss';
import Servicios from './views/Servicios/Servicios';
import Footer from './views/Footer';
import Nosotros from './views/Conocemos/Nosotros';
import Home from './views/Home/Home';
import Menu from "./views/Menu";
import BarraSup from './views/BarraSup';
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import Hero from "./views/Home/Hero";

function App() {
  return (
<Router>
    {/* <BarraSup></BarraSup> */}
    {/* <Menu></Menu> */}
    
   
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/servicios" element={<Servicios />}></Route>
      <Route path="/especiales" element={<Footer />}></Route>
      <Route path="/about" element={<Nosotros/>}></Route>
      <Route path="/especialidades" element={<Login/>}></Route>
      <Route path="/testimoniales" element={<RegistrationForm/>}></Route>
    </Routes>
  </Router>

  
  
  );
}

export default App;
