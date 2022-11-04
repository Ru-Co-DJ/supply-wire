import React from 'react'
import "./navbar.css"
import { Box, Typography, AppBar, Toolbar, Button, Avatar, Tooltip } from '@mui/material'
import logo from "../../assets/images/Navbar/logo.png"
import { Link } from 'react-router-dom'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useStateContext } from '../../utils/context/ContextProvider'

const Navbar = () => {
  const {account} = useStateContext();
  return (
    <>
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
        {
          !account.name ? (
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
          ):(
            <Box className="row">
              <Avatar >{account.name.toUpperCase()[0]}</Avatar>
              <Typography variant="h5" style={{margin:"5px"}}>{account.name}</Typography>
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
    </>
  )
}

export default Navbar