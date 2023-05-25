import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FooterCall from '../../../images/call.png';
import FooterHome from '../../../images/home.png';
import FooterLike from '../../../images/like.png';
import FooterNews1 from '../../../images/news1.png';
import FooterNews2 from '../../../images/news2.png';

const Footer = (props) => {
    return (
        <Grid>
            <section
                className={(props.websiteUrl === "/services" || props.websiteUrl === "/portfolio") ? "contact-section text-white contact-sec-bg" : "contact-section text-white"}
                id="contact">
                <Grid container spacing={3} className="contact-info-bg text-white websitePadding">
                    <Grid item lg={4} sm={4} xs={12} className="">
                        <Grid className="single-contact-info">
                            <Grid className="contact-icon">
                                <img src={FooterCall} alt="" />
                            </Grid>
                            <Grid className="contact-content">
                                <h4>Contacts</h4>
                                <p>Call Us : +123 456 789 Email Us At : hammer@gmailcom</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} sm={4} xs={12} className="">
                        <Grid className="single-contact-info">
                            <Grid className="contact-icon">
                                <img src={FooterHome} alt="" />
                            </Grid>
                            <Grid className="contact-content">
                                <h4>Address</h4>
                                <p>Hemmer Builder, Downtown, Victoria, Australia</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} sm={4} xs={12} className="">
                        <Grid className="single-contact-info">
                            <Grid className="contact-icon">
                                <img src={FooterLike} alt="" />
                            </Grid>
                            <Grid className="contact-content">
                                <h4>Follow Us</h4>
                                <Grid className="follow-icons">
                                    <a href="javascript:"><i className="fab fa-facebook-f"></i></a>
                                    <a href="javascript:"><i className="fab fa-twitter"></i></a>
                                    <a href="javascript:"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="javascript:"><i className="fab fa-instagram"></i></a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <footer className="footer-section pt-150 pb-30">
                <Grid container spacing={3} className="pb-80 websitePadding">
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-footer-widget">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do Lorem ipsum
                                dolor sit amet, consectetur adipisicing eiusmod </p>
                            <Grid className="subscribe-box">
                                <form action="javascript:">
                                    <input type="text" placeholder="Subscribe In Our Newsletter" />
                                    <button type="submit"><i className="fas fa-angle-right"></i></button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-footer-widget business-hour ">
                            <h3>About Us</h3>
                            <p>Opining Days :</p>
                            <span>Monday – Friday : 9am to 20 pm</span>
                            <span>Saturday : 9am to 17 pm</span>
                            <p>Vacations :</p>
                            <span>All Sunday Days</span>
                            <span>All Official Holidays</span>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-footer-widget">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="javascript:">All properties</a></li>
                                <li><a href="javascript:">FAQ'S</a></li>
                                <li><a href="javascript:">Terms & Conditions</a></li>
                                <li><a href="javascript:">Sign up</a></li>
                                <li><a href="javascript:">Articles</a></li>
                                <li><a href="javascript:">Popular tags</a></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="footer-bootm pt-30">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item lg={6} sm={12} className="footer-text">
                            <span>Copyright ©2023 EdilProject S.R.L. Tutti i diritti sono riservati</span>
                        </Grid>
                        <Grid item lg={6} sm={12} className="text-lg-right text-center">
                            <Grid className="footer-menu">
                                <ul>
                                    <li><a href="javascript:">Disclaimer</a></li>
                                    <li><a href="javascript:">Privacy</a></li>
                                    <li><a href="javascript:">Advertisement</a></li>
                                    <li><a href="javascript:">Contact us</a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        </Grid>
    );
}

export default Footer;
