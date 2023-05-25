import React from "react";
import Grid from "@material-ui/core/Grid";
import BoxImage1 from '../../../images/icons/carry.png';
import BoxImage2 from '../../../images/icons/roller.png';
import BoxImage3 from '../../../images/icons/config.png';

const FeaturedBox = () => {
    return (
        <section className="features-box-items">
            <Grid container spacing={3} className="websitePadding">
                <Grid item lg={4} md={4} sm={12} xs={12} className="">
                    <Grid className="single-feature-box-item flex flex-col">
                        <Grid className="item-icon align-self-center">
                            <img src={BoxImage1} alt=""/>
                        </Grid>
                        <h3>Flexible Solutions</h3>
                        <p>Lorem ipsum dolor sit amet consectetuLorem ipsum </p>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} className="">
                    <Grid className="single-feature-box-item flex flex-col">
                        <Grid className="item-icon align-self-center">
                            <img src={BoxImage2} alt=""/>
                        </Grid>
                        <h3>Tech Works</h3>
                        <p>Lorem ipsum dolor sit amet consectetuLorem ipsum </p>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} className="">
                    <Grid className="single-feature-box-item flex flex-col">
                        <Grid className="item-icon align-self-center">
                            <img src={BoxImage3} alt=""/>
                        </Grid>
                        <h3>Premium Support</h3>
                        <p>Lorem ipsum dolor sit amet consectetuLorem ipsum </p>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default FeaturedBox;
