import React from "react";
import Grid from '@material-ui/core/Grid';
import CallToActionBg from '../../../images/call_action_bg.jpg';
import SliderImage1 from "../../../images/slide/s1.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="call-to-action-wrap section-padding text-white bg-cover bg-bottom" style={{ backgroundImage: `url(${SliderImage1})` }}>
      <Grid container spacing={3} className="websitePadding">
        <Grid item lg={2}></Grid>
        <Grid item md={12} lg={8} className="col-md-12 col-lg-8 offset-lg-2 text-center">
          <Grid className="call-to-action">
            <h2>Let's Make Awesome Things, Together.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste tenetur quasi tempora, dolore magnam, in quas perspiciatis rem, reiciendis, repellat placeat deserunt adipisci porro aperiam? Officia, sapiente, temporibus!</p>
            <Link to="/contact" className="theme_btn call-action-btn">Start your project</Link>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default CallToAction;
