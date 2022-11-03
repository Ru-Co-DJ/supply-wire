import React from 'react'
import "./homesold.css"
import { Box, Typography, Chip } from '@mui/material'

const HomeSold = ({product}) => {
  return (
    <Box className="homeSoldItemContainer">
        <Box className="head">
            <Typography variant="h6" color="secondary" className="name">{product.name}</Typography>
            <Chip label={`Sales: ${product.sales}`} color="primary"/>
        </Box>
        <Box className="image">
            <img src={product.images[2]} alt={product.name} className="actualImg"/>
        </Box>
        <Box className="description">
            <Typography variant="body1" color="primary" className="name">Posted: {product.datePosted}</Typography>
            <Typography variant="body1" color="primary" className="name">Store: {product.store}</Typography>
            <Typography variant="body1" color="primary" className="name">Reviews: {product.reviews.length}</Typography>


        </Box>
    </Box>
  )
}

export default HomeSold