import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "./Subscribe";

const Footer = () => {
  const pages = [
    { name: "Home", Link: "/" },
    { name: "About", Link: "About" },
    { name: "Shop", Link: "Shop" },
    { name: "Blog", Link: "Blog" },
    { name: "Contact", Link: "Contact" },
  ];
  const navigate = useNavigate();
  return (
    <>
    <Subscribe/>
      <Box sx={{ width: "100%", height: { xs: "500", md: "400px" } }}>
        <Box
          className="footer"
          sx={{
            display: "flex",
            flexDirection: "column ",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexDirection: { xs: "column", md: "row" },
              border: "1px solid gray",
              width: "97%",
              height: "70%",
            }}
          >
            <Box sx={{ m: "20px 60px", p: "10px", height: "180px" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                About Us
              </Typography>
              <Box sx={{ borderTop: "1px solid gray", width: "70px" }} />
              <Typography variant="p" sx={{ fontSize: "10px", color: "gray" }}>
                Etoshi is an exating contrmpotary brand
                <br />
                which focuses on high quality products
                <br />
                graphics with britich style
              </Typography>
              <Box sx={{ mt: "20px", display: "flex" }}>
                <MailIcon sx={{ color: "yellow" }} />
                <Typography sx={{ color: "#FFF", ml: "10px" }} variant="p">
                  info@mydomain.com
                </Typography>
              </Box>

              <Box sx={{ mt: "20px", display: "flex" }}>
                <LocalPhoneIcon sx={{ color: "yellow" }} />
                <Typography sx={{ color: "#FFF", ml: "10px" }} variant="p">
                  +777 2345 8892
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                padding: "20px",
                border: "1px solid gray",
                width: { xs: "70%", md: "35%" },
                height: "110px",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100px", cursor: "pointer" }}>
                <img
                  style={{ width: "100%", Height: "100%" }}
                  src="../../../Imgs/Logo.png"
                  alt="Furni Pro"
                />
              </Box>
              <Box>
                <Typography
                  variant="p"
                  sx={{ color: "gray", marginRight: "25px" }}
                >
                  Follow Us
                </Typography>
                <IconButton  sx={{ color: "orange"}}>
                  <FacebookOutlinedIcon sx={{fontSize : "20px"}} />
                </IconButton>
                <IconButton  sx={{ color: "orange"}}>
                  <TwitterIcon sx={{fontSize : "20px"}} />
                </IconButton>{" "}
                <IconButton  sx={{ color: "orange" }}>
                  <PinterestIcon sx={{fontSize : "20px"}} />
                </IconButton>{" "}
                <IconButton  sx={{ color: "orange"}}>
                  <LinkedInIcon sx={{fontSize : "20px"}} />
                </IconButton>{" "}
                <IconButton  sx={{ color: "orange" }}>
                  <WhatsAppIcon sx={{fontSize : "20px"}} />
                </IconButton>
              </Box>

              <Box
                sx={{
                  mb: "10px",
                  display: "flex",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    sx={{
                      display: "block",
                      color: "gray",
                      fontSize: "10px",
                    }}
                    onClick={() => {
                      navigate(`${page.Link}`);
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ height: "180px", m: "20px 60px", p: "10px" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                My Account
              </Typography>
              <Box sx={{ borderTop: "1px solid gray", width: "70px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  fontWeight: "100",
                }}
              >
                <Typography variant="p" sx={{ color: "gray", m: "5px 0" }}>
                  My Order
                </Typography>
                <Typography variant="p" sx={{ color: "gray", m: "5px 0" }}>
                  My Credit
                </Typography>
                <Typography variant="p" sx={{ color: "gray", m: "5px 0" }}>
                  My Adresses
                </Typography>
                <Typography variant="p" sx={{ color: "gray", m: "5px 0" }}>
                  My Personal Info
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "97%", height: {xs : "fit-content" , md : "50px"}, border: "1px solid gray",
           display : "flex" , justifyContent : "center" , alignItems : "center"
           }}>
          <Box sx={{width : "70%" , display : "flex" , flexDirection : {xs : "column" , md : "row"} ,alignItems : "center" , justifyContent : "space-between" }}>
              <Box display="flex" justifyContent="space-between">
                  <Typography  variant="p" sx={{color : "gray" , fontSize : "13px"}} >Terms Of Service</Typography>
                  <Typography variant="p"  sx={{m : "0 20px" ,color : "gray", fontSize : "13px"}} >|</Typography>
                  <Typography variant="p"  sx={{color : "orange" , fontSize : "13px"}} >Privacy Policy</Typography>
              </Box>
              <Box>
            <IconButton>
                <img style={{width : "40px"}} src="../../../Imgs/paypal.png"  alt=""/>
            </IconButton>
            <IconButton>
                <img style={{width : "40px"}} src="../../../Imgs/visa.png"  alt=""/>
            </IconButton>     <IconButton>
                <img style={{width : "40px"}} src="../../../Imgs/master card.png"  alt=""/>
            </IconButton>
              </Box>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
