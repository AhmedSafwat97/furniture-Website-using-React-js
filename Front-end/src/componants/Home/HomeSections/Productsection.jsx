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

const Productsection = () => {
  const [fav, setfav] = useState(false);
  const [outlinefav, setoutlinefav] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const num = isSmallScreen ? 1 : 4;


  return (
    <Box
      sx={{
        bgcolor: "#F3F2EE",
        paddingX: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "470px",
      }}
    >
      <Box sx={{ transform: "translateY(40px)", width: "75%" }}>
        <Typography
          sx={{ fontWeight: "900", width : "100%" }}
          variant={isSmallScreen ? "h5" : "h4"}
        >
          Featured Products
        </Typography>
      </Box>

      <Box
        className="Cards-Container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
          height: "410px",
          paddingX: "10px",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={num}
          navigation
          style={{ width: "100%", height: "100%", padding: "30px 0" }}
        >
          <SwiperSlide style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
            <Box
              className="Card"
              style={{
                height: "290px",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Chip
                label="-25%"
                sx={{
                  height: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#AC8C5B",
                  color: "#FFF",
                  position: "absolute",
                }}
              />

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

              <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../../../Imgs/Productss.png"
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
                <Typography variant="h6">Chair</Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <Box sx={{ mt: "5px", display: "flex" }}>
                  <del style={{ marginRight: "7px" }}> $110</del>
                  <Typography>$100</Typography>
                </Box>

                <Button
                  className="btn-tocart"
                  sx={{ bgcolor: "#AC8C5B", display: "none" }}
                  variant="contained"
                >
                  add to cart
                </Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
            <Box
              className="Card"
              style={{
                height: "290px",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                marginx: "15px",
              }}
            >
              <Chip
                label="-25%"
                sx={{
                  height: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#AC8C5B",
                  color: "#FFF",
                  position: "absolute",
                }}
              />

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

              <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../../../Imgs/Productss.png"
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
                <Typography variant="h6">Chair</Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <Box sx={{ mt: "5px", display: "flex" }}>
                  <del style={{ marginRight: "7px" }}> $110</del>
                  <Typography>$100</Typography>
                </Box>

                <Button
                  className="btn-tocart"
                  sx={{ bgcolor: "#AC8C5B", display: "none" }}
                  variant="contained"
                >
                  add to cart
                </Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
            <Box
              className="Card"
              style={{
                height: "290px",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                marginx: "15px",
              }}
            >
              <Chip
                label="-25%"
                sx={{
                  height: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#AC8C5B",
                  color: "#FFF",
                  position: "absolute",
                }}
              />

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

              <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../../../Imgs/Productss.png"
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
                <Typography variant="h6">Chair</Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <Box sx={{ mt: "5px", display: "flex" }}>
                  <del style={{ marginRight: "7px" }}> $110</del>
                  <Typography>$100</Typography>
                </Box>

                <Button
                  className="btn-tocart"
                  sx={{ bgcolor: "#AC8C5B", display: "none" }}
                  variant="contained"
                >
                  add to cart
                </Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
            <Box
              className="Card"
              style={{
                height: "290px",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                marginx: "15px",
              }}
            >
              <Chip
                label="-25%"
                sx={{
                  height: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#AC8C5B",
                  color: "#FFF",
                  position: "absolute",
                }}
              />

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

              <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../../../Imgs/Productss.png"
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
                <Typography variant="h6">Chair</Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <Box sx={{ mt: "5px", display: "flex" }}>
                  <del style={{ marginRight: "7px" }}> $110</del>
                  <Typography>$100</Typography>
                </Box>

                <Button
                  className="btn-tocart"
                  sx={{ bgcolor: "#AC8C5B", display: "none" }}
                  variant="contained"
                >
                  add to cart
                </Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide style={{ display: "flex", alignItems: "end" , justifyContent : "center" }}>
            <Box
              className="Card"
              style={{
                height: "290px",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                marginx: "15px",
              }}
            >
              <Chip
                label="-25%"
                sx={{
                  height: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#AC8C5B",
                  color: "#FFF",
                  position: "absolute",
                }}
              />

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

              <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="../../../../Imgs/Productss.png"
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
                <Typography variant="h6">Chair</Typography>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <Box sx={{ mt: "5px", display: "flex" }}>
                  <del style={{ marginRight: "7px" }}> $110</del>
                  <Typography>$100</Typography>
                </Box>

                <Button
                  className="btn-tocart"
                  sx={{ bgcolor: "#AC8C5B", display: "none" }}
                  variant="contained"
                >
                  add to cart
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Productsection;
