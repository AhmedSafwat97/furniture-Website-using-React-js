import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box, DialogTitle, Typography } from '@mui/material';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function FormDialog({paymentvalue }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
const [paymentmethod, setpaymentmethod] = useState("");

let maxLength = 16

const Years =[
  {year : "2023"} , 
  {year : "2024"} , 
  {year : "2025"} , 
  {year : "2026"} , 
  {year : "2027"} , 
  {year : "2028"} , 
  {year : "2029"} , 
  {year : "2030"} , 
  {year : "2031"} , 
  {year : "2032"} , 
  {year : "2033"} , 
]

const Month =[
  {month : "1"} ,  
  {month : "2"} ,
  {month : "3"} ,
  {month : "4"} ,
  {month : "5"} ,
  {month : "6"} ,
  {month : "7"} ,
  {month : "8"} ,
  {month : "9"} ,
  {month : "10"} ,
  {month : "11"} ,
  {month : "12"} ,

  
]





// to add max width to the input
  const handleChange = (e) => {
    let inputValue = e.target.value;
    
    // Check if the input exceeds the maximum length
    if (inputValue.length <= maxLength) {
      setValue(inputValue);
    } else {
      // Truncate the input value to the maximum length
      const truncatedValue = inputValue.slice(0, maxLength);
      setValue(truncatedValue);
    }
  };



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
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
      
      
      variant="outlined" onClick={handleClickOpen}>
      Place Order Now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{width : {xs : "fit-content" , md:"500px"}}} >Confirm Order Payment</DialogTitle>
        <DialogContent>
       

  {paymentvalue === "Cash" &&

<>


<Typography fontWeight="500"> Do You Want To Cash on Delivery ? </Typography>
<Typography fontWeight="500"> Please note that we will add an additional $12 to active this service</Typography>


</>




}




{ paymentvalue === "Credit" && 
<>   
<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Please Choose The Payment Method :</FormLabel>
      <RadioGroup
        row
        aria-labelledby="payment"
        name="payment"
        defaultValue={paymentmethod}
      >
        <FormControlLabel 
        onClick={() => {setpaymentmethod("Credit")}}
        value="Credit" control={<Radio />} label="Credit" />
        <FormControlLabel 
        onClick={() => {setpaymentmethod("Visa")}}
        value="Visa" control={<Radio />} label="Visa" />
        <FormControlLabel
        onClick={() => {setpaymentmethod("Paypal")}}
        value="Paypal" control={<Radio />} label="Paypal" />
      </RadioGroup>
    </FormControl>


{paymentmethod === "Credit" &&
             <> 
            <Box display="flex" alignItems="center">
               <Typography>Please Enter Your Credit Card Details</Typography>
                <img style={{width : "40px" , margin : "0 10px"}} loading='lazy' src="../../../Imgs/master card.png"  alt="card"/>
              
              
            </Box>

             <TextField
               autoFocus
               margin="dense"
               id="name"
               label=""
               placeholder='Card Name'
               type="text"
               fullWidth
               variant="standard"
             />
           <TextField
               value={value}
               onChange={handleChange}
               autoFocus
               margin="dense"
               id="name"
               label=""
               placeholder='xxxx-xxxx-xxxx-xxxx'
               type="number"
               fullWidth
               variant="standard"
             />


             <Box display="flex" width="100%">
             <select name="Month" placeholder='Month*'
                        style={{width :"50%",fontSize:"10px",margin:"10px",border: "none",padding:"15px"}}>
                                 {Month.map((month)=>(
                        <option key={month.month} value={month.month}>{month.month}</option>
                        ))}
                        </select>

             <select name="Year" placeholder='Year*'
                        style={{width :"50%",fontSize:"10px",margin:"10px",border: "none",padding:"15px"}}>
                        {Years.map((year)=>(
                        <option key={year.year} value={year.year}>{year.year}</option>
                        ))}
                        </select>

                 
             </Box>
             </>
          }



{paymentmethod === "Visa" &&
       <> 
       <Box display="flex" alignItems="center">
          <Typography>Please Enter Your Visa Card Details</Typography>
           <img style={{width : "40px" , margin : "0 10px"}} loading='lazy' src="../../../Imgs/visa.png"  alt="visa"/>
         
         
       </Box>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label=""
          placeholder='Card Name'
          type="text"
          fullWidth
          variant="standard"
        />
      <TextField
          value={value}
          onChange={handleChange}
          autoFocus
          margin="dense"
          id="name"
          label=""
          placeholder='xxxx-xxxx-xxxx-xxxx'
          type="number"
          fullWidth
          variant="standard"
        />


        <Box display="flex" width="100%">
        <select name="Month" placeholder='Month*'
                   style={{width :"50%",fontSize:"10px",margin:"10px",border: "none",padding:"15px"}}>
                            {Month.map((month)=>(
                   <option key={month.month} value={month.month}>{month.month}</option>
                   ))}
                   </select>

        <select name="Year" placeholder='Year*'
                   style={{width :"50%",fontSize:"10px",margin:"10px",border: "none",padding:"15px"}}>
                   {Years.map((year)=>(
                   <option key={year.year} value={year.year}>{year.year}</option>
                   ))}
                   </select>

            
        </Box>
        </>
          }



          
{paymentmethod === "Paypal" &&
       
       <> 
              <Box display="flex" alignItems="center">
          <Typography>Please Enter Your Paypal account</Typography>
           <img style={{width : "40px" , margin : "0 10px"}} src="../../../Imgs/paypal.png" loading='lazy' alt="paypal"/>
         
         
       </Box>
     <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Paypal account"
         type="email"
         fullWidth
         variant="standard"
       
       />
       </>

             }

</>
}




        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
