import React,{useState,useEffect, useLayoutEffect} from 'react'
import "./singleproduct.css"
import {Box} from "@mui/material";
import { useLocation } from 'react-router-dom';
import { getProduct } from '../../api';
import ProductView from '../../components/ProductView/ProductView';
import {useStateContext} from "../../utils/context/ContextProvider"

const SingleProduct = () => {
    const path = useLocation().pathname.split("/")
    const {setSelectedProduct} = useStateContext()

    useLayoutEffect(()=>{
        getProduct(path[path.length-1]).then(res=>{
          setSelectedProduct(res)
        })
    },[])
  return (
    <Box className="pageProductContainer">
      <ProductView />
    </Box>
  )
}

export default SingleProduct