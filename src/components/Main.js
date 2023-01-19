import React from 'react';


import img1 from "../assets/img/dental1.jpeg"

const Main = () => {
  return (
   
      <div className="d-flex justify-content-between align-items-center">
        <div class="container py-4 demo-blocks">
          <section class="section block bg-contrast">
            <div class="row gap-y">
              <div class="col-12 col-md-6">
                <div class="section-heading">
                  <p class="text-uppercase">Get in touch</p>
                  <h2 class="font-md bold">We'd like to hear from you</h2>
                </div>
                <p class="lead mb-5">Don't hesitate to get in contact with us no matter your request. We are here to help you.</p>
                <ul class="list-unstyled list-icon">
                  <li>
                    <i class="fas fa-map-marker text-primary" ></i>
                    <p>123 Street, City, Country</p>
                  </li>
                  <li>
                    <i class="fas fa-phone text-primary">
                    </i>
                      <p>(123) 456-7890</p>
                  </li>
                  <li>
                    <i class="fas fa-envelope text-primary">
                    </i>
                    <p>
                      <a href="mailto:support@5studios.net">support@5studios.net</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6">
                
                <div class="response-message">
                  <div class="section-heading">
                    <i class="fas fa-check font-lg">
                    </i>
                    <p class="font-md m-0">Thank you!</p>
                    <p class="response">Your message has been send, we will contact you as soon as possible.</p>
                    <img src={img1} className="img-fluid" alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
  
  );
};

export default Main;