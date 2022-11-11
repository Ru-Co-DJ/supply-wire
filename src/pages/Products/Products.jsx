import React,{ useEffect, useState } from 'react'
import "./products.css"
import { Backdrop, Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { getProductsGQL } from '../../api'
import HomeSold from '../../components/HomeSold/HomeSold'


const Products = () => {
  const path = useLocation().pathname.split("/")
  const {loading, error, data} = useQuery(getProductsGQL)
  const [filtered, setFiltred] = useState([])
  const [category, setCategory] = useState(path[path.length-1])

  useEffect(()=>{
    if(category === "all"){
      data?.products.length && setFiltred(data.products)
    }
    else{
      data?.products.length && setFiltred(data.products.filter(e=>(e.category === category)))
    }
  },[data,category])
  return (
    <Box style={{minHeight:"100vh"}}>
      <Box>
      <Box className="categoryControl">
            <Typography variant="h5">Select category:</Typography>
            <FormControl variant="standard" style={{width:"200px", marginLeft:"30px"}}>
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <MenuItem value={"all"}>all</MenuItem>
                    <MenuItem value={"Laptop"}>Laptop</MenuItem>
                    <MenuItem value={"Router"}>Router</MenuItem>
                    <MenuItem value={"Printer"}>Printer</MenuItem>
                    <MenuItem value={"Keyboard"}>Keyboard</MenuItem>
                    <MenuItem value={"GPU"}>GPU</MenuItem>
                    <MenuItem value={"CPU"}>CPU</MenuItem>
                    <MenuItem value={"Mouse"}>Mouse</MenuItem>
                    <MenuItem value={"Drone"}>Drone</MenuItem>
                    <MenuItem value={"Arduino"}>Arduino</MenuItem>
                </Select>
            </FormControl>
          </Box>
          <Box className="categoryDisplay">
            {
              filtered?.length ? (
                  <Typography variant="h6" color="info.main" style={{marginBottom: "20px"}}>{category}</Typography>
              ):(
                <Typography variant="h6" color="info.main" style={{marginBottom: "20px"}}>No Data</Typography>
              )
            }
          </Box>
      </Box>
      {
        !filtered?.length ? (
          <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
            <CircularProgress color="inherit"/>
          </Backdrop>
          ):(
          
          <Box className="productsContainer">
            {
            filtered?.map((e,i)=>{
              return (
                <HomeSold key={i} product={e}/>
              )
            })
            }
          </Box>
          
          )
      }
    </Box>
  )
}

export default Products