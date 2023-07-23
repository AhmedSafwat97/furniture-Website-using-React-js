import React, { useState } from 'react';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import { Box, Button, Typography ,TextField} from '@mui/material';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link, useNavigate } from 'react-router-dom';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useSelector } from 'react-redux';
import FormDialog from './confirm';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Helmet } from 'react-helmet';

const Check = () => {
    const Navigate = useNavigate()

    const [paymentvalue, setpaymentvalue] = useState("Cash");
    const [Country, setCountry] = React.useState('');
    const [Town, setTown] = React.useState('');
     const [firstName, setfirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [address, setaddress] = useState("");
    const [Code, setCode] = useState("");


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
         <Helmet>
         <title>Check Out</title>
        </Helmet>
        <ScrollToTop/>

        <BannerSection PageName="CheckOut"/>
        <Box sx={{width : "100%" , minHeight :"100vh" , display : "flex" ,flexDirection:"column",alignItems:"center"}}>
            <Box sx={{ my : "50px" ,width : {xs : "90%" , md : "75%"} , height : "fit-content"}}>
                <Box sx={{width:"100%",display:"flex",alignItems:"center",bgcolor:"#E9E7DB",borderRadius:"25px",my:"15px",padding:"12px 0"}}>
                    <PaddingOutlinedIcon sx={{color:"#ac8c5b" , fontSize:"18px", m: {xs : "0 8px 0 5px" , md : "0 8px 0 15px"}}}/>
                    <Typography sx={{ fontSize:"14px",mx:"5px"}}>Have a Coupon?</Typography>
                    <input className='colorPlaceholder' type="text" placeholder='click here to enter your code' 
                    style={{color:"#ac8c5b",fontSize:"14px", backgroundColor:"transparent",border: "none",padding:"5px 0"}}/>
                </Box>
                <Box sx={{width:"100%",display:"flex",alignItems:"center",bgcolor:"#E9E7DB",borderRadius:"25px",my:"15px",padding:"15px 0"}}>
                    <InfoOutlinedIcon sx={{color:"#ac8c5b" , fontSize:"18px", m:"0 8px 0 15px"}}/>
                    <Typography sx={{ fontSize:"14px",mx:"5px"}}>Returning Customer?</Typography>
                    <Link to="/" >Click here to login</Link>
                </Box>
            </Box>

{/* ----------------------------------- */}

    <Box sx={{width : "100%" , display : "flex" , justifyContent : "center"}}>
        <Box sx={{width : {xs : "90%" , md : "75%"}, display:"flex",justifyContent: { xs : "center" , md : "space-between"},flexWrap : "wrap" }}>   
            <Box sx={{width:{xs:"100%" ,md:"50%"},my:"30px" , border:"1px solid #E9E7DB", borderRadius:"15px"}}>
                <Box sx={{display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"10px"}}>
                    <Typography variant='h6' sx={{fontWeight:"bold",m:"10px "}}>Billing Details</Typography>
                    <form style={{width: "100%"}}>
                       
                        <Box sx={{width: "100%",display: "flex", justifyContent: "space-between"}}>
                        <TextField required
                        onChange={(e) => {setfirstName(e.target.value)}}
                sx={{width :"49%",fontSize:"10px", borderRadius : "30px" , backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                id="first" label="First Name" type="text" />



                <TextField onChange={(e) => {setLastName(e.target.value)}} required
                sx={{width :"49%",fontSize:"10px", borderRadius : "30px" ,backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                id="last" label="Last Name" type="text" />
                </Box>
            <Box sx={{width: "100%",display: "flex", justifyContent: "space-between"}}>
                <TextField
                onChange={(e) => {setEmail(e.target.value)}}
required
                sx={{outline : "none" ,width :"49%",fontSize:"10px", borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                id="Email" label="Email" type="text" />

                <TextField required
                        onChange={(e) => {setPhone(e.target.value)}}
                sx={{width :"49%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                id="Phone" label="Phone Number" type="number" />
                        </Box>
                   <Box sx={{ width : `calc(100% - 20px)` , p : "10px"}}>
                      
                         <FormControl required fullWidth sx={{borderRadius : "30px", backgroundColor:"#E9E7DB"}}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Country}
          label="Country"
          onChange={(eo) => { setCountry(eo.target.value);
          }}
        >
          <MenuItem value="Egypt">Egypt</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="Brazil">Brazil</MenuItem>
          <MenuItem value="United State">United State</MenuItem>

        </Select>
      </FormControl>





                   </Box>
                <Box sx={{ width : `calc(100% - 20px)` , p : "10px"}} >
                <TextField required onChange={(e) => {setaddress(e.target.value)}}
                sx={{width :"100%",fontSize:"10px", borderRadius : "30px" ,backgroundColor:"#E9E7DB",border: "none"}}
                id="address" label="address" type="text" />
                </Box>




                        <Box sx={{width : `calc(100% - 20px)` , p : "10px",display: "flex", justifyContent: "space-between"}}>
                     <Box sx={{width : "48%"}}>

                     <TextField required
                    onChange={(e) => {setTown(e.target.value)}}

                sx={{width :"100%",fontSize:"10px" , borderRadius : "30px" ,backgroundColor:"#E9E7DB",border: "none"}}
                id="Town" label="Town" type="text" />

                     </Box>
                    
                    <Box sx={{width : "48%"}}>
                        <TextField required
                    onChange={(e) => {setCode(e.target.value)}}

                sx={{width :"100%",fontSize:"10px" , borderRadius : "30px" ,backgroundColor:"#E9E7DB",border: "none"}}
                id="postCode/Zip*" label="postCode/Zip" type="text" />

                    </Box>
                        
                        
                        </Box>
                        <Box sx={{width: "100%",margin:"10px 0", height:"1px",bgcolor:"#E9E7DB"}} />
                        <Box sx={{width: "100%",display: "flex", justifyContent: "space-between"}}>

                        <Button sx={{color : "#ac8c5b"}} onClick={()=>Navigate("/cart")} >
                            <WestOutlinedIcon sx={{ fontSize: "20px" , mx:"5px" }} />
                            Return to Cart
                        </Button>

                        <Button
                        onClick={()=>Navigate("/shop")}
                            sx={{
                            fontSize: {xs : "9px" , md : "12px"},
                            mx: {xs :"10px" , md : "20px"},
                            backgroundColor: "#AC8C5B",
                            fontWeight: "200",
                            cursor: "pointer",
                            color: "#FFF",
                            padding: {xs : "10px" , md : "10px 40px"},
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










{/* _________________________________________________________________ */}




            <Box sx={{width:{xs:"100%" ,md:"40%"},my:"30px" , border:"1px solid #E9E7DB", borderRadius:"15px"}}>

                <Box sx={{width:"90%" ,display: "flex",flexDirection:"column", alignItems:"start" , justifyContent: "center", m:"20px"}}>
                    <Typography variant='h6' sx={{fontWeight:"bold",m:"10px "}}>Order Summary</Typography>
                    <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
                        <Typography sx={{m:"10px"}}>Product</Typography>
                        <Typography sx={{m:"10px"}}>Total</Typography>
                    </Box>
                    <Box sx={{width: "100%", height:"1px",bgcolor:"#E9E7DB"}} />

                    {SelectedProducts.map((Product) => (

    <Box key={Product.id} sx={{width:"100%",display:"flex", justifyContent:"space-between",color:"gray"}}>
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
                        <Typography sx={{color:"#ac8c5b",fontWeight:"bold",m:"10px"}}>${disable ? 
                        Math.floor(total * 0.8 +20 ) : total +20
                    }</Typography>
                    </Box>


                    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Payment</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={paymentvalue}
        name="radio-buttons-group"
      >

        <FormControlLabel onClick={() => {
            setpaymentvalue("Cash")

        }} value="Cash" control={<Radio />} label="Cash on delivery" />
        <FormControlLabel 
        onClick={() => {
            setpaymentvalue("Credit")
        }}
        
        value="Credit" control={<Radio />} label="Credit/Visa Cards or Paypal" />
      </RadioGroup>
    </FormControl>

                        <FormDialog {...{paymentvalue , Code , address ,Phone ,Email , LastName , firstName , Town , Country }} />
                
                
                </Box>
            </Box>

        </Box>
    </Box>



        </Box>
        </>
    );
    
}

export default Check;


