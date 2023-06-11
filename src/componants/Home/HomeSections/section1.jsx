import {
  Box,
  Button,
  Chip,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Section1 = () => {
  const itemData = [
    {
      img: "../../../../Imgs/Design1.jpg",
      rows: 2,
      cols: 3,
      discount: "30% Discount",
      title: `New Stylish Decor Furniture`,
      deletedPrice: 400,
      price: 250,
    },
    {
      img: "../../../../Imgs/design3.jpg",
      cols: 2,
      discount: "Mega Offer 36% Off",
      title: "The Latest Collection of Furniture",
      deletedPrice: 350,
      price: 280,
    },
    {
      img: "../../../../Imgs/design2.jpg",
      cols: 2,
      discount: "Exclusive Offer 50% Off",
      title: "Farmaat Wooden Chaire",
      deletedPrice: 500,
      price: 250,
    },
  ];

  // this hook used to make responsive from xs to md => cols={matchDownMd ? 5 : item.cols }
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const Navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#F3F2EE" }}>
      <Box sx={{ padding: "16px", paddingBottom: "0px" }}>
        <ImageList
          sx={{ width: "75%", height: "auto", mx: "auto" }}
          gap={20}
          variant="quilted"
          cols={5}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.title}
              cols={matchDownMd ? 5 : item.cols}
              rows={matchDownMd ? 1 : item.rows}
              sx={{
                borderRadius: "15px",
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundOrigin: "content-box",
              }}
            >
              <Box
                sx={{
                  color: "#fff",
                  my: "25px",
                  lineHeight: 2,
                  ml: "30px",
                  width: "70%",
                  marginY: item.cols === 3 ? "36px" : null,
                }}
              >
                <Chip
                  label={item.discount}
                  sx={{
                    mb: item.cols === 3 ? "8px" : "4px",
                    borderRadius: "5px",
                    backgroundColor: "#FCC012",
                    color: "#000",
                  }}
                />
                <Typography
                  variant={item.cols === 3 ? "h3" : "h5"}
                  sx={{ fontSize: matchDownMd ? "20px" : null }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: matchDownMd ? "12px" : "18px" }}>
                  <del style={{ color: "lightgray" }}>${item.deletedPrice}</del>{" "}
                  ${item.price}
                </Typography>
                {item.cols === 3 ? (
                  <Button
                    sx={{
                      fontSize: matchDownMd ? "10px" : "16px",
                      mt: matchDownMd ? "10px" : "50px",
                      backgroundColor: "#FCC012",
                      cursor: "pointer",
                      color: "black",
                      padding: "10px 16px",
                      borderRadius: "20px",
                      ":hover": {
                        color: "#FCC012",
                        outline: "1px solid #FCC012",
                      },
                    }}
                    onClick={() => {
                      Navigate("/Shop");
                    }}
                  >
                    Shop Now
                  </Button>
                ) : (
                  <Link
                    to="/Shop"
                    style={{
                      textDecoration: "underline",
                      color: "lightgray",
                      fontSize: matchDownMd ? "10px" : "16px",
                    }}
                  >
                    Shop Now
                  </Link>
                )}
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>





      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "75%",
            paddingBottom: "0px",
            display : {xs : "block" , md : "flex"} ,
            mt : "16px"

          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              padding: "15px",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              display: "flex",
              width: {xs : "85%" , md : "45%"},
              ml: "12px",
              mx : matchDownMd ? "auto" : null ,
              mb : matchDownMd ? "10px" : null 
            }}
          >
            <Box
              sx={{
                bgcolor: "#F3F2EE",
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ width: "50px", height: "70px" }}>
                <img
                  src="../../../../Imgs/product.png"
                  style={{
                    borderRadius: "15px",
                    widht: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Box>
            </Box>
            <Box sx={{ mx: "25px" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                Latest Offer
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", lineHeight: "20px" }}
              >
                <span style={{ color: "red" }}>40% Off </span>
                Only This Friday And Get Special Gift
              </Typography>
              <Button
                sx={{
                  fontSize: matchDownMd ? "10px" : "12px",
                  mt: "8px",
                  backgroundColor: "#AC8C5B",
                  fontWeight: "200",
                  cursor: "pointer",
                  color: "#FFF",
                  padding: "5px 20px",
                  borderRadius: "20px",
                  ":hover": { color: "#FCC012", outline: "1px solid #FCC012" },
                }}
                onClick={() => {
                  Navigate("/Shop");
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>





        
        <Box sx={{display : "flex" , justifyContent : "space-around" , width : {xs : "70%", md : "55%"} 
        , mx : matchDownMd ? "auto" : null ,
       mb : matchDownMd ? "10px" : null 
      
      }}>
<Box sx={{width : "30%" , height : "100%" ,  display : "flex" , flexDirection : "column" ,justifyContent : "center" , alignItems : "center"}}>
  <Typography className="outline-text" fontSize={matchDownMd ? "25px" : "40px"} >975+</Typography>
  <Typography color="gray">Home furniture</Typography>
</Box>


<Box sx={{width : "30%" , height : "100%"  ,  display : "flex" , flexDirection : "column" ,justifyContent : "center" , alignItems : "center" }}>
<Typography className="outline-text" fontSize={matchDownMd ? "25px" : "40px"} >320+</Typography>
<Typography color="gray">interior Designs</Typography>
</Box>


<Box sx={{width : "30%" , height : "100%" , display : "flex" , flexDirection : "column" ,justifyContent : "center" , alignItems : "center" }}>
<Typography className="outline-text" fontSize={matchDownMd ? "25px" : "40px"} >980+</Typography>
<Typography color="gray">Happy Clients</Typography>
</Box>



</Box>





        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
