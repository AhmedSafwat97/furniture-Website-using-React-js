import * as React from 'react';
import Section1 from './HomeSections/section1';
import { Box } from '@mui/material';




const Home = () =>{
  return (
 <><Box sx={{bgcolor : "lightgoldenrodyellow" , padding: "16px"}}>
    <Section1/>

 </Box>
 </>
  );
};

export default Home;
