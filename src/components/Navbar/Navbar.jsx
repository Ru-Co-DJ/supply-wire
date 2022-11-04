import React from 'react'
import "./navbar.css"
import { Box, Typography, AppBar, Toolbar, Button, Avatar } from '@mui/material'
import logo from "../../assets/images/Navbar/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar elevation={0} color="primary" position="static" style={{marginBottom:"20px"}}>
      <Toolbar className="navContainer">
        <Box className="row">
          <Link to="/" className="link">
            <Typography variant="h5" style={{marginLeft:"5px",marginTop:"5px", color:"#f2f2f2"}} >Supply Wire</Typography>
          </Link>
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
      </Toolbar>
    </AppBar>
  )
}

export default Navbar