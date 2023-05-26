import React from "react";
import WHATWEDO1 from '../../../images/WHATWEDO1.png'
import WHATWEDO2 from '../../../images/WHATWEDO2.png'
import WHATWEDO3 from '../../../images/WHATWEDO3.png'
import WHATWEDO4 from '../../../images/WHATWEDO4.png'
import Grid from "@material-ui/core/Grid";

const ServiceItem = [
    {
        id: 1,
        title: 'Residential Design',
        image: WHATWEDO1,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 2,
        title: 'Residential Design',
        image: WHATWEDO2,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 3,
        title: 'Residential Design',
        image: WHATWEDO3,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 4,
        title: 'Residential Design',
        image: WHATWEDO4,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 5,
        title: 'Residential Design',
        image: WHATWEDO1,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 6,
        title: 'Residential Design',
        image: WHATWEDO2,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 7,
        title: 'Residential Design',
        image: WHATWEDO1,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 8,
        title: 'Residential Design',
        image: WHATWEDO4,
        discription: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },

];

const Services = () => {
    return (
        <section className="what-we-do section-padding">
            <Grid container spacing={3} className="websitePadding">
                <Grid item lg={1}></Grid>
                <Grid item lg={10} xs={12} className="text-center">
                    <Grid className="what-we-do-title">
                        <span>COOSA OFFRIAMO</span>
                        <h2>Lorem ipsum casuale , <span>digital storytelling.</span>
                        </h2>
                    </Grid>
                </Grid>
                {ServiceItem.map(service => {
                    return (
                        <Grid key={service.id} item md={3} sm={6} className="text-center">
                            <Grid className="single-we-do">
                                <img src={service.image} alt=""/>
                                <h3>{service.title}</h3>
                                <p>{service.discription}</p>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default Services;
