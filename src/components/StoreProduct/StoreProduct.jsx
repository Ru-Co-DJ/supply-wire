import React from 'react'
import "./storeproduct.css"
import {Box, Chip, Typography} from "@mui/material"
import { Link } from 'react-router-dom'

const StoreProduct = ({product}) => {
  return (
    <Link to={`/product/${product.id}`} className="link">
    <Box className="storeProductContainer">
        <img src={product.images[0]} alt={product.name} height="200px" className="storePImage"/>
        <Box className="storeProdDetails">
            <Chip color="primary" label={product.category}/>
            <Typography variant="subtitle1" color="info.main" style={{backgroundColor:"#FF5050", margin:"5px", padding:"5px", borderRadius:"5px"}}>{product.name}</Typography>
            <Typography variant="subtitle1" color="primary" style={{fontWeight:"bold"}}>Price: {product.price} $</Typography>
        </Box>
    </Box>
    </Link>
  )
}

export default StoreProduct