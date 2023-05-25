import React from "react";
import HeroArea from "../About/HeroArea/HeroArea";
import Header from "../Home/Header/Header";
import ServiceDetailsImg1 from '../../images/single-details.jpg';
import ServiceDetailsImg2 from '../../images/scol1.jpg';
import ServiceDetailsImg3 from '../../images/scol2.jpg';
import Grid from "@material-ui/core/Grid";

const ServiceDetailsPage = () => {
    return (
        <Grid>
            <Header />
            <HeroArea slug="OUR SERVICE" title="Service Details" />
            <section className="service-details-page section-padding">
                <Grid container spacing={3} className="websitePadding service-details-page-inner-area">
                    <Grid item lg={3} sm={4} xs={12} className="service-details-page-inner-left">
                        <Grid className="service-left-content">
                            <Grid className="service-cat">
                                <ul>
                                    <li><a href="javascript:">Painting <i className="fal fa-angle-right"></i></a></li>
                                    <li><a href="javascript:">Remodeling <i className="fal fa-angle-right"></i></a></li>
                                    <li><a href="javascript:">Refurbishment <i className="fal fa-angle-right"></i></a></li>
                                    <li><a href="javascript:">Hardwood flooring <i className="fal fa-angle-right"></i></a></li>
                                </ul>
                            </Grid>
                            <Grid className="service-boucher">
                                <h3>Brochure</h3>
                                <p>Apisicin sectetur adipisicing elit,do eiusmod tempor incididunt ut labore et dolore magna kobe.</p>
                                <Grid className="download-details">
                                    <a href="javascript:"><i className="fal fa-file-pdf"></i>HOME REMODELING.PDF</a>
                                    <a href="javascript:"><i className="fal fa-file-pdf"></i>WARRANTY INFOR.PDF</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={9} sm={8} xs={12} className="col-lg-9 col-md-6 service-details-page-inner-right">
                        <Grid className="service-details-content">
                            <img src={ServiceDetailsImg1} alt=""/>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                            <Grid container spacing={3} className="service-inner-area">
                                <Grid item sm={6} xs={12} className="single-service-col">
                                    <h3>Planning</h3>
                                    <img src={ServiceDetailsImg2} alt=""/>
                                    <p>Sbore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                </Grid>
                                <Grid item sm={6} xs={12} className="single-service-col">
                                    <h3>Our work process</h3>
                                    <img src={ServiceDetailsImg3} alt=""/>
                                    <p>Sbore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>
    );
};

export default ServiceDetailsPage;
