import React from 'react';
import Service from '../../components/Service';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import styled from 'styled-components';

const Contact = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Service />
            <Footer />
        </div>
    );
};

export default Contact;
