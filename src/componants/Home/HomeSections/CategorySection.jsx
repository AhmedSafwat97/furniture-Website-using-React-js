import {
    Box,
    CircularProgress,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";

  import React from "react";
import { useGetproductByNameQuery } from "../../../services/productApi";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router-dom";
  
  
  const CategorySection = () => {

    const [categoriynum, setcategoriynum] = useState(4);
    const [arrowview, setarrowview] = useState(true);

    const { data, error, isLoading } = useGetproductByNameQuery();

    const uniqueProducts = [];
    const categories = [];



    const Navigate = useNavigate();


if (data) {
  // Iterate over each product
  for (const product of data) {
    const category = product.category;
  
    // Check if the category is already added to the uniqueProducts array
    if (!categories.includes(category)) {
      uniqueProducts.push(product);
      categories.push(category);
    }
  }  
}

    
     const theme = useTheme();
     const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
    sx={{
      bgcolor: "#FFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ width: "75%"  , mt: "40px" , display : 'flex' , justifyContent : "space-between" ,alignItems : "center"}}>
      <Typography
        sx={{ fontWeight: "900", width : "100%" }}
        variant={isSmallScreen ? "h5" : "h4"}
      >
        Popular Categories
      </Typography>

      
   <IconButton 
   onClick={
    () => {
      setarrowview(arrowview ? false : true )
      setcategoriynum(arrowview  ? uniqueProducts.length : 4 )

    }
  
   }
   >
    {arrowview ? <ExpandMoreIcon sx={{fontSize : "45px"}}/> : <ExpandLessIcon sx={{fontSize : "45px"}}/> }
   </IconButton>
    </Box>

    <Box
      sx={{
        flexGrow: 1,
        width: {xs : "100%" , md : "60%"},
        paddingY: "10px",
      }}
    >


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
          style={{ display:"flex", justifyContent: "center",flexWrap : "wrap", padding: "20px 0 40px 0" }}
        >

  {uniqueProducts.sort((a,b) => b.id - a.id).slice(0 , categoriynum).map((Category) => (

<Box
className="fade-in "
onClick={()=> {      
  Navigate(`/shop/${Category.category}`)
}}
key={Category.id}
          sx={{
            width: {xs :"120px" , md : "150px"},
            height: {xs : "220px" , md : "250px"},
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              margin: "15px",
              ":hover":
               {outline: '1px solid #ac8c5b' ,outlineOffset: '-1px'},
               p : "5px"
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" , mb : {xs : "10px" ,md : "15px"} }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Category.imageLink}
                alt="category details"
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
                height: "25%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">{Category.category}</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>{data.filter((product) => product.category === Category.category ).length} products</Typography>
              </Box>
            </Box>
          </Box>


  ))}


          
          
  
          </Box>
 }



      </Box>

    </Box>

  )
};
export default CategorySection ;