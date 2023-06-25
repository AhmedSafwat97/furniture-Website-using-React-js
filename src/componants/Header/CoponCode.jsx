import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const CoponCode = () => {
const [close, setclose] = useState(true);

    return (
    <>
    
    {close &&

    <Box position="reltive" sx={{bgcolor : "#E9E7DB" , p : "6px 0" , height : "23px", textAlign : "center"}} >
    <Typography className="copon" >Use Coupon Code 
        
       <Link style={{fontWeight : "bold"}}> furnipro20 </Link> 
        
         to get

         <span style={{fontWeight : "bold"}} > 20% </span>

         off
         </Typography>

<IconButton 
onClick={() => {
    setclose(false)

}}
 sx={{position : "absolute" , right : "5px" , top : "0"}}>
<CloseIcon/>
</IconButton>
    
</Box>
    
    
    
    }
    
    
    
    </>
    );
}

export default CoponCode;
