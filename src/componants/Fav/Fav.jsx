import {
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, decrement, increment } from "../../services/CartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddToFav, deleteFromFav } from "../../services/FavSlice";
import BannerSection from "../Home/HomeSections/bannerSection";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { Helmet } from "react-helmet";

const Fav = () => {
  const { SelectedProductsId, SelectedProducts } = useSelector(
    (state) => state.Cart
  );
  const { favProductsId, favProducts } = useSelector((state) => state.Fav);
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  function ProductQuantity(item) {
    const useritem = SelectedProducts?.find((userselect) => {
      return userselect.id === item.id;
    });
    return useritem.quantity;
  }

  return (
    <Box>
      <Helmet>
        <title>Favourite-FurniPro</title>
      </Helmet>
      <ScrollToTop />

      <BannerSection PageName="Favourite" />

      {favProducts.length === 0 ? (
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <HeartBrokenIcon sx={{ fontSize: "40px", color: "red" }} />
            <Typography variant="h4" textAlign="center">
              You do not nave any favourite products
            </Typography>
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ width: "75%", mt: "30px", mx: "auto" }}>
            <Typography variant="h4" fontWeight="700">
              Favourites
            </Typography>
            <Typography>{favProducts.length} Items</Typography>
          </Box>

          <Box
            className="Cards-Container"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
              width: { xs: "90%", md: "75%" },
              minHeight: "450px",
              margin: "30px auto ",
            }}
          >
            {favProducts.map((Product) => (
              <Box
                key={Product.id}
                className="Card"
                sx={{
                  width: "200px",
                  height: "290px",
                  m: "10px",
                  backgroundColor: "#F3F2EE",
                  borderRadius: "15px",
                  padding: "10px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {Product.discount && (
                  <Chip
                    label={
                      Math.floor(100 - (Product.sale / Product.price) * 100) +
                      "%"
                    }
                    sx={{
                      height: "20px",
                      borderRadius: "5px",
                      backgroundColor: "#AC8C5B",
                      color: "#FFF",
                      position: "absolute",
                    }}
                  />
                )}

                {favProductsId.includes(Product.id) ? (
                  <IconButton
                    onClick={() => {
                      dispatch(deleteFromFav(Product));
                    }}
                    sx={{ color: "gray", position: "absolute", right: "5px" }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      dispatch(AddToFav(Product));
                    }}
                    sx={{ color: "gray", position: "absolute", right: "5px" }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}

                <Box
                  sx={{ width: "75%", height: "65%", mx: "auto" }}
                  onClick={() => {
                    Navigate(`/prodetails/${Product.id}`);
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={Product.imageLink}
                    alt="product"
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="cardcontent"
                  sx={{
                    p: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    bgcolor: "#FFF",
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
                    {Product.discount && (
                      <del style={{ marginRight: "7px" }}>
                        {" "}
                        ${Product.price}
                      </del>
                    )}
                    <Typography>${Product.discount? Product.sale : Product.price}</Typography>
                  </Box>

                  {SelectedProductsId.includes(Product.id) ? (
                    <Box className="btn-tocart" display="none">
                      <Box
                        sx={{
                          height: "27%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "75%",
                            justifyContent: "center",
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              dispatch(decrement(Product));
                            }}
                            sx={{
                              bgcolor: "#FFF",
                              ":hover": {
                                bgcolor: "#ac8c5b",
                              },
                            }}
                            size="small"
                          >
                            <RemoveIcon
                              sx={{
                                color: "#ac8c5b",
                                ":hover": {
                                  color: "#FFF",
                                },
                              }}
                            />
                          </IconButton>
                          <Typography sx={{ mx: "5px", fontWeight: "bold" }}>
                            {ProductQuantity(Product)}
                          </Typography>
                          <IconButton
                            onClick={() => {
                              dispatch(increment(Product));
                            }}
                            sx={{
                              bgcolor: "#FFF",
                              ":hover": {
                                bgcolor: "#ac8c5b",
                              },
                            }}
                            size="small"
                          >
                            <AddIcon
                              sx={{
                                color: "#ac8c5b",
                                ":hover": {
                                  color: "#FFF",
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Button
                      className="btn-tocart"
                      sx={{
                        bgcolor: "#AC8C5B",
                        display: "none",
                        ":hover": {
                          color: "#ac8c5b",
                          outline: "1px solid #ac8c5b",
                          bgcolor: "transparent",
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        dispatch(AddToCart(Product));
                      }}
                    >
                      add to cart
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Fav;
