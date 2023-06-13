import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Test = () => {
  return (
    <Box sx={{ bgcolor: "gray", height: "500px" , display :"flex" , justifyContent : "center" }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{width : "800px" , display : "dlex" ,alignItems : "center"  , height : "70%" , border : "2px solid yellow"}}
        

       >

        <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 1</SwiperSlide>
        <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 2</SwiperSlide>
        <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 3</SwiperSlide>
        <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 4</SwiperSlide>
        <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 5</SwiperSlide>
        <SwiperSlide style={{ backgroundColor : "red" , width :"100px" , height : "150px"}} >Slide 6</SwiperSlide>


      
      
      </Swiper>
    </Box>
  );
};

export default Test;
