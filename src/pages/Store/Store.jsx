import React,{useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import "./store.css"
import {Box, Typography, Card, Avatar, Chip, Tooltip, Rating, Backdrop, CircularProgress, Divider} from "@mui/material"
import { getStore } from '../../api'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StoreProduct from '../../components/StoreProduct/StoreProduct'
import SellIcon from '@mui/icons-material/Sell';




const Store = () => {

  const path = useLocation().pathname.split("/")
  const {loading, error, data} = useQuery(getStore,{variables:{id:path[path.length-1]}})
  const [store, setStore] = useState({})

  useEffect(()=>{
    data && setStore(data.store)
  },[data])
  console.log(store)

  return (
    <>
    {(!store.rate) ? (
      <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    ):(
      <Box className="storeContainer">
        <Box className="storeHead">
          <img src={store.image} alt={store.name} width="200px" className="storeImage"/>
          <Box className="storeInfo">
            <Box className="row">
              <Typography variant="h5" color="primary">{store.name}</Typography>
              <Typography variant="h6" color="primary" style={{marginLeft:"100px"}}>Since: {new Date(Number(store.dateOpened)).toISOString().split("T")[0]}</Typography>
            </Box>
            <Box className="row">
              <Tooltip title={`${store.rate}`}>
                <Typography variant="h6" color="primary">Rate: </Typography>
              </Tooltip>
              <Rating value={store.rate && store.rate} precision={0.1} readOnly style={{marginTop:"5px", marginLeft:"15px"}}/>
            </Box>
            <Box className="row">
              <MilitaryTechIcon color="secondary" style={{fontSize:"40px"}}/>
              <Tooltip title="Rank">
                <Typography variant="h5" color="primary">{store.rank}</Typography>
              </Tooltip>
            </Box>
            <Typography variant="subtitle1" color="primary">{store.description}</Typography>
            <Box className="row" style={{marginTop:"15px"}}>
              <SellIcon color="secondary" style={{fontSize:"30px"}}/>
              <Typography variant="h6" color="primary">{store.sales} sale</Typography>
            </Box>
          </Box>
        </Box>
        <Divider style={{width:"80%"}}><Typography variant="h4" color="info.light" style={{cursor:"pointer"}}>Products</Typography></Divider>
        <Box className="storeProducts">
          {
            store.productsObj.map((e,i)=>{
              return (
                <StoreProduct key={i} product={e}/>
              )
            })
          }
        </Box>
        <Divider style={{width:"80%"}}><Typography variant="h4" color="info.light" style={{cursor:"pointer"}}>Reviews</Typography></Divider>

        <Box className="storeReviews">
          {
            store.reviews.map((e,i)=>{
              return (
                <Box key={i} className="onStoreReview">
                  <Box>
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
                </Box>
              )
            })
          }
        </Box>
    </Box>
    )
  }
    
    </>
  )
}

export default Store