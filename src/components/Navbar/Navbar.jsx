import React from 'react'
import "./navbar.css"
import { Box, Typography, AppBar, Toolbar, Button, Avatar } from '@mui/material'
import logo from "../../assets/images/Navbar/logo.png"
const Navbar = () => {
  return (
    <AppBar elevation={0} color="primary" position="static" style={{marginBottom:"20px"}}>
      <Toolbar className="navContainer">
        <Box className="row">
          <img src={logo} alt="logo" width="40px"/>
          <Typography variant="h5" style={{marginLeft:"5px",marginTop:"5px"}}>Supply Wire</Typography>
        </Box>
        <Box className="row">
          <Box className="navOptions">
            <Typography variant="h6">Today's sales</Typography>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6">Promotions</Typography>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6">Customer service</Typography>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6">Stores</Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="text" style={{marginRight:"10px"}}>
            <Typography variant="body1" color="info.main">Login</Typography>
          </Button>
          <Button variant="text" style={{marginRight:"10px"}}>
            <Typography variant="body1" color="info.main">Sign Up</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar