import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="call-to-action-wrap section-padding text-white bg-cover bg-bottom" style={{ backgroundImage: `url(${""})` }}>
      <Grid container spacing={3} className="websitePadding">
        <Grid item md={12} lg={12} className="col-md-12 col-lg-8 offset-lg-2 text-center">
          <Grid className="call-to-action">
            <h2>Richiedi un preventivo in pochi minuti</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste tenetur quasi tempora, dolore magnam, in quas perspiciatis rem, reiciendis, repellat placeat deserunt adipisci porro aperiam? Officia, sapiente, temporibus!</p>
            <Link to="/contact" className="theme_btn call-action-btn">Contattaci</Link>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default CallToAction;
