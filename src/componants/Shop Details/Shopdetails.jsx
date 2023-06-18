import { Box, Rating, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import { Stack } from "@mui/system";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

const Shopdetails = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="DetailCover"
      >
        <Typography variant="h4">Shop Details</Typography>
        <Typography>
          Home
          <EastIcon sx={{ transform: "translateY(2px)", fontSize: "10px" }} />
          <span style={{ color: "#ac8c5b" }}> Details </span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "75%",
            display: "flex",
            mx: "auto",
            my: "50px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            width="45%"
            sx={{
              border: "1px solid gray",
              bgcolor: "#fefefe",
              borderRadius: "15px",
            }}
          >
            <img
              style={{ width: "100%" }}
              src="../../../Imgs/Productss.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: "45%",
              border: "1px solid #000",
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "gray" }}>
              <span style={{ color: "#ac8c5b" }}>Category: </span>Furniture
              ,Armchairs
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
              Bracelet Armchair Fendi Case
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mt: "5px", display: "flex" }}>
                <del style={{ marginRight: "7px", color: "gray" }}> $110</del>
                <Typography>$100</Typography>
              </Box>
              <Stack spacing={1}>
                <Rating
                  sx={{ m: "3px 20px" }}
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              6 Reviews
            </Box>
            <Box>
              <Typography sx={{ color: "gray" }}>
                <span style={{ color: "#5FC481" }}>45 In stock</span> (sold 21
                proucts in last 10 Hours )
              </Typography>
            </Box>
            <hr style={{ margin: "30px 0" }}></hr>
            <Box>
              <Typography sx={{ color: "gray" }}>lorem60 </Typography>
            </Box>
            <hr style={{ margin: "30px 0" }} />
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "20%" }}>
                <Typography>Quantity </Typography>
                <Typography>Size </Typography>
                <Typography>Tags </Typography>
                <Typography>Share </Typography>
              </Box>
              <Box sx={{ width: "70%", color: "gray", fontSize: "10px" }}>
                <Typography>Quantity </Typography>
                <Typography>Size </Typography>
                <Typography>Tags </Typography>
                <Typography>
                  <FacebookOutlinedIcon />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Shopdetails;
