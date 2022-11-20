import React,{useState, useEffect} from 'react'
import {Box, Typography, Divider, Backdrop, CircularProgress, Button} from "@mui/material"
import "./home.css"
import intro from "../../assets/videos/intro.mp4"
import HomeCategory from '../../components/HomeCategory/HomeCategory'
import HomeSold from '../../components/HomeSold/HomeSold'
import { useQuery } from '@apollo/client'
import { getProductsGQL } from '../../api'

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SupportIcon from '@mui/icons-material/Support';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Home = () => {
  const [products, setProducts] = useState([])
   const {loading, error, data} = useQuery(getProductsGQL)
  useEffect(()=>{
    setProducts(data?.products);
  },[data])
  return (
    <>
      <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
        <CircularProgress color="inherit"/>
      </Backdrop>
      <Box className="homeContainer"> 
        <Box className="homeIntro">
          <video autoPlay loop width="100%" height="400px" style={{objectFit:"cover"}}>
            <source src={intro} type="video/mp4" />
          </video>
        </Box>


        <Box className="homeItems">
          <Box>
            <LocalShippingIcon style={{color:"#FF5050", fontSize:"40px"}}/>
            <Typography variant="h6" color="primary">FREE SHIPPING/DELIVERY</Typography>
            <Typography variant="subtitle1" color="primary">On order over $250.00</Typography>
          </Box>
          <Box>
            <CardGiftcardIcon style={{color:"#FF5050", fontSize:"40px"}}/>
            <Typography variant="h6" color="primary">10% DISCOUNT</Typography>
            <Typography variant="subtitle1" color="primary">On order over 10 items</Typography>
          </Box>
          <Box>
            <SupportIcon style={{color:"#FF5050", fontSize:"40px"}}/>
            <Typography variant="h6" color="primary">24/7 CUSTOMER SERVICE</Typography>
            <Typography variant="subtitle1" color="primary">Call us on +213 000 000 000</Typography>
          </Box>
          <Box>
            <EmojiEventsIcon style={{color:"#FF5050", fontSize:"40px"}}/>
            <Typography variant="h6" color="primary">BUYER PROTECTION</Typography>
            <Typography variant="subtitle1" color="primary">Your transaction are secured</Typography>
          </Box>
        </Box>

        <Box className="homeDevider">
          <Divider textAlign="center">
            <Typography variant="h5" color="info.light" style={{fontWeight:"bold"}}>SHOP BY CATEGORIES</Typography>
          </Divider>
        </Box>

        <Box className="homeCategories">
          {
            products?.slice(0,4).map((e,i)=>{
              return (
                <Box key={i}>
                  <HomeCategory product={e}/>
                </Box>
              )
            })
          }
        </Box>

        <Box style={{marginTop:"35px"}}>
          <Button variant="contained" color="secondary" style={{width:"200px"}}>SEE ALL</Button>
        </Box>

        <Box className="homeDevider">
          <Divider textAlign="center">
            <Typography variant="h5" color="info.light" style={{fontWeight:"bold"}}>BEST SOLD YET</Typography>
          </Divider>
        </Box>

        <Box className="homeBestSold">
          {
            products?.slice(0,4).sort((a,b)=>(b.sales - a.sales)).map((e,i)=>{
              return (
                <Box key={i}>
                  <HomeSold product={e}/>
                </Box>
              )
            })
          }
        </Box>

        <Box style={{marginTop:"35px"}}>
          <Button variant="contained" color="secondary" style={{width:"200px"}}>SEE ALL</Button>
        </Box>

        <Box className="homeDevider">
          <Divider textAlign="center">
            <Typography variant="h5" color="info.light" style={{fontWeight:"bold"}}>SEE LATEST PRODUCTS</Typography>
          </Divider>
        </Box>

        <Box className="homeBestSold">
          {
            products?.slice(0,4).sort((a,b)=>(new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime())).map((e,i)=>{
              return (
                <Box key={i}>
                  <HomeSold product={e}/>
                </Box>
              )
            })
          }
        </Box>

        <Box style={{marginTop:"35px"}}>
          <Button variant="contained" color="secondary" style={{width:"200px"}}>SEE ALL</Button>
        </Box>

      </Box>
    </>
  )
}

export default Home