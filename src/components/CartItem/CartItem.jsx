import React, {useState, useEffect} from 'react'
import "./cartitem.css"
import {ListItemButton, Collapse, Box, Backdrop, CircularProgress, Typography, List, FormControl, InputLabel, Select, MenuItem, ListItemIcon, ListItemText} from "@mui/material"
import { ExpandLess, ExpandMore } from '@mui/icons-material'

import { useQuery } from '@apollo/client';
import { getOneProductGQL } from '../../api';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateContext } from '../../utils/context/ContextProvider';


const CartItem = ({item}) => {
    const {loading, error, data} = useQuery(getOneProductGQL, {variables:{id:item.product}})
    const [targetProduct, setTargetProduct] = useState({})
    const [open, setOpen] = useState(false)
    const [productOnChange, setProductOnChange] = useState(item)
    const {cart, setCart} = useStateContext()

    const handleChange = (e)=>{
      setProductOnChange(prev=>({...prev, quantity:e.target.value}))
      setProductOnChange(prev=>({...prev, totalPrice:Number(((targetProduct.price * e.target.value).toFixed(2)))}))
      let cartBuffer = cart
      cartBuffer.splice(cart.indexOf(cart.find(e=>e.product===targetProduct.id)),1,{quantity:e.target.value, totalPrice:Number((targetProduct.price * e.target.value).toFixed(2)),product:targetProduct.id})
      localStorage.setItem("cart",JSON.stringify(cartBuffer))
    }

    const handleDelete = ()=>{
      setCart(prev=>([...prev.filter(e=>e.product !== productOnChange.product)]))
      localStorage.setItem("cart",JSON.stringify(cart?.filter(e=>e.product !== productOnChange?.product)))
    }
    useEffect(()=>{
        data?.product && setTargetProduct(data.product)
    },[data, loading])

    useEffect(()=>{
      setCart(JSON.parse(localStorage.getItem("cart")))
    },[productOnChange])


    return (
        <>
        {
            targetProduct.name ? (
            <Box className="row" style={{overflow:"scroll"}}>
                <Box className="cartItemHolder">
                    <img src={targetProduct.images[0]} alt="product" className='cartItemImg'/>
                    <Box className="cartItemHolderInfo">
                        <Typography variant="h5" color="primary" style={{fontWeight:"bold"}}>{targetProduct.name}</Typography>
                        <Typography variant="subtitle1" color="primary">Brand: {targetProduct.brand}</Typography>
                        <Typography variant="subtitle1" color="primary">Unit price:<span style={{color:"#FF5050", marginLeft:"10px"}}>$ {targetProduct.price}</span></Typography>
                        <Typography variant="subtitle1" color={targetProduct.quantity > 0 ? "secondary" : "error"}>{targetProduct.quantity > 0 ? "In Stock":"Unavailable"}</Typography>
                        <Typography variant="subtitle1" color="primary"></Typography>
                        <ListItemButton onClick={()=>{setOpen(!open)}} >
                            Edit Item {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    <Box sx={{ pl: 4 }} className="cartItemEdit">
                                        <Box className="cartItemEditQty">
                                            <FormControl variant="standard" style={{width:"100%", margin:"10px"}}>
                                                <InputLabel>Quantity</InputLabel>
                                                <Select value={productOnChange.quantity} onChange={handleChange}>
                                                    {
                                                        Array.from(Array(Math.floor(targetProduct.quantity)),(_,i)=>i+1).map(e=>{
                                                            return <MenuItem key={e} value={e}>{e}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>  
                                        <Box>
                                            <ListItemButton onClick={handleDelete}>
                                                <ListItemIcon>
                                                <DeleteIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Delete Item" />
                                            </ListItemButton>
                                        </Box>
                                    </Box>
                                </List>
                            </Collapse>
                    </Box>
                </Box>
                <Box className="cartItemPrices">
                    <Typography variant="h6" color="secondary" style={{fontWeight:"bold"}}>${productOnChange.totalPrice}</Typography>
                </Box>
            </Box>
            ):(
                <Backdrop sx={{color:"#fff", zIndex:"10"}} open={!targetProduct.name}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            )
        }
        </>
  )
}

export default CartItem





/* 
<List 
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Items
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sent mail" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>

                <ListItemButton onClick={()=>{setOpen(!open)}}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText>
                        hi
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
*/