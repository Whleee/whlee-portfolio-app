import React from 'react';
import '../../App.css';
import Cards from '../CardsHome';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home () {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  )
}

export default Home;
