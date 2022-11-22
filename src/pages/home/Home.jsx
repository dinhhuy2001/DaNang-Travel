import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Recommend from '../../components/Recommend';
import ScrollToTop from '../../components/ScrollToTop';
import Top from '../../components/Top';
import Subcribe from '../../components/Subcribe';

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero />
      <Top />
      <Recommend />
      <Subcribe />
      <Footer />
    </>
  );
};

export default Home;
