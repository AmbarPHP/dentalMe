import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import doc1 from "../../assets/img/Doctores/doc1.png";
import doc2 from "../../assets/img/Doctores/doc2.png";
import doc3 from "../../assets/img/Doctores/doc3.png";
import doc4 from "../../assets/img/Doctores/doc4.png";
import Nosotros2 from './Nosotros2';



export default function Nosotros() {
    return (
        <div > 
        <Container>
            <Row>
                <div className="col-sm-12 text-center">
                    <h3 className="title text-uppercase">General dentists</h3>
                </div>
            </Row>
            <Row className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="sc_team_item sc_team_item_style_2">
                    <div className="sc_team_item_avatar">
                            <img className="sc_image sc_image_shape_round" 
                            width="80" height="80" alt="dr-joseph-phillips.jpg" 
                            src={doc1}/>
                        </div>
                        <div className="team_item_info-container">
                            <div className="sc_team_item_info">
                                <h5 className="sc_team_item_title"><a href="#">Dr. Joseph Phillips</a></h5>
                                <div className="sc_team_item_position">Senior Doctor</div>
                                <div className="sc_team_item_description"><span className="sc_team_item_description_span">Lorem ipsum dolor sit amet, consectetur...</span>
                                </div>
                                <div className="sc_socials">
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-facebook"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-skype"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-twitter"></a>
                                    </div>
                                </div>
                                <div className="sc_team_item_description_span_icon_container">
                                    <span className="sc_team_item_description_span_icon sc_icon icon-plus"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="sc_team_item sc_team_item_style_2">
                    <div className="sc_team_item_avatar">
                            <img className="sc_image sc_image_shape_round" 
                            width="80" height="80" alt="dr-joseph-phillips.jpg" 
                            src={doc2}/>
                        </div>
                        <div className="team_item_info-container">
                            <div className="sc_team_item_info">
                                <h5 className="sc_team_item_title"><a href="#">Dr. Edward Grey</a></h5>
                                <div className="sc_team_item_position">Senior Doctor</div>
                                <div className="sc_team_item_description"><span className="sc_team_item_description_span">Lorem ipsum dolor sit amet, consectetur...</span>
                                </div>
                                <div className="sc_socials">
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-facebook"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-skype"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-twitter"></a>
                                    </div>
                                </div>
                                <div className="sc_team_item_description_span_icon_container">
                                    <span className="sc_team_item_description_span_icon sc_icon icon-plus"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="sc_team_item sc_team_item_style_2">
                    <div className="sc_team_item_avatar">
                            <img className="sc_image sc_image_shape_round" 
                            width="80" height="80" alt="dr-joseph-phillips.jpg" 
                            src={doc3}/>
                        </div>
                        <div className="team_item_info-container">
                            <div className="sc_team_item_info">
                                <h5 className="sc_team_item_title"><a href="#">Dr. Marta Green</a></h5>
                                <div className="sc_team_item_position">Senior Doctor</div>
                                <div className="sc_team_item_description"><span className="sc_team_item_description_span">Lorem ipsum dolor sit amet, consectetur...</span>
                                </div>
                                <div className="sc_socials">
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-facebook"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-skype"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-twitter"></a>
                                    </div>
                                </div>
                                <div className="sc_team_item_description_span_icon_container">
                                    <span className="sc_team_item_description_span_icon sc_icon icon-plus"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="sc_team_item sc_team_item_style_2">
                        <div className="sc_team_item_avatar">
                            <img className="sc_image sc_image_shape_round" 
                            width="80" height="80" alt="dr-joseph-phillips.jpg" 
                            src={doc4}/>
                        </div>
                        <div className="team_item_info-container">
                            <div className="sc_team_item_info">
                                <h5 className="sc_team_item_title"><a href="#">Dr. Nick Kelly</a></h5>
                                <div className="sc_team_item_position">Senior Doctor</div>
                                <div className="sc_team_item_description">
                                    <span className="sc_team_item_description_span">
                                        Lorem ipsum dolor sit amet, consectetur...</span>
                                </div>
                                <div className="sc_socials">
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-facebook">

                                        </a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-skype"></a>
                                    </div>
                                    <div className="sc_socials_item">
                                        <a href="#" target="_blank" className="sc_icon sc_icon_round icon-twitter"></a>
                                    </div>
                                </div>
                                <div className="sc_team_item_description_span_icon_container">
                                    <span className="sc_team_item_description_span_icon sc_icon icon-plus"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        
   
            <Row className="row">
                <div className="col-sm-12 text-center">
                    <a href="#" className="btn btn-default btn-lg btn-view">View All Specialists</a>
                </div>
            </Row>
        </Container>

        <Nosotros2></Nosotros2>
        </div>
    )
}
