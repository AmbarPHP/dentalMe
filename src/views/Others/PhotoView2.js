import React from 'react'
import "./PhotoView2.scss";
import testimonial from "../assets/img/testimonial.png";

export default function PhotoView2() {
    return (
        <section className="singl-testimonial shadow" >
            <div className="container-fluid py-0" >
                <div className="row align-items-center gradient gradient-primary-dark text-contrast" >
                    <div className="col-md-3 mx-auto py-4 py-md-0" >
                        <p className="badge bg-contrast text-dark shadow rounded-pill py-2 px-4 text-uppercase mb-0" > innova tu dentatura</p >
                        <p className="font-md bold mt-1 text-contrast" > Dale confianza y renueva su dentadura</p >
                        <hr className="my-4" />
                        <div className="small text-contrast" >
                            <span className="bold d-block" > Mejores precios </span > Promociones en el 2023</div >
                    </div >
                    <div className="col-12 col-md-7 my-2 image-background cover" >
                        <img src={testimonial} className="img-fluid" alt="" />
                    </div >
                </div >
            </div >
        </section >
    )
}
