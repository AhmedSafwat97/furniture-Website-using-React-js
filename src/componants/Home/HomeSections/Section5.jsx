import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section5 = () => {

    const date = [

        {num : "25" , name : "Days"} ,
        {num : "12" , name : "hours"} ,
        {num : "42" , name : "min"} ,
        {num : "24" , name : "sec"} ,

    ]


const Navigate = useNavigate()



    return (
        <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center" , height : "700px" }}>


            <Box sx={{width : {xs : "80%" , md : "75%"} , height : "80%" , borderRadius : "20px" ,bgcolor : "#AC8C5B" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column" }}>

<Box p="20px 0" sx={{width :"100%" , display : "flex" , flexDirection : {xs : "column" , md : "row" , alignItems : "center" , justifyContent : "center"}}}>
<Typography variant='h5' sx={{ fontSize : {xs : "22px" , md : "35px"} ,color : "#FFF"}}>Deal Of The Week Let's</Typography>
<Box display="flex">
    <Typography className="outline-Text" variant='h5' sx={{mx : "5px" , fontSize : {xs : "22px" , md : "35px"}}} >Shopping</Typography>
    <Typography variant='h5' sx={{fontSize : {xs : "22px" , md : "35px", color : "#FFF"}}} >Today</Typography>
</Box>



</Box>




                <Box sx={{width : "85%" , height : "60%" , borderRadius : "20px" ,bgcolor : "#FFF" , display : "flex" , flexDirection : {xs :"column" , md  : "row"}}} >

                <Box sx={{width : {xs : "100%" , md : "50%"} , height : {xs : "50%" , md : "100%"} , display : "flex" , alignItems : "center" , justifyContent : "center"}} >
                <Box sx={{width : {xs : "150px" , md : "250px"}}}>
                        <img style={{width : "100%" , height : "100%"}} src="../../../../Imgs/Productss.png" alt="" />
                </Box>                
                </Box>






                <Box sx={{p : "0 20px" ,width : {xs : "90%" , md : "50%"} , height : {xs : "50%" , md : "100%"} , display : "flex" , flexDirection : "column" ,justifyContent : "center" }} >

                            <Box>
                            <Typography variant='h5' sx={{fontSize : {xs : "15px" , md : "30px"}}}>Caracole For A Spin Chair</Typography>
        
                           <Box sx={{display : " flex" , flexDirection : {xs : "row" , md : "column"} , alignItems : "baseline" ,width : "auto" }}>
                                <Box sx={{ m: "10px 0px", display: "flex" }}>
                                <del style={{ marginRight: "7px" , fontWeight : "700" }}> $110</del>
                                <Typography sx={{fontWeight : "700"}}>$100</Typography>
                                </Box>
        
                                <Button
                        sx={{
                            width : {xs : "auto" , md :"100px"} ,
                            height : "25px" ,
                          bgcolor: "#ac8c5b",
                          cursor: "pointer",
                          color: "#FFF",
                          p: {xs : "0" , md : "5px 0px"},
                          fontSize : "10px" ,
                          borderRadius: "20px",
                          ":hover": {
                            color: "#FCC012",
                            outline: "1px solid #FCC012",
                          },
                          mx : {xs : "10px" , md : "0"}
        
                        }}
                        onClick={() => {
                          Navigate("/Shop");
                        }}
                      >
                        Shop Now
                      </Button>
                           </Box>
                        </Box>



                        <Box>



<Box sx={{ m : "15px 0" , display : "flex"}} >
<Box sx={{display :" flex" , alignItems : "center"}}>
    <Typography variant='h6' sx={{fontSize : { xs : "10px" , md : "14px"}}} >Hurry Up :
    <br/>
    <Typography variant='p' sx={{fontSize : "7px"}}>Offer end in</Typography>
    </Typography>
</Box>

<Box sx={{display : "flex" , justifyContent : "space-around" , flexGrow : 1 }}>


{date.map((date) => (
<Box key={date.name} sx={{borderRadius : "50%" , width : {xs : "20px" , md : "40px"} , height : {xs : "20px" , md :"30px"} , p : "10px"  ,bgcolor : "#E9E7DB" , display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>
<Typography fontSize="12px" variant='h6' >{date.num}</Typography>
    <Typography  variant='h6' sx={{fontSize : "10px"}} >{date.name}</Typography>
</Box>
) )}


</Box>

</Box>

                        </Box>




                 </Box>



















                </Box>


            </Box>



        </Box>
    );
}

export default Section5;
