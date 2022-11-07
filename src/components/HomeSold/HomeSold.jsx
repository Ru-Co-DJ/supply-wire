import React from 'react'
import "./homesold.css"
import { Box, Typography, Chip } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StoreIcon from '@mui/icons-material/Store';
import ReviewsIcon from '@mui/icons-material/Reviews';
import StarIcon from '@mui/icons-material/Star';
import { useStateContext } from '../../utils/context/ContextProvider';
import {Link} from "react-router-dom"

const HomeSold = ({product}) => {
    const {setSelectedProduct} = useStateContext()
  return (
    <Link to={`product/${product.id}`} className="link">
    <Box className="homeSoldItemContainer" onClick={()=>setSelectedProduct(product)}>
        <Box className="head">
            <Typography variant="subtitle1" color="secondary" className="name">{product.name}</Typography>
            <Chip label={`Sales: ${product.sales}`} color="primary"/>
        </Box>
        <Box className="image">
            <img src={product.images[0]} alt={product.name} className="actualImg"/>
        </Box>
        <Box className="description">
            <Box className="row">
                <CalendarMonthIcon color="secondary" style={{fontSize:"23px"}}/>
                <Typography variant="body1" color="primary" className="name">Posted: {product.datePosted}</Typography>
            </Box>
            <Box className="row">
                <StoreIcon color="secondary" style={{fontSize:"23px"}}/>
                <Typography variant="body1" color="primary" className="name">Store: {product.store}</Typography>
            </Box>
            <Box className="row">
                <ReviewsIcon color="secondary" style={{fontSize:"23px"}}/>
                <Typography variant="body1" color="primary" className="name">Reviews: {product.reviews.length}</Typography>
            </Box>


        </Box>
    </Box>
    </Link>
  )
}

export default HomeSold