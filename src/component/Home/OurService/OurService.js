import React from "react";
import Grid from '@material-ui/core/Grid';
import IconBuilding from '../../../images/icons/building.png';
import IconCap from '../../../images/icons/cap.png';
import IconCarry from '../../../images/icons/carry.png';
import IconMotro from '../../../images/icons/motor.png';
import IconWheel from '../../../images/icons/wheel.png';
import IconDil from '../../../images/icons/dil.png';

const OurService = () => {
    
    return (
        <section className="our-services pt-120 pb-80" id="service">
            <Grid container spacing={3} className="websitePadding">
                <Grid item md={4} sm={6} xs={12} className="">
                    <Grid className="single-service">
                        <Grid className="service-icon">
                            <span className="svg-gb" dangerouslySetInnerHTML={{
                                __html: "<svg className=\"icon-shape\"\n" +
                                    "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                    "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                    "                                         width=\"72px\" height=\"81px\">\n" +
                                    "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                    "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                    "                                    </svg>"
                            }} />

                            <Grid className="service-shape-icon">
                                <img src={IconBuilding} alt="" />
                            </Grid>
                        </Grid>
                        <h3>Design build</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="">
                    <Grid className="single-service">
                        <Grid className="service-icon">
                            <span dangerouslySetInnerHTML={{
                                __html: "<svg className=\"icon-shape\"\n" +
                                    "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                    "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                    "                                         width=\"72px\" height=\"81px\">\n" +
                                    "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                    "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                    "                                    </svg>"
                            }} />

                            <Grid className="service-shape-icon">
                                <img src={IconCap} alt="" />
                            </Grid>
                        </Grid>
                        <h3>General Construction</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="">
                    <Grid className="single-service">
                        <Grid className="service-icon">
                            <span dangerouslySetInnerHTML={{
                                __html: "<svg className=\"icon-shape\"\n" +
                                    "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                    "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                    "                                         width=\"72px\" height=\"81px\">\n" +
                                    "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                    "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                    "                                    </svg>"
                            }} />

                            <Grid className="service-shape-icon">
                                <img src={IconCarry} alt="" />
                            </Grid>
                        </Grid>
                        <h3>Floors & Roofs</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="">
                    <Grid className="single-service">
                        <Grid className="service-icon">
                            <span className="svg-gb" dangerouslySetInnerHTML={{
                                __html: "<svg className=\"icon-shape\"\n" +
                                    "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                    "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                    "                                         width=\"72px\" height=\"81px\">\n" +
                                    "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                    "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                    "                                    </svg>"
                            }} />

                            <Grid className="service-shape-icon">
                                <img src={IconMotro} alt="" />
                            </Grid>
                        </Grid>
                        <h3>Building Construction</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="">
                    <Grid className="single-service">
                        <Grid className="service-icon">
                            <span dangerouslySetInnerHTML={{
                                __html: "<svg className=\"icon-shape\"\n" +
                                    "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                    "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                    "                                         width=\"72px\" height=\"81px\">\n" +
                                    "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                    "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                    "                                    </svg>"
                            }} />

                            <Grid className="service-shape-icon">
                                <img src={IconWheel} alt="" />
                            </Grid>
                        </Grid>
                        <h3>Rooms & Halls</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="">
                    <Grid className="single-service">
                        <Grid className="service-icon">
                            <span dangerouslySetInnerHTML={{
                                __html: "<svg className=\"icon-shape\"\n" +
                                    "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                    "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                    "                                         width=\"72px\" height=\"81px\">\n" +
                                    "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                    "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                    "                                    </svg>"
                            }} />

                            <Grid className="service-shape-icon">
                                <img src={IconDil} alt="" />
                            </Grid>
                        </Grid>
                        <h3>Architecture Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}


export default OurService;
