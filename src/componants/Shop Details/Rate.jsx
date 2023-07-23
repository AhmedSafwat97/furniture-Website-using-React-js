import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Rating, Typography } from '@mui/material';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';




export default function FormDialog({data , setreview , setReviewid , Reviewid}) {


const [open, setOpen] = useState(false);
const [value, setValue] = React.useState(0);
const [inView, setinView] = useState(true);


  const handleClickOpen = () => {
    setOpen(true);
    setinView(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

             <Typography onClick={() => {
                handleClickOpen()
                
                setValue(0);

                }}>
                Rate Now
             </Typography>

                

      <Dialog open={open} onClose={handleClose}>


{inView ? (
    <Box sx={{width : {xs : "280px" , md : "400px"}  , p:"15px 0" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
    <Typography variant='h6' mt="10px" >Do You Like This Product ? </Typography>
    <Typography mb="10px">Tap a star to rate it</Typography>
    <Rating 
    size="large"
    sx={{fontSize : "40px"}}
    name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    <Box sx={{borderTop : "1px solid black" , width : "95%" , mt : "25px" , height : "60px" , display : "flex" , justifyContent : "center" , alignItems : "center"}} >
    <Box sx={{width : "fit-Content" , display : "flex"}}>
        <Typography variant='h6' sx={{cursor : "pointer" , color : "gray" , mr:"15px"}}
        onClick={()=>{
            setOpen(false)
        }}
        >Not Now</Typography>
        <Typography variant='h6' sx={{cursor : "pointer" , color : "gray", ml:"15px"}}
        onClick={()=>{
            if (!Reviewid.includes(data.reviews)) {
                setReviewid([...Reviewid , data.reviews])
                 setreview(data.reviews +1)
            }
            if (value !== 0) {
                setinView(false)
                setTimeout(handleClose , 3000)
            }
        }}
        >Rate</Typography>
    </Box>
    </Box>
    </Box>
) : (


<Box sx={{width : {xs : "280px" , md : "400px"} , p : "20px 0" ,display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}} >
<CheckCircleOutlineIcon sx={{fontSize : "60px" , color : "yellow"}}/>
<Typography sx={{textAlign : "center"}}>Thank You For Your Review Of This Product  </Typography>
</Box>
)}







      </Dialog>
    </>
  );
}








