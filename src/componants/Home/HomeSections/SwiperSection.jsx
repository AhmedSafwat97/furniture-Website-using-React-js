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
import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, decrement, increment } from "../../../services/CartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddToFav, deleteFromFav } from "../../../services/FavSlice";


const SwiperSection = ({catdata}) => {


  const { SelectedProductsId , SelectedProducts  } = useSelector((state) => state.Cart);
  const { favProductsId } = useSelector((state) => state.Fav);




  const dispatch = useDispatch();

  function ProductQuantity(item) {
    const useritem = SelectedProducts?.find((userselect) => {
      return userselect.id === item.id;
    });
    return useritem.quantity;
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargScreen = useMediaQuery(theme.breakpoints.down("lg"));



  let num 

  if (isSmallScreen) {
    num = 1
  } else if (isLargScreen) {
    num = 3
  } else {
      num = 4
  }


const Navigate = useNavigate();

 const { data, error, isLoading } = useGetproductByNameQuery();

//  to filter the data with catigorey that coms from productdetails
 const valueFilter = (catdata) =>{
  return catdata? data.filter((product)=> product.category === catdata) :  data  ;
}

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
       spaceBetween={15}
       slidesPerView={num}
       pagination={{ clickable: true }}
       navigation
       style={{ width: "100%" ,height: "100%", padding: "30px 0" }}
     >

      
     {valueFilter(catdata).slice(0 , 8).map((Product) => (
<SwiperSlide key={Product.id} style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
<Box
  className="Card"
  style={{
    width : "220px" ,
    height: "290px",
    backgroundColor: "#FFF",
    borderRadius: "15px",
    padding: "10px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
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



    {favProductsId.includes(Product.id) ?
    
  (

    <IconButton
    onClick={() => {
      dispatch(deleteFromFav(Product))
    }}
    sx={{ color: "gray", position: "absolute", right: "5px" }}
  >
    <FavoriteIcon />
  </IconButton>   




  ) : (
            <IconButton
              onClick={() => {
           dispatch(AddToFav(Product))
              }}
              sx={{ color: "gray", position: "absolute", right: "5px" }}
            >
              <FavoriteBorderIcon />
            </IconButton>   
  )
  
  
  
  }





  <Box sx={{ width: "75%", height: "63%", mx: "auto" }}  
    onClick={() => {
      Navigate(`/prodetails/${Product.id}`)
    }}
  
  >
    <img
      style={{ width: "100%", height: "100%" }}
      src={Product.imageLink}
      alt="product"
      loading='lazy'
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
    <Typography variant="h6" sx={{textAlign : "center" ,fontSize : {xs : "15px" , md : "18px"} }} >{Product.Name}</Typography>
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={Product.rate}
        precision={0.5}
        readOnly
      />
    </Stack>
    <Box sx={{ mt: "5px", display: "flex" }}>
      {Product.discount && <del style={{ marginRight: "7px" }}> ${Product.price}</del>}
      <Typography>${Product.sale}</Typography>
    </Box>



    {SelectedProductsId.includes(Product.id) ?
(<Box className="btn-tocart" display="none">
  <Box  sx={{ height : "27%", display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
 <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
       <IconButton 
       onClick={() => {
        dispatch(decrement(Product))
       }}
       sx={{bgcolor : "#FFF", 
    ":hover" : {
        bgcolor : "#ac8c5b"
           }
    
    }} size="small" >
           <RemoveIcon sx={{color : "#ac8c5b" , ":hover" : {
        color : "#FFF"
           }}} />
       </IconButton>
       <Typography sx={{mx:"5px" , fontWeight : "bold"}}>{ProductQuantity(Product)}</Typography>
       <IconButton


       onClick={() => {
        dispatch(increment(Product))
       }}
       
       sx={{bgcolor : "#FFF" , ":hover" : {
        bgcolor : "#ac8c5b"
           }}} size="small">
           <AddIcon sx={{color : "#ac8c5b" , ":hover" : {
        color : "#FFF"
           }}} />
       </IconButton>
  </Box>
  
  </Box>
</Box>

) : 


(
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

onClick={() => {
  dispatch(AddToCart(Product))
}}
>
add to cart
</Button>
)
    
    }





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
