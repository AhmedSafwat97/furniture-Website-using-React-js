import {
    Box,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import Grid from '@mui/material/Unstable_Grid2';

  import React from "react";
  
  
  const CategorySection = () => {
    
     const theme = useTheme();
     const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
    sx={{
      bgcolor: "#FFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ width: "75%"  , mt: "40px"}}>
      <Typography
        sx={{ fontWeight: "900", width : "100%" }}
        variant={isSmallScreen ? "h5" : "h4"}
      >
        Popular Categories
      </Typography>
    </Box>

    <Box
      sx={{
        flexGrow: 1,
        width: "75%",
        paddingY: "10px",
      }}
    >
      <Grid 
      container
        spacing={4}
        style={{ width: "100%", height: "100%", padding: "20px 0 40px 0" }}
      >
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b' ,outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              cursor: "pointer",
              ":hover":
               {   outline:'1px solid #ac8c5b',
               outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b',outlineOffset: '-1px' },
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b' ,outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              cursor: "pointer",
              ":hover":
               {   outline:'1px solid #ac8c5b',
               outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b',outlineOffset: '-1px' },
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b' ,outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              cursor: "pointer",
              ":hover":
               {   outline:'1px solid #ac8c5b',
               outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b',outlineOffset: '-1px' },
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b' ,outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              cursor: "pointer",
              ":hover":
               {   outline:'1px solid #ac8c5b',
               outlineOffset: '-1px'},
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} md={3} lg={2} >
          <Box
          sx={{
            height: "250px",
              backgroundColor: "#F3F2EE",
              borderRadius: "15px",
              padding: "10px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover":
               {outline: '1px solid #ac8c5b',outlineOffset: '-1px' },
          }}>

            <Box sx={{ width: "90%", height: "65%", mx: "auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../../../../Imgs/Productss.png"
                alt=""
              />
            </Box>
            <Box
              className="cardcontent"
              sx={{
                p: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#FFF",
                mx: "auto",
                width: "95%",
                height: "32%",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h6">Chair</Typography>
              <Box sx={{ mt: "5px",}}>
                <Typography>15 products</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
       
       

      </Grid>
    </Box>

    </Box>

  )
};
export default CategorySection ;