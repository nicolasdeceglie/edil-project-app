import React from 'react';
import Header from '../Home/Header/Header';
import HeroArea from './HeroArea/HeroArea';
import AboutFeatured from './AboutFeatured/AboutFeatured';
import FAQ from '../Home/FAQ/FAQ';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <HeroArea slug="CHI SIAMO" title="Chi Siamo" />
      <AboutFeatured />
      <FAQ />
    </div>
  );
}

export default AboutPage;