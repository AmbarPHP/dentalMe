import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.scss';
import Servicios from './views/Servicios';
import Footer from './views/Footer';
import Nosotros from './views/Conocemos/Nosotros';
import Home from './views/Home';
import Header from "./views/Header";
import BarraSup from './views/BarraSup';

function App() {
  return (
<Router>
    <BarraSup></BarraSup>
    <Header></Header>
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/servicios" element={<Servicios />}></Route>
      <Route path="/especiales" element={<Footer />}></Route>
      <Route path="/nosotros" element={<Nosotros/>}></Route>
    </Routes>
  </Router>

  
  
  );
}

export default App;
