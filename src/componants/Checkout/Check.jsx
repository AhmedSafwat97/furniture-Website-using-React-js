import React, { useState } from 'react';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import { Box, Typography } from '@mui/material';

const Check = () => {
    const [inputValue, setInputValue] = useState('');

  
    const handleInputChange = (event) => {
        console.log(event.target.value);
      setInputValue(event.target.value);
    };
    return (
        <>
        <ScrollToTop/>

        <BannerSection PageName="CheckOut"/>
        <Box sx={{width : "100%" , minHeight :"100vh" , display : "flex" ,flexDirection:"column",alignItems:"center"}}>
            <Box sx={{ my : "50px" ,width : {xs : "60%" , md : "75%"} , height : "fit-content"}}>
                <input type="text" value="Have a coupon? " placeholder='click here' style={{width:"100%",backgroundColor:"#E9E7DB",margin:"10px 0",border: "none",borderRadius:"15px",padding:"10px"}}  onChange={(e)=>setInputValue(e.target.value)}/>
                <input type="text" value="Returning customer?" placeholder='click here' style={{width:"100%",backgroundColor:"#E9E7DB",margin:"10px 0",border: "none",borderRadius:"15px",padding:"10px"}}  onChange={(e)=>setInputValue(e.target.value)}/>
            </Box>
            <Box sx={{ width:"75%", display : "flex" , justifyContent : "space-between"}}>
                <Box sx={{width :"45%", border:"1px solid #E9E7DB",borderRadius:"15px",padding:"15px"}}>
                    <Typography variant='h4'>Billing Details</Typography>

                </Box>
                <Box sx={{width :"40%", border:"1px solid #E9E7DB",borderRadius:"15px",padding:"15px"}}>
                    <Typography variant='h4'>Billing Details</Typography>

                </Box>
            </Box>
        </Box>
        </>
    );
    
}

export default Check;


