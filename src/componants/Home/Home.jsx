import * as React from 'react';
import Section1 from './HomeSections/section1';
import Section2 from './HomeSections/section2';
import Productsection from './HomeSections/Productsection';
import CategorySection from './HomeSections/CategorySection';
import AllProductsSection from './HomeSections/AllProductsSection';



const Home = () =>{

  return (
 <>
    <Section1/>
    <Section2/>
    <Productsection/>
    <CategorySection/>
    <AllProductsSection/>
 </>


  );
};

export default Home;
