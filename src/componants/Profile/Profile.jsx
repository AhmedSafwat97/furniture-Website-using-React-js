import {
    Box,
    Button,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import ScrollToTop from "../../ExternalMethods/ScrollToTop";
  import { Helmet } from "react-helmet";
  import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import FormDialog from "./Updateprofile";
import Updatepass from "./updatepass";

  
  const Profile = () => {

    const navigate = useNavigate()

    let User;
    const token = localStorage.getItem('token')
  
    if (token) {
      User = jwtDecode(token);
    }

    const [Country, setCountry] = React.useState(User.Country);
    const [Town, setTown] = React.useState(User.Town);
     const [firstName, setName] = useState(User.Name);
    const [Email, setEmail] = useState(User.Email);
    const [Phone, setPhone] = useState(User.Phone);
    const [address, setaddress] = useState(User.address);
    const [UserName, setUserName] = useState(User.UserName);
    const [Message, setMessage] = useState("");



    return (
      <Box sx={{bgcolor : "#F3F2EE" }}>
        <Helmet>
          <title>Profile-FurniPro</title>
        </Helmet>
        <ScrollToTop />
  
        {/* <BannerSection  PageName="Profile" /> */}

  
      <Box sx={{width : {xs : "90%" , md  :"75%"}, p : "20px 0" , mx : "auto" , minHeight : "100vh" , display : "flex" , justifyContent : "space-between" , alignItems : {xs : "center" , md : "start"} ,flexDirection : {xs : "column" , md : "row"}}}>
  
      <Box sx={{width : {xs : "100%" , md : "49%"} , minHeight : "fit-content" , p : "20px 0" , bgcolor : "#FFF" , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
<Box sx={{width : "90%"}}>
          <Typography variant="h6">Profile Setting</Typography>
    
</Box>   
     <Box sx={{borderTop : "1px solid gray" , width : "90%" , mt : "10px"}}/>

    <Box sx={{width : "90%" }}>
    <Typography variant="h6" >Information</Typography>

<Box width="100%">
<Typography sx={{textAlign : "center"}}>{Message}</Typography>
</Box>
<Box sx={{display : "flex"}}>
            <Box sx={{width : "25%"}}>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>User Name</Typography>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>Email</Typography>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>Name</Typography>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>Phone</Typography>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>Country</Typography>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>Town</Typography>
            <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0"}}>Address</Typography>
            </Box>
        
            <Box sx={{width : "75%"}}>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setUserName(e.target.value)
                }}
                defaultValue={UserName}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="UserName"  type="text" />
            </Box>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setEmail(e.target.value)}}
                defaultValue={User.Email}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Email" type="text" />
            </Box>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setName(e.target.value)}}
                defaultValue={User.firstName}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Name" type="text" />
            </Box>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setPhone(e.target.value)}}
                defaultValue={User.Phone}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Phone" type="text" />
            </Box>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setCountry(e.target.value)}}
                defaultValue={User.Country}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Country" type="text" />
            </Box>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setTown(e.target.value)}}
                defaultValue={User.Town}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Town" type="text" />
            </Box>
            <Box sx={{ display : "flex" , justifyContent : "center" ,height : "45px" ,m : "15px 0"}}>
            <TextField
                onChange={(e) => {setaddress(e.target.value)}}
                defaultValue={User.address}
                sx={{outline : "none"  ,width : "90%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Address" type="text" />
            </Box>
            </Box>
</Box >

<FormDialog  {...{setMessage ,setEmail , UserName , Email , firstName , Phone , Country , Town , address}}  />

<Box sx={{borderTop : "1px solid gray" , width : "90%" , mt : "10px"}}/>

     <Box sx={{ width : "100%"}}>
        <Typography variant="h6" mt="10px" >Privacy setting</Typography>
           <Box sx={{display : "flex"}} >
           <Typography sx={{ display : "flex" , alignItems : "center" ,height : "45px" , m : "15px 0" , width : "25%"}}>Password</Typography>
        
           <Updatepass {...{setEmail , Email }}/>
     </Box>

        </Box>
</Box >

      </Box>




      <Box sx={{width : {xs : "100%" , md : "49%"} , mt : {xs : "20px" , md : "0"} , height : "fit-content" , bgcolor : "#FFF"  ,p : "20px 0"}}>
      <Box sx={{width : "90%" , p : "0 20px"}}>
          <Typography variant="h6">My Orders</Typography>
    
</Box>   
        <Box sx={{borderTop : "1px solid gray" , width : "90%" , mt : "10px"}}/>
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
  
  
      </Box>
  
      </Box>
    );
  };
  
  export default Profile;
  
  
  
  
