import React from 'react';
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import BannerSection from "../Home/HomeSections/bannerSection";
import { Box, Button, Chip, IconButton, Rating, Stack, Typography } from '@mui/material';
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
        <Box className="container" sx={{ my : "50px" ,width : {xs : "60%" , md : "75%"} , height : "fit-content" , border : "0.5px solid #E9E7DB"}}>



       <Box sx={{width : "100%" , display : {xs : "none" , md : "flex"} , height : "40px", bgcolor : "#E9E7DB"}}>
         <Box sx={{width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Image</Box>
<Box sx={{display : {xs : "block" , md : "flex"} , width : "85%"}}>
             <Box sx={{ width : "54%" , display : "flex" , alignItems : "center" , paddingLeft : "1%", fontWeight : "bold"}}>Product Information</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Quantity</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Total Price</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Remove</Box>
</Box>
        </Box>


{/* Product Container */}
        <Box sx={{width : "100%" , display : "flex" ,height : {xs : "200px" , md : "120px"} }}>
         <Box sx={{border : "0.5px solid #E9E7DB" , width : {xs : "40%" , md : "15%"} , height : {xs : "200px" , md : "120px"} , display : "flex", flexDirection : {xs : "column" , md : "row"} , alignItems : "center" , justifyContent : "center"}}>
        <Box sx={{width : {xs : "90px" , md : "60px"} , height : {xs : "73%" , md : "auto"} , bgcolor : "#F3F2EE" , p : "10px" , borderRadius : "5px"}}>
            <img style={{width : "100%" , height : "100%"}} src="../../../Imgs/Products/dresser.png" alt=""/>
        </Box>
{/* for mobile only */}
        <Box sx={{border : "0.5px solid #E9E7DB" ,width :  {xs : "100%" , md : "15%"} , height : "27%", display : {xs : "flex" , md : "none"} , alignItems : "center" , justifyContent : "center"}}>
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
{/* _______________ */}
    
    </Box>
        
         </Box>
<Box sx={{display : "flex" , flexDirection : {xs : "column" , md : "row" } , justifyContent : {xs : "space-around"} ,width : {xs : "81%" , md : "84%"} , p : {xs :"0px 4%" , md : "0px 1%"} , height : "100%"}}>
             <Box sx={{border : {xs : "none" , md :"0.5px solid #E9E7DB"} , display : "flex", width : {xs : "100%" , md : "54%"} ,padding : "1%"}}>
<Box>
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

                              <Typography sx={{mt :"5px"}} >$200</Typography>
</Box>
    
              <Box>
              <Chip
  label="30%"
  sx={{
    height: "20px",
    borderRadius: "5px",
    backgroundColor: "#AC8C5B",
    color: "#FFF",
    position: "absolute",
  }}
/>
              </Box>
    
             </Box>
{/* for bigscreen only */}
             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , display : {xs : "none" , md : "flex"} , alignItems : "center" , justifyContent : "center"}}>
    
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
{/* ___________________ */}


<Box sx={{display : {xs : "block" , md : "none"}}}>
    <hr style={{color : "#E9E7DB"}} />
</Box>
             
             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} , width :  {xs : "100%" , md : "15%"} ,display : "flex" , alignItems : "center" , justifyContent : {md : "center"}}}>
             {/* for mobile only */}
             <Typography sx={{display : {xs : "block" , md : "none"} , fontWeight : "bold" , mr : "5px"}}>Total : </Typography>
             {/* ___________________ */}

                <Typography>200$</Typography>
             </Box>
             
<Box sx={{display : {xs : "block" , md : "none"}}}>
    <hr style={{color : "#E9E7DB"}} />
</Box>

             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} , width :  {xs : "100%" , md : "15%"} , display : "flex" , alignItems : "center" , justifyContent : {md :"center"}}}>
    <IconButton sx={{
        ":hover" : {
            color : "red"
               }
    }} >
    <DeleteOutlineOutlinedIcon/>
    </IconButton>
    
             </Box>
            </Box>
</Box>
{/* _________________*/}


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
