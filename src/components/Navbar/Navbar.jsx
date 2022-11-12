import React from 'react'
import "./navbar.css"
import { Box, Typography, AppBar, Toolbar, Button, Avatar, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useStateContext } from '../../utils/context/ContextProvider'

const Navbar = () => {
  const {account} = useStateContext();
  return (
    <Box style={{height:"65px", maxHeight:"100%"}}>
    <AppBar elevation={0} color="primary" position="relative" style={{marginBottom:"20px", height:"60px", position:"fixed",zIndex:"15"}}>
      <Toolbar className="navContainer">
        <Box className="row">
          <Link to="/" className="link">
            <Typography variant="h5" color="info.main" >SupplyWire</Typography>
          </Link>
        </Box>
        <Box className="row">
          <Box className="navOptions">
            <Typography variant="h6" color="info.main">Today's sales</Typography>
          </Box>
          <Box className="navOptions">
          <Link to="/products/all" className="link">
            <Typography variant="h6" color="info.main">By category</Typography>
          </Link>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6" color="info.main">Customer service</Typography>
          </Box>
          <Box className="navOptions">
            <Link to="/stores" className="link">
              <Typography variant="h6" color="info.main">Stores</Typography>
            </Link>
          </Box>
        </Box>
        {
          !account?.fullName ? (
            <Box className='row'>
              <Link to="/auth/login" className="link">
                <Button variant="text" style={{marginRight:"10px"}}>
                  <Typography variant="body1" color="info.main">Login</Typography>
                </Button>
              </Link>
              <Link to="/auth/signup" className="link">
                <Button variant="text" style={{marginRight:"10px"}}>
                  <Typography variant="body1" color="info.main">Sign Up</Typography>
                </Button>
              </Link>
              </Box>
          ):(
            <Box className="row">
              <Avatar sx={{ width: 34, height: 34 }} style={{marginTop:"3px"}}>{account.fullName.toUpperCase()[0]}</Avatar>
              <Typography variant="h6" style={{margin:"5px"}}>{account.fullName}</Typography>
            </Box>
          )
        }
      </Toolbar>
    </AppBar>
    <Box className="goUp">
      <Tooltip title="go up" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
        <ArrowCircleUpIcon color="primary" style={{fontSize:"35px"}}/>
      </Tooltip>
    </Box>
    </Box>
  )
}

export default Navbar