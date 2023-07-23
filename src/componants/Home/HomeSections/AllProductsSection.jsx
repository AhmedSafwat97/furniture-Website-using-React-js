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
  import React from "react";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from 'prop-types';
import { useGetproductByNameQuery } from "../../../services/productApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, decrement, increment } from "../../../services/CartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddToFav, deleteFromFav } from "../../../services/FavSlice";
import Shape from './Shape';



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
  const { data, error, isLoading } = useGetproductByNameQuery();
  const { SelectedProductsId , SelectedProducts  } = useSelector((state) => state.Cart);
  const { favProductsId   } = useSelector((state) => state.Fav);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function ProductQuantity(item) {
      const useritem = SelectedProducts.find((userselect) => {
        return userselect.id === item.id;
      });
      return useritem.quantity;
    }

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
      display : {xs : "none" , md : "flex"} ,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mb : "35px"

    }}
  >
    <Box sx={{ width: "75%"  , mt: "40px" }}>
      <Typography
        sx={{ fontWeight: "900", width : "100%" }}
        variant={isSmallScreen ? "h5" : "h4"}
      >
        Our Best All Products
      </Typography>
 <Box sx={{display : "flex"}}>
       <Typography className='outline-text' sx={{fontSize:'30px' , mr : "10px"}}>
         Collections
       </Typography>
       <Shape/>

 </Box>
    </Box>


<Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
<Tabs sx={{justifyContent:"center"}} value={value} onChange={handleChange} aria-label="basic tabs example">
{TabsArray.map((tab , index) => (
<Tab sx={{padding: {xs:"6px 7px",md:"12px 16px"},minWidth:{xs:"25px",md:"90px"}, fontSize:{xs:"10px",md:"16px"}}} key={index} label={tab.label} {...a11yProps({index})} />
)) }

</Tabs>

</Box>


      {TabsArray.map((tab , index) => (
      <TabPanel key={index} style={{width : isSmallScreen ? "100%" : "75%" }} value={value} index={index}>
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
            flexWrap :"wrap" 
        }}>
          {valueFilter(tab).slice(0 , 8).map((Product)=>
      
      (
        <Box
        key={Product.id}
        className="Card fade-in"
        sx={{
          width : {xs:"150px" , md: "200px"} ,
          height: "290px",
          backgroundColor: "#F3F2EE",
          borderRadius: "15px",
          padding: "10px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          m : "10px"
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
            {Product.price && <del style={{ marginRight: "7px" }}> ${Product.price}</del>}
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
            ))}

            
            
            
            </Box>
            }

            </TabPanel>

            ))}
          
          
          
          

    </Box>



  )
};

export default AllProductsSection;