import {
    Avatar,
    Box,
    Button,
    Typography,
  } from "@mui/material";
  import React from "react";
  import ScrollToTop from "../../ExternalMethods/ScrollToTop";
  import { Helmet } from "react-helmet";
  import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import BannerSection from "../Home/HomeSections/bannerSection";

  
  const Profile = () => {

    const navigate = useNavigate()

    let User;
    const token = localStorage.getItem('token')
  
    if (token) {
      User = jwtDecode(token);
    }




    return (
      <Box>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <ScrollToTop />
  
        <BannerSection  PageName="Profile" />

  
      <Box sx={{width : "95%", p : "20px 0" , mx : "auto" , minHeight : "75vh" , display : "flex" , justifyContent : "space-between"}}>
  
   
  
      <Box sx={{width : "73%" , minHeight : "calc(75vh - 20px)" , p : "20px 0" ,border : "1px solid black"}}>
        <Typography variant="h6" sx={{textAlign : "center"}}>My Orders</Typography>
        <Box sx={{borderTop : "1px solid gray" , width : "100%" , mt : "10px"}}/>
<Box sx={{display : "flex" , flexDirection : "column" , justifyContent : "center" , minHeight : "45vh"}}>
            <Box sx={{textAlign : "center"}}>
              <SentimentVeryDissatisfiedIcon sx={{fontSize : "70px" , color : "gray" ,  mt :"10px"}} />
                  <Typography variant="h6" >You don't have any orders right Now </Typography>  
                  <Button
                      onClick={() => {
                        navigate("/shop")
                      }}
                           sx={{
                            my : "10px" ,
                            backgroundColor: "#92764E",
                            cursor: "pointer",
                            color: "#FFF",
                            padding: "5px 16px",
                            borderRadius: "20px",
                            width : {xs : "60%" , md : "fit-content" },
                            ":hover": {
                              color: "#92764E",
                              outline: "1px solid #92764E",
                            },
                          }}
                      >Order Now</Button>
            </Box>
</Box >
      </Box>
  
      <Box sx={{width : "25%" , minHeight : "calc(75vh - 20px)" , p : "20px 0" , bgcolor : "#F3F2EE" , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
      <Typography variant="h6" sx={{textAlign : "center"}}>Setting</Typography>
        <Box sx={{borderTop : "1px solid gray" , width : "100%" , mt : "10px"}}/>
   
    <Box sx={{borderBottom : "2px solid black" , mt : "20px" ,width : "100%" , height : "50px"}}>
    <Typography variant="h6" sx={{fontSize : "15px" , ml : "20px"}}>Use Name : </Typography>                   
    <Typography variant="h6" sx={{fontSize : "18px" , ml : "20px"}}>{User.UserName}</Typography>                   
    </Box>

    <Box sx={{borderBottom : "2px solid black" , mt : "5px" ,width : "100%" , height : "50px"}}>
    <Typography variant="h6" sx={{fontSize : "15px" , ml : "20px"}}>Email : </Typography>                   
    <Typography variant="h6" sx={{fontSize : "18px" , ml : "20px"}}>{User.Email}</Typography>                   
    </Box>






      </Box>
      </Box>
  
      </Box>
    );
  };
  
  export default Profile;
  
  
  
  
