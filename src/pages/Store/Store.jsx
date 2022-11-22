import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import "./store.css"
import {Box, Typography, Avatar, Tooltip, Rating, Backdrop, CircularProgress, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormControlLabel} from "@mui/material"
import { getStore, storeImages, addProductGQL} from '../../api'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StoreProduct from '../../components/StoreProduct/StoreProduct'
import SellIcon from '@mui/icons-material/Sell';
import {useStateContext} from "../../utils/context/ContextProvider"
import AddProduct from '../../components/AddProduct/AddProduct'
import banner from "../../assets/images/store/banner.jpg"

const Store = () => {
  const path = useLocation().pathname.split("/")
  const storeID = path[path.length-1]
  const {account} = useStateContext()
  const {loading, error, data} = useQuery(getStore,{variables:{id:storeID}})
  const [store, setStore] = useState({})
  const [addProduct, setAddProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({})
  const [addNewProduct, setAddNewProduct] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [addProductMutation, { dataM, loadingM, errorM }] = useMutation(addProductGQL);

  useEffect(()=>{
    data && setStore(data.store)
  },[data])

  useEffect(()=>{
      if(addNewProduct){
        setWaiting(true)
        console.log(newProduct)
        const imagesForm = new FormData()
        Object.values(newProduct.images).forEach(e=>{
          imagesForm.append("images",e,e.name)
        })

        storeImages(imagesForm).then(res=>{
          // setNewProduct(prev=>({...prev,images:res}))
          let holder = {...newProduct, images:res}
          addProductMutation({ variables:{ ...holder } })  
        })
        setAddNewProduct(false)
    }
    setWaiting(false)
  },[addNewProduct])

  return (
    <Box style={{minHeight:"100vh",maxWidth:"100%"}}>
    <img src={banner} alt="banner" width="100%"/>
    {(!store.rate) ? (
      <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading || waiting}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    ):(
      <>
      {
        account.store === storeID && (
          <>
            <Box className="storeControl" onClick={()=>{setAddProduct(true)}}>
              <Typography variant="h6" color="primary">add Product</Typography>
            </Box>
            <Box style={{marginLeft:"20%"}}>
              <Typography variant="h4" color="primary">Welcome Back <span style={{fontWeight:"bold"}}>{account.fullName}</span>!</Typography>
            </Box>
          </>
        )
      }
      <Box className="storeContainer">
        <Box className="storeImage">
          <img src={store.image} alt={store.name} width="12%" className="storeImageRound"/>
          <Typography variant="h3" color="primary">{store.name}</Typography>
        </Box>
        <Box className="storeHead">
          <Box className="storeInfo">
            <Box className="row">
              <Typography variant="h6" color="primary" >Since: {new Date(Number(store.dateOpened)).toISOString().split("T")[0]}</Typography>
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
      <Box style={{width:"100%"}}>
        <Dialog open={addProduct} onClose={()=>setAddProduct(false)} maxWidth={"lg"}>
            <DialogTitle style={{backgroundColor:"#f2f2f2", color:"#0E2A47"}}>
              Add a new product
            </DialogTitle>
            <DialogContent>
              <AddProduct setNewProduct={setNewProduct} newProduct={newProduct} account={account}/>
            </DialogContent>
            <DialogActions style={{display:"flex", justifyContent:"space-between", backgroundColor:"#f2f2f2"}}>
              <FormControlLabel control={<Checkbox  color="primary"/>} label="I am the owner of this product and this information are CORRECT" />
              <Box>
                <Button variant="contained" color="warning" onClick={()=>{
                  setAddProduct(false)
                  setNewProduct({})
                }} style={{margin:"10px"}}>Cancel</Button>
                <Button variant="contained" color="success" onClick={()=>{
                  setAddNewProduct(true)
                  setAddProduct(false)
                }} style={{margin:"10px"}}>Submit</Button>
              </Box>
            </DialogActions>
        </Dialog>
      </Box>
    </>
    )
  }
    
    </Box>
  )
}

export default Store