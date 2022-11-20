import React from 'react'
import "./homesold.css"
import { Box, Typography, Rating } from '@mui/material'
import {Link} from "react-router-dom"

const HomeSold = ({product}) => {
  return (
    <>
   {
    product && (
        <Link to={`/product/${product.id}`}  className="link">
        <Box className="homeSoldItemContainer">
            <Box className="image">
                <img src={product.images[Math.floor(Math.random())*3]} alt={product.name} className="actualImg"/>
            </Box>
            <Box className="description">
                <Typography variant="subtitle1" color="primary" className="name">{product.name}</Typography>
                <Rating defaultValue={product.rate} precision={0.1} readOnly/>
                <Typography variant="body1" color="primary" style={{fontWeight:"bold", marginTop:"10px"}}>${product.price}</Typography>
            </Box>
        </Box>
        </Link>
    )
   }
   </>
  )
}

export default HomeSold