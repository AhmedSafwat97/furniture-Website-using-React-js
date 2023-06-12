import {
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TramOutlined } from "@mui/icons-material";

const Productsection = () => {
  const [fav, setfav] = useState(false);
  const [outlinefav, setoutlinefav] = useState(true);
  const [addtocart, setaddtocart] = useState(false);

  return (
    <Box sx={{ bgcolor: "#F3F2EE", p: "20px" , display : "flex" , flexDirection : "column" , alignItems : "center" }}>
      <Box className="Cards-Container" sx={{display : "flex"}}>
        <Box
          className="Card"
          sx={{
            width: "210px",
            height: "290px",
            bgcolor: "#FFF",
            borderRadius: "15px",
            p: "10px",
            position: "relative",
            overflow : "hidden",
            cursor : "pointer" ,
            mx : "15px"
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
              mx:"auto" ,
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

            <Button className="btn-tocart" sx={{bgcolor : "#AC8C5B" , display :"none"}} variant="contained">add to cart</Button>

          </Box>
        </Box>

        <Box
          className="Card"
          sx={{
            width: "210px",
            height: "290px",
            bgcolor: "#FFF",
            borderRadius: "15px",
            p: "10px",
            position: "relative",
            overflow : "hidden",
            cursor : "pointer" ,
            mx : "15px"
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
              mx:"auto" ,
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

            <Button className="btn-tocart" sx={{bgcolor : "#AC8C5B" , display :"none"}} variant="contained">add to cart</Button>

          </Box>
        </Box>

        <Box
          className="Card"
          sx={{
            width: "210px",
            height: "290px",
            bgcolor: "#FFF",
            borderRadius: "15px",
            p: "10px",
            position: "relative",
            overflow : "hidden",
            cursor : "pointer" ,
            mx : "15px"
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
              mx:"auto" ,
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

            <Button className="btn-tocart" sx={{bgcolor : "#AC8C5B" , display :"none"}} variant="contained">add to cart</Button>

          </Box>
        </Box>

        <Box
          className="Card"
          sx={{
            width: "210px",
            height: "290px",
            bgcolor: "#FFF",
            borderRadius: "15px",
            p: "10px",
            position: "relative",
            overflow : "hidden",
            cursor : "pointer" ,
            mx : "15px"
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
              mx:"auto" ,
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

            <Button className="btn-tocart" sx={{bgcolor : "#AC8C5B" , display :"none"}} variant="contained">add to cart</Button>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Productsection;
