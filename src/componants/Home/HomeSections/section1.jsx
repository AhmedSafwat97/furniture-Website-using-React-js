import { Box, Container, Grid, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { useState } from 'react';


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
      



      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <img src="../../../../Imgs/Design1.jpg" alt="Left Image" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} sm={6} md={8} container justifyContent="flex-end" alignItems="flex-end">
        <img src="../../../../Imgs/design2.jpg" alt="Top Right Image" style={{ width: '60%' }} />
        <img src="../../../../Imgs/design3.jpg" alt="Bottom Right Image" style={{ width: '40%' }} />
      </Grid>
    </Grid>








      </>
    );
}

export default Section1;







