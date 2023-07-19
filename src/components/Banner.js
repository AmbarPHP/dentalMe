import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Menu from "./Menu";


export default function Banner({ name }) {
  return (
    <div className='overlay-blue  h-100'>
      <div className='gb-primary-img-servicios ' >
        <Row className="py-5">
          {/* haciendo mas espacio en el bg
              <div style={{height:100+"px"}}></div> */}
          <Menu></Menu>
        </Row>
        <Row className="mb-5 mt-5 d-flex justify-content-center  flex-row" >
          <Col md={6} lg={8} sm={12} >
            <h1 className='text-light bold font-3rem' >{name}</h1>  </Col>
        </Row>

      </div>
    </div>
  )
}
