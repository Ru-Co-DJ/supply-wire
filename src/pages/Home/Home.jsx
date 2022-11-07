import React,{useState, useLayoutEffect} from 'react'
import {Box, Typography, Chip, Button, Divider} from "@mui/material"
import "./home.css"
import arduino from "../../assets/images/home/arduino.jpg"
import dron from "../../assets/images/home/dron.jpg"
import dron2 from "../../assets/images/home/dron2.jpg"
import gpu from "../../assets/images/home/gpu.jpg"
import keyboard from "../../assets/images/home/keyboard.jpg"
import parts from "../../assets/images/home/parts.jpg"
import { getData } from '../../api'
import HomeCategory from '../../components/HomeCategory/HomeCategory'
import HomeSold from '../../components/HomeSold/HomeSold'
import SideTool from '../../components/SideTool/SideTool'
const Home = () => {
  const [products, setProducts] = useState([])
  useLayoutEffect(()=>{
    getData().then(res=>{
      setProducts(res)
     
    })
  },[])
  return (
    <>
      <SideTool/>
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
          products.slice(0,4).map((e,i)=>{
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
          products.slice(0,4).sort((a,b)=>(b.sales - a.sales)).map((e,i)=>{
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
          products.slice(15,19).sort((a,b)=>(new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime())).map((e,i)=>{
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