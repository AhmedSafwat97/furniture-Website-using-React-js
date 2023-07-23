import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Box,CircularProgress,FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useUpdatepassMutation } from '../../services/SignApi';



export default function Updatepass({setEmail , Email  }) {
  const [showPassword, setShowPassword] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Message, setMessage] = useState("");



const [Reset, setReset] = useState(true);

    const [ Updatepass, { isLoading : updateLoading } ] = useUpdatepassMutation();



    const handleUpdatepass = async () => {
        const result = await Updatepass({ Email , Password });
        if (result.error) {
          console.log('update failed:', result.error);
        } else {
            setOpen(false)
            toast.success(`password updated successfully` , {position: "top-center"});
          console.log('update successful:', result.data);
        }};


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


                
            <Box 
            onClick={() => 
              {handleClickOpen()
              setReset(true)
              }}
            sx={{width : "75%" ,display : "flex" , justifyContent : "center" , alignItems : "center" ,height : "45px" ,m : "15px 0"}}>
           <Typography sx={{cursor : "pointer" , color : "blue" , textDecoration : "underline" }}>Change Password</Typography>
           </Box>

                

      <Dialog open={open} onClose={handleClose}>


{Reset ? (
        <Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>

        <Typography>Please Enter Your current Email</Typography>
              <TextField
                        onChange={(e) => {setEmail(e.target.value)}}
                        sx={{outline : "none"  ,width : "80%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                        id="Email" label="Enter Your Current Email" type="text" />
        
        <Button 
                        onClick={() => {
                          if (Email !== "") {
                            setReset(false)
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
                              }}>Confirm</Button>
        
        </Box>
) : (
<Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }} >
<Typography sx={{width : "calc(100% - 20px)" , fontWeight : "700" , mt : "15px" ,color : "#92764E" ,textAlign : "center"}} variant='h4'>Change Password</Typography>

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
                          handleUpdatepass()
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
                      >{updateLoading ?  <CircularProgress /> : "Confirm" }</Button>


</Box>
)}








      </Dialog>
    </>
  );
}

