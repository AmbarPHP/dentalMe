import React from 'react';


import CarouselImgs from "./CarouselImgs";
import "./Main.scss";
import Pricing from './Pricing';
import PathSucces from './PathSucces';
import BarraSup from './BarraSup';
import PromocionSection from './PromocionSection';
import PhotoView  from "./PhotoView";
import PhotoView2  from "./PhotoView2";

const Main = () => {
  return (
   
      <div className="d-flex justify-content-between align-items-center">
        <div class="container py-4 demo-blocks">
          <BarraSup></BarraSup>
          <PhotoView></PhotoView>
          <PhotoView2></PhotoView2>
          {/* <PromocionSection></PromocionSection>
          <section>
          <CarouselImgs></CarouselImgs>
          </section>
          <Pricing></Pricing>
          <PathSucces></PathSucces> */}
          
        </div>
      </div>

  
  );
};

export default Main;