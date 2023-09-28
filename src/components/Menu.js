import React, { useState, useEffect } from "react";

import MenuMobile from "./MenuMobile";

import MenuDesktop from "./MenuDesktop";

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

  return <>{windowWidth < 571 ? <MenuMobile /> : <MenuDesktop />}</>;
}
