import React from 'react'
import "./Pricing.scss";

export default function Pricing() {
    return (
        <section className="section block bg-contrast">
            <div className="container py-4">
                <div className="row gap-y align-items-center">
                    <div className="col-md-5 me-md-auto">
                        <h2 className="font-lg regular">Unleash<br/>your potential</h2>
                        <p>We have made the most affordable prices just for you. Go ahead and try our brand new platform</p>
                        <a href="#" className="btn btn-rounded btn-info mt-5">Request a free trial</a>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-info-gradient py-4 rounded text-contrast shadow pricing text-center">
                            <h2 className="bold text-contrast font-md mb-5">Business</h2>
                            <ul className="list-unstyled">
                                <li>Cras justo odio</li>
                                <li>Dapibus ac facilisis in</li>
                                <li>Morbi leo risus</li>
                                <li>Porta ac consectetur ac</li>
                                <li>Vestibulum at eros</li>
                            </ul>
                            <div className="pricing-value">
                                <span className="price">29.99</span>
                            </div>
                            <a href="#" className="btn btn-rounded btn-contrast mt-5">Buy now</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-contrast py-4 rounded shadow pricing text-center">
                            <h2 className="bold font-md mb-5">Personal</h2>
                            <ul className="list-unstyled">
                                <li className="strike-through">Cras justo odio</li>
                                <li className="strike-through">Dapibus ac facilisis in</li>
                                <li className="">Morbi leo risus</li>
                                <li className="">Porta ac consectetur ac</li>
                                <li className="">Vestibulum at eros</li>
                            </ul>
                            <div className="pricing-value">
                                <span className="price text-dark">9.99</span>
                            </div>
                            <a href="#" className="btn btn-rounded btn-outline-info mt-5">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
