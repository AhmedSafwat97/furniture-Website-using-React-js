import {
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useGetproductByNameQuery } from "../../../services/productApi";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";


const SwiperSection = ({catdata}) => {
  const [fav, setfav] = useState(false);
  const [outlinefav, setoutlinefav] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const num = isSmallScreen ? 2 : 4;
const x = catdata;
const Navigate = useNavigate();

 const { data, error, isLoading } = useGetproductByNameQuery();
 const valueFilter = (catdata) =>{
  return catdata? data.filter((product)=> product.category === catdata) :  data  ;
}
console.log(x);
  return (
   <>
   

   <Box
     className="Cards-Container"
     sx={{
       display: "flex",
       flexDirection: "column",
       width: {xs : "100%" , md : "75%"},
       height: "410px",
       paddingX: "10px",
     }}
   >

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
       spaceBetween={5}
       slidesPerView={num}
       pagination={{ clickable: true }}
       navigation
       style={{ width: "100%", height: "100%", padding: "30px 0" }}
     >

      
     {valueFilter(catdata).map((Product) => (
<SwiperSlide key={Product.id} style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
<Box
  className="Card"
  style={{
    width : "200px" ,
    height: "290px",
    backgroundColor: "#FFF",
    borderRadius: "15px",
    padding: "10px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  }}

  onClick={() => {
    Navigate(`/prodetails/${Product.id}`)
  }}
>
{Product.discount && 
  <Chip
  label={Math.floor( 100 -  (Product.sale / Product.price) * 100) +"%"}
  sx={{
    height: "20px",
    borderRadius: "5px",
    backgroundColor: "#AC8C5B",
    color: "#FFF",
    position: "absolute",
  }}
/>

}

  {outlinefav && (
    <IconButton
      onClick={() => {
        setfav(true);
        setoutlinefav(false);
      }}
      sx={{ color: "gray", position: "absolute", right: "5px" }}
    >
      <FavoriteBorderIcon />
    </IconButton>
  )}

  {fav && (
    <IconButton
      onClick={() => {
        setfav(false);
        setoutlinefav(true);
      }}
      sx={{ color: "gray", position: "absolute", right: "5px" }}
    >
      <FavoriteIcon />
    </IconButton>
  )}

  <Box sx={{ width: "75%", height: "65%", mx: "auto" }}>
    <img
      style={{ width: "100%", height: "100%" }}
      src={Product.imageLink}
      alt=""
    />
  </Box>
  <Box
    className="cardcontent"
    sx={{
      p: "5px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      bgcolor: "#F3F2EE",
      mx: "auto",
      width: "95%",
      height: "32%",
      borderRadius: "15px",
    }}
  >
    <Typography variant="h6">{Product.Name}</Typography>
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={Product.rate}
        precision={0.5}
        readOnly
      />
    </Stack>
    <Box sx={{ mt: "5px", display: "flex" }}>
      <del style={{ marginRight: "7px" }}> ${Product.price}</del>
      <Typography>${Product.sale}</Typography>
    </Box>

    <Button
      className="btn-tocart"
      sx={{ bgcolor: "#AC8C5B", display: "none" ,
      ":hover": {
        color: "#ac8c5b",
        outline: "1px solid #ac8c5b",
        bgcolor : "transparent"
      },
    
    
    }}
      variant="contained"

    >
      add to cart
    </Button>
  </Box>
</Box>
</SwiperSlide>





     ))}


     </Swiper>
}


   </Box>
   
   
   
   </>
  );
};

export default SwiperSection;
