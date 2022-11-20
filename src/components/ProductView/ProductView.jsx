import React, {useState, useEffect } from 'react'
import {Box, Typography, Card, Grid, Chip, Avatar, Divider, Rating, Button, FormControl, InputLabel, Select, MenuItem, TextField, Tooltip, Backdrop, CircularProgress, Snackbar, Alert} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./productview.css"
import { Link } from 'react-router-dom';
import banner from "../../assets/images/home/banner.jpg"
import { useQuery } from '@apollo/client'
import { getProductsGQL } from "../../api"
import HomeSold from '../HomeSold/HomeSold';
import { useStateContext } from '../../utils/context/ContextProvider';

const ProductView = ({selectedProduct}) => {
    const [image, setImage] = useState(selectedProduct.images[0])
    const {loading, error, data} = useQuery(getProductsGQL)
    const [similar, setSimilar] = useState([])
    const {cart,setCart} = useStateContext()
    const [toBuy, setToBuy] = useState({})
    const [cartAdded, setCartAdded] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)

    useEffect(()=>{
        cartAdded && setOpenSnack(true)
        localStorage.setItem("cart",JSON.stringify(cart))
        setCartAdded(false)
    },[cartAdded])

    useEffect(()=>{
        window.scrollTo({top:"0px"})
    },[])

    useEffect(()=>{
        data && selectedProduct && setSimilar(data.products.filter(e=>(e.category === selectedProduct.category)).splice(0,5))
    },[data])
    console.log(cart)
  return (
    <Box className="productContainer">
        <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
            <CircularProgress color="inherit"/>
        </Backdrop>
        <Box className="productBanner">
            <img src={banner} alt="product" width="100%"/>
        </Box>
        <Box style={{width:"100%"}}>
            <Grid container spacing={3} >
                <Grid item xs={12} md={4}>
                    <Box className="overview">
                        <Typography variant="h4" color="primary">Overview</Typography>
                        <img src={image} alt="product1" className="productImage"/>
                        <Box className="imagesHolder">
                            {
                                selectedProduct.images.map((e,i)=>{
                                    return (
                                        <Box key={i} className="productOneImage">
                                            <img src={e} alt={`product${i}`} height="100px" style={{borderRadius:"5px", boxShadow:"0px 0px 9px #000"}} onClick={()=>setImage(e)}/>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className="description">
                        <Box className="row">
                            <Typography variant="h4" color="primary">{selectedProduct.name}</Typography>
                            <Link to={`/products/${selectedProduct.category}`} className="link" >
                                <Chip label={selectedProduct.category} color="secondary" style={{marginTop:"5px",marginLeft:"20px", cursor:"pointer"}}/>
                            </Link>
                        </Box>
                        <Rating defaultValue={selectedProduct.rate} precision={0.1} readOnly style={{marginTop:"10px"}}/>
                        <Typography variant="subtitle1" color="primary">{selectedProduct.description}</Typography>
                        <Typography variant="h6" color="primary">Price: <span style={{fontWeight:"bold", color:"#FF5050"}}>{selectedProduct.price} USD</span></Typography>
                        <Box className="row">
                            <Typography variant="h6" color="primary">Color:</Typography>
                            <Box className="pColor" style={{backgroundColor:selectedProduct.color}}/>
                        </Box>
                        <Typography variant="h6" color="primary">Available: {selectedProduct.quantity}</Typography>
                        <Typography variant="h6" color="primary">Previous sales: {selectedProduct.sales}</Typography>
                        <Box className="row">
                            <Typography variant="h6" color="primary">Store:</Typography>
                            <Link to={`/store/${selectedProduct.storeObj.id}`} className="link">
                                <Typography variant="h6" color="secondary" style={{marginLeft:"10px", cursor:"pointer"}}>{selectedProduct.storeObj.name}</Typography>
                            </Link>
                        </Box>
                        <Box style={{marginTop:"20px"}}>
                            <Typography variant="h6" color="primary">Posted: <span style={{color:"#1978A5", fontSize:"16px"}}>{ new Date(Number(selectedProduct.datePosted)).toISOString().split("T")[0]}</span></Typography>
                            <Typography variant="h6" color="primary">Brand: <span style={{color:"#1978A5", fontSize:"16px"}}>{selectedProduct.brand}</span></Typography>
                            <Typography variant="h6" color="primary">Serie: <span style={{color:"#1978A5", fontSize:"16px"}}>{selectedProduct.serie}</span></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className="orderActions">
                        <Typography variant="h4" color="primary">Order</Typography>
                        <Box>
                            <Typography variant="h6" color={selectedProduct.quantity > 0 ? "secondary" : "error"}>{selectedProduct.quantity > 0 ? "In stock" : "Sold out"}</Typography>
                        </Box>
                        <Box>
                            <FormControl variant="standard" style={{minWidth:"50%", margin:"10px"}}>
                                <InputLabel>Quantity</InputLabel>
                                <Select value={toBuy.quantity || 1} onChange={(e)=>{
                                    setToBuy(prev=>({...prev, quantity:e.target.value}))
                                    setToBuy(prev=>({...prev, product:selectedProduct.id}))
                                    setToBuy(prev=>({...prev, totalPrice:selectedProduct.price*e.target.value.toFixed(2)}))
                                    }}>
                                    {
                                        Array.from(Array(Math.floor(selectedProduct.quantity)),(_,i)=>i+1).map(e=>{
                                            return <MenuItem key={e} value={e}>{e}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <Button color="secondary" variant="contained" style={{width:"90%", margin:"5px"}} onClick={()=>{
                                    setCartAdded(true)
                                    setCart(prev=>([...prev,toBuy]))
                                }}>Add to Cart</Button>
                            <Button color="primary" variant="contained" style={{width:"90%", margin:"5px"}}>Buy Now</Button>
                            <Box style={{marginTop:"50px"}}>
                                <Chip label="Terms of sale" color="success" style={{margin:"5px", cursor:"pointer"}}></Chip>
                                <Chip label="Delivery details" color="warning" style={{margin:"5px", cursor:"pointer"}}></Chip>
                                <Chip label="Secure transaction" color="success" style={{margin:"5px", cursor:"pointer"}}></Chip>
                                <Chip label="Return policy" color="warning" style={{margin:"5px", cursor:"pointer"}}></Chip>
                            </Box>
                            <Typography variant="h6" color="primary" style={{margin:"5px"}}>Feel free to contact the store owner about this product</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box className="shareProduct">
                <Typography variant="h4" color="primary" style={{margin:"7px", marginLeft:"20px"}}>Share:</Typography>
                    <Box className="row share">
                        <FacebookIcon color="primary"/>
                        <Typography variant="body1" color="primary">Share</Typography>
                    </Box>
                    <Box className="row share">
                        <PinterestIcon color="primary"/>
                        <Typography variant="body1" color="primary">Pinterest</Typography>
                    </Box>
                    <Box className="row share">
                        <TwitterIcon color="primary"/>
                        <Typography variant="body1" color="primary">Tweet</Typography>
                    </Box>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    
                    <Divider textAlign="left">
                        <Typography variant="h4" color="primary" style={{margin:"10px"}}>Add Review</Typography>
                    </Divider>
                    <Box className="addProductReview">
                        <Box className="row" style={{flexWrap:"wrap"}}>
                            <Typography variant="h6" color="primary">Rate:</Typography>
                            <Rating defaultValue={2.5} precision={0.5} style={{marginTop:"5px",marginLeft:"10px"}}/>
                        </Box>
                        <Box className="column" style={{width:"50%"}}>
                            <TextField label="Review" multiline rows={5} variant="outlined" fullWidth/>
                            <Button variant="contained" color="secondary" style={{margin:"10px"}}>Submit</Button>
                        </Box>
                    </Box>
                    <Divider textAlign="left">
                        <Typography variant="h4" color="primary" style={{margin:"20px"}}>Reviews</Typography>
                    </Divider>
                    <Box className="productReviewsContainer">
                        {
                            selectedProduct.reviews.map((e,i)=>{
                                return (
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
                </Grid>
                <Grid item xs={12} md={6}>
                    <Divider textAlign="left">
                        <Typography variant="h4" color="primary" style={{margin:"10px"}}>Similar product</Typography>
                    </Divider>
                    
                    <Box className="similarProducts">
                        { 
                            similar?.map((e,i)=>{
                                return (
                                    <Box key={i}>
                                        <HomeSold product={e}/>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
            </Grid>  
        </Box>
        <Snackbar
            style={{color:"green"}}
            open={openSnack}
            autoHideDuration={2500}
            onClose={()=>setOpenSnack(false)}
        >
            <Alert severity="success" style={{backgroundColor:"green", color:"white"}}>Item added</Alert>
        </Snackbar>
    </Box>
  )
}

export default ProductView
