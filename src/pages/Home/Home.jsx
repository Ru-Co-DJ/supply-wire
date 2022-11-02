import React,{useState, useLayoutEffect} from 'react'
import {Box, Typography, Chip, Button} from "@mui/material"
import "./home.css"
import arduino from "../../assets/images/home/arduino.jpg"
import dron from "../../assets/images/home/dron.jpg"
import dron2 from "../../assets/images/home/dron2.jpg"
import gpu from "../../assets/images/home/gpu.jpg"
import keyboard from "../../assets/images/home/keyboard.jpg"
import parts from "../../assets/images/home/parts.jpg"
import { getData } from '../../api'
import HomeCategory from '../../components/HomeCategory/HomeCategory'

const Home = () => {
  const [products, setProducts] = useState([])

  useLayoutEffect(()=>{
    getData().then(res=>{
      setProducts(res)
      console.log(res)
    })
  },[])

  return (
    <Box className="homeContainer"> 
      <Box className="homeHeader">
        <Typography variant="h2" color="primary">Make your life easier and smile more</Typography>
      </Box>
      <Box className="homeImages">
        <img src={gpu} alt="dron" width="80%" className="homeImageCustom"/>
      </Box>
      <Box className="homeDevider">
        <Typography variant="h6" color="info.light" style={{left:0}}>Categories</Typography>
      </Box>
      <Box className="homeCategories">
        {
          products.splice(0,8).map((e,i)=>{
            return (
              <Box key={i}>
                <HomeCategory product={e}/>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Home