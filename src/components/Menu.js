import React, { useState, useEffect } from "react";

import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

export default function BarraSup() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (windowWidth < 571) {
    return <MenuMobile />;
  } else {
    if (windowWidth > 1000) {
      return (
        <div>
          <MenuDesktop />
        </div>
      );
    }
  }
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

}
