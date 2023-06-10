import { AspectRatio } from '@mui/icons-material';
import { Box, Button, Chip, Grid, ImageList, ImageListItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Section1 = () => {
    const itemData = [
      {
        img: '../../../../Imgs/Design1.jpg',
        rows: 2,
        cols: 3,
        discount : "30% Discount",
        title: `New Stylish Decor Furniture`,
        deletedPrice: 400,
        price : 250,
      },
      {
        img: '../../../../Imgs/design3.jpg',
        cols: 2,
        discount : "Mega Offer 36% Off",
        title: 'The Latest Collection of Furniture',
        deletedPrice: 350,
        price : 280,
      },
      {
        img: '../../../../Imgs/design2.jpg',
        cols: 2,
        discount : "Exclusive Offer 50% Off",
        title: 'Farmaat Wooden Chaire',
        deletedPrice: 500,
        price : 250,
      },
    ];

    // this hook used to make responsive from xs to md => cols={matchDownMd ? 5 : item.cols }
    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    
    return (
      <>

<Box sx={{ padding: "16px",paddingBottom: '0px', bgcolor : "#CECECA" }}>
        <ImageList
          sx={{ width: "75%", height: "auto" , mx: "auto" 
        }}
          gap = {20}
          variant="quilted"
          cols={5}
          rowHeight={200}
        >
            {itemData.map((item) => (
              <ImageListItem key={item.title} cols={matchDownMd ? 5 : item.cols }
              rows={matchDownMd ? 1 : item.rows } 
              sx={{borderRadius: '15px' , 
              backgroundImage: `url(${item.img})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundOrigin: 'content-box',
              
            }}>
              <Box sx={{color : '#fff', my : '25px' ,  lineHeight: 2 ,ml : '30px', width : '70%',
                marginY: item.cols === 3 ? '36px': null }}>
                <Chip label={item.discount} 
                sx={{mb : item.cols == 3 ?'8px':'4px' , borderRadius: '5px', backgroundColor: '#FCC012', color : '#000'}}
                 />
                <Typography variant={item.cols === 3 ?"h3":"h5"} 
                sx={{fontSize: matchDownMd ? "20px":null }}>
                    {item.title}
                </Typography>
                <Typography sx={{ fontSize: matchDownMd ? "12px":'18px'}} >
                  <del style={{color : 'lightgray'}}>${item.deletedPrice}</del> ${item.price}
                </Typography>
                {item.cols === 3 ?
                  <Chip label='Shop Now' 
                  sx={{fontSize :matchDownMd ? "10px":'16px' , mt: matchDownMd ? "10px":'50px' , 
                  backgroundColor:"#FCC012" ,cursor :'pointer' , padding: '16px'}}
                  />
                 :<a style={{textDecoration : 'underline',color : 'lightgray', fontSize :matchDownMd ? "10px":'16px'}}>
                  Shop Now
                </a>
                }

              </Box>

              </ImageListItem>
            ))}
            <Box sx={{ display : "flex",  width : '100%'}}>

            <Box sx={{bgcolor : '#fff', padding : '30px', borderTopLeftRadius: '15px', borderTopRightRadius : '15px' 
            ,display : "flex",  width : '40%'}}>
                <img style={{borderRadius : '15px', }}>
                </img>
                <Box>
                  <Typography sx={{fontSize: '10px'}}>
                    Latest Offer
                  </Typography>
                </Box>


             </Box>
             <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid xs={6} md>
                  <AspectRatio variant="plain">
                    <Typography level="inherit" fontWeight="lg">
                      Soft
                    </Typography>
                  </AspectRatio>
                </Grid>
                <Grid xs={6} md>
                  <AspectRatio variant="plain">
                    <Typography level="inherit" fontWeight="lg">
                      Outlined
                    </Typography>
                  </AspectRatio>
                </Grid>
                <Grid xs={6} md>
                  <AspectRatio variant="plain">
                    <Typography level="inherit" fontWeight="lg">
                      Plain
                    </Typography>
                  </AspectRatio>
                </Grid>
              </Grid>
            </Box>
        </ImageList>
        </Box>
      </>
    );
}

export default Section1;







