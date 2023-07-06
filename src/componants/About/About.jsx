import React from 'react';
import {Box ,ImageList,ImageListItem,Typography} from '@mui/material';
import BannerSection from '../Home/HomeSections/bannerSection';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const About = () => {
    const AboutDetails = [
        {
          id : 1,  
          title : 'Original Products',
          icon : <LocalShippingOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px'}} />,
        },
        {
          id : 2,  
          title : 'Satisfaction Guarantee',
          icon : <GppGoodOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px'}} />,
        },
        {
          id : 3,  
          title : 'New Arrival Everyday',
          icon : <KeyboardReturnOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px'}} />,
        },
        {
          id : 4,  
          title : 'Fast & Free Shipping',
          icon : <SupportAgentOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '50px'}} />,
        },
      ];
    return (<>
        <ScrollToTop/>
        <BannerSection PageName="About Us"/>
        <Box
        sx={{
            minWidth: "75%"  ,
            maxWidth:"75%",
            mx:"auto",
        bgcolor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my:"50px"}}>
            <Box sx={{width : '100%',display : "flex" , justifyContent : {xs:"center",md:"space-between"},flexWrap:{xs:"wrap",md:"nowrap"}, m: "30px 0"}}>
                {AboutDetails.map((detail)=>(
                <Box key={detail.id} >
                    <Box sx={{width: "70px", height : "70px",borderRadius: "50%",bgcolor : "#F3F2EE", display:"flex",
                        alignItems: "center",justifyContent: "center",margin:'15px 0'}}>
                        {detail.icon}
                    </Box>
                    <Typography sx={{margin:'10px 0'}} fontSize={"22px"} fontWeight={'600'} >{detail.title}</Typography>
                    <Typography fontSize={"12px"} color="gray">There are many variations of passages of our </Typography>
                </Box>

                ))}

            </Box>

            <Box sx={{width : '100%',display : "flex" , justifyContent : {xs:"center",md:"space-between"},flexWrap:{xs:"wrap",md:"nowrap"}, m: "30px 0"}}>
                <Box sx={{width: {sx: "100%", md:"45%"}}}>
                <ImageList
                  sx={{ width: "100%", height: "auto", mx: "auto" }}
                  gap={40}
                  variant="quilted"
                  cols={2}
                  rowHeight={50}
                                   >
                <ImageListItem cols={1}  rows={4}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../Imgs/photo4.jpg")',
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
                    backgroundImage: 'url("../../../Imgs/photo4.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem>
                 <ImageListItem cols={1}  rows={3}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../Imgs/photo4.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem>
                 <ImageListItem cols={1}  rows={1}
                  sx={{borderRadius: "15px",
                    backgroundImage: 'url("../../../Imgs/photo4.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    position : 'relative',
                    textAlign: 'center',}}
                ></ImageListItem>
                </ImageList>

                </Box>
            </Box>

        </Box>
    </>
    );
}

export default About;

