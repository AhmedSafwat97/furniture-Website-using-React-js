import { Box, Typography } from '@mui/material';
import React from 'react';


const CoponCode = () => {

    return (
    <>
    <Box position="reltive" sx={{bgcolor : "#E9E7DB" , p : "6px 0" , height : "23px"}} >
    <Box className="copon" sx={{  display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <Typography style={{fontWeight : "bold", fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > Use Coupon Code  </Typography>
        <Typography sx={{fontWeight : "bold" , fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px", color : "blue"}}> furnipro20 </Typography> 
        <Typography style={{fontWeight : "bold",fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > to get</Typography>
        <Typography style={{fontWeight : "bold",fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > 20% </Typography>
        <Typography style={{fontWeight : "bold", fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > off </Typography>
    </Box>
    </Box>
    </>
    );
}

export default CoponCode;
