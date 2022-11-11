import React from 'react'
import "./homecategory.css";
import { Typography, Box, Button, Avatar, Tooltip, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeCategory = ({product}) => {
  return (
    <Link to={`/products/${product.category}`} style={{all:"unset"}}>
      <Box className="CateContainer">
        <Box className='categoryItemContainer'>
            <img src={product.images[1]} alt={product.name} width="400px" className="hoverCate"/>
        </Box>
        <Box className="homeCateImTxt">
          <Typography variant="h5" style={{fontWeight:"bold"}} >{product.category}</Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default HomeCategory