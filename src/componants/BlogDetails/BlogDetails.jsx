import React from 'react';
import ScrollToTop from '../../ExternalMethods/ScrollToTop';
import BannerSection from '../Home/HomeSections/bannerSection';
import { Avatar, Box, Button, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import { useGetOneblogQuery, useGetblogsByNameQuery } from '../../services/productApi';
import { useNavigate, useParams } from 'react-router-dom';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';



const BlogDetails = () => {

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

  const {id} = useParams()

    const { data , error, isLoading } = useGetOneblogQuery(id);
    let LatestBlogs = useGetblogsByNameQuery().data

    console.log(LatestBlogs);

    console.log(data)
    
    const Navigate = useNavigate();


    return (
        <>
    <ScrollToTop/>
    <BannerSection  PageName="Blog Details" />

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

<Box sx={{ p : "50px 0" , width : "100%" , display : "flex" , justifyContent : "center"}}>

<Box sx={{borderRadius : "15px" ,mr : {xs : "0" , md : "15px"} , width : {xs : "90%" , md : "55%" }}}>

{data && 

<>
    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : "90%"}}>
    
        <Typography variant='h6' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>{data.Name}</Typography>
        
        <Box sx={{width : {xs :"95%" , md : "75%"} , paddingBottom : "20px" ,ml :"10px" , display : "flex" , alignItems : "center" , justifyContent : "space-between"}}>
        <Box sx={{display : "flex" , alignItems : "center"  }}>
            <Person2OutlinedIcon  sx={{fontSize : "12px" , mx:"5px"}} />
            <Typography sx={{fontSize : "10px"}}>{data.postBy}</Typography>
            
        </Box>    
        <Box sx={{display : "flex" , alignItems : "center" }}>
            <SchoolOutlinedIcon sx={{fontSize : "12px" , mx:"5px"}} />
            <Typography sx={{fontSize : "10px"}} >{data.category}</Typography>
            
        </Box>   
        <Box sx={{display : "flex" , alignItems : "center"}}>
            <DateRangeOutlinedIcon  sx={{fontSize : "12px" , mx:"5px"}} />
             <Typography sx={{fontSize : "10px"}} >{data.date}</Typography>
            
        </Box>   
        
        <Box sx={{display : "flex" , alignItems : "center" }}>
            <VisibilityOutlinedIcon  sx={{fontSize : "12px" , mx:"5px"}} />
             <Typography sx={{fontSize : "10px"}} >{data.views}K</Typography>
            
        </Box>
        
        </Box>
        
        <Box sx={{width : "95%" , height : "350px" ,mx : "auto" }}>
        <img style={{width : "100%" , height: "100%" , borderRadius : "15px"}} src={data.imageLink} alt=""  />
        
        </Box>
        
        
        <Box sx={{width : "95%" , mx :"auto"  , my : "20px"}}>
            <Typography variant='p'>
                {data.description}
            </Typography>
        </Box>
    </Box>
    
    <Box sx={{width : "90%" , height : "70px" , p : "10px" ,bgcolor : "#F3F2EE" , my : "10px" ,mx : "auto" , display : "flex" , flexDirection : {xs : "column" , md : "row"} ,alignItems : "center" , justifyContent : "space-around"}}>
<Box display="flex" alignItems="center">
    <Typography variant='h6' mr="3px" sx={{fontSize : "15px"}} >Tags : </Typography>
    <Typography variant='p' sx={{fontSize : "11px"}}>{data.tags}</Typography>
</Box>

<Box display="flex" alignItems="center">
<Typography variant='h6' mr="3px" sx={{fontSize : "15px"}}  >Share :</Typography>
    <IconButton >
    <FacebookOutlinedIcon sx={{color :"#AF8E60" , ":hover" : {color : "white"}}}/>
    </IconButton>
    <IconButton>
        <TwitterIcon sx={{color :"#AF8E60" , ":hover" : {color : "white"}}} />
    </IconButton>
    <IconButton>
        <LinkedInIcon  sx={{color :"#AF8E60" , ":hover" : {color : "white"}}}  />
    </IconButton>
    <IconButton >
    <YouTubeIcon sx={{color :"#AF8E60" , ":hover" : {color : "white"}}}  />
    </IconButton>
</Box>

    </Box>
    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : "90%", mb:"20px" }}>
    
        <Typography variant='h6' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>Comments {data.comments.length}</Typography>
        {/* {map} */}
        <Box sx={{width:"95%",mx:"auto",bgcolor:"#F3F2EE",borderRadius : "15px",display:"flex" }}>
            <Avatar sx={{m: "20px",  width: 56, height: 56 }} alt="Remy Sharp" src="/broken-image.jpg" />
            <Box >
                <Typography sx={{mt: "20px", fontWeight:"800"}}>Aya Ragab</Typography>
                <Typography sx={{color: "gray", fontSize:"10px"}}>Aya Ragab</Typography>
                <Typography sx={{color: "gray", fontSize:"10px" ,mt:'10px'}}>Simply dummy text of the printing and Type Settings industry.</Typography>

            </Box>
        </Box>

    </Box>

    <Box sx={{ border : "1px solid black", mx: "auto" ,p : "15px" ,borderRadius : "15px"  , width : "90%"}}>
    
    <Typography variant='h5' sx={{mx : "auto" , width : "95%" , fontSize: "18px" ,fontWeight : "700"}}>Write your Comment</Typography>
    <Box sx={{width:"95%",mx:"auto",borderRadius : "15px",display:"flex" }}>
       <form style={{width:"100%"}}>
        <Box sx={{width:"100%",display:"flex", justifyContent:"space-between"}}>
            <TextField required
                    sx={{width :"30%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Name" />
            <TextField required
                    sx={{width :"30%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="Email" />
            <TextField required
                    sx={{width :"30%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                    size="small"
                    label="phone Number" />
        </Box>
        <TextField required
                sx={{width :"97%",fontSize:"10px" , borderRadius : "30px",backgroundColor:"#E9E7DB",border: "none" , m : "10px"}}
                size="small"
                label="your comment" />
        <Button       
                type="submit" 
                    sx={{
                      bgcolor:'#AF8E60',
                      color: "#fff",
                      fontSize:"14px",
                      borderRadius : "30px",
                      m : "10px",
                      px:"10px",
                    }}
                  >
                    Submit Comment 
                  </Button>
       </form>
    </Box>

</Box>
</>
}

</Box>


{LatestBlogs && 

<Box sx={{width : "25%" , display : {xs : "none" , md : "block"}}} >



<Box sx={{width : "100%" , border : "1px solid black" , borderRadius : "15px" , p:"10px"}}>
<Typography mb="10px" variant='h6'>Latest Post</Typography>
<hr/>


<Box mt="5px">
{LatestBlogs.slice(-3).map((blog) => (
  <Box key={blog.id} sx={{p : "10px 0" , display : "flex"}} 
  onClick={() => {Navigate(`/BlogDetails/${blog.id}`)}}
  >
<Box sx={{width : "25%" , height : "80px" , mr : "5px"}}>
     <img style={{width : "100%" , height : "100%"}} src={blog.imageLink} alt="" />
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


<Box sx={{width : "100%" , mt :"15px" ,border : "1px solid black" , borderRadius : "15px" , p:"10px"}}>
<Typography mb="10px" variant='h6'>Tags Cloud</Typography>
<hr/>

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

export default BlogDetails;
