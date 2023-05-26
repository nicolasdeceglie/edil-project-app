import React from "react";
import Header from "../Home/Header/Header";
import HeroArea from "../About/HeroArea/HeroArea";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { useParams } from "react-router-dom";
import { useGet } from "../../_Utils/Hooks";
import Slider from "react-slick";

const SinglePortfolio = () => {
    const { id } = useParams()
    const { data: project, error } = useGet('http://localhost:8080/users/project', id)
    const base64prefix = "data:image/jpeg;base64,"
    console.log(project)
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    if (project) {
        return (
            <Grid>
                <Header />
                <HeroArea slug="I nostri progetti" title="I nostir ultimi progetti " />
                <section className="portfolio-details section-padding">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item lg={12} md={12} >
                            <Grid className="portfolio-single-content">
                                <Slider {...settings}>
                                    {project.images.map((image) => (
                                        <img src={`${base64prefix}${image.image}`} alt={image.name} />
                                    ))}
                                </Slider>
                                <Grid className="mt-45">
                                    <Grid container spacing={3}>
                                        <Grid item md={8} sm={7} xs={12} >
                                            <h3>${project.name}</h3>
                                            <p>${project.description}</p>
                                        </Grid>
                                        <Hidden smDown>
                                            <Grid item md={1}></Grid>
                                        </Hidden>
                                        <Grid item md={3} sm={5} xs={12} >
                                            <Grid className="project-info">
                                                <ul>
                                                    <li>
                                                        <Grid className="info-left">
                                                            Client
                                                        </Grid>
                                                        <Grid className="info-right">
                                                            Mugli Studio
                                                        </Grid>
                                                    </li>
                                                    <li>
                                                        <Grid className="info-left">
                                                            Prodotti usati
                                                        </Grid>
                                                        {project.products.map(products => (
                                                            <Grid className="info-right">
                                                                ${products.product}
                                                            </Grid>
                                                        )
                                                        )
                                                        }

                                                    </li>
                                                    <li>
                                                        <Grid className="info-left">
                                                            Services
                                                        </Grid>
                                                        <Grid className="info-right">
                                                            Design, Coding
                                                        </Grid>
                                                    </li>
                                                    <li>
                                                        <Grid className="info-left">
                                                            Date
                                                        </Grid>
                                                        <Grid className="info-right">
                                                            10 May 2023
                                                        </Grid>
                                                    </li>

                                                </ul>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </Grid>
        );
    }

};

export default SinglePortfolio;