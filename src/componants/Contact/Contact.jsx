import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import BannerSection from '../Home/HomeSections/bannerSection';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';




const Contact = () => {

    const Navigate = useNavigate();


    return (
      <> 
      <Helmet>
      <title>Contact Us-FurniPro</title>
    </Helmet>
          <ScrollToTop/>
    <BannerSection  PageName="Contact" />


          <Box sx={{ p : "20px 0"  ,display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : {xs : "column" , md : "row"}}} >
            <Box sx={{border : "1px solid black" , overflow : "hidden" ,borderRadius : "15px" , my:{xs : "20px"} ,width : {xs :"90%" , md : "30%"} , height : "620px" , mx: "10px"}}>

            <Box style={{width: "100%" , height : "100%"}}>
                <iframe width="100%" 
                title='map'
                height="620px"
                  scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D9%85%D8%AF%D9%8A%D9%86%D9%87%20%D9%86%D8%B5%D8%B1+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a>
                    </iframe>
                    </Box>
            </Box>
            
            <Box sx={{border : "1px solid black" , borderRadius : "15px" , width : {xs : "90%" , md : "40%"} , height : {xs : "fit-content" , md : "620px"} , mx : "10px" }}>
            <Box sx={{ width : "calc(100% - 20px)" , p : "10px"}}>
            <Box sx={{display : "flex" , justifyContent : "space-around"}}>
<Box sx={{ width : "40%" , my : "10px" , color : "gray"}}>
    <IconButton sx={{bgcolor : "#AC8C5B"}} >
        <LocalPhoneIcon sx={{color : "white"}}/>
    </IconButton>
    <Typography variant='h6' fontSize="14px" >+201111111111</Typography>
    <Typography variant='h6' fontSize="14px" >+201222222222</Typography>

</Box>
<Box sx={{ width : "40%" , my : "10px" , color : "gray"}}>
    <IconButton sx={{bgcolor : "#AC8C5B"}} >
        <EmailIcon sx={{color : "white"}}/>
    </IconButton>
    <Typography variant='h6' fontSize="14px" >info@mydomain.com</Typography>
    <Typography variant='h6' fontSize="14px" >info@mydomain.com</Typography>

</Box>     
            </Box>
            <Box sx={{display : "flex" , justifyContent : "space-around" , color : "gray"}}>
<Box sx={{width : "40%" , my : "10px"}}>
    <IconButton sx={{bgcolor : "#AC8C5B"}} >
        <LocationOnIcon sx={{color : "white"}}/>
    </IconButton>
    <Typography variant='h6' fontSize="14px" >New York City, United States</Typography>
    <Typography variant='h6' fontSize="14px" >Egypt, Alexanderia</Typography>

</Box>
<Box sx={{width : "40%" , my : "10px"}}>
    <IconButton sx={{bgcolor : "#AC8C5B"}} >
        < AccessTimeIcon sx={{color : "white"}}/>
    </IconButton>
    <Typography variant='h6' fontSize="14px" >Mon - Sat : 9am - 11pm</Typography>
    <Typography variant='h6' fontSize="14px" >Sunday 11am - 5pm</Typography>

</Box>     
            </Box>
            </Box>
            <Box sx={{borderTop : "1px solid black" , width : "90%" , mx: "auto"}}/>
            <Box sx={{width : "100%"}}>
                <Typography variant='h6' ml="16px" mt="16px" fontWeight="700" >Get In Touch With Us</Typography>
                <Typography variant='h6' sx={{color : "gray" , width : "90%" , ml : "16px" , fontSize : "15px"}} >Have questions? Contact us for assistance. We're here to help and provide answers to any inquiries you may have."</Typography>
            <Box>

            </Box>
<Box sx={{my:"20px"}}>
                <Box sx={{display : "flex"}}>
                <TextField
                    sx={{outline : "none" ,width :"30%",fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    id="Name" label="Name" type="text" />
    
    <TextField
                    sx={{outline : "none" ,width :"30%",fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    id="Email" label="Email" type="text" />
    
    <TextField
                    sx={{outline : "none" ,width :"30%",fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    id="Phone" label="Phone" type="number" />
                </Box>
                <Box sx={{ p : "0 10px" }}>
                <TextField
                 sx={{outline : "none" ,width :"100%",fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" }}
          id="Comment"
          label="Your Commemt"
          multiline
          rows={4}
          defaultValue=""
        />
                </Box>
</Box>
            
            
            
            
            </Box>
            <Button
                      sx={{
                        fontSize: {xs : "16px" , md : "16px"},
                        backgroundColor: "#AC8C5B",
                        ml : "20px" ,
                        mb : "10px",
                        cursor: "pointer",
                        color: "#FFF",
                        borderRadius: "20px",
                        p : "3px 20px" ,
                        ":hover": {
                          color: "#FCC012",
                          outline: "1px solid #FCC012",
                        },
                      }}
                      onClick={() => {
                        Navigate("/shop");
                      }}
                    >
                      Shop Now
                    </Button>
            </Box>
          
          </Box>
      </>
    );
}

export default Contact;
