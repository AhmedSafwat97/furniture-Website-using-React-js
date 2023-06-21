import React from 'react';
import ScrollToTop from "../../ExternalMethods/ScrollToTop";
import BannerSection from "../Home/HomeSections/bannerSection";
import { Box, Button, IconButton, Chip, Rating, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const Navigate = useNavigate()

    return (
        <>
    <ScrollToTop/>
    <BannerSection  PageName="Shopping Cart" />


    <Box sx={{width : "100%" , minHeight : "70vh" , display : "flex" , flexDirection : "column" , alignItems : "center"}}>
        <Box className="container" sx={{ my : "50px" ,width : {xs : "70%" , md : "75%"} , overflow : "hidden" , height : "fit-content" , border : "0.5px solid #E9E7DB"}}>



       <Box sx={{width : "100%" , display : {xs : "none" , md : "flex"} , height : "40px", bgcolor : "#E9E7DB"}}>
         <Box sx={{width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Image</Box>
<Box sx={{display : {xs : "block" , md : "flex"} , width : "85%"}}>
             <Box sx={{ width : "54%" , display : "flex" , alignItems : "center" , paddingLeft : "1%", fontWeight : "bold"}}>Product Information</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Quantity</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Total Price</Box>
             <Box sx={{ width : "15%" , display : "flex" , alignItems : "center" , justifyContent : "center" , fontWeight : "bold"}}>Remove</Box>
</Box>
        </Box>


{/* Product Container */}
        <Box sx={{width : "100%" , mt : {xs : "10px" , md : "0px"} ,display : "flex" ,height : {xs : "200px" , md : "120px"} }}>
         <Box sx={{border : {xs : "none" , md :"0.5px solid #E9E7DB"}, borderRight : {xs : "0.5px solid #E9E7DB" , md : "none"}   , width : {xs : "45%" , md : "15%"} , height : {xs : "200px" , md : "120px"} , display : "flex", flexDirection : {xs : "column" , md : "row"} , alignItems : "center" , justifyContent : "center"}}>
        <Box sx={{width : {xs : "70%" , md : "60px"} , height : {xs : "60%" , md : "auto"} , bgcolor : "#F3F2EE" , p : "10px" , borderRadius : "5px"}}>
            <img style={{width : "100%" , height : "100%"}} src="../../../Imgs/Products/dresser.png" alt=""/>
        </Box>




{/* for mobile only */}

        <Box sx={{ mt : "26px" ,border : {xs : "none" , md :"0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , height : "27%", display : {xs : "flex" , md : "none"} , alignItems : "center" , justifyContent : "center"}}>
    <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
          <IconButton sx={{bgcolor : "#FFF", 
       ":hover" : {
           bgcolor : "#ac8c5b"
              }
       
       }} size="small" >
              <RemoveIcon sx={{color : "#ac8c5b" , ":hover" : {
           color : "#FFF"
              }}} />
          </IconButton>
          <Typography sx={{mx:"5px" , fontWeight : "bold"}}>1</Typography>
          <IconButton sx={{bgcolor : "#FFF" , ":hover" : {
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
        <Typography>Dresser</Typography>
           <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                              </Stack>

                              <Typography sx={{mt :"5px"}} >$200</Typography>
</Box>
    
              <Box>
              <Chip
  label="30%"
  sx={{
    height: "20px",
    borderRadius: "5px",
    backgroundColor: "#AC8C5B",
    color: "#FFF",
  }}
/>
              </Box>
    
             </Box>
{/* for bigscreen only */}
             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , display : {xs : "none" , md : "flex"} , alignItems : "center" , justifyContent : "center"}}>
    
             <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
                   <IconButton sx={{bgcolor : "#FFF", 
                ":hover" : {
                    bgcolor : "#ac8c5b"
                       }
                
                }} size="small" >
                       <RemoveIcon sx={{color : "#ac8c5b" , ":hover" : {
                    color : "#FFF"
                       }}} />
                   </IconButton>
                   <Typography sx={{mx:"5px" , fontWeight : "bold"}}>1</Typography>
                   <IconButton sx={{bgcolor : "#FFF" , ":hover" : {
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
             <Typography sx={{display : {xs : "block" , md : "none"} , fontWeight : "bold" , mr : "5px"}}>Total : </Typography>
             {/* ___________________ */}

                <Typography>200$</Typography>
             </Box>
             
<Box sx={{display : {xs : "block" , md : "none"}}}>
    <hr style={{color : "#E9E7DB"}} />
</Box>

             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} , width :  {xs : "100%" , md : "15%"} , display : "flex" , alignItems : "center" , justifyContent : {md :"center"}}}>
    <IconButton sx={{
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

{/* Product Container */}
<Box sx={{width : "100%" , mt : {xs : "10px" , md : "0px"} ,display : "flex" ,height : {xs : "200px" , md : "120px"} }}>
         <Box sx={{border : {xs : "none" , md :"0.5px solid #E9E7DB"}, borderRight : {xs : "0.5px solid #E9E7DB" , md : "none"}   , width : {xs : "45%" , md : "15%"} , height : {xs : "200px" , md : "120px"} , display : "flex", flexDirection : {xs : "column" , md : "row"} , alignItems : "center" , justifyContent : "center"}}>
        <Box sx={{width : {xs : "70%" , md : "60px"} , height : {xs : "60%" , md : "auto"} , bgcolor : "#F3F2EE" , p : "10px" , borderRadius : "5px"}}>
            <img style={{width : "100%" , height : "100%"}} src="../../../Imgs/Products/dresser.png" alt=""/>
        </Box>




{/* for mobile only */}

        <Box sx={{ mt : "26px" ,border : {xs : "none" , md :"0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , height : "27%", display : {xs : "flex" , md : "none"} , alignItems : "center" , justifyContent : "center"}}>
    <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
          <IconButton sx={{bgcolor : "#FFF", 
       ":hover" : {
           bgcolor : "#ac8c5b"
              }
       
       }} size="small" >
              <RemoveIcon sx={{color : "#ac8c5b" , ":hover" : {
           color : "#FFF"
              }}} />
          </IconButton>
          <Typography sx={{mx:"5px" , fontWeight : "bold"}}>1</Typography>
          <IconButton sx={{bgcolor : "#FFF" , ":hover" : {
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
        <Typography>Dresser</Typography>
           <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                              </Stack>

                              <Typography sx={{mt :"5px"}} >$200</Typography>
</Box>
    
              <Box>
              <Chip
  label="30%"
  sx={{
    height: "20px",
    borderRadius: "5px",
    backgroundColor: "#AC8C5B",
    color: "#FFF",
  }}
/>
              </Box>
    
             </Box>
{/* for bigscreen only */}
             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} ,width :  {xs : "100%" , md : "15%"} , display : {xs : "none" , md : "flex"} , alignItems : "center" , justifyContent : "center"}}>
    
             <Box sx={{display : "flex" , alignItems : "center" , width : "75%" , justifyContent : "center"}}>
                   <IconButton sx={{bgcolor : "#FFF", 
                ":hover" : {
                    bgcolor : "#ac8c5b"
                       }
                
                }} size="small" >
                       <RemoveIcon sx={{color : "#ac8c5b" , ":hover" : {
                    color : "#FFF"
                       }}} />
                   </IconButton>
                   <Typography sx={{mx:"5px" , fontWeight : "bold"}}>1</Typography>
                   <IconButton sx={{bgcolor : "#FFF" , ":hover" : {
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
             <Typography sx={{display : {xs : "block" , md : "none"} , fontWeight : "bold" , mr : "5px"}}>Total : </Typography>
             {/* ___________________ */}

                <Typography>200$</Typography>
             </Box>
             
<Box sx={{display : {xs : "block" , md : "none"}}}>
    <hr style={{color : "#E9E7DB"}} />
</Box>

             <Box sx={{border : {xs : "none" , md : "0.5px solid #E9E7DB"} , width :  {xs : "100%" , md : "15%"} , display : "flex" , alignItems : "center" , justifyContent : {md :"center"}}}>
    <IconButton sx={{
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



<Button sx={{color : "#ac8c5b"}} >
<WestOutlinedIcon sx={{ fontSize: "20px" , mx:"5px" }} />
    Continue Shopping
</Button>


       </Box>



<<<<<<< HEAD



       <Box sx={{width : "100%" , display : "flex" , justifyContent : "center"}}>
        <Box sx={{width : {xs : "70%" , md : "75%"}, display:"flex",justifyContent:{md : "space-between"} , flexDirection : {xs : "column" , md : "row" , alignItems : "center"} }}>   
            <Box sx={{width:{xs:"90%" ,md:"47%"},height:"330px",my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>
                <Box sx={{display: "flex",flexDirection:"column", alignItems:"center" , justifyContent: "center", m:"20px"}}>
                    <Typography sx={{fontWeight:"bold",m:"10px", mx:"auto"}}>Coupon Code</Typography>
                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                    <Box  sx={{height : "130px" , overflow : "hidden" ,  display : "flex" , alignItems : "center"}}>
                        <Typography sx={{fontSize:"12px",color:"gray",m:"20px" }}>
                        Unlock savings on furniture! Use our coupon code for exclusive discounts and elevate your home with style and affordability.
                         </Typography>
                    </Box>
                    <input placeholder="coupon Code" style={{width:"90%",backgroundColor:"#E9E7DB",margin:"10px 0px",border: "none",borderRadius:"15px",padding:"10px"}} ></input>
                 <Box sx={{width : "100%"}}>
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
                           Apply Coupon
                       </Button>
                 </Box>
=======
    </Box>

    <Box sx={{width : "100%" , display : "flex" , justifyContent : "center"}}>
        <Box sx={{width :"75%", display:"flex",justifyContent:"space-between",flexWrap : "wrap" }}>   
            <Box sx={{width:{xs:"90%" ,md:"47%"},height:"330px",my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>
                <Box sx={{display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"20px"}}>
                    <Typography sx={{fontWeight:"bold",m:"10px", mx:"auto"}}>Coupon Code</Typography>
                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
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
>>>>>>> e8c57fb71cb4722c6f0ad735716947cfbba3157f
                
                </Box>
            </Box>
            <Box sx={{width:{xs:"90%" ,md:"47%"},height:"330px",my:"30px" , border:"1px solid gray", borderRadius:"15px"}}>

                <Box sx={{width:"90%" ,display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"20px"}}>
                    <Typography sx={{fontWeight:"bold",m:"10px", mx:"auto"}}>Cart Totals</Typography>
                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Typography sx={{m:"10px"}}>SubTotal</Typography>
                        <Typography sx={{color:"gray",m:"10px"}}>$3,540</Typography>
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
<<<<<<< HEAD
=======
                        onClick={()=> Navigate("/Checkout")}
>>>>>>> e8c57fb71cb4722c6f0ad735716947cfbba3157f
                    >
                        CheckOut
                    </Button>
                
                </Box>
            </Box>

        </Box>
<<<<<<< HEAD
    </Box>




=======
>>>>>>> e8c57fb71cb4722c6f0ad735716947cfbba3157f
    </Box>



        </>
    );
}

export default Cart;
