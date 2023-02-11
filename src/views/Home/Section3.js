import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dentista1 from "../../assets/img/Doctores/doc_experto.png";
import "./Home.scss";

export default function Section3() {
  return (
    <div name="section2" className='content d-flex  container-fluid  bg-img'>
        <div className='row'> 
            <div className='col-lg-4  col-sm-12 d-flex justify-content-center align-items-center' >
                <h1 className='text-primary text-center'> En mi CDA somos expertos en </h1>
            </div>
            <div className='col-lg-4 col-sm-12  d-flex justify-content-center align-items-center'>
            <ul className=''>
                <li className='text-dark'> <h3>Implantologia oral</h3></li>
                <li className='text-dark'><h3> Endodocia</h3></li>
                <li className='text-dark'><h3> Periodoncia</h3></li>
                <li className='text-dark'><h3> Maxilofacial</h3></li>
                <li className='text-dark'><h3> Ortodoncia</h3></li>
                <li className='text-dark'><h3> </h3></li>
                <li className='text-dark'><h3> Odontopediatrá</h3></li>
            </ul>
            </div>
            <div className='col-lg-4 col-sm-12 '>
                  <img className="img-section2" src={dentista1} />
            </div>
        </div>
    </div>
  )
}
