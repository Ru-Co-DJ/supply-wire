import React, { useEffect } from 'react'
import {Box, Typography, Card, Grid, Chip, Avatar, Divider, Rating, Button, FormControl, InputLabel, Select, MenuItem, TextField, Tooltip} from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';import InventoryIcon from '@mui/icons-material/Inventory';
import PaletteIcon from '@mui/icons-material/Palette';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VerifiedIcon from '@mui/icons-material/Verified';
import "./productview.css"
import { Link } from 'react-router-dom';



const ProductView = ({selectedProduct}) => {
    useEffect(()=>{
        window.scrollTo({top:"0px"})
    },[])
  return (
    <Grid container spacing={3}>
        <Grid item xs={9}>
        <Box className="viewProductContainer">
        <Box className="viewProductName">
            <Typography variant="h4" color="info.main" style={{marginLeft:"20px", padding:"5px", borderRadius:"5px",backgroundColor:"#05716C"}}>{selectedProduct.name}</Typography>
            <Typography variant="h6" color="info.light" style={{marginLeft:"5px"}}>{selectedProduct.serie}</Typography>
            <Chip label={selectedProduct.category} color="secondary" style={{marginLeft:"20%"}}/>
        </Box>
        <Typography variant="h3" color="primary" style={{marginBottom:"10px"}}>Overview</Typography>
        <Box className='productImages'>
            <Box className="imageView">
                <img src={selectedProduct.images[0]} alt="product" height="100%" />
            </Box>
            <Box className="imageView">
                <img src={selectedProduct.images[1]} alt="product" height="100%"/>
            </Box>
            <Box className="imageView">
                <img src={selectedProduct.images[2]} alt="product" height="100%"/>
            </Box>
        </Box>
        <Box className="viewProductStore">
            <Box style={{display:"flex", flexDirection:"row"}}>
                <Typography variant="h4" color="primary">Store:</Typography>
                <Link to={`/store/${selectedProduct.storeObj.id}`} className="link">
                    <Typography variant="h6" color="info.main" style={{backgroundColor:"#FF5050", padding:"3px", borderRadius:"5px", marginLeft:"10px", cursor:"pointer"}}>{selectedProduct.storeObj.name}</Typography>
                </Link>
                <Tooltip title="Verified">
                    <VerifiedIcon color="success" style={{fontSize:"30px", marginTop:"5px", marginLeft:"10px"}}/>
                </Tooltip>
                
            </Box>
            <Box className="row">
                <Typography variant="h6" color="primary" style={{marginLeft:"20px"}}>{ new Date(Number(selectedProduct.datePosted)).toISOString().split("T")[0]}</Typography>
                <Box style={{marginLeft:"20px", maxWidth:"100%"}} className="row">
                    <Typography variant="h6" color="primary">From the brand:</Typography>
                    <Typography variant="h6" color="info.light" style={{marginLeft:"20px"}}>{selectedProduct.brand}</Typography>
                </Box>
            </Box>
        </Box>
        <Box className="viewDetails">
            <Box className="row viewPrice">
                <MonetizationOnIcon style={{color:"#0E2A47", marginTop:"2px"}}/>
                <Typography variant="subtitle1" color="primary">Price:</Typography>
                <Typography variant="h5" color="primary" style={{marginLeft:"10px", fontWeight:"bold"}}>{selectedProduct.price} $</Typography>
            </Box>
            <Box className="row viewPrice">
                <InventoryIcon style={{color:"#0E2A47", marginTop:"2px"}}/>
                <Typography variant="subtitle1" color="primary">Available:</Typography>
                <Typography variant="h5" color="primary" style={{marginLeft:"10px", fontWeight:"bold"}}>{Math.floor(selectedProduct.quantity)}</Typography>
            </Box>
            <Box className="row viewPrice">
                <PaletteIcon style={{color:"#0E2A47", marginTop:"2px"}}/>
                <Typography variant="subtitle1" color="primary">Color:</Typography>
                <Box className="viewProductColor" style={{backgroundColor:selectedProduct.color}}/>
            </Box>
            <Box className="row viewPrice">
                <ShoppingBagIcon style={{color:"#0E2A47", marginTop:"2px"}}/>
                <Typography variant="subtitle1" color="primary">Sales:</Typography>
                <Typography variant="h5" color="primary" style={{marginLeft:"10px", fontWeight:"bold"}}>{selectedProduct.sales}</Typography>
            </Box>
        </Box>
        <Divider style={{width:"50%", margin:"15px"}}/>
        <Box className='viewProductDes'>
            <Typography variant="h4" color="primary">Description:</Typography>
            <Typography variant="h6" color="secondary" style={{marginTop:"10px", marginLeft:"10px"}}>{selectedProduct.description}</Typography>
        </Box>
        <Divider style={{width:"50%", margin:"15px"}}/>
        <Box className="viewProductRate">
            <Typography variant="h4" color="primary">Rate:</Typography>
            <Rating defaultValue={selectedProduct.rate} precision={0.1} readOnly style={{marginTop:"5px", marginLeft:"15px"}}/>
            <Typography variant="h5" style={{marginTop:"5px", marginLeft:"10px"}} color="primary">{selectedProduct.rate}</Typography>
            <Typography variant="h6" style={{marginTop:"5px", marginLeft:"10px"}} color="primary">({selectedProduct.reviews.length} review)</Typography>
            
        </Box>
        <Divider style={{width:"50%", margin:"15px"}}/>
        <Typography variant="h4" color="primary" style={{marginBottom:"20px"}}>Add review</Typography>
        <Box className="addProductReview">
            <Box className="row" style={{flexWrap:"wrap"}}>
                <Typography variant="h6" color="primary">Rate:</Typography>
                <Rating defaultValue={2.5} precision={0.5} style={{marginTop:"5px",marginLeft:"10px"}}/>
            </Box>
            <Box className="column" style={{width:"100%"}}>
                <TextField label="Review" multiline rows={5} variant="outlined" fullWidth/>
                <Button variant="contained" color="secondary" style={{margin:"10px"}}>Submit</Button>
            </Box>
        </Box>
        <Divider style={{width:"50%", margin:"15px"}}/>
        <Typography variant="h3" color="primary">Reviews</Typography>
        <Box className="viewProductReviews">
            {
                selectedProduct.reviews.map((e,i)=>{
                    return(
                        <Box key={i} className="oneReview">
                            <Box className="row">
                                <Avatar style={{color:"#f2f2f2", backgroundColor:"#1978A5"}}>{e.name.toUpperCase()[0]}</Avatar>
                                <Typography variant="h5" color="primary" style={{margin:"5px"}}>{e.name}</Typography>
                                <Typography variant="body1" style={{marginTop:"10px"}}>({new Date(Number(e.date)).toISOString().split("T")[0]})</Typography>
                            </Box>
                            <Box className="row">
                                <Typography variant="h6" color="primary" style={{margin:"5px"}}>Rate:</Typography>
                                <Rating defaultValue={e.rate} precision={0.1} readOnly style={{marginTop:"8px", marginLeft:"15px"}}/>
                            </Box>
                            <Box className="row">
                                <Typography variant="h6" color="primary">Review:</Typography>
                                <Typography variant="body1" color="secondary" style={{marginTop:"5px", marginLeft:"10px"}}>{e.review}</Typography>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    </Box>
        </Grid>
        <Grid item xs={3}>
            <Box className="viewProductShopControl">
                <Typography variant="h6" color="info.light">Like it ?</Typography>
                <FormControl variant="standard" style={{minWidth:"50%", margin:"10px"}}>
                    <InputLabel>Quantity</InputLabel>
                    <Select value={1} onChange={()=>{}}>
                        {
                            Array.from(Array(Math.floor(selectedProduct.quantity)),(_,i)=>i+1).map(e=>{
                                return <MenuItem key={e} value={e}>{e}</MenuItem>
                            })
                            
                        }
                    </Select>
                </FormControl>
                <Button color="secondary" variant="contained" style={{width:"90%", margin:"5px"}}>Add to Cart</Button>
                <Button color="primary" variant="contained" style={{width:"90%", margin:"5px"}}>Buy Now</Button>
                <Typography variant="h6" color="primary" style={{margin:"5px"}}>Feel free to contact the store owner about this product</Typography>
            </Box>
        </Grid>
    </Grid>
  )
}

export default ProductView