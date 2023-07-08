import { Badge, Box, Typography } from '@mui/material';
import React from 'react';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import EastIcon from "@mui/icons-material/East";


export default function Section2() {
  return (
    <Box class="coverImg" sx={{width: "100%"}}>
         <Box
        sx={{
            Width: "75%"  ,
            mx:"auto",
        bgcolor: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my:"50px"}}>
            <Box>
            <Typography sx={{fontWeight: '900',m : '30px auto',textAlign:"center" ,width:"75%", fontSize : {xs : "20px" , md : "40px"}}} variant='h4'>We can Easily buy our Products within your Budget </Typography>
            <Box sx={{width : '100%', m: "30px 0",display : "flex", justifyContent:"space-evenly"}}>
                    <Box  sx={{width:"20%", textAlign:"center", m: "20px 0" }}>
                    <Badge badgeContent="01" color="secondary">
                      <Box sx={{width: "80px", height : "80px",borderRadius: "50%",bgcolor : "#F3F2EE", display:"flex",
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
                    <Box sx={{position : "relative"}}><EastIcon sx={{position:"absolute", fontSize:"90px", fontWeight:"100"}}/></Box>
                    <Box  sx={{width:"20%", textAlign:"center", m: "20px 0" }}>
                    <Badge badgeContent="01" color="secondary">
                      <Box sx={{width: "80px", height : "80px",borderRadius: "50%",bgcolor : "#F3F2EE", display:"flex",
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
                    <Box  sx={{width:"20%", textAlign:"center", m: "20px 0" }}>
                    <Badge badgeContent="01" color="secondary">
                      <Box sx={{width: "80px", height : "80px",borderRadius: "50%",bgcolor : "#F3F2EE", display:"flex",
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
