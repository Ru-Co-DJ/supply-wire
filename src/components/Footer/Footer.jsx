import React from 'react'
import { Box, Typography } from '@mui/material'
import "./footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
    <Typography variant="h6" color="primary">SupplyWire All rights reserved &#169;</Typography>
    <Box className="footerContainer">
      <Box className="footerSection">
        <Typography variant="h6" color="info.main">Information</Typography>
        <Link to="/contact" className="link">
          <Typography variant="body1" color="info.main">Contact</Typography>
        </Link>
        <Link to="/about" className="link">
          <Typography variant="body1" color="info.main">About</Typography>
        </Link>
        <Link to="/faq" className="link">
          <Typography variant="body1" color="info.main">FAQ</Typography>
        </Link>
        <Typography variant="body1" color="info.main">Terms of service</Typography>
      </Box>
      <Box className="footerSection">
      <Typography variant="h6" color="info.main">Services</Typography>
        <Typography variant="body1" color="info.main">Stores</Typography>
        <Typography variant="body1" color="info.main">Promoting</Typography>
        <Typography variant="body1" color="info.main">AI Engine</Typography>
      </Box>
      <Box className="footerSection">
      <Typography variant="h6" color="info.main">Contribute</Typography>
        <Typography variant="body1" color="info.main">You have an IDEA</Typography>
        <Typography variant="body1" color="info.main">Investors</Typography>
        <Typography variant="body1" color="info.main">Found a bug</Typography>
      </Box>
      <Box className="footerSection">
      <Typography variant="h6" color="info.main">Account</Typography>
        <Typography variant="body1" color="info.main">You have an issue</Typography>
        <Typography variant="body1" color="info.main">Payment</Typography>
        <Typography variant="body1" color="info.main">Get verified</Typography>
      </Box>
    </Box>
    </Box>
  )
}

export default Footer