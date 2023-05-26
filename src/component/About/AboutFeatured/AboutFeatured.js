import React from "react";
import { Grid } from "@material-ui/core";
import AboutUsImages from '../../../images/AbouUsImage.jpg'
const AboutFeatured = () => {
  return (
    <section className="featured-about-wrap sada-bg section-padding">
      <Grid container spacing={3} className="websitePadding">
        <Grid item md={6} sm={12} xs={12} className="col-lg-6 col-md-12">
          <Grid className="video-section-content video-section-content-1">
            <h2>Perché sceglierci</h2>
            <ul>
              <li>
                <h3>Impegno</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <h3>Affidabilità e onestà</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <h3>Continuo miglioramento</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} xs={12} className="col-lg-5 offset-lg-1 col-md-12">
          <Grid className="video-section-img">
            <img src={AboutUsImages} alt="about-us" style={{borderRadius: '8px'}}/>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default AboutFeatured;
