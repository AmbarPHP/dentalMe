import React from 'react';

import Main from '../Others/Main';
import Footer from '../../components/Footer';

import Section1 from './Section1';
import Section5 from './Section5';
import Section2 from './Section2';
import Section4 from './Section4';
import Section6 from './Section6';
import Banner from './Banner';
import "./servicios.scss"


export default function Servicios() {
  return (
    <div>
         
         <Banner></Banner>
         <Section1></Section1>
         <Section5></Section5>
         <Section2></Section2>
         
         {/* <Section6></Section6>  */}
            {/*<Section4></Section4>
           
           */}
           <Footer></Footer>
    </div>
  );
}
