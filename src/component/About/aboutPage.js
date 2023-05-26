import React from 'react';
import Header from '../Home/Header/Header';
import HeroArea from './HeroArea/HeroArea';
import AboutFeatured from './AboutFeatured/AboutFeatured';
import FAQ from '../Home/FAQ/FAQ';
import Footer from '../Home/Footer/Footer';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <HeroArea slug="CHI SIAMO" title="Chi Siamo" />
      <AboutFeatured />
      <FAQ />
      <Footer />
    </div>
  );
}

export default AboutPage;