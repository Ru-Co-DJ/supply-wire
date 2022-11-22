import React,{useState,useEffect, useLayoutEffect} from 'react'
import "./singleproduct.css"
import {Backdrop, Box, CircularProgress} from "@mui/material";
import { useLocation } from 'react-router-dom';
import { getOneProductGQL } from '../../api';
import { useQuery } from '@apollo/client';
import ProductView from '../../components/ProductView/ProductView';
import HomeSold from '../../components/HomeSold/HomeSold';

const SingleProduct = () => {
    const path = useLocation().pathname.split("/")
    const {loading, error, data} = useQuery(getOneProductGQL, {variables:{id:path[path.length-1]}})
    const [product, setProduct] = useState({})
    
    useEffect(()=>{
      data && setProduct(data.product)
      
    },[data])
  return (
    <>
      <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
          <CircularProgress color="inherit"/>
      </Backdrop>
      <Box className="pageProductContainer">
        {
          product?.name && (
            <ProductView selectedProduct={product}/>
          )
        }
      </Box>
    </>
  )
}

export default SingleProduct