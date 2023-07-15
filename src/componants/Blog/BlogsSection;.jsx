import React from 'react';
import { Box, Button, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useNavigate } from 'react-router-dom';
import { useGetblogsByNameQuery } from '../../services/productApi';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';



const BlogsSection = () => {

  const { data , error, isLoading } = useGetblogsByNameQuery();

const Navigate = useNavigate();

const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
const num = isSmallScreen ? 1 : 3;


  return (
    <Box sx={{height : "650px" , display : "flex" , 
    justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>


<Box
     className="Cards-Container"
     sx={{
       display: "flex",
       flexDirection: "column",
       alignItems : "center" ,
       width: "75%",
       height: "560px",
       paddingX: "10px",
     }}
   >


<Box sx={{ transform: "translateY(47px)", width: "100%"}}>
          <Typography
            sx={{ fontWeight: "900", width: "100%" }}
            variant={isSmallScreen ? "h5" : "h4"}
          >
            Latest Blogs & News
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
       navigation
       style={{ width: "100%", height: "100%", padding: "30px 0" }}
     >

      
     {data.map((blog) => (
<SwiperSlide key={blog.id} style={{ display: "flex", alignItems: "end" , justifyContent : "center"  }}>
<Box
  className="Card"
  style={{
    width : "270px" ,
    height: "380px",
    backgroundColor: "#F3F2EE",
    borderRadius: "15px",
    padding: "10px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  }}

>

  <Box sx={{ width: "95%", height: "55%", mx: "auto" , mt : "5px" , position : "relative"}}>
    <img
      style={{ width: "100%", height: "100%" , borderRadius: "15px" }}
      src={blog.imageLink}
      alt="blog Details"
      loading='lazy'
    />
    <Box sx={{position : "absolute" , bottom : "0" , right : "0",bgcolor : "#F3F2EE" , textAlign : "center" , width : "60px" , p : "5px 0" , borderTopLeftRadius : "15px"}}>
      <Typography variant='h6' fontSize="12px">{blog.date}</Typography>
    </Box>
  </Box>
  <Box
    sx={{
      p: "5px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      bgcolor: "#F3F2EE",
      mx: "auto",
      width: "95%",
      height: "45%",
      borderRadius: "15px",
    }}
  >

    <Box sx={{width : "100%" ,display : "flex" , alignItems : "center" , color : "gray"}}>
    <PersonOutlinedIcon fontSize='12px'/>
    <Typography variant='h6' sx={{fontSize : "12px"}} > By Admin</Typography>
    </Box>

<Box sx={{height : "50px" , overflow : "hidden" , width : "100%" , mt : "15px" }}>
<Typography variant="h6" fontSize="15px" fontWeight="700" >{blog.Name}</Typography>

</Box>

<Box sx={{ borderBottom : "2px solid gray" , width : "95%" , my : "15px"}} />



<Box sx={{width : '100%'}}>

    <Button 
        onClick={() => {
          Navigate(`/BlogDetails/${blog.id}`)
        }}
    sx={{color : "gray"  , ":hover" : {color : "black"}}}>
      Read More 
      <ArrowRightAltOutlinedIcon/>
    </Button>
</Box>

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

export default BlogsSection;
