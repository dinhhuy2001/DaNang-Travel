import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Ads from '../../components/Ads';
import Recommend from '../../components/Recommend';
import ScrollToTop from '../../components/ScrollToTop';
import Top from '../../components/Top';
import Subcribe from '../../components/Subcribe';
import Plan from '../../components/Plan';

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero />
      <Ads />
      <Top />
      <Plan />
      <Recommend />
      <Subcribe />
      <Footer />
    </>
  );
};

export default Home;
