import React from 'react'
import {Box, Typography, Card, Grid, Chip, Avatar, Divider} from "@mui/material";
import {useStateContext} from "../../utils/context/ContextProvider"
import "./productview.css"




const ProductView = () => {
    const {selectedProduct} = useStateContext()

  return (
    <Box>
        <Box>
            <Typography variant="h6">{selectedProduct.name}, {selectedProduct.serie}</Typography>
        </Box>

        <Box className='productImages'>
            <Box className="imageView">
                <img src={selectedProduct.images[0]} alt="product" width="100%" />
            </Box>
            <Box className="imageView">
                <img src={selectedProduct.images[1]} alt="product" width="100%"/>
            </Box>
            <Box className="imageView">
                <img src={selectedProduct.images[2]} alt="product" width="100%"/>
            </Box>
        </Box>
        <Box>
            <Typography variant="h5">store: {selectedProduct.store}</Typography>
        </Box>
        <Box>
            <Typography variant="subtitle1">Description: {selectedProduct.description}</Typography>
        </Box>
        <Box>
            <Typography variant="h5">Rate: {selectedProduct.rate}</Typography>
        </Box>
        <Box>
            <Typography variant="h5">store: {selectedProduct.store}</Typography>
        </Box>
        <Box>
            {
                selectedProduct.reviews.map((e,i)=>{
                    return(
                        <Box key={i}>
                            <Typography variant="h5">{e.name}: {e.date}</Typography>
                            <Typography variant="body1">Rate: {e.rate}</Typography>
                            <Typography variant="body1">Review: {e.review}</Typography>
                            <Divider/>
                        </Box>
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default ProductView