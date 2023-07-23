import React, { useState } from 'react';
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import BannerSection from "../Home/HomeSections/bannerSection";
import { Box, Button, IconButton, Chip, Rating, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CoponCoode, decrement, deleteFromCart, increment } from '../../services/CartSlice';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Helmet } from 'react-helmet';


const Cart = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    
  const [CoponCode, setCoponCode] = useState("");

    const { SelectedProducts , disable  } = useSelector((state) => state.Cart);
    
    SelectedProducts.length === 0 ?  dispatch(CoponCoode(false)) : dispatch(CoponCoode(disable))

    let total = 0;
    function TotalPrice(product) {
       let subtotal = 0;
       subtotal = Math.floor(product.quantity * (product.discount? product.sale:product.price))
        total += subtotal
        return subtotal
   }


    return (
        <>
         <Helmet>
      <meta charSet="utf-8" />
      <title>Cart-FurniPro</title>
    </Helmet>
    <ScrollToTop/>
    <BannerSection  PageName="Shopping Cart" />


    <Box sx={{width : "100%" , minHeight : "50vh" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : {xs : "center" , md : "start"}}}>
        <Box className="container" sx={{ my : "50px" ,width : {xs : "90%" , md : "75%"} , overflow : "hidden" , height : "fit-content" , border : "0.5px solid #E9E7DB"}}>

<Box display="flex" alignItems="center">
    <Typography>{SelectedProducts.length} Items</Typography>
</Box>

       <Box sx={{width : "100%" , display : {xs : "none" , md : "flex"} , height : "40px", bgcolor : "#E9E7DB"}}>
         <Box sx={{width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Image</Box>
<Box sx={{display : {xs : "block" , md : "flex"} , width : "85%"}}>
             <Box sx={{ width : "54%" , display : "flex" , alignItems : "center" , paddingLeft : "1%", fontWeight : "bold"}}>Product Information</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Quantity</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Total Price</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Remove</Box>
</Box>
        </Box>

        {SelectedProducts.length === 0 &&
        <Box sx={{width : "100%" , height : "100px" ,display : "flex" , alignItems : "center" , justifyContent :"center"}}>

<RemoveShoppingCartIcon sx={{mr : "10px" , fontSize : "30px"}} />
<Typography variant='h5'>The Cart Is Empty</Typography>

        </Box>
        
        
        
        }


{SelectedProducts.map((product) => (
    
    <Box key={product.id}>
    
    {/* Product Container */}
            <Box sx={{width : "100%" , mt : {xs : "10px" , md : "0px"} ,display : "flex" ,height : {xs : "200px" , md : "120px"} }}>
             <Box sx={{border : {xs : "none" , md :"0.5px solid #E9E7DB"}, borderRight : {xs : "0.5px solid #E9E7DB" , md : "none"}   , width : {xs : "45%" , md : "15%"} , height : {xs : "200px" , md : "120px"} , display : "flex", flexDirection : {xs : "column" , md : "row"} , alignItems : "center" , justifyContent : "center"}}>
            <Box sx={{width : {xs : "70%" , md : "60px"} , height : {xs : "60%" , md : "auto"} , bgcolor : "#F3F2EE" , p : "10px" , borderRadius : "5px"}}>
                <img style={{width : "100%" , height : "100%"}} src={product.imageLink} loading='lazy' alt="product photo3"/>
            </Box>
    
    
    
    
    {/* for mobile only */}
    
            <Box sx={{ mt : "26px" ,border : {xs : "none" , md :"0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , height : "27%", display : {xs : "flex" , md : "none"} , alignItems : "center" , justifyContent : "center"}}>
        <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
              <IconButton
              
              onClick={() => {

                dispatch(decrement(product))
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
              <Typography sx={{mx:"5px" , fontWeight : "bold"}}>{product.quantity}</Typography>
              <IconButton 
                  onClick={() => {
                    dispatch(increment(product))
                  }}
              
              sx={{bgcolor : "#FFF" , ":hover" : {
               bgcolor : "#ac8c5b"
                  }}} size="small">
                  <AddIcon sx={{color : "#ac8c5b" , ":hover" : {
               color : "#FFF"
                  }}} />
              </IconButton>
        </Box>
    {/* _______________ */}
        
        </Box>
            
             </Box>
    <Box sx={{display : "flex" , flexDirection : {xs : "column" , md : "row" } , justifyContent : {xs : "space-around"} ,width : {xs : "51%" , md : "85%"} , p : {xs :"0px 4%" , md : "0px"} , height : "100%"}}>
                 <Box sx={{border : {xs : "none" , md :"0.5px solid #E9E7DB"} , display : "flex", width : {xs : "100%" , md : "54%"} ,padding : "1%"}}>
    <Box>
            <Typography>{product.Name}</Typography>
               <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={product.rate}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                                  </Stack>
    
                                  <Typography sx={{mt :"5px"}} >${product.discount ? product.sale : product.price}</Typography>
    </Box>
        
                  <Box>
                {product.discount && 
                  <Chip
                  label={Math.floor( 100 -  (product.sale / product.price) * 100) +"%"}
                  sx={{
                    height: "20px",
                    borderRadius: "5px",
                    backgroundColor: "#AC8C5B",
                    color: "#FFF",
                  }}
                />
 
 }
                  </Box>
        
                 </Box>
    {/* for bigscreen only */}
                 <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , display : {xs : "none" , md : "flex"} , alignItems : "center" , justifyContent : "center"}}>
        
                 <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
                       <IconButton
                          onClick={() => {
                            dispatch(decrement(product))
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
                       <Typography sx={{mx:"5px" , fontWeight : "bold"}}>{product.quantity}</Typography>
                       <IconButton 

                          onClick={() => {
                            dispatch(increment(product))
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
    {/* ___________________ */}
    
    
    <Box sx={{display : {xs : "block" , md : "none"}}}>
        <hr style={{color : "#E9E7DB"}} />
    </Box>
                 
                 <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} , width :  {xs : "100%" , md : "15%"} ,display : "flex" , alignItems : "center" , justifyContent : {md : "center"}}}>
                 {/* for mobile only */}
                 <Typography sx={{display : {xs : "block" , md : "none"} , fontWeight : "bold" , mr : "5px"}}>Total Price : </Typography>
                 {/* ___________________ */}
    
                    <Typography>{TotalPrice(product)}$</Typography>
                 </Box>
                 
    <Box sx={{display : {xs : "block" , md : "none"}}}>
        <hr style={{color : "#E9E7DB"}} />
    </Box>
    
                 <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} , width :  {xs : "100%" , md : "15%"} , display : "flex" , alignItems : "center" , justifyContent : {md :"center"}}}>
        <IconButton
           onClick={() => {
            dispatch(deleteFromCart(product))
          }}
        
         sx={{
            ":hover" : {
                color : "red"
                   }
        }} >
        <DeleteOutlineOutlinedIcon/>
        </IconButton>
        
                 </Box>
                </Box>
    </Box>
    {/* _________________*/}
    
    <Box sx={{display : {xs : "block" , md : "none"} , mb : "10px"}}>
        <hr style={{color : "#E9E7DB"}} />
    </Box>
    
</Box>



))}



<Button onClick={() => {Navigate("/shop")}} sx={{color : "#ac8c5b"}} >
<WestOutlinedIcon sx={{ fontSize: "20px" , mx:"5px" }} />
    Continue Shopping
</Button>


       </Box>

     {SelectedProducts.length > 0 && 
     
     <Box sx={{width : "100%" , display : "flex" , justifyContent : "center"}}>
     <Box sx={{width : {xs : "100%" , md : "75%"}, display:"flex",justifyContent:{md : "space-between"} , flexDirection : {xs : "column" , md : "row" , alignItems : "center"} }}>   
         <Box sx={{width:{xs:"90%" ,md:"47%"},height:"330px",my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>
             <Box sx={{display: "flex",flexDirection:"column", alignItems:"center" , justifyContent: "center", m:"20px"}}>
                 <Typography sx={{fontWeight:"bold",m:"10px", mx:"auto"}}>Coupon Code</Typography>
                 <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                 <Box  sx={{height : "130px" , overflow : "hidden" ,  display : "flex" , alignItems : "center"}}>
                     <Typography sx={{fontSize:"12px",color:"gray",m:"20px" }}>
                     Unlock savings on furniture! Use our coupon code for exclusive discounts and elevate your home with style and affordability.
                      </Typography>
                 </Box>
                 <input
                 onChange={(eo) => (
                    setCoponCode(eo.target.value)
                    )}
                 placeholder="coupon Code" style={{width:"90%",backgroundColor:"#E9E7DB",margin:"10px 0px",border: "none",borderRadius:"15px",padding:"10px"}} ></input>
              <Box sx={{width : "100%"}}>
                    <Button
                    disabled={disable}
                        sx={{
                        fontSize: "12px",
                        mx: "10px",
                        backgroundColor: "#AC8C5B",
                        fontWeight: "200",
                        cursor: "pointer",
                        color: "#FFF",
                        padding: "5px 20px",
                        borderRadius: "20px",
                        ":hover": { color: "#AC8C5B", outline: "1px solid #AC8C5B" },
                        }}
                        onClick={() => {
                           if (CoponCode === "furnipro20" ) {
                           dispatch(CoponCoode(true))
                           }
                        }}
                    >
                        Apply Coupon
                    </Button>
              </Box>
             
             </Box>
         </Box>
         <Box sx={{width:{xs:"90%" ,md:"47%"},height:"330px",my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>

             <Box sx={{width:"90%" ,display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"20px"}}>
                 <Typography sx={{fontWeight:"bold",m:"10px", mx:"auto"}}>Cart Totals</Typography>
                 <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                 <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <Typography sx={{m:"10px"}}>SubTotal</Typography>
                     <Typography sx={{color:"gray",m:"10px"}}>${total}</Typography>
                 </Box>
                 <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                 <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <Typography sx={{m:"3px 10px"}}>Shipping</Typography>
                     <Typography sx={{color:"gray",m:"3px 10px"}}>Free Shipping</Typography>
                 </Box>
                 <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <Typography sx={{m:"3px 10px"}}>Tax</Typography>
                     <Typography sx={{color:"gray",m:"3px 10px"}}>$00</Typography>
                 </Box>
                 <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <Typography sx={{m:"3px 10px"}}>Local Delivery</Typography>
                     <Typography sx={{color:"gray",m:"3px 10px"}}>$20</Typography>
                 </Box>

                {disable  && 
             <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <Typography sx={{m:"3px 10px"}}>Copon Code</Typography>
                     <Typography sx={{color:"gray",m:"3px 10px"}}>-20%</Typography>
                 </Box>    
            
            }

                 <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                 <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                     <Typography sx={{m:"10px"}}>Total</Typography>
                     <Typography sx={{color:"gray",m:"10px"}}>${disable ? 
                        Math.floor(total * 0.8 +20 ) : total +20}</Typography>
                 </Box>
                 <Button
                     onClick={()=> Navigate("/Checkout")}
                     sx={{
                     fontSize: "12px",
                     mx: "10px",
                     backgroundColor: "#AC8C5B",
                     fontWeight: "200",
                     cursor: "pointer",
                     color: "#FFF",
                     padding: "5px 20px",
                     borderRadius: "20px",
                     ":hover": { color: "#AC8C5B", outline: "1px solid #AC8C5B" },
                     }}
                 >
                     CheckOut
                 </Button>
             
             </Box>
         </Box>

     </Box>
 </Box>
     
     
     
     }

    </Box>



        </>
    );
}
export default Cart;
