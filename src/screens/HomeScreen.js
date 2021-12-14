import React from 'react';
import About from '../components/About';
import Faq from '../components/Faq';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import GoldenGuest from '../components/GoldenGuest';
import Header from '../components/Header';
import Hero from '../components/Hero';
import JoinDiscord from '../components/JoinDiscord';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col'>
        <Hero />
        <About />
        <GoldenGuest />
        <Roadmap />
        <Feature />
        <Team />
        <Faq />
        <JoinDiscord />
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
