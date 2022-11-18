import React,{useState, useEffect} from 'react'
import {Box, Typography, Divider, Backdrop, CircularProgress} from "@mui/material"
import "./home.css"
import gpu from "../../assets/images/home/gpu.jpg"
import HomeCategory from '../../components/HomeCategory/HomeCategory'
import HomeSold from '../../components/HomeSold/HomeSold'
import SideTool from '../../components/SideTool/SideTool'
import { useQuery } from '@apollo/client'
import { getProductsGQL } from '../../api'


const Home = () => {
  const [products, setProducts] = useState([])
   const {loading, error, data} = useQuery(getProductsGQL)
  useEffect(()=>{
    setProducts(data?.products);
  },[data])
  return (
    <>
      <SideTool/>
      <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
        <CircularProgress color="inherit"/>
      </Backdrop>
      <Box className="homeContainer"> 
        <Box className="homeHeader">
          <Typography variant="h2" color="primary">Make your life easier and smile more</Typography>
        </Box>
        <Box className="homeImages">
          <img src={gpu} alt="dron" width="80%" className="homeImageCustom"/>
        </Box>
        <Box className="homeDevider">
          <Divider textAlign="left"><Typography variant="h6" color="info.light" style={{cursor:"pointer"}}>Categories</Typography></Divider>
        </Box>
        <Box className="homeCategories">
          {
            products?.slice(Math.floor(Math.random()*products.length),products.length).map((e,i)=>{
              return (
                <Box key={i}>
                  <HomeCategory product={e}/>
                </Box>
              )
            })
          }
        </Box>
        <Box className="homeDevider">
          <Divider textAlign="left"><Typography variant="h6" color="info.light" style={{cursor:"pointer"}}>Best Sold</Typography></Divider>
        </Box>
        <Box className="homeBestSold">
          {
            products?.slice(Math.floor(Math.random()*products.length),products.length).sort((a,b)=>(b.sales - a.sales)).map((e,i)=>{
              return (
                <Box key={i}>
                  <HomeSold product={e}/>
                </Box>
              )
            })
          }
        </Box>
        <Box className="homeDevider">
          <Divider textAlign="left"><Typography variant="h6" color="info.light" style={{cursor:"pointer"}}>Latest</Typography></Divider>
        </Box>
        <Box className="homeBestSold">
          {
            products?.slice(Math.floor(Math.random()*products.length),products.length).sort((a,b)=>(new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime())).map((e,i)=>{
              return (
                <Box key={i}>
                  <HomeSold product={e}/>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </>
  )
}

export default Home