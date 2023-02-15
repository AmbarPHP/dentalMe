import React from 'react';
import Hero from './Hero';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from '../Footer';



export default function Home() {
  return (
    <div>
           <Hero></Hero>
           <Section2></Section2>
           <Section4></Section4>
            {/* <Section1></Section1>  */}
            
            {/* <Section3></Section3>  */}
            <Section5></Section5>
           <Section6></Section6>
           <Footer></Footer>
      
    </div>
  );
}