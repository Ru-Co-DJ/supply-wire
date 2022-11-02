import React from 'react'
import "./navbar.css"
import { Box, Typography, AppBar, Toolbar, Button, Avatar } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar elevation={0} color="secondary" position="static" style={{marginBottom:"20px"}}>
      <Toolbar className="navContainer">
        <Box className="row">
          <Typography variant="h6">logo /</Typography>
          <Typography variant="h6">/ name</Typography>
        </Box>
        <Box className="row">
          <Box className="navOptions">
            <Typography variant="h6">opt1</Typography>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6">opt2</Typography>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6">opt3</Typography>
          </Box>
          <Box className="navOptions">
            <Typography variant="h6">opt4</Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="text" style={{marginRight:"10px"}}>
            <Typography variant="body1" color="info.light">Login</Typography>
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