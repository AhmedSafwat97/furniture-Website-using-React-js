import React from 'react';
import Section1 from './AboutSections/Section1';
import Section2 from './AboutSections/Section2';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import Section4 from './AboutSections/section4';

const About = () => {
   return (
    <>
     <ScrollToTop/>
      <BannerSection PageName="About Us"/>
    <Section1/>
    <Section2/>
    <Brands/>
    <Section4/>
    </>
   );
}

export default About;

