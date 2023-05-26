import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CARPENTIERE from '../../../images/CARPENTIERE.png'
import CountUp from 'react-countup';

const CounterUp = () => {

   

    return (
        <section className="funfact-countup section-padding">
            <Grid container spacing={3} className="websitePadding right-counter-image">
                <h1 className="counter-title">I nostri <br/>Risultati</h1>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                        <span className="counter"> <CountUp start={0} duration={3} end={20}/></span>
                        Anni di esperienza
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                    <span className="counter"> <CountUp start={0} duration={3} end={200}/></span>
                        Clienti soddisfatti
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                    <span className="counter"> <CountUp start={0} duration={3} end={120}/></span>
                        Appalti vinti
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                    <span className="counter"> <CountUp start={0} duration={3} end={200}/></span>

                        Clienti soddisfatti
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-4 col-md-12">
                    <Grid className="fact-img">
                        <img src={CARPENTIERE} alt=""/>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default CounterUp;
