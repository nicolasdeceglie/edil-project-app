import React, { Component, useState } from "react";
import Header from "../Home/Header/Header";
import HeroArea from "../About/HeroArea/HeroArea";
import Services from "./Services/Services";
import CallToAction from "../Home/CallToAction/CallToAction";
import OurService from "../Home/OurService/OurService";

const OurServicePage = () => {
    const [bgColor, setBgColor] = useState('#f2f3f5');

    return (
        <div>
            <Header />
            <HeroArea slug='CHI SIAMO' title='I Nostri Servizi' />
            <Services />
            <CallToAction />
            <OurService />
        </div>
    );
};

export default OurServicePage;
