import React from "react";
import Grid from '@material-ui/core/Grid';
import Wedo1 from '../../../images/wedo/w1.png';
import Wedo2 from '../../../images/wedo/w2.png';
import Wedo3 from '../../../images/wedo/w3.png';
import Wedo4 from '../../../images/wedo/w4.png';
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <section className="what-we-do section-padding websitePadding" id="whatwedo">
      <Grid container spacing={3}>
        <Grid item lg={1} xs={12}></Grid>
        <Grid item lg={10} xs={12} className="offset-lg-1 col-12 text-center">
          <Grid className="what-we-do-title">
            <span>what we do</span>
            <h2>We build strong brands and grow businesses through branded services, <span>digital storytelling.</span></h2>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={Wedo1} alt="" />
            <h3>Residential Design</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={Wedo2} alt="" />
            <h3>Intorior Design</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={Wedo3} alt="" />
            <h3>Halls Design</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={Wedo4} alt="" />
            <h3>Complex Design</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>

        <Grid item lg={12} className="what-we-do-button text-center">
          <Link to="/services" className="theme_btn">All Services</Link>
          <Link to="/contact" className="theme_btn btn_tb">Contact us now</Link>
        </Grid>
      </Grid>
    </section>
  );
};

export default WhatWeDo;
