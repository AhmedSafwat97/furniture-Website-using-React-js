import React, { useState } from 'react';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import { Box, Button, Typography } from '@mui/material';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link, useNavigate } from 'react-router-dom';
const Check = () => {
    const Navigate = useNavigate()

    return (
        <>
        <ScrollToTop/>

        <BannerSection PageName="CheckOut"/>
        <Box sx={{width : "100%" , minHeight :"100vh" , display : "flex" ,flexDirection:"column",alignItems:"center"}}>
            <Box sx={{ my : "50px" ,width : {xs : "60%" , md : "75%"} , height : "fit-content"}}>
                <Box sx={{width:"100%",display:"flex",alignItems:"center",bgcolor:"#E9E7DB",borderRadius:"25px",my:"15px",padding:"15px 0"}}>
                    <PaddingOutlinedIcon sx={{color:"#ac8c5b" , fontSize:"18px", m:"0 8px 0 15px"}}/>
                    <Typography sx={{ fontSize:"14px",mx:"5px"}}>Have a Coupon?</Typography>
                    <input className='colorPlaceholder' type="text" placeholder='click here to enter your code' 
                    style={{color:"#ac8c5b",fontSize:"14px",color:"#ac8c5b",backgroundColor:"transparent",border: "none"}}/>
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
            <Box sx={{width:{xs:"90%" ,md:"50%"},height:"330px",my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>
                <Box sx={{display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"20px"}}>
                    <Typography sx={{fontWeight:"bold",m:"10px"}}>Billing Details</Typography>
                    
                    <Typography sx={{fontSize:"12px",color:"gray",m:"20px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ,Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magni! Quaerat, ad. Nesciunt, quidem earum. Voluptatibus illo enim, eveniet, repellat ad ducimus quod quae ratione.</Typography>
                    <input placeholder="coupon Code" style={{width:"90%",backgroundColor:"#E9E7DB",margin:"10px 20px",border: "none",borderRadius:"15px",padding:"10px"}} ></input>
                    <Button
                        sx={{
                        fontSize: "12px",
                        mx: "20px",
                        backgroundColor: "#AC8C5B",
                        fontWeight: "200",
                        cursor: "pointer",
                        color: "#FFF",
                        padding: "5px 20px",
                        borderRadius: "20px",
                        ":hover": { color: "#AC8C5B", outline: "1px solid #AC8C5B" },
                        }}
                    >
                        Apply Coupon
                    </Button>
                
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

                    {<>
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Box sx={{minWidth:"40%",display:"flex",justifyContent:"space-between"}}>
                            <Typography sx={{m:"0 10px"}}>SubTotal</Typography>
                            <Typography sx={{m:"0 10px"}}>2</Typography>
                        </Box>
                        <Typography sx={{color:"gray",m:"3px 10px"}}>$6666</Typography>
                    </Box>
                    
                 </>   }





                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Typography sx={{m:"3px 10px"}}>SubTotal</Typography>
                        <Typography sx={{color:"gray",m:"3px 10px"}}>$6666</Typography>
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
                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Typography sx={{m:"10px"}}>Total</Typography>
                        <Typography sx={{color:"gray",m:"10px"}}>$3,560</Typography>
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
                        onClick={()=> Navigate("/Checkout")}
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


