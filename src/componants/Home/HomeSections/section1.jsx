import { Box, ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const Section1 = () => {
    const itemData = [
      {
        img: '../../../../Imgs/Design1.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 3,
      },
      {
        img: '../../../../Imgs/design2.jpg',
        title: 'Burger',
        cols: 2,
      },
      {
        img: '../../../../Imgs/design3.jpg',
        title: 'Camera',
        cols: 2,
      },
    ];
    
    return (
      <>
        <ImageList
          sx={{ width: "75%", height: "auto" , mx: "auto", 
          display : {xs : "none" , md : "grid"}
        }}
          gap = {20}
          variant="quilted"
          cols={5}
          rowHeight={255}
        >
            {itemData.map((item) => (
              <ImageListItem key={item.title} cols={item.cols} rows={item.rows} 
              sx={{borderRadius: '15px' , 
              backgroundImage: `url(${item.img})`,
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
              </ImageListItem>
            ))}
        </ImageList>
      </>
    );
}

export default Section1;







