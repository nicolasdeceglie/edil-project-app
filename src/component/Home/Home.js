import React from "react";
import Header from "./Header/Header";
import FeaturedBox from "./FeaturesBox/FeaturedBox";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import FAQ from "./FAQ/FAQ";
import CounterUp from "./Counter/CounterUp";
import CallToAction from "./CallToAction/CallToAction";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";
import Hero from "./HeroSection/Hero";
const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <FeaturedBox/>
            <WhatWeDo/>
            <FAQ/>
            <CounterUp/>
            <CallToAction/>
            <Portfolio/>
            <Footer />
        </div>
    );
};

export default Home;
