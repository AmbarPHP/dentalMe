import { React, useEffect, useState } from 'react';
import data from "./data.json";
import {Container, Row, Col} from "react-bootstrap"

export default function ListaPrecios() {
  return (
    <div className="my-5 " >
      <Row className="d-flex justify-content-center align-items-start mx-auto bg-light ">
        <h1 className='text-primary d-flex justify-content-center font-3rem bold my-5 '>Otro Servicios </h1>

        {
          data && data.length > 0 && data.map((item) =>
            <Col lg={3} key={item.id} className='bg-primary mx-5  px-5'>
              <h3 className='text-light bold '><span> {item.descripcion} </span></h3>
                <img style={{height:260+"px", width:"auto"}} src={require('../../assets/img/productos/' + item.picture + '.png')} />
                
                <p className='text-light font-20'>Los precios son validos hasta el 1 de septiembre</p>
                <p className='text-contrast font-20'>Incluye revision y tiene garantia </p>
                <h2 className='text-light bold' >${item.precio}</h2>
              
            </Col>

          )
        }
      </Row>
    </div>
  );
}
