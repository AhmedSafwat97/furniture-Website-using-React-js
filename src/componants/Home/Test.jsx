import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Test = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Box>xs=8</Box>
        </Grid>
        <Grid xs={4}>
          <Box>xs=4</Box>
        </Grid>
        <Grid xs={4}>
          <Box>xs=4</Box>
        </Grid>
        <Grid xs={8}>
          <Box>xs=8</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
//     <Box sx={{ bgcolor: "gray", height: "500px" , display :"flex" , justifyContent : "center" }}>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={4}
//         navigation
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//         style={{width : "800px" , display : "dlex" ,alignItems : "center"  , height : "70%" , border : "2px solid yellow"}}
        

//        >

//         <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 1</SwiperSlide>
//         <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 2</SwiperSlide>
//         <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 3</SwiperSlide>
//         <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 4</SwiperSlide>
//         <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 5</SwiperSlide>
//         <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 6</SwiperSlide>


      
      
//       </Swiper>
//     </Box>
//   );
// };

export default Test;
