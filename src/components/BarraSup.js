import React, { useEffect, useState } from "react";
import BarraSupMobile from "./BarraSupMobile";
import BarraSupDesktop from "./BarraSupDesktop";

//muestra datos de la empresa, telefono y direccion
export default function BarraSup() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function DetectDiviseSize() {
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      //reacciona al cambio de tamaño
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  }

  
    
  DetectDiviseSize();
    if (windowWidth < 572) {

      return <BarraSupMobile />;
    } else {
      if (windowWidth > 572) {
        return <BarraSupDesktop />;
      }
      
    }
}
