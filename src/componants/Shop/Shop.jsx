import React from 'react';
import {
    Box,
    Chip,
    CircularProgress,
    IconButton,
    Rating,
    Stack,
    Typography,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Pagination,
    Accordion,
    AccordionSummary,
    AccordionDetails
  } from
    "@mui/material";
  import { useState } from "react";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import SearchIcon from "@mui/icons-material/Search";
  import {  useGetproductByNameQuery } from "../../services/productApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, decrement, increment } from "../../services/CartSlice";
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from '@mui/icons-material/Remove';
import { AddToFav, deleteFromFav } from "../../services/FavSlice";
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import BannerSection from "../Home/HomeSections/bannerSection";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Helmet } from 'react-helmet';




const Shop = () => {
    const {cat} = useParams();

  const { data, error, isLoading } = useGetproductByNameQuery();
  const { SelectedProductsId , SelectedProducts  } = useSelector((state) => state.Cart);
  const { favProductsId   } = useSelector((state) => state.Fav);
  const [checked, setchecked] = useState([cat !== undefined? cat:"All"]);
  const [MaxPrice, setMaxPrice] = useState(0);
  const [MinPrice, setMinPrice] = useState(0);
  const [Search, setSearch] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [Showfilter, setShowfilter] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);

  };
 


//   ________________________________________________________________
  const uniqueProducts = [];
  const categories = [];

  if (data) {
    // ____________________________________
    // this code is used to get only one product for each category 
    // ____________________________________
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
//_________________________________________________________________

// to push and remove categories when we checked 
const handleCheckboxChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      setchecked([...checked, category]);
    } else {
      setchecked(checked.filter((c) => c !== category));
    }
  };

const valueFilter = ()=>{
    if (Search === "") {
        if (checked.includes("All") || checked.length === 0 ) {
            return  MaxPrice !== 0 ? data.filter((product)=> product.price <= MaxPrice && product.price >= MinPrice ) : data
          } else {            
            return MaxPrice === 0 ?  data.filter((product)=> checked.includes(product.category)) 
            : data.filter((product)=> checked.includes(product.category)).filter((product) => product.price <= MaxPrice && product.price >= MinPrice ) 
          
          } 
    } else {
        return data.filter((product) => product.Name.toUpperCase().startsWith(Search.toUpperCase()))
    }

      }

  function ProductQuantity(item) {
      const useritem = SelectedProducts.find((userselect) => {
        return userselect.id === item.id;
      });
      return useritem.quantity;
    }


    return (
        <>
        <Helmet>
      <title>Shop-FurniPro</title>
    </Helmet>
    <ScrollToTop/>
    <BannerSection  PageName="Shop" {...{cat}}  />

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

<Box sx={{ p : "50px 0" , width : "100%" , display : "flex" , justifyContent : "center"  , flexDirection : {xs : "column-reverse" , md : "row"} , alignItems : {xs :"center" , md : "flex-start"}}}>

{data && 

<>
    <Box sx={{ display : "flex" , flexWrap : "wrap" ,justifyContent : "center", height : "fit-content" ,width : {xs : "100%" , md : "58%" }}}>
    
    {valueFilter().slice(indexOfFirstProduct, indexOfLastProduct).map((Product)=>
            
            (
            <Box
            key={Product.id}
            className="Card fade-in"
            sx={{
                width : {xs:"220px" , md: "210px"} ,
                height: "320px",
                backgroundColor: "#F3F2EE",
                borderRadius: "15px",
                padding: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                m : "10px"
            }}
    
            >
          
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
         <Box sx={{ml:"15px", mt: "5px", display: "flex" }}>
                {Product.discount && <del style={{ marginRight: "7px",color: "gray" }}> ${Product.sale}</del>}
                <Typography>${Product.price}</Typography>
                </Box>
        
            <Box sx={{ width: "90%", height: "55%" ,mx: "auto",}}  
                onClick={() => {
                Navigate(`/prodetails/${Product.id}`)
                }}
    
            >
                <Box sx={{ width: "90%", height: "100%" ,backgroundColor:"#fff", borderRadius:"15px", padding:"10px",mt:"10px",position:"relative" }}>
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
                    <img
                    style={{ width: "100%", height: "100%" }}
                    src={Product.imageLink}
                    alt="product detailing"
                    loading='lazy'
                    />

                </Box>
            </Box>
            <Box sx={{ mt : "25px"  ,display:"flex", flexDirection : "column" , alignItems:"center", justifyContent:"space-evenly"}}>
                <Typography variant="h6" sx={{fontSize:"16px"}}>{Product.Name}</Typography>
                    <Stack spacing={1}>
                    <Rating
                        name="half-rating-read"
                        defaultValue={Product.rate}
                        precision={0.5}
                        size="small"
                        readOnly
                    />
                    </Stack>
            </Box>



            <Box>
            {SelectedProductsId.includes(Product.id) ?
(<Box>
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
<Box display="flex">
  <Box sx={{flexGrow : 1 }}/>
    <IconButton
    size="small"
  sx={{ bgcolor: "#FFF" ,
  ":hover": {
    color: "#ac8c5b",
    outline: "1px solid #ac8c5b",
    bgcolor : "transparent" , 
  },
  }}
  variant="contained"
  
  onClick={() => {
    dispatch(AddToCart(Product))
  }}
  >
    <AddShoppingCartIcon/>
  </IconButton>
</Box>
)
    
    }
            </Box>
              
            </Box>
                ))}



    {valueFilter().length === 0 && 
    <Box sx={{width : "100%" , height : "500px" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>

  <Box sx={{textAlign : "center"}}>
          <SentimentVeryDissatisfiedIcon sx={{fontSize : "50px" , color : "gray" ,  mt :"10px"}} />
              <Typography variant="h6" >No Products Found!</Typography>  
              <Typography mb="10px" >Please search or filter in another way to get results</Typography>  
          
  </Box>
    </Box>
    }

{valueFilter().length > 6  && 

<Box sx={{ width : "100%" , m : "20px 16px"}}>
<Pagination 
count={Math.ceil(valueFilter().length / productsPerPage)}
page={currentPage}
onChange={handlePageChange}
onClick={() => {
  window.scrollTo(0, 0);
}}
color="secondary" />
</Box>
    
} 
</Box> 


    <Box sx={{width : {xs :"90%" , md : "20%"} }} >
    
    <Box sx={{ width : "100%" ,display: "flex", alignItems: "center" , position : "relative" , my : "10px" }}>
                    <input 
                    onChange={(e) => {setSearch(e.target.value)}}
                    placeholder="Search" style={{ width : "calc(100% + 20px)",padding: "15px 30px", border : "1px solid black" , borderRadius : "15px"}} />
                    <SearchIcon
                    sx={{ color: "black", position: "absolute", right: "5px" }}
                    />
                </Box>
<Box 
onClick={() => {setShowfilter(Showfilter ? false : true)}}
sx={{display : {xs : "flex" , md : "none"} , cursor : "pointer" , ml : "10px"}}>
<Typography>Filter</Typography>
{Showfilter ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
</Box>

 {Showfilter && 
  <>
  
  <Box sx={{border:"1px solid black",width : "100%" ,
            borderRadius: "15px",
            overflow : "hidden"
            }}>


<Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{display:"flex", justifyContent:"space-between",my:"10px", mx:"25px"}}
        >
          <Typography >Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
                <FormGroup sx={{my:"10px" }}>

                <Box sx={{display:"flex",alignItems:"center", 
                    justifyContent:"space-between", mx:"25px", color:"gray"}}>
                        <FormControlLabel control={<Checkbox 
                               value={"All"}
                               checked={checked.includes("All")}
                               onChange={handleCheckboxChange}
                         size="small" />} label="All"/>
                        <Typography>({data.length})</Typography>
                    </Box>

                    {categories.map((cate)=> <Box key={cate} sx={{display:"flex",alignItems:"center", 
                            justifyContent:"space-between", mx:"25px",
                            color:"gray"}}>
                        <FormControlLabel control={<Checkbox 
                        value={cate}
                        checked={checked.includes(cate)}
                        onChange={handleCheckboxChange}
                        size="small" />} label={cate} 
                        onClick={() => {
                           setchecked( checked.filter((x) => x !== "All"))
                        //    setPrice("")
                        }}
                        
                        />
                        <Typography >({data.filter((pro) => pro.category === cate ).length})</Typography>
                    </Box>
                     )}
                </FormGroup>
              
        </AccordionDetails>
      </Accordion>
            </Box>   
        
    <Box sx={{width : "100%" , mt :"15px" ,border : "1px solid black" , borderRadius : "15px"}}>
  
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{display:"flex", justifyContent:"space-between",my:"10px", mx:"25px"}}
        >
          <Typography >Price Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
        <FormControl  sx={{mx : "25px"}}>
          <RadioGroup
            aria-labelledby="price filter"
            defaultValue=""
            name="price"
          >


        <FormControlLabel value="0" onClick={() => {setMaxPrice(0)  
                        setMinPrice(0)
                }} control={<Radio
                    checked={MaxPrice === 0}
                 />} label="All Price" />
            <FormControlLabel value="100" onClick={() => {setMaxPrice(100)  
                setMinPrice(0)
                 setchecked( checked.filter((x) => x !== "All"))
                 }} control={<Radio 
                 checked={MaxPrice === 100}
                 />} label="0 - $100" />
            <FormControlLabel value="300" onClick={() => {setMaxPrice(300) 
                            setMinPrice(100)

           }} control={<Radio
                    checked={MaxPrice === 300}
                  />} label="$100 - $300" />
            <FormControlLabel value="500" onClick={() => {setMaxPrice(500)  
                            setMinPrice(300)
             }} control={<Radio
                    checked={MaxPrice === 500}
                 />} label="$300 - $500" />
          </RadioGroup>
        </FormControl>
              
        </AccordionDetails>
      </Accordion>

    </Box>
  
  
  </>
 
 }
    
    
    
    </Box>
</>

}

</Box>
        </>
    );
}

export default Shop;
