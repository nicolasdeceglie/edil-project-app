import React from "react";
import Header from "./Header/Header";
import HeroSlider from "./HeroSlider/HeroSlider";
import FeaturedBox from "./FeaturesBox/FeaturedBox";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import FAQ from "./FAQ/FAQ";
import CounterUp from "./Counter/CounterUp";
import CallToAction from "./CallToAction/CallToAction";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";
const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSlider/>
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
