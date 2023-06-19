import React from 'react';
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import BannerSection from "../Home/HomeSections/bannerSection";
import { Box, Button, IconButton, Rating, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';


const Cart = () => {
    return (
        <>
    <ScrollToTop/>
    <BannerSection  PageName="Shopping Cart" />


    <Box sx={{width : "100%" , minHeight :"100vh" , display : "flex" , justifyContent : "center"}}>
        <Box className="container" sx={{ my : "50px" ,width : "75%" , height : "fit-content" , border : "0.5px solid #E9E7DB"}}>



       <Box sx={{width : "100%" , display : "flex" , height : "40px", bgcolor : "#E9E7DB"}}>
         <Box sx={{width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Image</Box>
         <Box sx={{ width : "44%" , display : "flex" , alignItems : "center" , paddingLeft : "1%", fontWeight : "bold"}}>Product Information</Box>
         <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Quantity</Box>
         <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Total Price</Box>
         <Box sx={{ width : "10%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Remove</Box>
        </Box>



        <Box sx={{width : "100%" , display : "flex" , height : "120px"}}>
         <Box sx={{border : "0.5px solid #E9E7DB" , width : "15%" , height : "120px", display : "flex" , alignItems : "center" , justifyContent : "center"}}>
        <Box sx={{width : "60px" , bgcolor : "#F3F2EE" , p : "10px" , borderRadius : "5px"}}>
            <img style={{width : "100%" , height : "100%"}} src="../../../Imgs/Products/dresser.png" alt=""/>
        </Box>
         </Box>
         <Box sx={{border : "0.5px solid #E9E7DB" , width : "44%" , height : "90px", padding : "15px 1%"}}>
<Typography>Dresser</Typography>
   <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size="small"
            />
                      </Stack>

            <Typography mt="5px" >$200</Typography>

         </Box>
         <Box sx={{border : "0.5px solid #E9E7DB" ,width : "15%" , height : "120px", display : "flex" , alignItems : "center" , justifyContent : "center"}}>

         <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
               <IconButton sx={{bgcolor : "#FFF", 
            ":hover" : {
                bgcolor : "#ac8c5b"
                   }
            
            }} size="small" >
                   <RemoveIcon sx={{color : "#ac8c5b" , ":hover" : {
                color : "#FFF"
                   }}} />
               </IconButton>
               <Typography sx={{mx:"5px" , fontWeight : "bold"}}>1</Typography>
               <IconButton sx={{bgcolor : "#FFF" , ":hover" : {
                bgcolor : "#ac8c5b"
                   }}} size="small">
                   <AddIcon sx={{color : "#ac8c5b" , ":hover" : {
                color : "#FFF"
                   }}} />
               </IconButton>
         </Box>

         </Box>
         <Box sx={{border : "0.5px solid #E9E7DB" , width : "15%" , height : "120px" ,display : "flex" , alignItems : "center" , justifyContent : "center"}}>$200</Box>
         <Box sx={{border : "0.5px solid #E9E7DB" , width : "10%" , height : "120px" ,display : "flex" , alignItems : "center" , justifyContent : "center"}}>
<IconButton sx={{
    ":hover" : {
        color : "red"
           }
}} >
<DeleteOutlineOutlinedIcon/>
</IconButton>

         </Box>
        </Box>


<Button sx={{color : "#ac8c5b"}} >
<WestOutlinedIcon sx={{ fontSize: "20px" , mx:"5px" }} />
    Continue Shopping
</Button>


       </Box>
    </Box>



        </>
    );
}

export default Cart;
