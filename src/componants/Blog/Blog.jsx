import React from 'react';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import BannerSection from '../Home/HomeSections/bannerSection';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useGetblogsByNameQuery } from '../../services/productApi';
import { useNavigate } from 'react-router-dom';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { Helmet } from 'react-helmet';

const Blog = () => {

  const Tags = [
    {Tag : "Chairs"} , 
    {Tag : "BedRoom"} , 
    {Tag : "Bed"} , 
    {Tag : "Cabinet"} , 
    {Tag : "Sofa"} , 
    {Tag : "Decor"} , 
    {Tag : "Office"} , 
    {Tag : "Lamp"} , 
    {Tag : "Accent Furniture"} , 
    {Tag : "Special Offer"} , 
  ]


    const { data , error, isLoading } = useGetblogsByNameQuery();

    
    const Navigate = useNavigate();


    return (
        <>
         <Helmet>
      <meta charSet="utf-8" />
      <title>Blog-FurniPro</title>
    </Helmet>
    <ScrollToTop/>
    <BannerSection  PageName="Blog" />

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

<Box sx={{ p : "50px 0" , width : "100%" , display : "flex" , justifyContent : "center" , alignItems : {xs : "center" , md : "flex-start"} , flexDirection : {xs : "column" , md : "row"}}}>

{data && 


<Box sx={{display : "flex" ,flexWrap : "wrap" , justifyContent : "center" , width : {xs : "100%" , md : "50%" }}}>

{data.map((blog) => (

<Box
key={blog.id}
  className="Card"
  sx={{
    width : "270px" ,
    height: "380px",
    backgroundColor: "#F3F2EE",
    borderRadius: "15px",
    padding: "10px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    mx : "10px" ,
    my : "10px"
  }}

>

  <Box sx={{ width: "95%", height: "55%", mx: "auto" , mt : "5px" , position : "relative"}}>
    <img
      style={{ width: "100%", height: "100%" , borderRadius: "15px" }}
      src={blog.imageLink}
      alt="blogphoto"
      loading='lazy'
    />
    <Box sx={{position : "absolute" , bottom : "0" , right : "0",bgcolor : "#F3F2EE" , textAlign : "center" , width : "60px" , p : "5px 0" , borderTopLeftRadius : "15px"}}>
      <Typography variant='h6' fontSize="12px">{blog.date}</Typography>
    </Box>
  </Box>
  <Box
    sx={{
      p: "5px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      bgcolor: "#F3F2EE",
      mx: "auto",
      width: "95%",
      height: "45%",
      borderRadius: "15px",
    }}
  >

    <Box sx={{width : "100%" ,display : "flex" , alignItems : "center" , color : "gray"}}>
    <PersonOutlinedIcon fontSize='12px'/>
    <Typography variant='h6' sx={{fontSize : "12px"}} > By Admin</Typography>
    </Box>

<Box sx={{height : "50px" , overflow : "hidden" , width : "100%" , mt : "15px" }}>
<Typography variant="h6" fontSize="15px" fontWeight="700" >{blog.Name}</Typography>

</Box>

<Box sx={{ borderBottom : "2px solid gray" , width : "95%" , my : "15px"}} />



<Box sx={{width : '100%'}}>

    <Button 
        onClick={() => {
          Navigate(`/BlogDetails/${blog.id}`)
        }}
    sx={{color : "gray"  , ":hover" : {color : "black"}}}>
      Read More 
      <ArrowRightAltOutlinedIcon/>
    </Button>
</Box>

  </Box>
</Box>

))}


</Box>




}

{data && 

<Box sx={{width : {xs :"90%" , md : "25%"}  , mt : {xs : "30px" , md : "0"}}} >



<Box sx={{width : "100%" , border : "1px solid black" ,borderRadius : "15px" , p:"10px 0"}}>
<Typography mb="10px" ml="10px" variant='h6'>Latest Post</Typography>
<hr style={{width : "90%" , margin : "0 auto"}}/>


<Box mt="5px">
{data.slice(-3).map((blog) => (
  <Box key={blog.id} sx={{p : "10px 0" , m : "0 10px" ,display : "flex"}}>
<Box sx={{width : "25%" , height : "80px" , mr : "5px"}}>
     <img style={{width : "100%" , height : "100%"}} src={blog.imageLink} loading='lazy' alt="blod Details" />
</Box>

<Box sx={{width : "75%"}} >
<Typography variant='h6' sx={{textDecoration : "underline" ,height : "50px" , overflow : "hidden" ,fontSize : "13px" , cursor : "pointer" , fontWeight : "700"}}>{blog.Name}</Typography>
<Box sx={{display : "flex" , color : "#CBCBCB" }}>
  <DateRangeOutlinedIcon sx={{fontSize : "17px"}} />
  <Typography variant='h6' sx={{fontSize : "13px" }}>{blog.date}</Typography>
  
</Box>

</Box>
  </Box>
))}
</Box>





</Box>


<Box sx={{width : "100%" , mt :"15px" ,border : "1px solid black" , borderRadius : "15px" }}>
<Typography mb="10px" variant='h6' ml="10px" >Tags Cloud</Typography>
<hr style={{width : "90%" , margin : "0 auto"}}/>

{Tags.map((tag) => (
    <Button key={tag.Tag} sx={{bgcolor : "#F3F2EE" , color : "black" , m : "5px" , borderRadius : "10px" , fontSize : "12px"}} >{tag.Tag}</Button>
))}



</Box>



</Box>

}

</Box>
        </>
    );
}

export default Blog;
