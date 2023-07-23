import { Box,ImageList, ImageListItem , Typography } from '@mui/material';
import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { Link } from 'react-router-dom';
import  matchDownMd from '../../../ExternalMethods/matchDownMd';
import Shape from './Shape';

const section2 = () => {
    const itemData = [
        {
          img: "../../../../Imgs/photo4.jpg",
          rows: 1,
          cols: 2,
          offer: "40%",
          title: "Bedroom side Table",
        },
        {
          img: "../../../../Imgs/photo3.jpg",
          rows: 1,
          cols: 3,
          offer: "50%",
          title: "Sofa in White Room",
        },
        {
          img: "../../../../Imgs/photo2.jpg",
          rows: 2,
          cols: 4,
          offer: "50%",
          title: "Lambert & Fils laurent",
        },
        {
            img: "../../../../Imgs/photo1.jpg",
            rows: 1,
            cols: 3,
            offer: "25%",
            title: "Sapphire Chair in room",
          },
          {
            img: "../../../../Imgs/photo5.jpg",
            rows: 1,
            cols: 2,
            offer: "35%",
            title: "comfy chairs sink",
          },
      ];

      const Shipping = [
        {
          title : 'Free Shipping',
          desc : 'Free shipping on all US order or order above $100.',
          icon : <LocalShippingOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px',position: 'relative' , left: "8px", top:'3px'}} />,
        },
        {
          title : 'Securety Payment',
          desc : 'Simply return it within 30 days for an exchange.',
          icon : <GppGoodOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px',position: 'relative' , left: "8px", top:'3px'}} />,
        },
        {
          title : '14-Day Return',
          desc : 'Simply return it within 30 days for an exchange.',
          icon : <KeyboardReturnOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px',position: 'relative' , left: "8px", top:'3px'}} />,
        },
        {
          title : '24/7 Support',
          desc : "Contact us 24 hours a day. 7 Day's week.",
          icon : <SupportAgentOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px',position: 'relative' , left: "8px", top:'3px'}} />,
        },
      ];
    
  return (
    <>
     <Box sx={{ bgcolor: "#FFF", width: {xs :"90%" , md :"75%"}  , margin: '50px auto'}}>
        <hr></hr>
        <Box sx={{display : "flex" ,flexWrap : matchDownMd()?'wrap': 'nowrap', justifyContent : "space-around", m: "30px 0" , flexShrink: '0',}}>
          {Shipping.map((step)=>(
              <Box key={step.title} sx={{ width:{xs: "400px",md: "400px"}, display : "flex"  ,justifyContent : "start" , alignItems : "center"}}>
                <Box sx={{width: "40px", height : "40px",borderRadius: "50%",bgcolor : "#E9E7DB", position :'relative',marginX: '10px'}}>
                    {step.icon}
                </Box>
                <Box sx={{padding: '0 0 0 15px'}}>
                  <Typography sx={{margin:'15px 0'}} fontSize={"20px"} fontWeight={'600'} >{step.title}</Typography>
                  <Typography fontSize={"14px"} color="gray">{step.desc}</Typography>
                </Box>
              </Box>
          ))}
        </Box>
        <hr></hr>
         <Box sx={{ width : "100%" }}>
         <Typography sx={{fontWeight: '900',m : '50px 0px 0 0' , fontSize : {xs : "20px" , md : "35px"}}} variant='h4'>One Stop Custom and Factory </Typography>
<Box sx={{display : "flex"}}>
<Typography sx={{fontWeight: '900',m : '0 40px 30px 0', fontSize : {xs : "22px" , md : "35px"}}} variant='h4'>Furniture Shopping</Typography>
<Shape/>
</Box>

</Box >

<Box>
        <ImageList
          sx={{ width: "100%", height: "auto", mx: "auto" }}
          gap={20}
          variant="quilted"
          cols={9}
          rowHeight={280}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.title}
              cols={matchDownMd() ? 9 :item.cols}
              rows={matchDownMd() ? 1 :item.rows}
              sx={{
                borderRadius: "15px",
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundOrigin: "content-box",
                position : 'relative',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  position : 'absolute',
                  left : '10%',
                  bgcolor: "#fff",
                  borderRadius: "15px",
                  lineHeight: 2,
                  width: "80%",
                  margin: '30px 0',
                  overFlow :"hidden",
                  p : '15px 0',
                }}
              >
               <Typography  sx={{mb: '10px ' , fontWeight: '600',}}>{item.title}</Typography> 
               <Typography  sx={{ fontWeight: '600',fontSize:"12px" ,color:"gray"}}>Up to <span style={{color :"#AC8C5B", textDecoration: "underline"}}>{item.offer}</span> of item</Typography> 
               <Link 
                    to="/Shop"
                    className='Link-hover'
                    style={{
                      textDecoration: "underline",
                      color: "gray",
                      fontSize: "12px",
                      fontWeight: '600',
                    }}
                  >
                    Shop Now
                  </Link>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      </Box>
    </>
  );
};

export default section2;
