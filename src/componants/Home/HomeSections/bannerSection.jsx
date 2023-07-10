import { Box, Typography } from '@mui/material';
import EastIcon from "@mui/icons-material/East";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BannerSection = ({PageName , cat}) => {

const navigat = useNavigate()

    return (
       <>
           <Box
        sx={{
          width: "100%",
          height: "180px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="DetailCover"
      >
        <Typography variant="h4">{PageName}</Typography>
        <Box display="flex" alignItems="center">
            <Typography sx={{cursor : "pointer"}} onClick={() => {
                navigat("/")
            }} >Home</Typography>
          <EastIcon sx={{ fontSize: "20px" , mx:"5px" }} />
          <span style={{ color: "#ac8c5b" , cursor : "pointer" }}> {PageName} </span>
       
             {cat && 
             <>
                 <EastIcon sx={{ fontSize: "20px" , mx:"5px" }} />
                 <span style={{ color: "#ac8c5b" , cursor : "pointer" }}> {cat} </span>
              
             </>
             }


        </Box>
      </Box>
       </>
    );
}

export default BannerSection;
