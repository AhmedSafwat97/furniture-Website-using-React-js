import {
    Box,
    Button,
    Chip,
    IconButton,
    Rating,
    Stack,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
    useTheme,
  } from
    "@mui/material";
  import React, { useState } from "react";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from 'prop-types';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </Box>
    );
  }

const AllProductsSection = () => {
    const [fav, setfav] = useState(false);
  const [outlinefav, setoutlinefav] = useState(true);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
  
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
    sx={{
        mx:"auto",
      bgcolor: "#FFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

    }}
  >
    <Box sx={{ width: "75%"  , mt: "40px" }}>
      <Typography
        sx={{ fontWeight: "900", width : "100%" }}
        variant={isSmallScreen ? "h5" : "h4"}
      >
        Our Best All Products
      </Typography>
      <Typography className='outline-text' sx={{fontSize:'30px'}}>
        Collections
      </Typography>
    </Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>

     
      <TabPanel style={{width : "75%"}}  value={value} index={0}>
      <Box
        sx={{
            width:"100%" ,
            display : "flex" , 
            justifyContent : "center" , 
            flexWrap :"wrap" ,
        }}>



            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"
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
                  bgcolor: "#FFF",
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

            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"

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
                  bgcolor: "#FFF",
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

            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"

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
                  bgcolor: "#FFF",
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

            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"

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
                  bgcolor: "#FFF",
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
            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"
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
                  bgcolor: "#FFF",
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

            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"

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
                  bgcolor: "#FFF",
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

            <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"
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
                  bgcolor: "#FFF",
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

                        <Box
              className="Card"
              sx={{
                width : "180px" ,
                height: "290px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "15px"

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
                  bgcolor: "#FFF",
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
      
      
      
      
      </Box>
      </TabPanel>



      <TabPanel style={{ width : "75%"}} value={value} index={1}>
      
      </TabPanel>

      <TabPanel style={{ width : "75%"}} value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>



  )
};

export default AllProductsSection;