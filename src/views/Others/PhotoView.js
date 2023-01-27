import React from 'react'
import img2 from "../assets/img/testimonial.png";
import "./PhotoView2.scss";

export default function PhotoView() {
    return (
        <div className="container">
            <div className="row gap-y align-items-center">
                <div className="col-md-6 order-md-last">
                    <div className="section-heading">
                        <h2 className="heading-line bold">
                            <span className="light">Promoción</span>
                            <br/>Limpieza Gratis</h2>
                        <p className="lead">Revision gratuita.</p>
                    </div>
                    <p className="mb-5 text-secondary lead">El cuidad de tus diaentes nunca debe esperar, estas en buenas manos, certificados con blue flag</p>
                    <a href="#!" className="btn btn-rounded btn-outline-darker">Learn More</a>
                </div>
                <div className="col-md-6">
                    <figure className="figure-box mockup ms-md-0">
                        <div className="screens cutout bottom-left aos-init aos-animate" data-aos="fade-up">
                            <img src={img2} className="img-fluid" alt=""/>
                        </div>
                        <div className="promo-box card shadow top-right">
                            <div style={{width:"40px"}} className=" circle-icon icon-lg bg-success p-2 rounded-circle center-flex shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shield stroke-contrast">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                                    </path>
                                </svg>
                            </div>
                            <div className="card-body">
                                <h2 className="small text-primary mb-3">Si tu sonrries, estamos contentos</h2>
                                <p className="text-dark bold">Sonrrie</p>
                                <p className="small">Todas nuestras promociones validas hasta febrero</p>
                            </div>
                        </div>
                        <div className="shapes-container">
                            <div className="shape pattern pattern-dots">
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}
