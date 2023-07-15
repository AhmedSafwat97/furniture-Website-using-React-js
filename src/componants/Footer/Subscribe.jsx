import { Box, Button, IconButton, Input,Typography } from '@mui/material';
import React from 'react';

const Subscribe = () => {
    return (
        <Box className="Sub" sx={{p : "15px 0" , width : "100%" , height : {md : "100px"} , display : "flex" , justifyContent:"center" }}>
        <Box sx={{width : "70%" , display : "flex" , flexDirection : {xs : "column" , md : "row"} ,justifyContent : "space-between" , alignItems : "center"}} >
        <Box sx={{display : {xs : "none" , md : "block"}}} >
        <Typography variant="h6" fontWeight="700" >Get Surprise Discount</Typography>
        <Typography variant="p" fontSize="12px" >join our email subscription now</Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" , width : "300px" }}>
                <Input placeholder='Enter your email address' sx={{p : "0 10px" ,width : "100%", height : "50px" ,bgcolor : "#FFF" , borderRadius:"20px"  }} />
                <Button
                  sx={{ color: "black", bgcolor : "orange" , borderRadius :"15px" ,position: "absolute", right: "5px" , top : "7px" }}>Subscribe</Button>
              </Box>
            </Box>


        <Box sx={{display : {xs : "none" , md : "block"}}}>
        <Typography variant="h6" fontWeight="700" >Download App</Typography>
        <Typography variant="p" fontSize="12px" >Save With App & New User Only</Typography>
        </Box>

        <Box sx={{display : "flex" , flexDirection : "column"}}>
        <IconButton>
            <img style={{width : "120px" , borderRadius : "10px"}} src="../../../Imgs/Google Play.jpg" loading='lazy' alt="Google play"/>
        </IconButton>     
        <IconButton>
            <img style={{width : "120px"  , borderRadius : "10px"}} src="../../../Imgs/App Store.jpg" loading='lazy' alt="App store"/>
        </IconButton>
        </Box>

        </Box>  
        </Box>
    );
}

export default Subscribe;
