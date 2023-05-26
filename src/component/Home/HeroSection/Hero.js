import React from 'react';
import Grid from '@material-ui/core/Grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BG_HERO from '../../../images/BG_HERO.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-slider-area">
            <Grid className="hero-slides owl-carousel">
                <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                      style={{backgroundImage: `url(${BG_HERO})`}}>
                    <Grid container spacing={3} className="sLider-grid-item websitePadding">
                        <Grid item lg={12} md={12} xs={12} className="text-center">
                            <span>CREIAMO</span>
                            <h1>LA TUA CASA DEI SOGNI</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                                dicta<br/> sapiente, quo in minus nostrum praesentium quidem.</p>
                            <Link to='/contact' className="theme_btn get_start">RICHIEDI UN PREVENTIVO</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
)
}

export default Hero;
