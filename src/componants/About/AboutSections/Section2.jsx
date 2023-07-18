import { Badge, Box, Typography } from '@mui/material';
import React from 'react';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';


export default function Section2() {
  return (
    <Box className="ImageBack" sx={{width: "100%" , height : {xs : "fit-content" , md : "500px"} , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
         <Box
        sx={{
            Width: "75%"  ,
            mx:"auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my:"50px"}}>
            <Box>
            <Typography sx={{fontWeight: '900',m : '30px auto',textAlign:"center" ,width:"75%", fontSize : {xs : "20px" , md : "40px"}}} variant='h4'>We can Easily buy our Products within your Budget </Typography>
            <Box sx={{width : '100%', m: "30px 0",display : "flex", justifyContent : "center" , flexWrap : "wrap" }}>
                    <Box  sx={{width:"250px", textAlign:"center", m: "20px 0"}}>
                    <Badge badgeContent="01" color="secondary">
                      <Box sx={{width: "80px", height : "80px",borderRadius: "50%",bgcolor : "#FFF", display:"flex",
                           alignItems: "center",justifyContent: "center",margin:'15px auto'}}>
                            <BedroomChildOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '35px'}}/>
                       </Box>
                    </Badge>
                       <Box sx={{textAlign:"center"}}>
                        <Typography sx={{margin:'15px 0 10px 0'}} fontSize={"22px"} fontWeight={'600'} >Choose product</Typography>
                        <Typography sx={{width:"80%",mx:"auto"}} fontSize={"12px"} color="gray">Randomised words which don't look ours even
                             slightly believable. if you are going to use a passages </Typography>
                       </Box>
                    </Box>
                    <Box sx={{ width : "120px" , display : {xs : "none" , sm : "none" , md : "flex"}}}>
                         
                        <Box sx={{mt : "65px" , height : "fit-content" ,display : "flex" , width : "100%" , alignItems : "center" }} >
                          <Box sx={{width : "80%" , borderTop : "2px solid black"}} />
                          <Box sx={{width : "0" , height : "0" , borderTop : "10px solid transparent" , borderBottom : "10px solid transparent" , borderLeft : "20px solid black"}} />
                         
                        </Box>

                         </Box>
                    <Box  sx={{width:"250px", textAlign:"center", m: "20px 0"  }}>
                    <Badge badgeContent="02" color="secondary">
                      <Box sx={{width: "80px", height : "80px",borderRadius: "50%",bgcolor : "#FFF", display:"flex",
                           alignItems: "center",justifyContent: "center",margin:'15px auto'}}>
                            <RoomOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '35px'}}/>
                       </Box>
                    </Badge>
                       <Box sx={{textAlign:"center"}}>
                        <Typography sx={{margin:'15px 0 10px 0'}} fontSize={"22px"} fontWeight={'600'} >Details Address</Typography>
                        <Typography sx={{width:"80%",mx:"auto"}} fontSize={"12px"} color="gray">Randomised words which don't look ours even
                             slightly believable. if you are going to use a passages </Typography>
                       </Box>
                    </Box>
                    <Box sx={{ width : "120px" ,  display : {xs : "none" , sm : "none" ,md : "flex"}}}>
                         
                         <Box sx={{mt : "65px" , height : "fit-content" ,display : "flex" , width : "100%" , alignItems : "center" }} >
                           <Box sx={{width : "80%" , borderTop : "2px solid black"}} />
                           <Box sx={{width : "0" , height : "0" , borderTop : "10px solid transparent" , borderBottom : "10px solid transparent" , borderLeft : "20px solid black"}} />
                          
                         </Box>
 
                          </Box>
                    <Box  sx={{width:"250px", textAlign:"center", m: "20px 0"  }}>
                    <Badge badgeContent="03" color="secondary">
                      <Box sx={{width: "80px", height : "80px",borderRadius: "50%",bgcolor : "#FFF", display:"flex",
                           alignItems: "center",justifyContent: "center",margin:'15px auto'}}>
                            <EmojiPeopleOutlinedIcon sx={{color: "#AC8C5B" , fontSize: '35px'}}/>
                       </Box>
                    </Badge>
                       <Box sx={{textAlign:"center"}}>
                        <Typography sx={{margin:'15px 0 10px 0'}} fontSize={"22px"} fontWeight={'600'} >Enjoy Products</Typography>
                        <Typography sx={{width:"80%",mx:"auto"}} fontSize={"12px"} color="gray">Randomised words which don't look ours even
                             slightly believable. if you are going to use a passages </Typography>
                       </Box>
                    </Box>
                   </Box>
            </Box>
        </Box>
    </Box>
  )
}
