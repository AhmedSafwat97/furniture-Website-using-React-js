import React, { useState } from 'react';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import { Box, Button, Typography } from '@mui/material';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link, useNavigate } from 'react-router-dom';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useSelector } from 'react-redux';

const Check = () => {
    const Navigate = useNavigate()

    const { SelectedProducts , disable } = useSelector((state) => state.Cart);

    let total = 0;
    function TotalPrice(product) {
       let subtotal = 0;
       subtotal = Math.floor(product.quantity * (product.discount? product.sale:product.price))
        total += subtotal
        return subtotal
   }
   
    return (
        <>
        <ScrollToTop/>

        <BannerSection PageName="CheckOut"/>
        <Box sx={{width : "100%" , minHeight :"100vh" , display : "flex" ,flexDirection:"column",alignItems:"center"}}>
            <Box sx={{ my : "50px" ,width : {xs : "60%" , md : "75%"} , height : "fit-content"}}>
                <Box sx={{width:"100%",display:"flex",alignItems:"center",bgcolor:"#E9E7DB",borderRadius:"25px",my:"15px",padding:"12px 0"}}>
                    <PaddingOutlinedIcon sx={{color:"#ac8c5b" , fontSize:"18px", m:"0 8px 0 15px"}}/>
                    <Typography sx={{ fontSize:"14px",mx:"5px"}}>Have a Coupon?</Typography>
                    <input className='colorPlaceholder' type="text" placeholder='click here to enter your code' 
                    style={{color:"#ac8c5b",fontSize:"14px",color:"#ac8c5b",backgroundColor:"transparent",border: "none",padding:"5px 0"}}/>
                </Box>
                <Box sx={{width:"100%",display:"flex",alignItems:"center",bgcolor:"#E9E7DB",borderRadius:"25px",my:"15px",padding:"15px 0"}}>
                    <InfoOutlinedIcon sx={{color:"#ac8c5b" , fontSize:"18px", m:"0 8px 0 15px"}}/>
                    <Typography sx={{ fontSize:"14px",mx:"5px"}}>Returning Customer?</Typography>
                    <Link to="/" >Click here to login</Link>
                </Box>
            </Box>

{/* ----------------------------------- */}

    <Box sx={{width : "100%" , display : "flex" , justifyContent : "center"}}>
        <Box sx={{width :"75%", display:"flex",justifyContent:"space-between",flexWrap : "wrap" }}>   
            <Box sx={{width:{xs:"90%" ,md:"50%"},my:"30px" , border:"1px solid #E9E7DB", borderRadius:"15px"}}>
                <Box sx={{display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"10px"}}>
                    <Typography variant='h6' sx={{fontWeight:"bold",m:"10px "}}>Billing Details</Typography>
                    <form style={{width: "100%"}}>
                        <Box sx={{width: "100%",display: "flex", justifyContent: "space-between"}}>
                            <input  type="text" placeholder='First Name*' 
                                style={{width :"45%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}/>
                             <input  type="text" placeholder='Last Name*' 
                                style={{width :"45%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}/>
                        </Box>
                        <Box sx={{width: "100%",display: "flex", justifyContent: "space-between"}}>
                            <input  type="email" placeholder='Email Address*' 
                                style={{width :"45%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}/>
                             <input  type="number" placeholder='Phone Number*' 
                                style={{width :"45%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}/>
                        </Box>
                        <select name="Country" placeholder='Country*'
                        style={{width :"96%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}>
                            <option value="Eygpt">Eygpt</option>
                            <option value="Canda">Canda</option>
                            <option value="United States">United States</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                        <input  type="text" placeholder='Address*' 
                                style={{width :"90%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}/>
                        <Box sx={{width: "99%",display: "flex", justifyContent: "space-between"}}>
                             <select name="Country" placeholder='Country*'
                                style={{width :"50%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}>
                                    <option value="Eygpt">Cairo</option>
                                    <option value="Canda">Ottawa</option>
                                    <option value="United States">Washington</option>
                                    <option value="Brazil">Brasilia</option>
                            </select>
                            <input  type="email" placeholder='postCode/Zip*' 
                                style={{width :"45%",fontSize:"10px",backgroundColor:"#E9E7DB",margin:"10px",border: "none",borderRadius:"30px",padding:"15px"}}/>
                        </Box>
                        <Box sx={{width: "100%",margin:"10px 0", height:"1px",bgcolor:"#E9E7DB"}} />
                        <Box sx={{width: "100%",display: "flex", justifyContent: "space-between"}}>

                        <Button sx={{color : "#ac8c5b"}} onClick={()=>Navigate("/cart")} >
                            <WestOutlinedIcon sx={{ fontSize: "20px" , mx:"5px" }} />
                            Return to Card
                        </Button>

                        <Button
                        onClick={()=>Navigate("/shop")}
                            sx={{
                            fontSize: "12px",
                            mx: "20px",
                            backgroundColor: "#AC8C5B",
                            fontWeight: "200",
                            cursor: "pointer",
                            color: "#FFF",
                            padding: "10px 40px",
                            borderRadius: "20px",
                            ":hover": { color: "#AC8C5B", outline: "1px solid #AC8C5B" },
                            }}
                        >
                            Continue Shopping
                        </Button>
                        </Box>
                    </form>
                
                </Box>
            </Box>
            <Box sx={{width:{xs:"90%" ,md:"40%"},my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>

                <Box sx={{width:"90%" ,display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"20px"}}>
                    <Typography sx={{fontWeight:"bold",m:"10px"}}>Order Summary</Typography>
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Typography sx={{m:"10px"}}>Product</Typography>
                        <Typography sx={{color:"gray",m:"10px"}}>Total</Typography>
                    </Box>
                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />

                    {SelectedProducts.map((Product) => (

    <Box key={Product.id} sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
    <Box sx={{minWidth:"40%",display:"flex",justifyContent:"space-between"}}>
        <Typography sx={{m:"0 10px"}}>{Product.Name}</Typography>
        <Typography sx={{m:"0 10px"}}>{Product.quantity}</Typography>
    </Box>
    <Typography sx={{color:"gray",m:"3px 10px"}}>${TotalPrice(Product)}</Typography>
    </Box>

                    ))
              
                    
                   }





                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Typography sx={{m:"3px 10px"}}>SubTotal</Typography>
                        <Typography sx={{color:"gray",m:"3px 10px"}}>${total}</Typography>
                    </Box>
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
                        Math.floor(total * 0.8 +20 ) : total +20
                    }</Typography>
                    </Box>


                    <Button
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
                        Place Order Now
                    </Button>
                
                </Box>
            </Box>

        </Box>
    </Box>
        </Box>
        </>
    );
    
}

export default Check;


