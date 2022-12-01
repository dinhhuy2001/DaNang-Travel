import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import BlogList from '../../components/BlogList';
import BlogDetail from '../../components/BlogDetail'

const Blog = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <BlogDetail />
      <Footer />
    </div>
  );
};

export default Blog;
