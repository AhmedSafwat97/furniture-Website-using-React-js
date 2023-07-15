import React from 'react';
import {Box ,ImageList,ImageListItem,Typography} from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DeckIcon from '@mui/icons-material/Deck';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

export default function Section1() {
    const AboutDetails = [
        {
          id : 1,  
          title : 'Original Products',
          icon :<ProductionQuantityLimitsOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '40px'}}/> ,
        },
        {
          id : 2,  
          title : 'Satisfaction Guarantee',
          icon : <GppGoodOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '40px'}} />,
        },
        {
          id : 3,  
          title : 'New Arrival Everyday',
          icon : <DeckIcon sx={{color: "#AC8C5B" , fontSize: '40px'}} />,
        },
        {
          id : 4,  
          title : 'Fast & Free Shipping',
          icon : <LocalShippingOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '40px'}} /> ,
        },
      ];

      const AboutShipping = [
        {
          id : 1,  
          title : 'Products return Policy',
          icon : <KeyboardReturnOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '30px'}} />,
        },
        {
          id : 2,  
          title : '100% Qualityful Furniture',
          icon : <ChairOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '30px'}} />,
        },
      ];
    
    
    return (<>
       
        <Box
        sx={{
            width: "75%"  ,
            mx:"auto",
        bgcolor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my:"50px",}}>
            <Box sx={{width : '100%',display : "flex" , justifyContent : {xs:"center",md:"space-between"},flexWrap:{xs:"wrap",md:"nowrap"}, m: "30px 0"}}>
                {AboutDetails.map((detail)=>(
                <Box key={detail.id} >
                    <Box sx={{width: "70px", height : "70px",borderRadius: "50%",bgcolor : "#F3F2EE", display:"flex",
                        alignItems: "center",justifyContent: "center",margin:'15px 0'}}>
                        {detail.icon}
                    </Box>
                    <Typography sx={{margin:'10px 0'}} fontSize={"22px"} fontWeight={'600'} >{detail.title}</Typography>
                    <Typography sx={{margin:'0 20px 0 0'}} fontSize={"12px"} color="gray">There are many variations of passages of our </Typography>
                </Box>

                ))}

            </Box>

            <Box sx={{width : '100%',display : "flex" , justifyContent : {md:"space-between"},flexWrap:{xs:"wrap",md:"wrap"}, m: "30px 0"}}>
                <Box sx={{width: {xs: "100%", md:"47%"}}}>
                <ImageList
                  sx={{ width: "100%"}}
                  gap={40}
                  variant="quilted"
                  cols={2}
                  rowHeight={50}
                                   >
                <ImageListItem cols={1}  rows={4}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../../Imgs/About/1.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem> 
                <ImageListItem cols={1}  rows={1}
                sx={{borderRadius: "15px",
                  position : 'relative',
                  textAlign: 'center',}}
                ></ImageListItem>
                 <ImageListItem cols={1}  rows={5}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../../Imgs/About/2.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem>
                 <ImageListItem cols={1}  rows={3}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../../Imgs/About/3.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem>
                 <ImageListItem cols={1}  rows={1}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../../Imgs/About/4.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem>
                </ImageList>

                </Box>
                <Box sx={{width: {xs: "100%", md:"47%"}, py:"10px",mt:{xs:"40px",md: "0px"}}}>
                  <Typography sx={{color: "gray"}}>our About us</Typography>
                  <Typography sx={{fontWeight: '900',m : '30px 50px 30px 0' , fontSize : {xs : "20px" , md : "35px"}}} variant='h4'>We Believe in pure and organic quality </Typography>
                  <Typography sx={{color: "gray" ,fontSize:"12px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. molestias, officia vel vero asperiores optio pariatur porro? Eligendi, beatae a. Distinctio rem architecto, error mollitia quis vero non beatae harum. Possimus corrupti, reiciendis fuga doloribus obcaecati magnam ipsa modi nemo quis, et cum sed ipsam dolorum! </Typography>

                  <Box sx={{width : '100%', m: "30px 0"}}>
                    {AboutShipping.map((Ship)=><Box key={Ship.id} sx={{display : "flex" , m: "20px 0" }}>
                      <Box sx={{width: "50px", height : "50px",borderRadius: "50%",bgcolor : "#F3F2EE", display:"flex",
                           alignItems: "center",justifyContent: "center",margin:'15px 15px 0 0'}}>
                             {Ship.icon}
                       </Box>
                       <Box>
                        <Typography sx={{margin:'15px 0 10px 0'}} fontSize={"22px"} fontWeight={'600'} >{Ship.title}</Typography>
                        <Typography sx={{width:"70%"}} fontSize={"12px"} color="gray">Sure there isn't anything embarrassing hidden in the middle of text </Typography>
                       </Box>
                    </Box>
                    )}
                   </Box>
                </Box>

            </Box>
          </Box>

    </>
    );
}
