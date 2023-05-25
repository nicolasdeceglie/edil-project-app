import React from "react";
import Header from "../Home/Header/Header";
import HeroArea from "../About/HeroArea/HeroArea";
import SinglePortfolioImg from '../../images/portfolio-details.jpg';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { useParams } from "react-router-dom";
import { useGet } from "../../_Utils/Hooks";

const SinglePortfolio = () => {
    const { id } = useParams()
    const { data: project, error } = useGet('http://localhost:8080/users/project', id)
    console.log(project)

    if (project) {

        return (
            <Grid>
                <Header />
                <HeroArea slug="OUR PORTFOLIO" title="Portfolio Details" />
                <section className="portfolio-details section-padding">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item lg={12} md={12} className="">
                            <Grid className="portfolio-single-content">
                                <img src={SinglePortfolioImg} alt="" />
                                <Grid className="mt-45">
                                    <Grid container spacing={3}>
                                        <Grid item md={8} sm={7} xs={12} className="">
                                            <h3>{project.name}</h3>
                                            <p>{project.description}.</p>
                                        </Grid>
                                        <Hidden smDown>
                                            <Grid item md={1}></Grid>
                                        </Hidden>
                                        <Grid item md={3} sm={5} xs={12} className="">
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
                                                            10 May 2019
                                                        </Grid>
                                                    </li>
                                                    <li>
                                                        <Grid className="info-left">
                                                            share
                                                        </Grid>
                                                        <Grid className="info-right social-p-link">
                                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
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