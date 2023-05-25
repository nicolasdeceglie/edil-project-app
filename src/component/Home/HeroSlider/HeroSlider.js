import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../../images/slide/s1.jpg';
import SliderManImage1 from '../../../images/man.png';

const HeroSlider = () => {
    return (
            <section className="hero-slider-area">
                <Grid className="hero-slides owl-carousel">
                    <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                          style={{backgroundImage: `url(${SliderImage1})`}}>
                        <Grid container spacing={3} className="sLider-grid-item websitePadding">
                            <Grid item lg={12} className="text-center">
                                <span>WE MAKE</span>
                                <h1>Dream House</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                                    dicta<br/> sapiente, quo in minus nostrum praesentium quidem.</p>
                                <a href="javascript:" className="theme_btn get_start">Get details</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
    );
}

export default HeroSlider;
