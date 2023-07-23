import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountdown } from '../../../Hooks/useCountDown';
import { useGetproductByNameQuery } from "../../../services/productApi";
import CircularProgress from '@mui/material/CircularProgress';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Shape from './Shape';

const Section5 = () => {

  const { data, error, isLoading } = useGetproductByNameQuery();


  const endOfDay = new Date();
endOfDay.setUTCHours(23, 59, 59, 999);

  const [ hours, minutes, seconds] = useCountdown(endOfDay);
  const date = [

      {num : "25" , name : "Days"} ,
      {num : hours , name : "hours"} ,
      {num : minutes , name : "min"} ,
      {num : seconds , name : "sec"} ,

  ];

const Navigate = useNavigate()



    return (
        <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center" , height : "700px" }}>
            <Box sx={{ overflow : "hidden" ,position : "relative"  ,width : {xs : "90%" , md : "75%"} , height : "80%" , borderRadius : "20px" ,bgcolor : "#AC8C5B" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column" }}>

<Box sx={{position : "absolute" , bottom : {xs :"20px" , md : "30px"} , left : { xs : "25px" , md : "38px"}}}>
              <Shape/>
  
</Box>
<Box sx={{position : "absolute" , top : "-100px", right : "-100px" ,borderRadius :"50%" ,bgcolor : "#B99D75" , width : "350px" , height : "350px" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
  <Box sx={{borderRadius :"50%" ,bgcolor : "#AC8C5B" , width : "200px" , height : "200px" }} ></Box>
</Box>

          <Box sx={{zIndex : "1" ,paddingBottom : "20px" ,width :"100%" , display : "flex" , flexDirection : {xs : "column" , md : "row" , alignItems : "center" , justifyContent : "center"}}}>
          <Typography variant='h5' sx={{  fontWeight : "500" ,fontSize : {xs : "22px" , md : "35px"} ,color : "#FFF"}}>Deal of the Week Let's</Typography>
          <Box display="flex">
              <Typography className="outline-Text" variant='h5' sx={{mx : "5px" , fontSize : {xs : "22px" , md : "35px"}}} >Shopping</Typography>
              <Typography variant='h5' sx={{ fontWeight : "500" ,fontSize : {xs : "22px" , md : "35px", color : "#FFF"}}} >Today</Typography>
          </Box>



          </Box>
  {error && 
   <Box  sx={{display : "flex" , justifyContent : "center" , alignItems : "center" ,width : "100%" , height : "100%"}}>
    <Typography variant="h6">Data Not Found</Typography>
    </Box>
   }


     {isLoading && 
      <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center" ,width : "100%" , height : "100%"}}>
      <CircularProgress />
  </Box>
     
     }

{data &&
     <Box style={{ width : "95%" , height : {xs : "80%%" , md : "80%"} }}>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
      {data.filter((product)=> product.discount === true).slice(12 , 18).map((Product) => (

      <Box key={Product.id} sx={{ mx : "auto" ,width : {xs : "80%" , md : "90%"} , height : "380px", borderRadius : "20px" ,bgcolor : "#FFF" , display : "flex" , flexDirection : {xs : "column" , md : " row"} , alignItems : "center" ,justifyContent : "center"}} >

      <Box sx={{width : {xs : "100%" , md : "50%"} , height : {xs : "50%" , md : "100%"} , display : "flex" , alignItems : "center" , justifyContent : "center"}} >
      <Box sx={{width : {xs : "150px" , md : "250px"}}}>
              <img style={{width : "100%" , height : "100%"}} src={Product.imageLink} loading='lazy' alt="product photo1" />
      </Box>                
      </Box>

      <Box sx={{ p : "0 20px" ,width : {xs : "100%" , md : "50%"} , height : {xs : "50%" , md : "100%"} , display : "flex" , flexDirection : "column" ,justifyContent : "center" }} >

                  <Box>
<Box sx={{display : "flex" }}>
                    <Typography variant='h5' sx={{fontSize : {xs : "15px" , md : "30px"}}}>{Product.Name}</Typography>
  
</Box>
                  <Box sx={{display : " flex" , flexDirection : {xs : "row" , md : "column"} , alignItems : "baseline" ,width : "auto" }}>
                      <Box sx={{ m: "10px 0px", display: "flex" }}>
                      {Product.discount &&<del style={{ color:"gray", marginRight: "7px" , fontWeight : "700" }}> ${Product.price}</del>}
                      <Typography sx={{fontWeight : "700"}}>${Product.sale}</Typography>
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
                Navigate(`/prodetails/${Product.id}`);
              }}
            >
              Shop Now
            </Button>
                  </Box>


<Box sx={{width : "100&" , height : "50px" , display : "flex" , flexDirection : "column", alignItems : "center" , justifyContent : "center"}}>

<Box sx={{width : "100%" , display : "flex" , justifyContent : "space-between"}}>
<Typography>Available : {Product.count}</Typography>
<Typography>Already Sold : {Product.sold}</Typography>
</Box>

<Box sx={{width : "90%" , height : "15px" , bgcolor : "#E9E7DB" , borderRadius : "20px"}}>
<Box sx={{width : `${Math.floor( 100 -  (Product.count / (Product.count + Product.sold)) * 100)}%` , height:"100%" , bgcolor : "#FCC012" , borderRadius : "20px"  }}></Box>
</Box>


</Box>


              </Box>

              <Box>



       <Box sx={{ m : "15px 0"}}>
           <Box sx={{width : "100%" ,isplay :" flex" , alignItems : "center"}}>
               <Typography variant='p' sx={{fontSize : "16px" , fontWeight:"600"}}>Offer end in</Typography>
           </Box>
           <Box sx={{ m : "5px 0" , display : "flex"}} >
           <Box sx={{display : "flex" , justifyContent : "space-around" , flexGrow : 1 }}>
           {date.map((date) => (
           <Box key={date.name} sx={{borderRadius : "50%" , width : {xs : "45px" , md : "55px"} , height : {xs : "45px" , md :"55px"} , p : "10px"  ,bgcolor : "#E9E7DB" , display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>
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

      ))}
      </Carousel>

      </Box>
}
    </Box>



</Box>
        );
}

export default Section5;
