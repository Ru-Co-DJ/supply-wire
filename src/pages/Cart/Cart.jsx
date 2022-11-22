import React,{useState} from 'react'
import { useStateContext } from '../../utils/context/ContextProvider'
import { Typography, Box, Grid, List, ListSubheader, Divider, Button, Tooltip } from '@mui/material'
import "./cart.css"
import CartItem from '../../components/CartItem/CartItem'
import emptyCart from "../../assets/images/cart/emptyCart.png"
import { useQuery } from '@apollo/client'
import { getProductsGQL } from '../../api'
import HomeSold from '../../components/HomeSold/HomeSold'
import transaction from "../../assets/images/cart/transaction.png"

const Cart = () => {
  const {cart, setCart} = useStateContext()
  const {loading, error, data} = useQuery(getProductsGQL);
  return (
    <Box className="cartContainer">
      <Box style={{marginBottom:"20px"}}>
        <Typography variant="h3" color="primary">Shopping Cart</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box>
            <Box>
              <List 
                sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:"15px", boxShadow:"0px 0px 9px rgba(0,0,0,0.5)" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader>
                    <Box className="listHeader">
                      <Typography variant="h6" color="primary">Item</Typography>
                      <Typography variant="h6" color="primary">Price</Typography>
                    </Box>
                    <Divider />
                  </ListSubheader>
                }
              >
                {
                  cart.length ? cart.map((e,i)=>{
                    return(
                      <Box key={i}>
                        <CartItem item={e}/>
                        <Divider style={{width:"98%"}}/>
                      </Box>
                    )
                  }):(
                      <Box className="emptyCart">
                        <Typography variant="h3" color="primary">No Item!</Typography>
                        <img src={emptyCart} alt="emptyCart" width="40%"/>
                        <Typography variant="h3" color="primary">Go shopping</Typography>
                      </Box>
                    )
                }
                <Box className="cartFooter">
                  <Typography variant="h6" color="primary" style={{marginRight:"15px"}}>Subtotal: (<span style={{fontWeight:"bold", color:"#FF5050"}}> ${cart.length ? Number(cart?.map(e=>e.totalPrice)?.reduce((res, price)=>{
                    return res + price
                  }).toFixed(2)) : 0} </span>)</Typography>
                </Box>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid  item xs={12} md={4}>
          <Box className="cartControl">
            <Typography variant="h6" color="primary">Subtotal: (<span style={{color:"#FF5050", fontWeight:"bold"}}>${cart.length ? Number(cart?.map(e=>e.totalPrice)?.reduce((res, price)=>{
                    return res + price
                  }).toFixed(2)) : 0}</span>)  {cart.length} items</Typography>
            <Typography variant="subtitle1" color="secondary">Please make sure that Items selected are correct</Typography>
            <Typography variant="body1" color="primary" style={{marginLeft:"35%", cursor:"pointer", border:"1px solid #0E2A47", borderRadius:"5px", padding:"5px"}}>Save For Later</Typography>
            <Button variant="contained" color="success" style={{width:"100%", marginTop:"30px"}}>Proceed to checkout</Button>

          </Box>
          <Box className="cartControlInfo">
            <Typography variant="body1" color="primary">The price and availability of items at SupplyWire are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price.</Typography>
          </Box>
          <Box className="cartControlInfo">
            <Typography variant="h6" color="primary">Secure Transactions</Typography>
            <Tooltip title="Our transaction are completely secure through our private VPN service, and any data sent or received is fully encrypted.">
              <img src={transaction} alt="secure-transaction" width="70%"/>
            </Tooltip>
          </Box>
        </Grid>
          <Typography variant="h4" color="primary" style={{marginTop:"20px", marginLeft:"30px"}}>Recommended for you</Typography>
        <Grid item xs={12}>
          <Box className="cartRecommended"> 
            {
              data?.products?.filter(e=>e.rate > 3.5).map((e,i)=>{
                return(
                  <HomeSold product={e} key={i}/>
                )
              })
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cart


