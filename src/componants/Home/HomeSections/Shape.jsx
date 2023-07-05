import { Box } from '@mui/material';
import React from 'react';

const Shape = () => {
    return (
<Box sx={{postion : "relative"}}>
                
    <Box sx={{rotate : "230deg" ,width : "40px" , height : "40px" , display :" flex" , overflow : "hidden" ,flexDirection : "column" ,alignItems : "center" , justifyContent : "center"}}>
    
    <Box sx={{display : "flex"}}>
        <Box sx={{width : "30px" , height : "30px" , border : "2px solid black" , borderBottomRightRadius : "40%" }} />
        <Box sx={{width : "30px" , height : "30px" , border : "2px solid black" , borderBottomLeftRadius : "50%" }} />
    </Box>
    <Box sx={{display : "flex"}}>
        <Box sx={{width : "20px" , height : "20px" , border : "2px solid black" , borderTopRightRadius : "50%" }} />
        <Box sx={{width : "20px" , height : "20px" , border : "2px solid black" , borderTopLeftRadius : "40%" }} />
    </Box>
    
    
    
    </Box>
</Box>



    );
}

export default Shape;
