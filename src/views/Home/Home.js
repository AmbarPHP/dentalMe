import React from 'react';
import Hero from './Hero';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Footer from '../Footer';
// import Section5 from './Home/Section5';
// import Section6 from './Home/Section6';


export default function Servicios() {
  return (
    <div>
            <Hero></Hero>
            {/* <Section1></Section1>  */}
            <Section2></Section2>
            {/* <Section3></Section3> */}
            <Section4></Section4>
            <Section5></Section5>
           
           <Footer></Footer>
      
    </div>
  );
}