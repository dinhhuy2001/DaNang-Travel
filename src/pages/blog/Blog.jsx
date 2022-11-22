import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import BlogList from '../../components/BlogList';

const Blog = () => {
  return <div>
      <ScrollToTop />
      <Navbar />
      <BlogList />
      <Footer />
  </div>;
};

export default Blog;
