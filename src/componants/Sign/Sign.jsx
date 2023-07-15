import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSignInMutation, useSignupMutation } from '../../services/SignApi';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';



export default function FormDialog() {



const [Signup , { isLoading : signupLoading }] = useSignupMutation();
const [SignIn , { isLoading : signinLoading , isError : SignINError} ] = useSignInMutation();


SignINError ? console.log(SignINError) : console.log("")


  const [open, setOpen] = React.useState(false);
    const [RouteSign , setRouteSign ] = useState(true);
    const [stepnum, setstepnum] = useState(1);

    const [showPassword, setShowPassword] = React.useState(false);

    const [Country, setCountry] = React.useState('');
    const [Town, setTown] = React.useState('');
     const [firstName, setfirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [address, setaddress] = useState("");
    const [UserName, setUserName] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Password, setPassword] = useState("");
    const [errorfocus, seterrorfocus] = useState(false);
    const [Message, setMessage] = useState("")

const Navigate = useNavigate()


    
    const handleSignUp = async () => {
        const result = await Signup({UserName , Password , firstName , LastName , Email , Phone , Country , Town , address });
        if (result.error) {
          console.log('Sign up failed:', result.error);
          setRouteSign(true)
          setstepnum(1)
        } else {
          console.log('Sign up successful:', result.data);
          setRouteSign(true)
        setstepnum(1)
        }};


      const handleSignin = async () => {
        try {
            const { data } = await SignIn({ UserName, Password });
            const token = data.token;
        
            if (token) {
              console.log('Signin successful!');
              localStorage.setItem('token', token); // Save the token in session storage
            } else {
              console.error('Signin failed: Token not received');
            }

           if (localStorage.getItem("token")) {
            setOpen(false)
            Navigate("/") }

          } catch (error) {
            console.error('Signin failed:', error);
          }        
       
      };





    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

             <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}  onClick={handleClickOpen}>
                 <LoginIcon
                   sx={{ fontSize: "30px", color: "black" ,}}
                 />
               <Typography color="black" sx={{ ml : "5px" ,fontSize : {xs : "10px" , md : "12px"}}}>Login</Typography>
             </Box>

                

      <Dialog open={open} onClose={handleClose}>

            {/* <Button variant="outlined" startIcon={<PersonAddAltIcon sx={{fontSize : "30px"}}/>}>Sign Up</Button> */}


{RouteSign ? (
    <Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>
   
   

    <Box sx={{width : "calc(100% - 20px)"  ,display : "flex" , justifyContent : "center" , alignItems : "center" }}  >
    <Typography sx={{mr:"10px" , fontSize:{xs : "16px" , md : "20px"} ,color : "#92764E"}} variant='h6'>You don't have account ?</Typography>
    <Typography
       onClick={() => {setRouteSign(false)}}
    sx={{fontSize:{xs : "16px" , md : "20px"} ,color : "blue" , textDecoration : "underline" ,
    cursor : "pointer" , 
    ":hover" : {
        color : "gray"
    }
    }} variant='h6'>Sign Up</Typography>
    
    
    </Box>
    
    <Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Sign In</Typography>
    
    {SignINError && <Typography>Invalid Email Or Password</Typography>}
    <Box sx={{width :{xs : "calc(100% - 20px)"
     ,md : "calc(100% - 20px)" } , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
            
            
            <TextField
            onChange={(e) => {setUserName(e.target.value)}}
            sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
            id="username" label="UserName" type="text" />
    
    
    
    <FormControl sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
    variant="outlined">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <OutlinedInput
              label="Password"
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onChange={(e) => {setPassword(e.target.value)}}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
    
                <Button 
                onClick={() => {handleSignin()}}
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
                
                startIcon={ signinLoading ? <CircularProgress/> :<LoginIcon sx={{fontSize : "30px"}}/>}>Sign In</Button>
    
    
            </Box>
    
    
     <Box sx={{width : "calc(100% - 20px)"  ,display : "flex" , justifyContent : "center" , alignItems : "center" }}  >
    <Typography sx={{fontSize:{xs : "12px" , md : "18px"} ,color : "blue" , textDecoration : "underline" ,
    cursor : "pointer" , 
    ":hover" : {
        color : "gray"
    }
    }} variant='h6'>Forgot Password ?</Typography>
    
    </Box>
    
    </Box>
) : 

// _____________________________________________________________________________________

(

<Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>

   <Box sx={{width : "calc(100% - 20px)"  ,display : "flex" , justifyContent : "center" , alignItems : "center" }}  >
   <Typography sx={{mr:"10px" , fontSize:{xs : "16px" , md : "20px"} ,color : "#92764E"}} variant='h6'>You have an account ?</Typography>
   <Typography 
   onClick={() => {setRouteSign(true)}}
   sx={{fontSize:{xs : "16px" , md : "20px"} ,color : "blue" , textDecoration : "underline" ,
   cursor : "pointer" , 
   ":hover" : {
       color : "gray"
   }
   }} variant='h6'>Sign In</Typography>
   </Box>
   
   <Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Sign Up</Typography>
   
    <Typography color="red" >{Message}</Typography>
     {/* _____________________________________________________________________________ */}
   {stepnum === 1 &&
   <Box sx={{width :{xs : "calc(100% - 20px)"
   ,md : "calc(100% - 20px)" } , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
          
          
          <TextField
          onChange={(e) => {setUserName(e.target.value)
          }}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="username" label="User name" type="text" />
         {Error ===  1  &&  <Box sx={{width : { xs : "95%" , md : "80%"} , transform : "translate(20px , -8px)"}}>
            <Typography sx={{fontSize : "10px"}}>userName Error</Typography>
          </Box>}
  
  
  
  <FormControl sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
  variant="outlined">
            <InputLabel >Password</InputLabel>
            <OutlinedInput
            label="Password"
            onChange={(e) => {setPassword(e.target.value)}}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

             
  <FormControl sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
  variant="outlined">
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
            label="Confirm Password"
            onChange={(e) => {setConfirmPassword(e.target.value)}}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
  

<Box sx={{width : {xs :"95%" , md : "80%"} , display : "flex" , justifyContent : "space-between"}}>

<Box sx={{flexGrow : 1}} />

<IconButton 

onClick={() => {
    console.log(UserName , Password , ConfirmPassword);
    if (UserName !== "" && Password !== "" ) {
      if (Password === ConfirmPassword ) {
        setstepnum(2)
        setMessage("")
      }
      
    } else {
        setMessage("Invalid Error")
    }
    



}}
                  sx={{
                      my : "10px" ,
                      backgroundColor: "#92764E",
                      cursor: "pointer",
                      color: "#FFF",
                      borderRadius: "20px",
                      ":hover": {
                        color: "#92764E",
                        outline: "1px solid #92764E",
                      },
                    }} >
              
              <ArrowForwardIcon sx={{fontSize : "25px"}}/>
              </IconButton>

             
</Box>
  
  
          </Box>
   }

   {/* _____________________________________________________________________________ */}
   
   {stepnum === 2 &&
   <Box sx={{width :{xs : "calc(100% - 20px)"
   ,md : "calc(100% - 20px)" } , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
          
          
          <Box sx={{width: {xs : "95%" , md : "80%" },display: "flex",justifyContent: "space-between"}}>
                        <TextField required
                        onChange={(e) => {setfirstName(e.target.value)}}
                sx={{width :"49%",fontSize:"10px", borderRadius : "30px" , backgroundColor:"#E9E7DB",border: "none" , my : "10px"}}
                id="first" label="First Name" type="text" />



                <TextField onChange={(e) => {setLastName(e.target.value)}} required
                sx={{width :"49%",fontSize:"10px", borderRadius : "30px" ,backgroundColor:"#E9E7DB",border: "none" , my : "10px"}}
                id="last" label="Last Name" type="text" />
                </Box>
    
          <TextField
          required
          onChange={(e) => {setEmail(e.target.value)}}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="Email" label="Email" type="email" />

<TextField
          onChange={(e) => {setPhone(e.target.value)}}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="phone" label="Phone" type="number" />
  
  


<Box sx={{width : {xs :"95%" , md : "80%"} , display : "flex" , justifyContent : "space-between"}}>

<IconButton 
onClick={() => {setstepnum(1)}}
                  sx={{
                      my : "10px" ,
                      color: "#92764E",
                      outline: "1px solid #92764E",
                      cursor: "pointer",
                      borderRadius: "20px",
                      ":hover": {
                       backgroundColor: "#92764E",
                       cursor: "pointer",
                       color: "#FFF",
                      },
                    }} >
              
              <ArrowBackIcon sx={{fontSize : "25px"}}/>
              </IconButton>


<IconButton 
onClick={() => {

if (firstName !== "" && LastName !== "" && Email !== "" && Email.includes("@")) {
    setstepnum(3)
    setMessage("")
} else {
    setMessage("invalid Error")
}


}}
                  sx={{
                      my : "10px" ,
                      backgroundColor: "#92764E",
                      cursor: "pointer",
                      color: "#FFF",
                      borderRadius: "20px",
                      ":hover": {
                        color: "#92764E",
                        outline: "1px solid #92764E",
                      },
                    }} >
              
              <ArrowForwardIcon sx={{fontSize : "25px"}}/>
              </IconButton>
             
</Box>
  
  
          </Box>
   }
     {/* _____________________________________________________________________________ */}
   {stepnum === 3 &&
   <Box sx={{width :{xs : "calc(100% - 20px)"
   ,md : "calc(100% - 20px)" } , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
          
          
          <FormControl required sx={{width : {xs : "95%" , md : "80%"}, my : "10px" ,borderRadius : "30px", backgroundColor:"#E9E7DB"}}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Country}
          label="Country"
          onChange={(eo) => { setCountry(eo.target.value);
          }}
        >
          <MenuItem value="Egypt">Egypt</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="Brazil">Brazil</MenuItem>
          <MenuItem value="United State">United State</MenuItem>

        </Select>
      </FormControl>
  

  <TextField
          onChange={(e) => {setTown(e.target.value)}}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="Town" label="Town" type="text" />


<TextField
          onChange={(e) => {setaddress(e.target.value)}}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="Adderss" label="Address" type="text" />
  


<Box sx={{width : {xs :"95%" , md : "80%"} , display : "flex" , justifyContent : "space-between"}}>

<IconButton 
onClick={() => {setstepnum(2)}}

                  sx={{
                      my : "10px" ,
                      color: "#92764E",
                      outline: "1px solid #92764E",
                      cursor: "pointer",
                      borderRadius: "20px",
                      ":hover": {
                       backgroundColor: "#92764E",
                       cursor: "pointer",
                       color: "#FFF",
                      },
                    }} >
              
              <ArrowBackIcon sx={{fontSize : "25px"}}/>
              </IconButton>


              <Button 


              onClick={() => {

                if (Country !== "") {
                    handleSignUp()
                } else {
                    setMessage("Please Choose Your Country")
                }     

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

startIcon={signupLoading ?     <CircularProgress />
: <PersonAddAltIcon sx={{fontSize : "30px"}}/>}>Sign Up</Button>

             
</Box>
  
  
          </Box>
   }
   
   
   </Box>

)





}


      </Dialog>
    </>
  );
}








