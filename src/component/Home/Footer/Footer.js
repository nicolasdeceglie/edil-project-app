import React from 'react';
import Grid from '@material-ui/core/Grid';
import FooterCall from '../../../images/call.png';
import FooterHome from '../../../images/home.png';
import FooterLike from '../../../images/like.png';
import { Link } from 'react-router-dom';
import {ImFacebook} from 'react-icons/im'

const Footer = (props) => {
    return (
        <Grid>
            <section
                className={"contact-section text-white contact-sec-bg"}
                id="contact">
                <Grid container spacing={3} className="contact-info-bg text-white websitePadding">
                    <Grid item lg={4} sm={4} xs={12} >
                        <Grid className="single-contact-info">
                            <Grid className="contact-icon">
                                <img src={FooterCall} alt="" />
                            </Grid>
                            <Grid className="contact-content">
                                <h4>Contattaci</h4>
                                <p>Call Us : +39 456 789 Email : hammer@gmailcom</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} sm={4} xs={12} >
                        <Grid className="single-contact-info">
                            <Grid className="contact-icon">
                                <img src={FooterHome} alt="" />
                            </Grid>
                            <Grid className="contact-content">
                                <h4>Indirizzo di fatturazione</h4>
                                <p>Bari Via ciao</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} sm={4} xs={12} >
                        <Grid className="single-contact-info">
                            <Grid className="contact-icon">
                                <img src={FooterLike} alt="" />
                            </Grid>
                            <Grid className="contact-content">
                                <h4>Seguici</h4>
                                <Grid className="follow-icons">
                                    <a href="#:"><i ><ImFacebook /></i></a>
                                    <a href="#:"><i className="fab fa-twitter"></i></a>
                                    <a href="#:"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#:"><i className="fab fa-instagram"></i></a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <footer className="footer-section pt-150 pb-30">
                <Grid container spacing={3} className="pb-80 websitePadding">
                    <Grid item lg={4} sm={6} >
                        <Grid className="single-footer-widget">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do Lorem ipsum
                                dolor sit amet, consectetur adipisicing eiusmod </p>
                            <Grid className="subscribe-box">
                                <form action="#:">
                                    <input type="text" placeholder="Subscribe In Our Newsletter" />
                                    <button type="submit"><i className="fas fa-angle-right"></i></button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} sm={6} >
                        <Grid className="single-footer-widget business-hour ">
                            <h3>About Us</h3>
                            <p>Orari :</p>
                            <span>Lunedi - Venerdi : dalle 9 alle 20</span>
                            <span>Sabato : dalle 9 alle 17</span>
                            <p>Giorni di riposo :</p>
                            <span>Tutte le domeniche</span>
                            <span>Tutte i giorni festivi fficiali</span>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} sm={6} >
                        <Grid className="single-footer-widget">
                            <h3>Link Utili</h3>
                            <ul>
                                <li><Link to="/projects">Progetti</Link></li>
                                <li><Link to="FAQS">FAQ'S</Link></li>
                                <li><a href="#">Termini e condizioni</a></li>
                                <li><Link to="/login">Accedi</Link></li>
                             
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
                                    <li><a href="#:">Termini e Condizioni</a></li>
                                    <li><a to='#'>Privacy</a></li>
                                    <li><Link to='/contacts'>Contattaci</Link></li>
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
