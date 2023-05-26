import React from "react";
import { Grid } from '@material-ui/core';
import BG_HERO from '../../../images/BG_HERO.jpg'
const HeroArea = (props) => (
  <section className="page-banner-wrap bg-contain bg-bottom d-flex align-items-center"
           style={{backgroundImage: `url(${BG_HERO})`}}>
    <Grid container spacing={3} className="websitePadding">
      <Grid item md={12} xs={12} className="text-center">
        <Grid className="page-banner">
          <span>{props.slug}</span>
          <h2>{props.title}</h2>
        </Grid>
      </Grid>
    </Grid>
  </section>
);

export default HeroArea;
