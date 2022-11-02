import React from 'react'
import "./homecategory.css";
import { Typography, Box, Button, Avatar, Tooltip, Chip } from '@mui/material';


const HomeCategory = ({product}) => {
  return (
    <Box className="CateContainer">
        <Typography variant="body1">{product.category}</Typography>
        <Box className='categoryItemContainer'>
            <img src={product.images[1]} alt={product.name} width="400px"/>
        </Box>
    </Box>
  )
}

export default HomeCategory