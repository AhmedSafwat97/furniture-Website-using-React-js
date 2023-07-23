import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';
import { useUpdateInfoMutation } from '../../services/SignApi';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';



export default function FormDialog({setMessage ,setEmail  , UserName , Email , firstName , Phone , Country , Town , address}) {

    const [open, setOpen] = React.useState(false);


    const [ UpdateInfo, { isLoading : updateLoading } ] = useUpdateInfoMutation();



    const handleUpdateInfo = async () => {
        const result = await UpdateInfo({ UserName , Email , firstName , Phone , Country , Town , address });
        if (result.error) {
          console.log('update failed:', result.error);
          setOpen(false)
          setMessage("The user Name Or Email Already exsist")
        } else {
            toast.success(`info updated successfully` , {position: "top-center"});
            setOpen(false)
            console.log('update successful:', result.data);
            const { token } = result.data;
              // Store the token securely (e.g., local storage or cookies)
              console.log('Token:', token);
              if (token) {
                console.log('Signin successful!');
                localStorage.setItem('token', token); // Save the token in session storage
              } else {
                console.error('Signin failed: Token not received');
              }
        }};





  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>


                    <Button 
                onClick={() => {handleClickOpen()}}
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
                      }}>Save Changes</Button>

                

      <Dialog open={open} onClose={handleClose}>


      <Box sx={{width : {xs : "290px" , sm : "500px" , md : "600px"}, py : "20px"  ,display : "flex" , flexDirection : "column" , alignItems : "center" }}>

<Typography>Please Enter Your current Email</Typography>
      <TextField
                onChange={(e) => {setEmail(e.target.value)}}
                sx={{outline : "none"  ,width : "80%",fontSize:"10px", borderRadius : "30px" , border: "none"}}
                id="Email" label="Enter Your Current Email" type="text" />

<Button 
                onClick={() => {
                if (!UserName.includes(" ")) {
                  handleUpdateInfo()
                  setMessage("")
                }else {
                  setOpen(false)
                  setMessage("You Can't Use Space in user Name")
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
                      }}>{updateLoading ?  <CircularProgress /> : "Save" }</Button>

</Box>

      </Dialog>
    </>
  );
}








