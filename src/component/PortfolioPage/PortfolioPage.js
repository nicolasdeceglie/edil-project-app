import React from "react";
import Header from "../Home/Header/Header";
import HeroArea from "../About/HeroArea/HeroArea";
import OurPortfolio from "../Home/OurPortfolio/OurPortfolio";
import { useGet } from "../../_Utils/Hooks";
const PortfolioPage = () => {
    return (
        <div>
            <Header />
            <HeroArea slug='RECENT PROJECT SHOWCASE' title='Our Portfolio' />
            <OurPortfolio />
        </div>
    );
};

export default PortfolioPage;