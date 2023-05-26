import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useGet } from '../../../_Utils/Hooks';

const OurPortfolio = () => {
    const { data: projects, error } = useGet('http://localhost:8080/users/projects');
    const base64prefix = "data:image/jpeg;base64,"
    const getRandomIndex = (length) => {
        return Math.floor(Math.random() * length)
    };

    if (projects) {
        return (
            <Fragment>
                <section className="our-portfolio section_bg portfolio-two section-padding" id="portfolio">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item xs={12} className="text-center">
                            <Grid className="theme-heading">
                                <span>Progetti</span>
                                <h2>I nostri ultimi progetti</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="portfolio-grid-items">
                        {projects.slice(0, 6).map(item => {
                            const randomIndex = getRandomIndex(item.images.length)
                            const randomImage = item.images[randomIndex] ? item.images[randomIndex].image : null
                            console.log(randomImage)
                            return (
                                <Grid key={item.id} item md={4} sm={6} className="single-portofolio grid-item d-inline-block building bg-cover text-white" style={{ backgroundImage: `url(${base64prefix}${randomImage})` }}>
                                    <Grid className="portfolio-content">
                                        <h3>{item.name}</h3>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        <Link to={`/project/${item.id}`} className="read-more-port">READ MORE <i className="fas fa-arrow-right"></i></Link>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid className="ajax_load_btn text-center mt-60">
                        <a href="#" className="theme_btn">VIEW MORE</a>
                    </Grid>
                </section>
            </Fragment>
        )
    }
}

export default OurPortfolio;
