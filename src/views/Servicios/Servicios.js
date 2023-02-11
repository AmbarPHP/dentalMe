import React from 'react';

import Main from '../Others/Main';
import Footer from '../Footer';

import Section1 from './Section1';
import Section5 from './Section5';
import Section2 from './Section2';
import Section4 from './Section4';
import Section6 from './Section6';
import "./servicios.scss"


export default function Servicios() {
  return (
    <div>
         
        
         <Section5></Section5>
         <Section2></Section2>
         <Section1></Section1>
         {/* <Section6></Section6>  */}
            {/*<Section4></Section4>
           
           */}
           <Footer></Footer>
    </div>
  );
}
