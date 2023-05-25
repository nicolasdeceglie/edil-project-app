import React from "react";
import Grid from "@material-ui/core/Grid";

const ContactInfo = () => {
  return (
    <section className="contact-page-wrap section-padding">
      <Grid container spacing={3} className="contact-deatils websitePadding">
        <Grid item lg={3} sm={6} className="">
          <Grid className="single-contact-details">
            <h3>Call Us</h3>
            <p>+12 974 729 000</p>
            <p>+12 888 729 600</p>
          </Grid>
        </Grid>
        <Grid item lg={3} sm={6} className="">
          <Grid className="single-contact-details">
            <h3>Address</h3>
            <p>
              1216 mirpur dhaka <br />
              320 cumilla
            </p>
          </Grid>
        </Grid>
        <Grid item lg={3} sm={6} className="">
          <Grid className="single-contact-details">
            <h3>Skype id</h3>
            <p>@userthemes</p>
            <p>@monidatheme</p>
          </Grid>
        </Grid>
        <Grid item lg={3} sm={6} className="">
          <Grid className="single-contact-details">
            <h3>Email</h3>
            <p>userthemes@gmail.com</p>
            <p>info@modinathme.com</p>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default ContactInfo;
