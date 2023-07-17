import { Box, Button, Chip, CircularProgress, IconButton, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useGetOneProductQuery } from "../../services/productApi";
import { useParams } from "react-router-dom";
import SwiperSection from "../Home/HomeSections/SwiperSection";
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import BannerSection from "../Home/HomeSections/bannerSection";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, decrement, increment } from "../../services/CartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Commentsec from "../Global Section/CommentSec";
import { Helmet } from "react-helmet";

const Shopdetails = () => {

const {id} = useParams()
  const { data , error, isLoading } = useGetOneProductQuery(id);
  let catdata = useGetOneProductQuery(id).data?.category
  
  const CommentSecWidth = 75;
  const CommentSecName = "ShopComment";

  const { SelectedProductsId , SelectedProducts } = useSelector((state) => state.Cart);
  
  const dispatch = useDispatch();

  function ProductQuantity(item) {
    const useritem = SelectedProducts.find((userselect) => {
      return userselect.id === item.id;
    });
    return useritem.quantity;
  }
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <Helmet>
      <title>Shop Details</title>
    </Helmet>
    <ScrollToTop/>
    <BannerSection  PageName="Shop Details" />

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
    
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap : "wrap" ,
    }}
  >
    <Box
      sx={{
        width: {xs : "100%" , md : "75%"},
        display: "flex",
        mx: "auto",
        my: "50px",
        justifyContent: {xs : "center" , md : "space-between"},
        flexWrap: "wrap",
      }}
    >
      <Box
        
        sx={{
          width :{xs : "85%" , md : "45%"},
          bgcolor: "#E9E7DB",
          borderRadius: "15px",
          display : "flex" , 
          alignItems : "center"
        }}
      >
        <img
          style={{ width: "100%" }}
          src={data.imageLink}
          alt="product Photo"
          loading="lazy"
        />
      </Box>
      <Box
        sx={{
          width: {xs : "80%" , md : "45%"},
          border: "1px solid #000",
          borderRadius: "20px",
          padding: "25px",
          mt : {xs : "20px" , md : "0px"}
        }}
      >
        <Box sx={{ fontSize: "14px", color: "gray"  , display : "flex"}}>
          <span style={{ color: "#ac8c5b" }}>Category: </span>Furniture
          , {data.category} 

          <Chip
  label={Math.floor( 100 -  (data.sale / data.price) * 100) +"%"}
  sx={{
    height: "20px",
    borderRadius: "5px",
    backgroundColor: "#AC8C5B",
    color: "#FFF",
    ml : "10px"
  }}
/>

        </Box>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {data.Name}
        </Typography>
        <Box sx={{ display: "flex" , alignItems : "center"}}>
          <Box sx={{ mt: "5px", display: "flex" }}>
            <del style={{ marginRight: "7px", color: "gray" }}> ${data.price}</del>
            <Typography>${data.sale}</Typography>
          </Box>
          <Stack spacing={1}>
            <Rating
              sx={{ m: "3px 20px" }}
              name="half-rating-read"
              defaultValue={data.rate}
              precision={0.5}
              readOnly
            />
          </Stack>
          {data.reviews} Reviews
        </Box>
        <Box>
          <Typography sx={{ color: "gray" }}>
            <span style={{ color: "#5FC481" }}>{data.count} In stock</span> (sold {data.sold}
            proucts in last 10 Hours )
          </Typography>
        </Box>
        <hr style={{ margin: "30px 0" }}></hr>
        <Box>
        <Typography sx={{ color: "black" }}>description : </Typography>
          <Typography sx={{ color: "gray" }}>{data.description}</Typography>
        </Box>
        <hr style={{ margin: "30px 0" }} />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "20%" }}>
<Box height="31px" display="flex" alignItems="center">
              <Typography >Quantity</Typography>    
</Box>      

      <Typography>Tags </Typography>
            <Typography sx={{mt : "9px"}}>Share </Typography>
          </Box>
          <Box sx={{ width: "70%", color: "gray", fontSize: "10px" }}>
            <Box display="flex" alignItems="center">
                 {SelectedProductsId.includes(data.id) ?

                (<Box className="btn-tocart">
                <Box  sx={{ height : "27%", display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
                <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
                    <IconButton 
                    
                    onClick={() => {
                      dispatch(decrement(data))
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
                    <Typography sx={{mx:"5px" , fontWeight : "bold"}}>{ProductQuantity(data)}</Typography>
                    <IconButton
                    onClick={() => {
                      dispatch(increment(data))
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
                sx={{ bgcolor: "#AC8C5B", 
                ":hover": {
                color: "#ac8c5b",
                outline: "1px solid #ac8c5b",
                bgcolor : "transparent"
                },
                }}
                variant="contained"

                onClick={() => {
                dispatch(AddToCart(data))

                }}

                >
                add to cart
                </Button>
                )
                  
                  }
            </Box>
            <Typography>{data.tags} </Typography>
          <Box>
              <IconButton >
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <PinterestIcon/>
              </IconButton>
          </Box>


          </Box>
        </Box>
      </Box>
    </Box>
  </Box>

    }
{data &&

<Commentsec {...{data , CommentSecWidth , CommentSecName}} />
}

<Box
        sx={{
          bgcolor: "#F3F2EE",
          paddingX: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minheight: "470px",
        }}
      >
        <Box sx={{ transform: "translateY(40px)", width: "75%" }}>
          <Typography
            sx={{ fontWeight: "900", width: "100%" }}
            variant={isSmallScreen ? "h5" : "h4"}
          >
            Related Products
          </Typography>
        </Box>
        <SwiperSection catdata = {catdata}/>
      </Box>

        
    </>
  );
};

export default Shopdetails;