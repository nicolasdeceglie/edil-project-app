import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CounterImage1 from '../../../images/funfact.png';
import CountUp from 'react-countup';

const CounterUp = () => {
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 2400) {
                setIsRender(true);
            } else {
                setIsRender(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="funfact-countup section-padding">
            <Grid container spacing={3} className="websitePadding right-counter-image">
                <h1 className="counter-title">Don’t Take <br/>Our Word for It</h1>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                        <span className="counter">{isRender ? <CountUp end={12}/> : '00'}</span>
                        Years of Experience
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                        <span>{isRender ? <CountUp end={120}/> : '00'}</span>
                        Happy Customers
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                        <span>{isRender ? <CountUp end={40}/> : '00'}</span>
                        Awards Won
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-2 col-md-6 mr-50">
                    <Grid className="single-countup">
                        <span>{isRender ? <CountUp end={300}/> : '00'}</span>
                        Satisfied Customers
                    </Grid>
                </Grid>
                <Grid item md={2} sm={6} xs={12} className="col-lg-4 col-md-12">
                    <Grid className="fact-img">
                        <img src={CounterImage1} alt=""/>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default CounterUp;
