import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import HeaderLogo from '../../../images/logo.png';
import Nav from "./Nav";
import CountUp from "react-countup";

const Header = () => {


    return (
        <Grid container className="header-one">
            <Grid container className="main-menu pl-75 pr-75 pt-30 pb-30" id="sticky-nav">
                <Grid container spacing={3}>
                    <Grid item lg={2} sm={3} xs={12} justifyContent="space-between" alignItems="center">
                        <Link to="/" className="navbar-brand logo">
                            <img src={HeaderLogo} alt=""/>
                        </Link>
                    </Grid>
                    <Grid item lg={10} sm={9} xs={12} justifyContent="flex-end" alignItems="center" className="text-lg-right">
                        <Nav/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;
