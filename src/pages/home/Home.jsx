import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Recommend from '../../components/Recommend';
import ScrollToTop from '../../components/ScrollToTop';
import Top from '../../components/Top';
import Subcribe from '../../components/Subcribe';
import Login from '../../components/Login';

const Home = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <Top />
            <Recommend />
            <Subcribe />
            <Footer />
        </>
    );
};

export default Home;
