import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import emailjs from '@emailjs/browser'
import { useGet } from "../../../_Utils/Hooks";
const ContactForm = () => {
  const form = useRef();
  const {data: comuni , err} = useGet('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni')

  const formSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_2wdjzol', 'template_92p6cgk', form.current, 'sV4HJgtZFpIqmC-Ti')
    .then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    }) 
  };

  const formChange = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-form-section section-padding websitePadding">
      <Grid container spacing={3} className="">
        <Grid item xl={12} md={12} xs={12} className="">
          <Grid
            className="contact-form-main wow animated fadeInUp"
            data-wow-duration="2s"
          >
            <form ref={form} onSubmit={formSubmit} >
              <Grid container spacing={3} >
                <Grid item lg={4} xs={12} md={4} className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Inserisci il tuo nome"
                    onChange={formChange}
                  />
                </Grid>
                <Grid item lg={4} xs={12} md={4} className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Inserisci il tuo numero di telefono"
                  />
                </Grid>
                <Grid item lg={4} xs={12} md={4} className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Inserisci una breve descrizione delle eventuali modifiche da fare"
                  />
                </Grid>
                <Grid item lg={4} xs={12} md={4} className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Inserisci città"
                  />
                </Grid>
              </Grid>
              <Grid className="row">
                <Grid className="form-group col-12 col-md-12 col-sm-12 col-xl-12 message-box">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </Grid>
              </Grid>
              <Grid className="send-message mt-35 text-center">
                <button type="submit" className="btn-send">
                  send
                </button>
              </Grid>
              <span className="form-message"></span>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default ContactForm;
