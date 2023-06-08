import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function section1() {
  return (
    <ImageList
      sx={{ width: "75%", height: "auto" , mx: "auto", 
    }}
      gap = {20}
      variant="quilted"
      cols={5}
      rowHeight={255}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.title} cols={item.cols} rows={item.rows} 
        sx={{borderRadius: '15px',
        backgroundImage: url(${item.img}),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>

        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Breakfast',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    cols: 2,
  },
];
