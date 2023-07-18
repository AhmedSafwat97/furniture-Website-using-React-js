import React from 'react';
import { Box, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useGetReviewQuery } from '../../../services/productApi';
import Avatar from '@mui/material/Avatar';


const Section4 = () => {

  const { data , error, isLoading } = useGetReviewQuery();



const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
const num = isSmallScreen ? 1 : 3;


  return (
    <Box sx={{height : "500px" , display : "flex" , 
    justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>


<Box
     className="Cards-Container"
     sx={{
       display: "flex",
       flexDirection: "column",
       alignItems : "center" ,
       width: "75%",
       height: "400px",
       paddingX: "10px",
     }}
   >


<Box sx={{ width: "100%" , display : "flex" , justifyContent : "center"}}>
          <Typography
            sx={{ fontWeight: "900" }}
            variant={isSmallScreen ? "h5" : "h4"}
          >
            What our clients say
          </Typography>
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
     <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={10}
       slidesPerView={num}
       pagination={{ clickable: true }}
       style={{ width: "100%", height: "100%", padding: "30px 0" }}
     >

      
     {data.map((review) => (
<SwiperSlide key={review.id} style={{ display: "flex", alignItems: "end" , justifyContent : "center"  }}>
<Box
  className="Card"
  style={{
    width : "300px" ,
    height: "240px",
    backgroundColor: "#F3F2EE",
    borderRadius: "15px",
    padding: "10px 20px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    display : "flex" ,
    flexDirection : "column" , 
    alignItems : "center" , 
    justifyContent : "center"
  }}
>

    <Box sx={{width : "85%"}}>
        <img style={{width : "70px"}} loading='lazy' src="../../../../Imgs/About/review.png" alt="user" />
    </Box>


    <Typography sx={{width : "85%" ,fontSize : "13px" ,height : "37%" , color : "gray"}}>{review.Review}</Typography>
    <Box sx={{ bgcolor : "#FFF" , ":hover" : {bgcolor : "#E9E7DB"}  , width : "85%" , m : "10px 0"  , display : "flex" , alignItems : "center" , p : "10px" }} >
    <Avatar alt="Remy Sharp" src={review.ProfilePhoto} />
    <Typography variant='h6'  sx={{ml : "20px" , fontSize : "16px"}} >{review.Name}</Typography>

    </Box>
</Box>
</SwiperSlide>





     ))}


     </Swiper>
}


   </Box>



    </Box>
  );
}

export default Section4;
