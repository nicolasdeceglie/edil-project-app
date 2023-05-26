import React from "react";
import Grid from '@material-ui/core/Grid';
import IconBuilding from '../../../images/icons/building.png';
import IconCap from '../../../images/icons/cap.png';
import IconCarry from '../../../images/icons/carry.png';
import IconMotro from '../../../images/icons/motor.png';
import IconWheel from '../../../images/icons/wheel.png';
import IconDil from '../../../images/icons/dil.png';


const OurService = () => {

    return (
        <section className="our-services pt-120 pb-80" id="service">
            <Grid container spacing={3} className="websitePadding">
                <Grid item md={4} sm={6} xs={12} >
                    <Grid className="single-service">
                        <Grid className="service-icon" container justifyContent="center" alignItems="center">
                            <img src={IconBuilding} alt="" />
                        </Grid>
                        <h3>Disegno progetto</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <Grid className="single-service">
                        <Grid className="service-icon" container justifyContent="center" alignItems="center">
                            <img src={IconCap} alt="" />
                        </Grid>
                        <h3>Costruzioni generali</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <Grid className="single-service">
                        <Grid className="service-icon" container justifyContent="center" alignItems="center">
                            <img src={IconCarry} alt="" />
                        </Grid>
                        <h3>Esterni</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <Grid className="single-service">
                        <Grid className="service-icon" container justifyContent="center" alignItems="center">
                            <img src={IconMotro} alt="" />
                        </Grid>
                        <h3>Edificazione</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <Grid className="single-service">
                        <Grid className="service-icon" container justifyContent="center" alignItems="center">
                            <img src={IconWheel} alt="" />
                        </Grid>
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <Grid className="single-service">
                        <Grid className="service-icon" container justifyContent="center" alignItems="center">
                            <img src={IconDil} alt="" />
                        </Grid>
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}


export default OurService
