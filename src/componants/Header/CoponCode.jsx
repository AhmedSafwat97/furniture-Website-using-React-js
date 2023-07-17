import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const CoponCode = () => {
const [close, setclose] = useState(true);

    return (
    <>
    
    {close &&

    <Box position="reltive" sx={{bgcolor : "#E9E7DB" , p : "6px 0" , height : "23px"}} >
    <Box className="copon" sx={{  display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    <Typography style={{fontWeight : "bold", fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > Use Coupon Code  </Typography>
       <Typography sx={{fontWeight : "bold" , fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px", color : "blue"}}> furnipro20 </Typography> 
         <Typography style={{fontWeight : "bold",fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > to get</Typography>
         <Typography style={{fontWeight : "bold",fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > 20% </Typography>
         <Typography style={{fontWeight : "bold", fontSize :  {xs : "12px" ,md:"16px" } , mx : "3px"}} > off </Typography>
         </Box>

{/* <IconButton 
onClick={() => {
    setclose(false)

}}
 sx={{position : "absolute" , right : "5px" , top : "0"}}>
<CloseIcon/>
</IconButton> */}
    
</Box>
    
    
    
    }
    
    
    
    </>
    );
}

export default CoponCode;
