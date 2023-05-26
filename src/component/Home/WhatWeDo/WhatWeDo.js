import React from "react";
import Grid from '@material-ui/core/Grid';

import WHATWEDO1 from '../../../images/WHATWEDO1.png'
import WHATWEDO2 from '../../../images/WHATWEDO2.png'
import WHATWEDO3 from '../../../images/WHATWEDO3.png'
import WHATWEDO4 from '../../../images/WHATWEDO4.png'


import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <section className="what-we-do section-padding websitePadding" id="whatwedo">
      <Grid container spacing={3}>

        <Grid item lg={10} xs={12} className="offset-lg-1 col-12 text-center">
          <Grid className="what-we-do-title">
            <span>Cosa offriamo</span>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eveniet velit voluptatem voluptatibus omnis possimus quos impedit, repellat corrupti ad in perspiciatis, maiores alias similique optio vel?  <span>Quaerat, fugit eveniet?</span></h2>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={WHATWEDO1} alt="" style={{ borderRadius: '8px' }} />
            <h3>Ristrutturazioni</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={WHATWEDO2} alt="" style={{ borderRadius: '8px' }} />
            <h3>Pitturazione</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={WHATWEDO3} alt="" style={{ borderRadius: '8px' }} />
            <h3>Costruzioni Generali</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className="text-center">
          <Grid className="single-we-do">
            <img src={WHATWEDO4} alt="" style={{ borderRadius: '8px' }} />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid</p>
          </Grid>
        </Grid>

        <Grid item lg={12} className="what-we-do-button text-center">
          <Link to="/services" className="theme_btn">Servizi</Link>
          <Link to="/contact" className="theme_btn btn_tb">Contattaci</Link>
        </Grid>
      </Grid>
    </section>
  )
}

export default WhatWeDo
