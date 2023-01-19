import React from 'react';
import { FaWhatsapp , FaFacebook, FaTwitter } from 'react-icons/fa';
import { BiMap, BiPhoneCall} from "react-icons/bi";

export default function BarraSup() {
  return (
    <div  className="d-flex justify-content-end align-items-center">
    <div class="container py-4 demo-blocks">
      <section class="section block bg-contrast">
 
            <div class="section-heading">
              <span> <BiMap/> Brodway New York 100        </span>
             <span>  <BiPhoneCall/>Tel: 55346789          </span>
             <span> contacto@medica-dental</span>
             <span>       <FaFacebook />   <FaTwitter />    <FaWhatsapp  /></span>
        
        </div>
      </section>
      </div>
      </div>
  )
}

