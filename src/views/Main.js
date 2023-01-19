import React from 'react';


import CarouselImgs from "./CarouselImgs";
import "./Main.scss";
import Pricing from './Pricing';
import PathSucces from './PathSucces';

import PromocionSection from './PromocionSection';
import PhotoView  from "./PhotoView";
import PhotoView2  from "./PhotoView2";

const Main = () => {
  return (
   
      <div className="d-flex justify-content-between align-items-center">
        <div class="container py-4 demo-blocks">
         
          <CarouselImgs></CarouselImgs>
          <PhotoView2></PhotoView2>
           <PromocionSection></PromocionSection>
          <section>
          
          </section>
          <Pricing></Pricing>
          <PathSucces></PathSucces> 
          
        </div>
      </div>

  
  );
};

export default Main;