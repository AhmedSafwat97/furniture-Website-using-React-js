import {
    Box,
    Button,
    Chip,
    CircularProgress,
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
import { useGetproductByNameQuery } from "../../../services/productApi";
import { useNavigate } from "react-router-dom";




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
  const { data, error, isLoading } = useGetproductByNameQuery();

  const Navigate = useNavigate();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const TabsArray = [
      {label : "All"  } , 
      {label : "Chairs" } , 
      {label : "Sofa"  } , 
      {label : "Beds"  } , 
      {label : "Commodes"  } , 
      {label : "Dressers"  } , 
      {label : "Tables"  } , 
        ];
      const valueFilter = (tab)=>{
       return tab.label === "All"? data : data.filter((product)=> product.category === tab.label);

      }
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
        {TabsArray.map((tab , index) => (

      <Tab key={index} label={tab.label} {...a11yProps({index})} />
        )) }
        </Tabs>
      </Box>


      {TabsArray.map((tab , index) => (
      <TabPanel key={index} style={{width : isSmallScreen ? "100%" : "70%" }} value={value} index={index}>
      {error && 
   <Box  sx={{display : "flex" , justifyContent : "center" , alignItems : "center" ,width : "100%" , height : "100%"}}>
    <Typography variant="h6">Data Not Found</Typography>
    </Box>}


     {isLoading && 
      <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center" ,width : "100%" , height : "100%"}}>
       <CircularProgress />
      </Box>}


     {data &&
     
      <Box
        sx={{
            width:"100%" ,
            display : "flex" , 
            justifyContent : "center" , 
            flexWrap :"wrap" ,
        }}>
          {valueFilter(tab).map((product)=>
      
      (
        <Box
        key={product.id}
        className="Card"
        sx={{
          width : {xs:"150px" , md: "180px"} ,
          height: "290px",
          backgroundColor: "#F3F2EE",
          borderRadius: "15px",
          padding: "10px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          m : "10px"
      }}

      onClick={() => {
        Navigate(`/prodetails/${product.id}`)
      }}
      >
      {product.discount && 
      <Chip
      label={Math.floor( 100 -  (product.sale / product.price) * 100) +"%"}
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
          src={product.imageLink}
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
        <Typography variant="h6">{product.Name}</Typography>
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rate}
            precision={0.5}
            readOnly
          />
        </Stack>
        <Box sx={{ mt: "5px", display: "flex" }}>
          <del style={{ marginRight: "7px" }}> ${product.price}</del>
          <Typography>${product.sale}</Typography>
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
            ))}

            
            
            
            </Box>
            }

            </TabPanel>

            ))}
          
          
          
          

    </Box>



  )
};

export default AllProductsSection;