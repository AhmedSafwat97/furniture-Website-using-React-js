import React from 'react';
import Section1 from './AboutSections/Section1';
import Section2 from './AboutSections/Section2';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import Brands from './AboutSections/brands';

const About = () => {
   return (
    <>
     <ScrollToTop/>
      <BannerSection PageName="About Us"/>
    <Section1/>
    <Section2/>
    <Brands/>
    </>
   );
}

export default About;

