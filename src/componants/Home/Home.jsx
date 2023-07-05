import * as React from 'react';
import Section1 from './HomeSections/section1';
import Section2 from './HomeSections/section2';
import Section5 from './HomeSections/Section5';
import CategorySection from './HomeSections/CategorySection';
import AllProductsSection from './HomeSections/AllProductsSection';
import Productsection from './HomeSections/Productsection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import BlogsSection from '../Blog/BlogsSection;';

const Home = () =>{

  return (
 <>
     <ScrollToTop/>
    <Section1/>
    <Section2/>
    <Productsection/>
    <Section5/>
    <CategorySection/>
    <AllProductsSection/>
    <BlogsSection/>
 </>


  );
};

export default Home;
