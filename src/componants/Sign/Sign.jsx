import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Box,FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useConfirmCodeMutation, useForgotpassMutation, useResetPassMutation, useSignInMutation, useSignupMutation } from '../../services/SignApi';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function FormDialog() {



const [Signup , { isLoading : signupLoading }] = useSignupMutation();
const [SignIn , { isLoading : signinLoading , isError: signInError} ] = useSignInMutation();
const [Forgotpass , { isLoading : ForgotLoading } ] = useForgotpassMutation();
const [ConfirmCode , { isLoading : codeLoading } ] = useConfirmCodeMutation();
const [ ResetPass, { isLoading : resetLoading } ] = useResetPassMutation();




  const [open, setOpen] = React.useState(false);
    const [RouteSign , setRouteSign ] = useState("signin");
    const [stepnum, setstepnum] = useState(1);

    const [showPassword, setShowPassword] = React.useState(false);

    const [Country, setCountry] = React.useState('');
    const [Town, setTown] = React.useState('');
     const [firstName, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [address, setaddress] = useState("");
    const [UserName, setUserName] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Password, setPassword] = useState("");
    const [VerificationCode, setvCode] = useState("");

const [Message, setMessage] = useState("");


const Navigate = useNavigate()



    const handleSignUp = async () => {
      const result = await Signup({UserName , Password , firstName , Email , Phone , Country , Town , address });
      try {
        // Handle success case
        if (result.data) {
          // Code to execute when signup is successful
          console.log('Signup successful');
          setRouteSign("signin")
          setstepnum(1)
          toast.success(`Account successfully created` , {position: "top-center"});
        } else {
          setMessage("User Name or Email already exists")
        }
      } catch (error) {
        // Handle error case
        console.log('Signup error:', error);
      }
    }



                // Call the login mutation from the API slice
                const handleSignin  = async () => {
                  // Call the login mutation from the API slice
                  const result = await SignIn({ Email  , Password });
              
                  if (result.error) {
                    console.log('Error:', result);
                  } else {
                    const { token } = result.data;
                    // Store the token securely (e.g., local storage or cookies)
                    console.log('Token:', token);
                    if (token) {
                      console.log('Signin successful!');
                      localStorage.setItem('token', token); // Save the token in session storage
                    } else {
                      console.error('Signin failed: Token not received');
                    }
        
                   if (localStorage.getItem("token")) {
                    setOpen(false)
                    Navigate("/") }
                  }

           
                };



                const handleForgotpassword = async () => {
                  const result = await Forgotpass({ Email });
                  if (result.error) {
                    console.log('Send code failed:', result.error);
                    setMessage("This email does not exist")
                  } else {
                    console.log('Send code successful:', result.data);
                  }};
  
const handleconfirmcode = async () => {
  const result = await ConfirmCode({ Email , VerificationCode});
  if (result.error) {
    console.log('code not match :', result.error);
  } else {
    console.log(' code match successful:', result.data);
    setRouteSign("resetpassword")

  }
}


const NewPassword = Password

const handleresetPassword = async () => {
  const result = await ResetPass({ Email , NewPassword});
  if (result.error) {
    console.log('faild to reset password:', result.error);
  } else {
    toast.success(`Password has been changed successfully` , {position: "top-center"});
    console.log('Reset Password successful:', result.data);
  }
}



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

{/* {!signuperror } */}

             <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}  onClick={
              ()=>{
                handleClickOpen()
                setRouteSign("signin")
              }
              }>
                 <LoginIcon
                   sx={{ fontSize: "30px", color: "black" ,}}
                 />
               <Typography color="black" sx={{ ml : "5px" ,fontSize : {xs : "10px" , md : "12px"}}}>Login</Typography>
             </Box>

                

      <Dialog open={open} onClose={handleClose}>

            {/* <Button variant="outlined" startIcon={<PersonAddAltIcon sx={{fontSize : "30px"}}/>}>Sign Up</Button> */}


{RouteSign === "signin" &&
    <Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>
   
   

    <Box sx={{width : "calc(100% - 20px)"  ,display : "flex" , justifyContent : "center" , alignItems : "center" }}  >
    <Typography sx={{mr:"10px" , fontSize:{xs : "16px" , md : "20px"} ,color : "#92764E"}} variant='h6'>You don't have account ?</Typography>
    <Typography
       onClick={() => {setRouteSign("signup")
      setMessage("")
      }}
    sx={{fontSize:{xs : "16px" , md : "20px"} ,color : "blue" , textDecoration : "underline" ,
    cursor : "pointer" , 
    ":hover" : {
        color : "gray"
    }
    }} variant='h6'>Sign Up</Typography>
    
    
    </Box>
    
    <Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Sign In</Typography>
    
    <Typography color="red" >{signInError && "Invalid userName or Password .."}</Typography>

    <Box sx={{width :{xs : "calc(100% - 20px)"
     ,md : "calc(100% - 20px)" } , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
            
            
            <TextField
            onChange={(e) => {setEmail(e.target.value)}}
            sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
            id="Email" label="Enter your Email" type="text" />
            
<FormControl sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
    variant="outlined">
              <InputLabel htmlFor="filled-adornment-password">Enter Your Password</InputLabel>
              <OutlinedInput
              label="Enter Your Password"
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => {setPassword(e.target.value)
                }}
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
    }} variant='h6'
    onClick={()=>{
      setRouteSign("forgotpass")
    }}
    >Forgot Password ?</Typography>
    
    </Box>
    
    </Box>}

{/* ______________________________________________________________________________ */}


{RouteSign === "signup" &&
<Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>

   <Box sx={{width : "calc(100% - 20px)"  ,display : "flex" , justifyContent : "center" , alignItems : "center" }}  >
   <Typography sx={{mr:"10px" , fontSize:{xs : "16px" , md : "20px"} ,color : "#92764E"}} variant='h6'>You have an account ?</Typography>
   <Typography 
   onClick={() => {setRouteSign("signin")
  setMessage("")
  }}
   sx={{fontSize:{xs : "16px" , md : "20px"} ,color : "blue" , textDecoration : "underline" ,
   cursor : "pointer" , 
   ":hover" : {
       color : "gray"
   }
   }} variant='h6'>Sign In</Typography>
   </Box>
   
   <Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Sign Up</Typography>
   
    <Typography color="red" sx={{textAlign : "center"}} >{Message}</Typography>
     {/* _____________________________________________________________________________ */}
   {stepnum === 1 &&
   <Box sx={{width :{xs : "calc(100% - 20px)"
   ,md : "calc(100% - 20px)" } , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
          
          
          <TextField
          onChange={(e) => {setUserName(e.target.value)}}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="username" label="User name" type="text" />
  
  
  
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
                    onMouseDown={handleMouseDownPassword}
                    onClick={handleClickShowPassword}
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
                if (UserName !== "" && Password !== "" && Password === ConfirmPassword ) {
                 if (Password.length < 6) {
                  setMessage("Password must contains at least 6 characters")
                 }else {
                  setstepnum(2)
                  setMessage("")
                 }
                } else {
                    setMessage("please fill user Name and Password, correctly.")
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
          
          
          <TextField
          required
          onChange={(e) => {setEmail(e.target.value)}}
          sx={{outline : "none"  ,width : { xs : "95%" , md : "80%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
          id="Email" label="Email" type="email" />


                        <TextField required
                        onChange={(e) => {setName(e.target.value)}}
                sx={{width: {xs : "95%" , md : "80%" },fontSize:"10px", borderRadius : "30px" , backgroundColor:"#E9E7DB",border: "none" , my : "10px"}}
                id="first" label="First Name" type="text" />

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

if (firstName !== "" && Email !== "" && Email.includes("@")) {
    setstepnum(3)
    setMessage("")
} else {
    setMessage("please, fill the required data.")
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
  


  <Box>
        <Typography>I agree with Furni Pro's <span style={{textDecoration : "underline" , color : "gray" , cursor : "pointer"}}>Terms Of Service. Privacy Policy</span></Typography>
  </Box>

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
                    setMessage("")
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
: <PersonAddAltIcon sx={{fontSize : "30px"}}/>}>Create Account</Button>

             
</Box>
  
  
          </Box>
   }
   
   
   </Box>
}

{/* _______________________________________________________________________________ */}
{RouteSign === "forgotpass" && 
<Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>

<Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Recover Your Account</Typography>
<Typography color="red" >{Message}</Typography>
<Typography sx={{width : { xs : "80%" , md : "75%"}}}>Just enter the email you used to sign up and we’ll help you sort this out.</Typography>

<TextField
            onChange={(e) => {setEmail(e.target.value)
            }}
            sx={{outline : "none"  ,width : { xs : "80%" , md : "75%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
            id="Email" label="Enter Your email address" type="text" />



                      <Button 
                      onClick={() => {
                        handleForgotpassword()
                        if (Email !== "") {
                          setRouteSign("resetcode")
                        } else {
                          setMessage("Please enter your email")
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
                          }} >{ForgotLoading  ? <CircularProgress />  : "Recover My Account"}</Button>

                   <Box sx={{display : "flex" , alignItems : "center"}}>
                    <Typography>Not You ?</Typography>
                    <Typography 
                       onClick={() => {setRouteSign("signin")}}
                      sx={{fontSize:{xs : "16px" , ml : "10px" ,md : "20px"} ,color : "blue" , textDecoration : "underline" ,
                      cursor : "pointer" , 
                      ":hover" : {
                      color : "gray"
                      }
                      }} variant='h6'>Sign In</Typography>
                    </Box>   

</Box>
}

{/* __________________________________________________________________ */}

{RouteSign === "resetcode" && 

<Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }} >
<Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Verification Code</Typography>

<Typography sx={{width : { xs : "80%" , md : "75%"}}}>Please enter the verification code that was sent to your email</Typography>


<TextField
            onChange={(e) => {setvCode(e.target.value)
            }}
            sx={{outline : "none"  ,width : { xs : "80%" , md : "75%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
            id="vcode" label="Enter Your verification Code" type="text" />


<Button 
                      onClick={() => {
                        handleconfirmcode()
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
                      > {codeLoading ?  <CircularProgress /> :  "Confirm Code" }</Button>



<Box sx={{display : "flex" , width : { xs : "80%" , md : "75%"} }}>
<Typography>You haven't received the code yet ?</Typography>
<Typography 
onClick={() => {setRouteSign("forgotpass")}}
sx={{color : "blue" , cursor : "pointer" , ml : "10px" , textDecoration : "underline"}}>Resend Code</Typography>

</Box>

</Box>
}
{/* _______________________________________________________________________ */}

{RouteSign === "resetpassword" && 

<Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }} >
<Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Reset Password</Typography>

<Typography>{Message}</Typography>
<FormControl sx={{outline : "none"  ,width : { xs : "80%" , md : "75%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
  variant="outlined">
            <InputLabel >New Password</InputLabel>
            <OutlinedInput
            label="New Password"
            onChange={(e) => {setPassword(e.target.value)}}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onMouseDown={handleMouseDownPassword}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

             
  <FormControl sx={{outline : "none"  ,width : { xs : "80%" , md : "75%"},fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
  variant="outlined">
            <InputLabel>Confirm New Password</InputLabel>
            <OutlinedInput
            label="Confirm New Password"
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


<Button 
                      onClick={() => {

                        if (Password !== "" && ConfirmPassword !=="" && Password === ConfirmPassword && Password.length >= 6 ) {
                          handleresetPassword()
                          setOpen(false)
                        } else {
                          setMessage("Password must contains at least 6 characters")
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
                      >{resetLoading ?  <CircularProgress /> :  "Confirm" }</Button>


</Box>
}



      </Dialog>
    </>
  );
}








