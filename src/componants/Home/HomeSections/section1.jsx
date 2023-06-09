import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Section1 = () => {
    const itemData = [
      {
        img: '../../../../Imgs/Design1.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 3,
        discount : "30% Discount",
        title: 'New Stylish Decor Furniture',
        deletedPrice: 400,
        price : 250,
      },
      {
        img: '../../../../Imgs/design2.jpg',
        title: 'Burger',
        cols: 2,
        discount : "Mega Offer 36% Off",
        title: 'The Latest Collection of Furniture',
        deletedPrice: 350,
        price : 280,
      },
      {
        img: '../../../../Imgs/design3.jpg',
        title: 'Camera',
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
        <ImageList
          sx={{ width: "75%", height: "auto" , mx: "auto", 
        }}
          gap = {20}
          variant="quilted"
          cols={5}
          rowHeight={220}
        >
            {itemData.map((item) => (
              <ImageListItem key={item.title} cols={matchDownMd ? 5 : item.cols }
              rows={matchDownMd ? 1 : item.rows } 
              sx={{borderRadius: '15px' , 
              backgroundImage: `url(${item.img})`,
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundOrigin: 'content-box',

            }}>
              </ImageListItem>
            ))}
        </ImageList>
      </>
    );
}

export default Section1;







